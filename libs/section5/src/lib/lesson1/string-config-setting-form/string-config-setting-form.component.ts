import {
  Component,
  OnChanges,
  OnDestroy,
  Input,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { ReplaySubject, Observable, Subject, combineLatest } from 'rxjs';
import { createStringConfigSettingControl } from '../../config-settings.utils';
import { startWith, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'forms-course-string-config-setting-form',
  templateUrl: './string-config-setting-form.component.html',
  styleUrls: ['./string-config-setting-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: StringConfigSettingFormComponent,
      multi: true
    }
  ]
})
export class StringConfigSettingFormComponent
  implements OnDestroy, ControlValueAccessor, OnChanges {
  @Input() name: string;
  @Input() storeValue: string;
  private _storeValue$ = new ReplaySubject<string>(1);
  formValueMatchesStoreValue$: Observable<boolean>;
  control: FormControl;
  _destroying$ = new Subject<void>();
  _onTouched;

  writeValue(v: string) {
    // add your implementation here!
  }

  registerOnChange(fn) {
    // add your implementation here!
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.storeValue) {
      this._storeValue$.next(this.storeValue);
    }
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
