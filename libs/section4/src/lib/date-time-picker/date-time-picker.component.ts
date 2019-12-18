import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, startWith, map, tap } from 'rxjs/operators';

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
  private _destroying$ = new Subject<void>();
  form: FormGroup;
  _onTouched;

  writeValue(date: Date) {
    if (!this.form) {
      this.form = new FormGroup({
        date: new FormControl(dateString(date)),
        time: new FormControl(timeString(date))
      });
    } else {
      this.form.setValue({
        date: dateString(date),
        time: timeString(date)
      });
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges
      .pipe(
        takeUntil(this._destroying$),
        map(({ date, time }) =>
          date && time ? new Date(`${date} ${time}`) : null
        ),
        tap(fn)
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
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
