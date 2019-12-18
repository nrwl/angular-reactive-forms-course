import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';

const padZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
const timeString = (date: Date) =>
  `${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(
    date.getSeconds()
  )}`;
const dateString = (date: Date) =>
  `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(
    date.getDate()
  )}`;

@Component({
  selector: 'forms-course-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateTimePickerComponent,
      multi: true
    }
  ]
})
export class DateTimePickerComponent
  implements OnDestroy, ControlValueAccessor {
  formGroup: FormGroup;
  private _destroying$ = new Subject<void>();
  private _onTouched;

  writeValue(date: Date) {
    // create your implementation here!
  }

  registerOnChange(fn) {
    // create your implementation here!
  }

  registerOnTouched(fn) {
    // create your implementation here!
  }

  blur() {
    // create your implementation here!
  }

  setDisabledState(isDisabled: boolean) {
    // create your implementation here!
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
