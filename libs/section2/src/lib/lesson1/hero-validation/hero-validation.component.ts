import { Component, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

interface Hero {
  name: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    health: number;
  };
}

const MIN_STAT_THRESHOLD = 0;
const MAX_STAT_THRESHOLD = 20;
const statValidators: ValidatorFn[] = [];

@Component({
  selector: 'forms-course-hero-validation',
  templateUrl: './hero-validation.component.html',
  styleUrls: ['./hero-validation.component.css']
})
export class HeroValidationComponent implements OnInit {
  stats = ['attack', 'defense', 'speed', 'health'];
  constructor() {}

  ngOnInit() {}
}
