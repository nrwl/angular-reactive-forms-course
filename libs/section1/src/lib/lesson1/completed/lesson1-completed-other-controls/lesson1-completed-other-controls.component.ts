import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-lesson1-completed-other-controls',
  templateUrl: './lesson1-completed-other-controls.component.html',
  styleUrls: ['./lesson1-completed-other-controls.component.css']
})
export class Lesson1CompletedOtherControlsComponent implements OnInit {
  radioControl = new FormControl('Blue');
  selectControl = new FormControl('Blue');
  rangeControl = new FormControl(5);
  dateControl = new FormControl('2019-08-13');
  timeControl = new FormControl('09:00');
  colorControl = new FormControl('#0096ff');

  constructor() {}

  ngOnInit() {}
}
