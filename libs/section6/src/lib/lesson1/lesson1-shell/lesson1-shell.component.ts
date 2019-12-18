import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../+state/hero.utils';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson1-shell',
  templateUrl: './lesson1-shell.component.html',
  styleUrls: ['./lesson1-shell.component.css']
})
export class Lesson1ShellComponent {
  paginationControl = new FormControl(1);
  totalPages = new FormControl(20);
  columnFiltersTurnedOn = new FormControl(false);
  columnFilters = new FormControl({
    name: '',
    attack: '',
    defense: '',
    speed: '',
    health: ''
  });
  heroes: Hero[] = [
    { name: 'test', attack: 0, defense: 0, speed: 0, health: 0 }
  ];
  paginationLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-pagination-form/lesson1-completed-pagination-form.component.html'),
        fileName: 'lesson1-completed-pagination-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-pagination-form/lesson1-completed-pagination-form.component.ts'),
        fileName: 'lesson1-completed-pagination-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../pagination-form/pagination-form.component.html'),
        fileName: 'pagination-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../pagination-form/pagination-form.component.ts'),
        fileName: 'pagination-form.component.ts',
        language: 'typescript'
      }
    ]
  };
  heroGridLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-hero-grid/lesson1-completed-hero-grid.component.html'),
        fileName: 'lesson1-completed-hero-grid.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-hero-grid/lesson1-completed-hero-grid.component.ts'),
        fileName: 'lesson1-completed-hero-grid.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../hero-grid/hero-grid.component.html'),
        fileName: 'hero-grid.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../hero-grid/hero-grid.component.ts'),
        fileName: 'hero-grid.component.ts',
        language: 'typescript'
      }
    ]
  };
}
