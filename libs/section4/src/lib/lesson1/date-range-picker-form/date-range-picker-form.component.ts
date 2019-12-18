import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup
} from '@angular/forms';
import { Subject } from 'rxjs';
import { DateRange } from '../../date-range-picker-utils';

@Component({
  selector: 'forms-course-date-range-picker-form',
  templateUrl: './date-range-picker-form.component.html',
  styleUrls: ['./date-range-picker-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateRangePickerFormComponent,
      multi: true
    }
  ]
})
export class DateRangePickerFormComponent
  implements OnDestroy, ControlValueAccessor {
  form: FormGroup;
  private _destroying$ = new Subject<void>();

  writeValue(v: DateRange) {
    // add implementation here! Make sure to use the provided utility functions!!
  }

  registerOnChange(fn) {
    // add implementation here!
  }

  registerOnTouched(fn) {}

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
