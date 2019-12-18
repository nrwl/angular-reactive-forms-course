import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'forms-course-toggle-form',
  templateUrl: './toggle-form.component.html',
  styleUrls: ['./toggle-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ToggleFormComponent,
      multi: true
    }
  ]
})
export class ToggleFormComponent implements OnDestroy, ControlValueAccessor {
  control: FormControl;
  private _destroying = new Subject<void>();
  private _onTouched;

  writeValue(v: boolean) {
    // add your implementation here!
  }

  registerOnChange(fn) {
    // add your implementation here!
  }

  registerOnTouched(fn) {}

  ngOnDestroy() {
    this._destroying.next();
  }
}
