import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const stats = ['attack', 'defense', 'speed', 'health'];

const MIN_SINGLE_STAT = 0;
const MAX_SINGLE_STAT = 20;
const MAX_TOTAL_STATS = 60;

const singleStatValidators = [
  Validators.required,
  Validators.min(MIN_SINGLE_STAT),
  Validators.max(MAX_SINGLE_STAT)
];

const heroValidator = (control: FormGroup) => {
  const totalStats = stats.reduce(
    (acc, statName) => acc + control.get('stats').get(statName).value,
    0
  );
  return totalStats > MAX_TOTAL_STATS
    ? {
        totalStats: {
          totalStatMax: MAX_TOTAL_STATS,
          heroTotalStats: totalStats
        }
      }
    : null;
};

const createSingleStatControl = () => new FormControl(0, singleStatValidators);

@Component({
  selector: 'forms-course-lesson3-completed-hero-validation',
  templateUrl: './lesson3-completed-hero-validation.component.html',
  styleUrls: ['./lesson3-completed-hero-validation.component.css']
})
export class Lesson3CompletedHeroValidationComponent {
  stats = stats;
  form = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      stats: new FormGroup(
        stats.reduce((acc, statName) => {
          acc[statName] = createSingleStatControl();
          return acc;
        }, {})
      )
    },
    heroValidator
  );

  submit() {
    window.alert(
      `Hero submitted with value ${JSON.stringify(this.form.value, null, 2)}`
    );
  }
}
