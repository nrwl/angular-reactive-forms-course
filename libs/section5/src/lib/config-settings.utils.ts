import { Validators, FormControl } from '@angular/forms';

export const MIN_NUMBER_CONFIG_SETTING_VALUE = 1;
export const MAX_NUMBER_CONFIG_SETTING_VALUE = 10;
export type StringConfigSettingError = 'required';
export type NumberConfigSettingError =
  | 'required'
  | 'less than min value'
  | 'greater than max value';

export const stringConfigSettingValidators = [Validators.required];

export const numberConfigSettingValidators = [
  Validators.min(1),
  Validators.max(10),
  Validators.required
];

export const stringConfigSettingValidation = (
  v: string
): StringConfigSettingError | null => (v ? null : 'required');

export const numberConfigSettingValidation = (
  v: number
): NumberConfigSettingError | null => {
  if (!v) {
    return 'required';
  }
  if (v < MIN_NUMBER_CONFIG_SETTING_VALUE) {
    return 'less than min value';
  }
  if (v > MAX_NUMBER_CONFIG_SETTING_VALUE) {
    return 'greater than max value';
  }
  return null;
};

export const createBooleanConfigSettingControl = (v = true) =>
  new FormControl(v);

export const createNumberConfigSettingControl = (v = 1) =>
  new FormControl(v, numberConfigSettingValidators);

export const createStringConfigSettingControl = (v = '') =>
  new FormControl(v, stringConfigSettingValidators);
