import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ApiService } from '../../api.service';

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
  selector: 'forms-course-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.css']
})
export class FullNameComponent {
  form = new FormGroup(
    {
      first: new FormControl('Jeff', [Validators.required, noNumbers]),
      middle: new FormControl('Brian', [noNumbers]),
      last: new FormControl('Cross', [Validators.required, noNumbers])
    },
    [fullNameTooLongValidator],
    [
      // add your async validator here!!!
    ]
  );

  constructor(private api: ApiService) {}

  submit() {
    alert(`Submitted with value: ${JSON.stringify(this.form.value, null, 2)}`);
  }
}
