import { Component, OnInit } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson2-shell',
  templateUrl: './lesson2-shell.component.html',
  styleUrls: ['./lesson2-shell.component.css']
})
export class Lesson2ShellComponent implements OnInit {
  filteringAListFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-filtering-a-list/lesson2-completed-filtering-a-list.component.html'),
        fileName: 'lesson2-completed-filtering-a-list.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-filtering-a-list/lesson2-completed-filtering-a-list.component.ts'),
        fileName: 'lesson2-completed-filtering-a-list.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../filtering-a-list/filtering-a-list.component.html'),
        fileName: 'filtering-a-list.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../filtering-a-list/filtering-a-list.component.ts'),
        fileName: 'filtering-a-list.component.ts',
        language: 'typescript'
      }
    ]
  };
  heroFormFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-hero-form/lesson2-completed-hero-form.component.html'),
        fileName: 'lesson2-completed-hero-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-hero-form/lesson2-completed-hero-form.component.ts'),
        fileName: 'lesson2-completed-hero-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../hero-form/hero-form.component.html'),
        fileName: 'hero-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../hero-form/hero-form.component.ts'),
        fileName: 'hero-form.component.ts',
        language: 'typescript'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
