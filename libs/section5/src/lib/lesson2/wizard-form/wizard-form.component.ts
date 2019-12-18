import { Component, Input, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import { configSettingInfo, ConfigSettings } from '../../+state';
import { createWizardFormGroup } from '../../wizard-form.utils';
import { startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'forms-course-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: WizardFormComponent,
      multi: true
    }
  ]
})
export class WizardFormComponent implements OnDestroy, ControlValueAccessor {
  @Input() storeValue: ConfigSettings;
  form: FormGroup;
  _destroying$ = new Subject<void>();
  generalSettings = configSettingInfo.filter(
    settingInfo => settingInfo.category === 'General'
  );
  advancedSettings = configSettingInfo.filter(
    settingInfo => settingInfo.category === 'Advanced'
  );
  adminSettings = configSettingInfo.filter(
    settingInfo => settingInfo.category === 'Admin'
  );

  writeValue(v: ConfigSettings) {
    // add your implementation here!
  }

  registerOnChange(fn) {
    // add your implementation here!
  }

  registerOnTouched(fn) {}

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
