import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../lesson2/completed/lesson2-completed-hero-form/lesson2-completed-hero-form.component';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { tap, startWith, debounceTime } from 'rxjs/operators';
import {
  trigger,
  transition,
  animate,
  keyframes,
  style
} from '@angular/animations';

export interface Party {
  name: string;
  partySize: number;
  heroes: Hero[];
}

const createHero = (): Hero => ({
  name: '',
  stats: {
    attack: 0,
    defense: 0,
    speed: 0,
    health: 0
  }
});

const createHeroForm = (hero?: Hero): FormGroup =>
  new FormGroup({
    name: new FormControl(hero ? hero.name : ''),
    stats: new FormGroup({
      attack: new FormControl(hero ? hero.stats.attack : 0),
      defense: new FormControl(hero ? hero.stats.defense : 0),
      speed: new FormControl(hero ? hero.stats.speed : 0),
      health: new FormControl(hero ? hero.stats.health : 0)
    })
  });

@Component({
  selector: 'forms-course-lesson3-completed-party-form',
  templateUrl: './lesson3-completed-party-form.component.html',
  styleUrls: ['./lesson3-completed-party-form.component.css'],
  animations: [
    trigger('fadeout', [
      transition(
        ':leave',
        animate(
          '1s',
          keyframes([
            style({ opacity: '1', offset: 0, height: '*' }),
            style({ opacity: '0', offset: 0.5, height: '*' }),
            style({ opacity: '0', offset: 1, height: 0 })
          ])
        )
      )
    ]),
    trigger('fadein', [
      transition(
        ':enter',
        animate(
          '1s',
          keyframes([
            style({ opacity: '0', offset: 0, height: 0 }),
            style({ opacity: '0', offset: 0.5, height: '*' }),
            style({ opacity: '1', offset: 1, height: '*' })
          ])
        )
      )
    ])
  ]
})
export class Lesson3CompletedPartyFormComponent implements OnInit {
  possiblePartySizes = [1, 2, 3, 4, 5, 6];
  form = new FormGroup({
    name: new FormControl(''),
    partySize: new FormControl(3),
    heroes: new FormArray([])
  });

  constructor() {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        startWith(this.form.value),
        debounceTime(0),
        tap(({ partySize, heroes }: Party) => {
          if (partySize === heroes.length) {
            return;
          }
          const heroFormArray = this.form.get('heroes') as FormArray;
          if (partySize > heroes.length) {
            while (heroFormArray.controls.length < partySize) {
              heroFormArray.push(createHeroForm());
            }
            return;
          }
          while (heroFormArray.controls.length > partySize) {
            heroFormArray.removeAt(heroFormArray.controls.length - 1);
          }

          // const newFormArray = new FormArray([]);
          // for (let i = 0; i < partySize; i++) {
          //   newFormArray.push(createHeroForm(heroes[i]));
          // }
          // this.form.setControl('heroes', newFormArray);
        })
      )
      .subscribe();
  }
}
