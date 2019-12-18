import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import {
  ConfigSettingsState,
  ConfigSettings
} from './config-settings.interfaces';
import { DefaultProjectorFn } from '@ngrx/store/src/selector';

export const configSettingsFeatureSelector = createFeatureSelector<
  ConfigSettingsState
>('config-settings');

export const configSettingsSelector = createSelector(
  configSettingsFeatureSelector,
  state => state.configSettings
);
export const savePendingSelector = createSelector(
  configSettingsFeatureSelector,
  state => state.savePending
);
export function specificConfigSettingSelector<K extends keyof ConfigSettings>(
  setting: K
): MemoizedSelector<
  object,
  ConfigSettings[K],
  DefaultProjectorFn<ConfigSettings[K]>
> {
  return createSelector(
    configSettingsSelector,
    configSettings => configSettings[setting]
  );
}
