import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const MIN_STAT_THRESHOLD = 0;
const MAX_STAT_THRESHOLD = 20;
const statValidators = [
  Validators.min(MIN_STAT_THRESHOLD),
  Validators.max(MAX_STAT_THRESHOLD)
];

@Component({
  selector: 'forms-course-lesson1-completed-hero-validation',
  templateUrl: './lesson1-completed-hero-validation.component.html',
  styleUrls: ['./lesson1-completed-hero-validation.component.css']
})
export class Lesson1CompletedHeroValidationComponent implements OnInit {
  stats = ['attack', 'defense', 'speed', 'health'];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    stats: new FormGroup({
      attack: new FormControl(0, statValidators),
      defense: new FormControl(0, statValidators),
      speed: new FormControl(0, statValidators),
      health: new FormControl(0, statValidators)
    })
  });

  constructor() {}

  ngOnInit() {}
}
