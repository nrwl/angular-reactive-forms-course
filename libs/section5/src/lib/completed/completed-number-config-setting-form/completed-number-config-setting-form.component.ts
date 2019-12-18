import {
  Component,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl
} from '@angular/forms';
import {
  Subject,
  BehaviorSubject,
  Observable,
  combineLatest,
  ReplaySubject
} from 'rxjs';
import { takeUntil, tap, startWith, map } from 'rxjs/operators';
import { createNumberConfigSettingControl } from '../../config-settings.utils';

@Component({
  selector: 'forms-course-completed-number-config-setting-form',
  templateUrl: './completed-number-config-setting-form.component.html',
  styleUrls: ['./completed-number-config-setting-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CompletedNumberConfigSettingFormComponent,
      multi: true
    }
  ]
})
export class CompletedNumberConfigSettingFormComponent
  implements OnDestroy, ControlValueAccessor, OnChanges {
  @Input() name: string;
  @Input() storeValue: number;
  private _storeValue$ = new ReplaySubject<number>();
  formValueMatchesStoreValue$: Observable<boolean>;
  control: FormControl;
  _destroying = new Subject<void>();
  _onTouched;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.storeValue) {
      this._storeValue$.next(this.storeValue);
    }
  }

  writeValue(v: number) {
    if (this.control) {
      this.control.setValue(v);
    } else {
      this.control = createNumberConfigSettingControl(v);
      this.formValueMatchesStoreValue$ = combineLatest([
        this.control.valueChanges.pipe(startWith(this.control.value)),
        this._storeValue$
      ]).pipe(map(([formValue, storeValue]) => formValue === storeValue));
    }
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
