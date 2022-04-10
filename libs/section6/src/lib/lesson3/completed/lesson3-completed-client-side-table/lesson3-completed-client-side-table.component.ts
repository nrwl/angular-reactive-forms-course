import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import {
  debounceTime,
  map,
  publishReplay,
  refCount,
  startWith,
  switchMap,
  shareReplay
} from 'rxjs/operators';
import { heroSelector } from '../../../+state/hero.selector';
import {
  defaultTableFormValue,
  Hero,
  heroColumnFilter,
  HeroColumnFilters,
  heroesOnPage,
  heroGlobalFilter,
  heroKeys,
  HeroTableFormValue,
  sortHeroes
} from '../../../+state/hero.utils';
import { Lesson1CompletedHeroGridComponent } from '../../../lesson1/completed/lesson1-completed-hero-grid/lesson1-completed-hero-grid.component';

@Component({
  selector: 'forms-course-lesson3-completed-client-side-table',
  templateUrl: './lesson3-completed-client-side-table.component.html',
  styleUrls: ['./lesson3-completed-client-side-table.component.css']
})
export class Lesson3CompletedClientSideTableComponent implements OnInit {
  @ViewChild(Lesson1CompletedHeroGridComponent, { static: true })
  heroGridComponent: Lesson1CompletedHeroGridComponent;
  tableForm = new FormControl(defaultTableFormValue);
  columnFilterForm = new FormControl(
    heroKeys.reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  );
  sortInstructions$: Observable<Sort>;
  allHeroes$: Observable<Hero[]>;
  filteredHeroes$: Observable<Hero[]>;
  totalItems$: Observable<number>;
  heroesOnPage$: Observable<Hero[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    setTimeout(() => {
      this.sortInstructions$ = this.heroGridComponent.sort.pipe(
        startWith(null)
      );
      this.allHeroes$ = this.store.pipe(
        select(heroSelector),
        switchMap(heroes =>
          this.sortInstructions$.pipe(
            map(sortInstructions => sortHeroes(heroes, sortInstructions))
          )
        ),
        publishReplay(1),
        refCount()
      );
      this.filteredHeroes$ = combineLatest([
        this.tableForm.valueChanges.pipe(
          startWith(this.tableForm.value),
          map(v => v.filter)
        ),
        this.columnFilterForm.valueChanges.pipe(
          startWith(this.columnFilterForm.value)
        ),
        this.allHeroes$
      ]).pipe(
        map(
          ([globalFilter, columnFilters, heroes]: [
            string,
            HeroColumnFilters,
            Hero[]
          ]) =>
            heroes
              .filter(hero => heroGlobalFilter(hero, globalFilter))
              .filter(hero => heroColumnFilter(hero, columnFilters))
        ),
        shareReplay(1)
      );
      this.totalItems$ = this.filteredHeroes$.pipe(
        debounceTime(0),
        map(heroes => heroes.length)
      );
      this.heroesOnPage$ = combineLatest([
        this.filteredHeroes$,
        this.tableForm.valueChanges.pipe(startWith(this.tableForm.value))
      ]).pipe(
        debounceTime(0),
        map(([heroes, heroTableFormValue]: [Hero[], HeroTableFormValue]) =>
          heroesOnPage(heroes, heroTableFormValue)
        )
      );
    }, 0);
  }
}
