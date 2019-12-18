import { Component, Input, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ConfigSettings, configSettingInfo } from '../../+state';
import { createWizardFormGroup } from '../../wizard-form.utils';

@Component({
  selector: 'forms-course-completed-wizard-form',
  templateUrl: './completed-wizard-form.component.html',
  styleUrls: ['./completed-wizard-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CompletedWizardFormComponent,
      multi: true
    }
  ]
})
export class CompletedWizardFormComponent
  implements OnDestroy, ControlValueAccessor {
  @Input() storeValue: ConfigSettings;
  form: FormGroup;
  _destroying = new Subject<void>();
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
    if (!this.form) {
      this.form = createWizardFormGroup(v);
    } else {
      this.form.setValue(v);
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges
      .pipe(
        takeUntil(this._destroying),
        tap(formSettings => fn(formSettings))
      )
      .subscribe();
  }

  registerOnTouched(fn) {}

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy() {
    this._destroying.next();
  }
}
