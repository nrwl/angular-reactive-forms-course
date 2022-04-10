import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  Hero,
  HeroColumnFilters,
  HeroTableFormValue,
  sortHeroes,
  heroGlobalFilter,
  heroColumnFilter,
  heroesOnPage
} from './hero.utils';
import { initialHeroes } from './hero.reducer';
import { Sort } from '@angular/material/sort';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {
  loading$ = new BehaviorSubject<boolean>(false);

  heroes(
    params: HeroColumnFilters & HeroTableFormValue & Sort
  ): Observable<{ heroes: Hero[]; matchingResults: number }> {
    const filteredHeroes = sortHeroes(initialHeroes, params)
      .filter(hero => heroGlobalFilter(hero, params.filter))
      .filter(hero => heroColumnFilter(hero, params));
    return of({
      heroes: heroesOnPage(filteredHeroes, params),
      matchingResults: filteredHeroes.length
    }).pipe(
      tap(() => this.loading$.next(true)),
      delay(500),
      tap(() => this.loading$.next(false))
    );
  }
}
