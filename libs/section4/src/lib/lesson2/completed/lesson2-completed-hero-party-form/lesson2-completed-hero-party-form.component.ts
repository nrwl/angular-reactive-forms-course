import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { createPartyFormGroup, Party } from '../../../hero-party-utils';

@Component({
  selector: 'forms-course-lesson2-completed-hero-party-form',
  templateUrl: './lesson2-completed-hero-party-form.component.html',
  styleUrls: ['./lesson2-completed-hero-party-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson2CompletedHeroPartyFormComponent,
      multi: true
    }
  ]
})
export class Lesson2CompletedHeroPartyFormComponent
  implements OnDestroy, ControlValueAccessor {
  private _destroying = new Subject<void>();
  form: FormGroup;
  validPartySizes = [1, 2, 3, 4, 5, 6];

  writeValue(v: Party) {
    if (this.form) {
      this.form.setValue(v);
    } else {
      this.form = createPartyFormGroup(v, this._destroying);
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges
      .pipe(
        startWith(this.form.value),
        takeUntil(this._destroying),
        tap(fn)
      )
      .subscribe();
  }

  registerOnTouched(fn) {}

  setDisabledState(disable: boolean) {
    disable ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy() {
    this._destroying.next();
  }
}
