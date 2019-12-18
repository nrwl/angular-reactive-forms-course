import { name } from 'faker';
import { createReducer, Action } from '@ngrx/store';
import { Hero } from './hero.utils';

const createRandomHero = (): Hero => ({
  name: name.findName(),
  attack: Math.ceil(Math.random() * 20),
  defense: Math.ceil(Math.random() * 20),
  speed: Math.ceil(Math.random() * 20),
  health: Math.ceil(Math.random() * 20)
});

export const initialHeroes: Hero[] = new Array(1000)
  .fill({})
  .reduce((acc, {}) => [...acc, createRandomHero()], []);

const reducer = createReducer(initialHeroes);

export function heroReducer(state: Hero[], action: Action) {
  return initialHeroes;
}
