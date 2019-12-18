import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'forms-course-lesson2-completed-bootstrap-example',
  templateUrl: './lesson2-completed-bootstrap-example.component.html',
  styleUrls: ['./lesson2-completed-bootstrap-example.component.css']
})
export class Lesson2CompletedBootstrapExampleComponent {
  form = new FormGroup({
    input: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });

  submit() {
    alert('Submitted!');
  }
}
