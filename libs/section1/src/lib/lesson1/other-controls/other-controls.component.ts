import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-other-controls',
  templateUrl: './other-controls.component.html',
  styleUrls: ['./other-controls.component.css']
})
export class OtherControlsComponent implements OnInit {
  radioControl = new FormControl('Blue');
  selectControl = new FormControl('Blue');
  rangeControl = new FormControl(5);
  dateControl = new FormControl('2019-08-13');
  timeControl = new FormControl('09:00');
  colorControl = new FormControl('#0096ff');

  constructor() {}

  ngOnInit() {}
}
