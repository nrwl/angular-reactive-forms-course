import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';

const stats = ['attack', 'defense', 'speed', 'health'];

const MIN_SINGLE_STAT = 0;
const MAX_SINGLE_STAT = 20;
const MAX_TOTAL_STATS = 60;

const singleStatValidators = [
  Validators.required,
  Validators.min(MIN_SINGLE_STAT),
  Validators.max(MAX_SINGLE_STAT)
];

const heroValidator: ValidatorFn = (control: FormGroup) => {
  // define the validator here!!
  return null;
};

const createSingleStatControl = () => new FormControl(0, singleStatValidators);

@Component({
  selector: 'forms-course-hero-validation-2',
  templateUrl: './hero-validation.component.html',
  styleUrls: ['./hero-validation.component.css']
})
export class HeroValidationComponent {}
