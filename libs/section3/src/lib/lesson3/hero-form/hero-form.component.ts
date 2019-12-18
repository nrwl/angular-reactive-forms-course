import { Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

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
  selector: 'forms-course-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: HeroFormComponent, multi: true }
  ]
})
export class HeroFormComponent implements OnDestroy, ControlValueAccessor {
  private _destroying$ = new Subject<void>();
  stats = stats;

  writeValue(hero: Hero) {
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

  setDisabledState(isDisabled: boolean) {
    // add your implementation here!
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
