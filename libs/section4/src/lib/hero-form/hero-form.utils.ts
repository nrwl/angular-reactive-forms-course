import { FormControl, FormGroup, Validators } from '@angular/forms';

export const STAT_MIN = 1;
export const STAT_MAX = 20;
export const TOTAL_STAT_MAX = 60;

export interface Hero {
  name: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    health: number;
  };
}

const stats = ['attack', 'defense', 'speed', 'health'];

export const statValidators = [
  Validators.required,
  Validators.min(1),
  Validators.max(20)
];

export const calcTotalStats = (hero: Hero): number =>
  Object.values(hero.stats).reduce((acc, statValue) => acc + statValue, 0);

export const heroGroupValidator = (control: FormGroup) => {
  const totalStats = Object.values(
    (control.get('stats') as FormGroup).controls
  ).reduce((acc, statControl) => acc + statControl.value, 0);
  return totalStats > TOTAL_STAT_MAX
    ? { totalStatsTooHigh: { maxAllowed: TOTAL_STAT_MAX, totalStats } }
    : null;
};

export const heroValidation = (hero: Hero) => {
  const errors = {};
  if (!hero.name) {
    errors['hero name required'] = true;
  }
  stats.forEach(statName => {
    if (!hero.stats[statName]) {
      errors[`Stat ${statName} is required.`] = true;
    }
    if (hero.stats[statName] < STAT_MIN) {
      errors[`${statName} minumum`] = {
        minValueAllowed: STAT_MIN,
        heroValue: hero.stats[statName]
      };
    }
    if (hero.stats[statName] > STAT_MAX) {
      errors[`${statName} maximum`] = {
        maxValueAllowed: STAT_MAX,
        heroValue: hero.stats[statName]
      };
    }
  });
  const totalStats = calcTotalStats(hero);
  if (totalStats > TOTAL_STAT_MAX) {
    errors[`total stats maximum`] = { maxAllowed: TOTAL_STAT_MAX, totalStats };
  }
  return Object.keys(errors).length ? errors : null;
};

export const heroControlValidator = (control: FormControl) => {
  const hero: Hero = control.value;
  return heroValidation(hero);
};

export const createHeroFormGroup = (hero: Hero): FormGroup =>
  new FormGroup(
    {
      name: new FormControl(hero.name, Validators.required),
      stats: new FormGroup(
        stats.reduce(
          (acc, statName) => ({
            ...acc,
            [statName]: new FormControl(hero.stats[statName], statValidators)
          }),
          {}
        )
      )
    },
    heroGroupValidator
  );

export const createHeroFormControl = (hero: Hero): FormControl =>
  new FormControl(hero, heroControlValidator);
