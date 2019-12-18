import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Hero {
  name: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    health: number;
  };
}

@Component({
  selector: 'forms-course-lesson2-completed-hero-form',
  templateUrl: './lesson2-completed-hero-form.component.html',
  styleUrls: ['./lesson2-completed-hero-form.component.css']
})
export class Lesson2CompletedHeroFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    stats: new FormGroup({
      attack: new FormControl(0),
      defense: new FormControl(0),
      speed: new FormControl(0),
      health: new FormControl(0)
    })
  });

  constructor() {}

  ngOnInit() {}
}
