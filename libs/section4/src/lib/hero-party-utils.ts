import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';

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

export const stats = ['attack', 'defense', 'speed', 'health'];

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

export interface Party {
  name: string;
  size: number;
  heroes: Hero[];
}

const adjustPartyArrayForNewSize = (
  size: number,
  formArray: FormArray
): void => {
  if (formArray.controls.length < size) {
    while (formArray.controls.length < size) {
      formArray.push(
        createHeroFormControl({
          name: '',
          stats: { attack: 5, defense: 5, speed: 5, health: 5 }
        })
      );
    }
  } else {
    while (formArray.controls.length > size) {
      formArray.removeAt(formArray.controls.length - 1);
    }
  }
  formArray.updateValueAndValidity();
};

export const createPartyFormGroup = (
  party: Party,
  whenToComplete: Observable<void>
): FormGroup => {
  const group = new FormGroup({
    name: new FormControl(party.name, [Validators.required]),
    size: new FormControl(party.size),
    heroes: new FormArray(
      party.heroes.reduce(
        (acc, hero) => [...acc, createHeroFormControl(hero)],
        []
      )
    )
  });
  group
    .get('size')
    .valueChanges.pipe(
      startWith(group.get('size').value),
      takeUntil(whenToComplete),
      tap(size =>
        adjustPartyArrayForNewSize(size, group.get('heroes') as FormArray)
      )
    )
    .subscribe();
  return group;
};

const partyValidation = (party: Party) => {
  if (party.heroes.length !== party.size) {
    return null;
  }
  const validationErrors = {};
  if (!party.name) {
    validationErrors['nameRequired'] = true;
  }
  for (let index = 0; index < party.size; index++) {
    const heroValidationErrors = heroValidation(party.heroes[index]);
    if (heroValidationErrors) {
      validationErrors[index] = heroValidationErrors;
    }
  }
  return Object.keys(validationErrors).length ? validationErrors : null;
};

export const createPartyFormControl = (party: Party): FormControl =>
  new FormControl(party, control => partyValidation(control.value as Party));
