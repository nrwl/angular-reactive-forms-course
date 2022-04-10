import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import {
  map,
  publishReplay,
  refCount,
  startWith,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';
import { HeroService } from '../../../+state/hero.service';
import {
  defaultTableFormValue,
  HeroColumnFilters,
  heroKeys,
  HeroTableFormValue,
  Hero
} from '../../../+state/hero.utils';
import { Lesson1CompletedHeroGridComponent } from '../../../lesson1/completed/lesson1-completed-hero-grid/lesson1-completed-hero-grid.component';
import * as deepEqual from 'deep-equal';

@Component({
  selector: 'forms-course-lesson4-completed-server-side-table',
  templateUrl: './lesson4-completed-server-side-table.component.html',
  styleUrls: ['./lesson4-completed-server-side-table.component.css']
})
export class Lesson4CompletedServerSideTableComponent implements OnInit {
  private _tableParams$: Observable<
    Sort & HeroColumnFilters & HeroTableFormValue
  >;
  @ViewChild(Lesson1CompletedHeroGridComponent, { static: true })
  gridComponent: Lesson1CompletedHeroGridComponent;
  tableForm = new FormControl(defaultTableFormValue);
  columnFilterForm = new FormControl(
    heroKeys.reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  );
  _heroInfo$: Observable<{ heroes: Hero[]; matchingResults: number }>;
  heroes$: Observable<Hero[]>;
  totalItems$: Observable<number>;
  loading$: Observable<boolean> = this.api.loading$;

  constructor(private api: HeroService) {}

  ngOnInit() {
    setTimeout(() => {
      this._tableParams$ = this.tableForm.valueChanges.pipe(
        startWith(this.tableForm.value),
        map(heroTableForm => ({
          filter: heroTableForm.filter,
          pageSize: heroTableForm.pageSize,
          currentPage: heroTableForm.currentPage
        })),
        switchMap(tableFormValue =>
          this.columnFilterForm.valueChanges.pipe(
            startWith(this.columnFilterForm.value),
            map(columnFilterForm => ({
              ...tableFormValue,
              ...columnFilterForm
            }))
          )
        ),
        switchMap(v =>
          this.gridComponent.sort.pipe(
            startWith(null),
            map(sortInstructions => ({ ...v, ...sortInstructions }))
          )
        ),
        debounceTime(500),
        distinctUntilChanged((a, b) => deepEqual(a, b)),
        publishReplay(1),
        refCount()
      );
      this._heroInfo$ = this._tableParams$.pipe(
        switchMap(tableParams => this.api.heroes(tableParams)),
        publishReplay(1),
        refCount()
      );
      this.heroes$ = this._heroInfo$.pipe(map(({ heroes }) => heroes));
      this.totalItems$ = this._heroInfo$.pipe(
        map(({ matchingResults }) => matchingResults)
      );
    }, 0);
  }
}
