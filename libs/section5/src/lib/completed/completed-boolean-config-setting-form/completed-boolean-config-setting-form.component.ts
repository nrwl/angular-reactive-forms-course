import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';
import { createBooleanConfigSettingControl } from '../../config-settings.utils';

@Component({
  selector: 'forms-course-completed-boolean-config-setting-form',
  templateUrl: './completed-boolean-config-setting-form.component.html',
  styleUrls: ['./completed-boolean-config-setting-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CompletedBooleanConfigSettingFormComponent,
      multi: true
    }
  ]
})
export class CompletedBooleanConfigSettingFormComponent
  implements ControlValueAccessor, OnDestroy, OnChanges {
  @Input() name: string;
  @Input() storeValue: boolean;
  private _storeValue$ = new ReplaySubject<boolean>(1);
  formValueMatchesStoreValue$: Observable<boolean>;
  control: FormControl;
  _destroying = new Subject<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.storeValue) {
      this._storeValue$.next(this.storeValue);
    }
  }

  writeValue(v: boolean) {
    if (!this.control) {
      this.control = createBooleanConfigSettingControl(v);
      this.formValueMatchesStoreValue$ = combineLatest([
        this.control.valueChanges.pipe(startWith(this.control.value)),
        this._storeValue$
      ]).pipe(map(([formValue, storeValue]) => formValue === storeValue));
    }
    this.control.setValue(v);
  }

  registerOnChange(fn) {
    this.control.valueChanges
      .pipe(
        takeUntil(this._destroying),
        tap(fn)
      )
      .subscribe();
  }

  registerOnTouched(fn) {}

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  ngOnDestroy() {
    this._destroying.next();
  }

  blur() {}
}
