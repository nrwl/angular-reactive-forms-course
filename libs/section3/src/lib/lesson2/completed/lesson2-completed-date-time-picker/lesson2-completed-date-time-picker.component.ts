import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil, tap, map } from 'rxjs/operators';

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
  selector: 'forms-course-lesson2-completed-date-time-picker',
  templateUrl: './lesson2-completed-date-time-picker.component.html',
  styleUrls: ['./lesson2-completed-date-time-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson2CompletedDateTimePickerComponent,
      multi: true
    }
  ]
})
export class Lesson2CompletedDateTimePickerComponent
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
        startWith(this.form.value),
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
