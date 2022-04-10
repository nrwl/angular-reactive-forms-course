import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  ComponentFactoryResolver,
  ViewChildren
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'forms-course-lesson1-completed-number-picker',
  templateUrl: './lesson1-completed-number-picker.component.html',
  styleUrls: ['./lesson1-completed-number-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson1CompletedNumberPickerComponent,
      multi: true
    }
  ]
})
export class Lesson1CompletedNumberPickerComponent
  implements ControlValueAccessor {
  @ViewChild('subtract', { static: true }) subtract;
  @ViewChild('add', { static: true }) add;
  @ViewChild('display', { static: true }) display;
  @Input() min = 0;
  @Input() max = 100;
  value: number;
  private _onChange;
  private _onTouched;

  subtractOne() {
    if (this.value > this.min) {
      this.value = this.value - 1;
      this._onChange(this.value);
    }
  }

  addOne() {
    if (this.value < this.max) {
      this.value = this.value + 1;
      this._onChange(this.value);
    }
  }

  writeValue(v: number) {
    this.value = v;
  }

  registerOnChange(fn) {
    this._onChange = fn;
    if (this.value > this.max) {
      this.value = this.max;
      fn(this.max);
    }
    if (this.value < this.min) {
      this.value = this.min;
      fn(this.min);
    }
  }

  registerOnTouched(fn) {
    this._onTouched = fn;
  }

  focusout() {
    setTimeout(() => {
      console.log(document.activeElement);
      if (
        document.activeElement !== this.subtract._elementRef.nativeElement &&
        document.activeElement !== this.add._elementRef.nativeElement &&
        document.activeElement !== this.display.nativeElement
      ) {
        console.log('focusout() called!!');
        this._onTouched();
      }
    }, 0);
  }

  setDisabledState(disabled: boolean) {}
}
