import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-making-forms-dynamic',
  templateUrl: './making-forms-dynamic.component.html',
  styleUrls: ['./making-forms-dynamic.component.css']
})
export class MakingFormsDynamicComponent {
  favoriteColor = new FormControl('Blue');
  colors = ['Blue', 'Red', 'White', 'Orange', 'Purple', 'Yellow', 'Chartreuse'];
}
