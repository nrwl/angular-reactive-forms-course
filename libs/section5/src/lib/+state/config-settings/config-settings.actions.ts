import { createAction, props } from '@ngrx/store';
import { ConfigSettings } from './config-settings.interfaces';

export const submitSaveRequest = createAction(
  '[ Config Wizard ]',
  props<{ configSettings: ConfigSettings }>()
);

export const saveSuccessful = createAction(
  '[ Config API ]',
  props<{ configSettings: ConfigSettings }>()
);
