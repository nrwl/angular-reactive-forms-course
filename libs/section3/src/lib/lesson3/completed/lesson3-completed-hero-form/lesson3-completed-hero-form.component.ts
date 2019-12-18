import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

interface Hero {
  name: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    health;
  };
}

const stats = ['attack', 'defense', 'speed', 'health'];

@Component({
  selector: 'forms-course-lesson3-completed-hero-form',
  templateUrl: './lesson3-completed-hero-form.component.html',
  styleUrls: ['./lesson3-completed-hero-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson3CompletedHeroFormComponent,
      multi: true
    }
  ]
})
export class Lesson3CompletedHeroFormComponent
  implements OnDestroy, ControlValueAccessor {
  private _destroying$ = new Subject<void>();
  form: FormGroup;
  private _onTouched;
  stats = stats;

  writeValue(hero: Hero) {
    if (!this.form) {
      this.form = new FormGroup({
        name: new FormControl(hero.name),
        stats: new FormGroup(
          this.stats.reduce(
            (acc, statName) => ({
              ...acc,
              [statName]: new FormControl(hero.stats[statName])
            }),
            {}
          )
        )
      });
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
