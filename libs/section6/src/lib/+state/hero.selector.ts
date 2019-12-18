import { createFeatureSelector } from '@ngrx/store';
import { Hero } from './hero.utils';

export const heroSelector = createFeatureSelector<Hero[]>('heroes');
