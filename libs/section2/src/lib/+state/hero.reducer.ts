import { createReducer, on, Action } from '@ngrx/store';
import { createHero } from './hero.actions';

const reducer = createReducer(
  [],
  on(createHero, (state, { name }) => [...state, name])
);

export function heroReducer(state: any[], action: Action) {
  return reducer(state, action);
}
