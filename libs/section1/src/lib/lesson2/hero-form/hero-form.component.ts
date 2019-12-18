import { Component, OnInit } from '@angular/core';

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
  selector: 'forms-course-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  constructor() {}
}
