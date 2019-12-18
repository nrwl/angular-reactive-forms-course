import { Component, OnInit } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson3-shell',
  templateUrl: './lesson3-shell.component.html',
  styleUrls: ['./lesson3-shell.component.css']
})
export class Lesson3ShellComponent {
  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-hero-validation/lesson3-completed-hero-validation.component.html'),
        fileName: 'lesson3-completed-hero-validation.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-hero-validation/lesson3-completed-hero-validation.component.ts'),
        fileName: 'lesson3-completed-hero-validation.component.ts',
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
}
