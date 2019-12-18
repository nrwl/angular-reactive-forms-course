import { Component, OnInit } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson1-shell',
  templateUrl: './lesson1-shell.component.html',
  styleUrls: ['./lesson1-shell.component.css']
})
export class Lesson1ShellComponent implements OnInit {
  simpleLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-simple-built-in-validators/lesson1-completed-simple-built-in-validators.component.html'),
        fileName: 'lesson1-completed-simple-built-in-validators.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-simple-built-in-validators/lesson1-completed-simple-built-in-validators.component.ts'),
        fileName: 'lesson1-completed-simple-built-in-validators.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../simple-built-in-validators/simple-built-in-validators.component.html'),
        fileName: 'simple-built-in-validators.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../simple-built-in-validators/simple-built-in-validators.component.ts'),
        fileName: 'simple-built-in-validators.component.ts',
        language: 'typescript'
      }
    ]
  };
  heroValidationLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-hero-validation/lesson1-completed-hero-validation.component.html'),
        fileName: 'lesson1-completed-hero-validation.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-hero-validation/lesson1-completed-hero-validation.component.ts'),
        fileName: 'lesson1-completed-hero-validation.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../hero-validation/hero-validation.component.html'),
        fileName: 'hero-validation.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../hero-validation/hero-validation.component.ts'),
        fileName: 'hero-validation.component.ts',
        language: 'typescript'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
