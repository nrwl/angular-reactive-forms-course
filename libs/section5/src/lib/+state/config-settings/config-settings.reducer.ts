import { Action, createReducer, on } from '@ngrx/store';
import { ConfigSettingsState } from './config-settings.interfaces';
import { submitSaveRequest, saveSuccessful } from './config-settings.actions';

export const initialState: ConfigSettingsState = {
  configSettings: {
    settingA: true,
    settingB: 1,
    settingC: 'foo',
    settingD: false,
    settingE: 2,
    settingF: 'bar',
    settingG: true,
    settingH: 3,
    settingI: 'buzz',
    settingJ: false,
    settingK: 4,
    settingL: 'bang',
    settingM: true,
    settingN: 5,
    settingO: 'zap'
  },
  savePending: false
};

const reducer = createReducer(
  initialState,
  on(submitSaveRequest, state => ({ ...state, savePending: true })),
  on(saveSuccessful, (state, { configSettings }) => ({
    configSettings,
    savePending: false
  }))
);

export function configSettingsReducer(
  state: ConfigSettingsState,
  action: Action
) {
  return reducer(state, action);
}
