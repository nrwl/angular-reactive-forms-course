import { Sort } from '@angular/material/sort';

export interface Hero {
  name: string;
  attack: number;
  defense: number;
  speed: number;
  health: number;
}

export interface HeroColumnFilters {
  name: string;
  attack: string;
  defense: string;
  speed: string;
  health: string;
}

export interface HeroTableFormValue {
  filter: string;
  columnFilters: boolean;
  pageSize: number;
  currentPage: number;
}

export const defaultTableFormValue: HeroTableFormValue = {
  filter: '',
  columnFilters: false,
  pageSize: 5,
  currentPage: 1
};

export const heroKeys: (keyof Hero)[] = [
  'name',
  'attack',
  'defense',
  'speed',
  'health'
];

export const heroGlobalFilter = (hero: Hero, filter: string): boolean => {
  if (!filter) {
    return true;
  }
  return heroKeys.some(key => (hero[key] + '').includes(filter));
};

export const heroColumnFilter = (
  hero: Hero,
  filter: HeroColumnFilters
): boolean => {
  return heroKeys.every(key =>
    key ? (hero[key] + '').includes(filter[key]) : true
  );
};

export const heroesOnPage = (
  heroes: Hero[],
  { pageSize, currentPage }: HeroTableFormValue
): Hero[] => {
  const startIndex = (currentPage - 1) * pageSize;
  return heroes.slice(startIndex, startIndex + pageSize);
};

export const sortHeroes = (heroes: Hero[], sortInfo: Sort): Hero[] =>
  sortInfo
    ? sortInfo.direction
      ? heroes.sort((a, b) => {
          const temp = a[sortInfo.active] > b[sortInfo.active] ? 1 : -1;
          return temp * (sortInfo.direction === 'asc' ? 1 : -1);
        })
      : heroes
    : heroes;
