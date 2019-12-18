import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { submitSaveRequest, saveSuccessful } from './config-settings.actions';
import { delay, map } from 'rxjs/operators';

const DELAY_OFFSET = 4000;

@Injectable()
export class ConfigSettingsEffects {
  submitSave$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submitSaveRequest),
      delay(DELAY_OFFSET),
      map(({ configSettings }) => saveSuccessful({ configSettings }))
    )
  );

  constructor(private actions$: Actions) {}
}
