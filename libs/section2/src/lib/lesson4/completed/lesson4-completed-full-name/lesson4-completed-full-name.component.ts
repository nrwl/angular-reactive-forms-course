import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../../../api.service';

const TOTAL_NAME_LIMIT = 40;

const noNumbers: ValidatorFn = control =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].some(x => control.value.includes(x))
    ? { hasNumber: true }
    : null;

const fullNameTooLongValidator: ValidatorFn = group => {
  const totalLength =
    group.get('first').value.length +
    group.get('middle').value.length +
    group.get('last').value.length;
  return totalLength < TOTAL_NAME_LIMIT
    ? null
    : { fullNameTooLong: { totalLength, limit: TOTAL_NAME_LIMIT } };
};

@Component({
  selector: 'forms-course-lesson4-completed-full-name',
  templateUrl: './lesson4-completed-full-name.component.html',
  styleUrls: ['./lesson4-completed-full-name.component.css']
})
export class Lesson4CompletedFullNameComponent {
  constructor(private api: ApiService) {}

  form = new FormGroup(
    {
      first: new FormControl('Jeff', [Validators.required, noNumbers]),
      middle: new FormControl('Brian', [noNumbers]),
      last: new FormControl('Cross', [Validators.required, noNumbers])
    },
    [fullNameTooLongValidator],
    [
      control =>
        this.api.alreadyExists$(control.value).pipe(
          take(1),
          map(x => (x ? { alreadyExists: true } : null))
        )
    ]
  );

  submit() {
    alert(`Submitted with value: ${JSON.stringify(this.form.value)}`);
  }
}
