import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forms-course-material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.css']
})
export class MaterialExampleComponent {
  form = new FormGroup({
    input: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });

  submit() {
    alert('Submitted!');
  }
}
