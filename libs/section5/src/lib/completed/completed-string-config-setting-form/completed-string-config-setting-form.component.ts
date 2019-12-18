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
import { createStringConfigSettingControl } from '../../config-settings.utils';

@Component({
  selector: 'forms-course-completed-string-config-setting-form',
  templateUrl: './completed-string-config-setting-form.component.html',
  styleUrls: ['./completed-string-config-setting-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CompletedStringConfigSettingFormComponent,
      multi: true
    }
  ]
})
export class CompletedStringConfigSettingFormComponent
  implements OnDestroy, ControlValueAccessor, OnChanges {
  @Input() name: string;
  @Input() storeValue: string;
  private _storeValue$ = new ReplaySubject<string>(1);
  formValueMatchesStoreValue$: Observable<boolean>;
  control: FormControl;
  _destroying = new Subject<void>();
  _onTouched;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.storeValue) {
      this._storeValue$.next(this.storeValue);
    }
  }

  writeValue(v: string) {
    if (!this.control) {
      this.control = createStringConfigSettingControl(v);
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
        tap(v => fn(v))
      )
      .subscribe();
  }

  registerOnTouched(fn) {
    this._onTouched = fn;
  }

  blur() {
    this._onTouched();
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  ngOnDestroy() {
    this._destroying.next();
  }
}
