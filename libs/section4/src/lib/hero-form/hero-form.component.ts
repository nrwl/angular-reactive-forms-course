import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Hero, createHeroFormGroup, TOTAL_STAT_MAX } from './hero-form.utils';

@Component({
  selector: 'forms-course-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: HeroFormComponent,
      multi: true
    }
  ]
})
export class HeroFormComponent implements OnDestroy, ControlValueAccessor {
  private _destroying$ = new Subject<void>();
  form: FormGroup;
  private _onTouched;
  max = TOTAL_STAT_MAX;
  stats = ['attack', 'defense', 'speed', 'health'];

  writeValue(hero: Hero) {
    if (!this.form) {
      this.form = createHeroFormGroup(hero);
    } else {
      this.form.setValue(hero);
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
