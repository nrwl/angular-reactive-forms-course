import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import {
  DateRange,
  createDateRangePickerFormGroup
} from '../../../date-range-picker-utils';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'forms-course-lesson1-completed-date-time-range-picker',
  templateUrl: './lesson1-completed-date-time-range-picker.component.html',
  styleUrls: ['./lesson1-completed-date-time-range-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson1CompletedDateTimeRangePickerComponent,
      multi: true
    }
  ]
})
export class Lesson1CompletedDateTimeRangePickerComponent
  implements OnDestroy, ControlValueAccessor {
  private _destroying$ = new Subject<void>();
  form: FormGroup;
  private _onTouched;

  writeValue(v: DateRange) {
    if (!this.form) {
      this.form = createDateRangePickerFormGroup(v);
    } else {
      this.form.setValue(v);
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges
      .pipe(
        takeUntil(this._destroying$),
        tap(fn)
      )
      .subscribe();
  }

  registerOnTouched(fn) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
