import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-lesson1-completed-making-forms-dynamic',
  templateUrl: './lesson1-completed-making-forms-dynamic.component.html',
  styleUrls: ['./lesson1-completed-making-forms-dynamic.component.css']
})
export class Lesson1CompletedMakingFormsDynamicComponent implements OnInit {
  favoriteColor = new FormControl('Blue');
  colors = ['Blue', 'Red', 'White', 'Orange', 'Purple', 'Yellow', 'Chartreuse'];
  allColors = new FormControl(this.colors.join(', '));

  constructor() {}

  ngOnInit() {}
}
