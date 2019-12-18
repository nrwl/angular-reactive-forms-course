import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { defaultConfigSettings } from './+state';
import {
  createBooleanConfigSettingControl,
  createNumberConfigSettingControl,
  createStringConfigSettingControl,
  numberConfigSettingValidation,
  stringConfigSettingValidation
} from './config-settings.utils';

const booleans = ['settingA', 'settingD', 'settingG', 'settingJ', 'settingM'];
const numbers = ['settingB', 'settingE', 'settingH', 'settingK', 'settingN'];
const strings = ['settingC', 'settingF', 'settingI', 'settingL', 'settingO'];

export const createWizardFormGroup = (
  configSettings = defaultConfigSettings
): FormGroup => {
  const booleanControls = booleans.reduce(
    (acc, settingName) => ({
      ...acc,
      [settingName]: createBooleanConfigSettingControl(
        configSettings[settingName]
      )
    }),
    {}
  );
  const numberControls = numbers.reduce(
    (acc, settingName) => ({
      ...acc,
      [settingName]: createNumberConfigSettingControl(
        configSettings[settingName]
      )
    }),
    {}
  );
  const stringControls = strings.reduce(
    (acc, settingName) => ({
      ...acc,
      [settingName]: createStringConfigSettingControl(
        configSettings[settingName]
      )
    }),
    {}
  );

  return new FormGroup({
    ...booleanControls,
    ...numberControls,
    ...stringControls
  });
};

const configSettingsValidator: ValidatorFn = control => {
  const generalSettings = control.value;
  const numberErrors = numbers.reduce((acc, settingName) => {
    const error = numberConfigSettingValidation(generalSettings[settingName]);
    if (error) {
      return acc
        ? { ...(acc as any), [settingName]: error }
        : { [settingName]: error };
    }
    return acc;
  }, null);
  const stringErrors = strings.reduce((acc, settingName) => {
    const error = stringConfigSettingValidation(generalSettings[settingName]);
    if (error) {
      return acc
        ? { ...(acc as any), [settingName]: error }
        : { [settingName]: error };
    }
    return acc;
  }, null);

  return stringErrors || numberErrors
    ? { ...stringErrors, ...numberErrors }
    : null;
};

export const createConfigSettingFormControl = (
  configSettings = defaultConfigSettings
): FormControl => new FormControl(configSettings, configSettingsValidator);
