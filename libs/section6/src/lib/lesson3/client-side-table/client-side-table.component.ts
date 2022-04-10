import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroGridComponent } from '../../lesson1/hero-grid/hero-grid.component';
import { FormControl } from '@angular/forms';
import {
  defaultTableFormValue,
  Hero,
  sortHeroes,
  heroGlobalFilter,
  heroColumnFilter,
  heroesOnPage
} from '../../+state/hero.utils';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  startWith,
  map,
  switchMap,
  shareReplay,
  share,
  debounceTime
} from 'rxjs/operators';
import { heroSelector } from '../../+state/hero.selector';

@Component({
  selector: 'forms-course-client-side-table',
  templateUrl: './client-side-table.component.html',
  styleUrls: ['./client-side-table.component.css']
})
export class ClientSideTableComponent implements OnInit {
  @ViewChild(HeroGridComponent, { static: true })
  heroGridComponent: HeroGridComponent;
  tableForm = new FormControl(defaultTableFormValue);
  columnFilterForm = new FormControl({
    name: '',
    attack: '',
    defense: '',
    speed: '',
    health: ''
  });
  sortInstructions$: Observable<Sort>;
  allHeroes: Observable<Hero[]>;
  filteredHeroes: Observable<Hero[]>;
  totalItems$: Observable<number>;
  heroesOnPage$: Observable<Hero[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    setTimeout(() => {
      // let's implement all the obseravbles above here!
    }, 0);
  }
}
