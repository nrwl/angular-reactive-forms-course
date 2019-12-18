import { createAction, props } from '@ngrx/store';

export const createHero = createAction(
  'create hero',
  props<{ name: string }>()
);
