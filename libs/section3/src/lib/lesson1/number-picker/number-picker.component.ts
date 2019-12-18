import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'forms-course-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumberPickerComponent,
      multi: true
    }
  ]
})
export class NumberPickerComponent implements ControlValueAccessor {
  value: number;
  private _onChange;
  private _onTouched;

  subtractOne() {
    // add your implementation here!
  }

  addOne() {
    // add your implementation here!
  }

  writeValue(v: number) {
    // add your implementation here!
  }

  registerOnChange(fn) {
    // add your implementation here!
  }

  registerOnTouched(fn) {
    // add your implementation here!
  }

  blur() {
    // add your implementation here!
  }
}
