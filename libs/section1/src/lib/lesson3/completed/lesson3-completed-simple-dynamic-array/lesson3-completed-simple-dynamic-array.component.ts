import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-lesson3-completed-simple-dynamic-array',
  templateUrl: './lesson3-completed-simple-dynamic-array.component.html',
  styleUrls: ['./lesson3-completed-simple-dynamic-array.component.css']
})
export class Lesson3CompletedSimpleDynamicArrayComponent implements OnInit {
  form = new FormArray([new FormControl('')]);

  ngOnInit() {}

  addControl() {
    this.form.push(new FormControl(''));
  }

  removeControl(index: number) {
    this.form.removeAt(index);
  }
}
