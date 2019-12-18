import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forms-course-lesson2-completed-material-example',
  templateUrl: './lesson2-completed-material-example.component.html',
  styleUrls: ['./lesson2-completed-material-example.component.css']
})
export class Lesson2CompletedMaterialExampleComponent {
  form = new FormGroup({
    input: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });

  submit() {
    alert('Submitted!');
  }
}
