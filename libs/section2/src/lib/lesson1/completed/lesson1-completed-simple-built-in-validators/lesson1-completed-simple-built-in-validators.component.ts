import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'forms-course-lesson1-completed-simple-built-in-validators',
  templateUrl: './lesson1-completed-simple-built-in-validators.component.html',
  styleUrls: ['./lesson1-completed-simple-built-in-validators.component.css']
})
export class Lesson1CompletedSimpleBuiltInValidatorsComponent
  implements OnInit {
  control = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.email
  ]);

  constructor() {}

  ngOnInit() {}
}
