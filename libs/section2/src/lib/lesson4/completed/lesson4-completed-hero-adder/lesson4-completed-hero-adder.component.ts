import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { heroSelector } from '../../../+state/hero.selector';
import { createHero } from '../../../+state/hero.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'forms-course-lesson4-completed-hero-adder',
  templateUrl: './lesson4-completed-hero-adder.component.html',
  styleUrls: ['./lesson4-completed-hero-adder.component.css']
})
export class Lesson4CompletedHeroAdderComponent {
  form = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.maxLength(16)],
      [
        control =>
          this.store.pipe(
            select(heroSelector),
            take(1),
            map((heroes: string[]) =>
              heroes.includes(control.value)
                ? { nameAlreadyExists: true }
                : null
            )
          )
      ]
    )
  });

  constructor(private store: Store<any>, private _matSnackBar: MatSnackBar) {}

  addName() {
    const name = this.form.get('name').value;
    this.store.dispatch(createHero({ name }));
    this._matSnackBar.open(`${name} added to Heroes!`, undefined, {
      duration: 2000
    });
    this.form.reset();
  }
}
