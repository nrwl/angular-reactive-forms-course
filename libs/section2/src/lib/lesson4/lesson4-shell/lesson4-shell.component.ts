import { Component, OnInit } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson4-shell',
  templateUrl: './lesson4-shell.component.html',
  styleUrls: ['./lesson4-shell.component.css']
})
export class Lesson4ShellComponent {
  fullNameLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson4-completed-full-name/lesson4-completed-full-name.component.html'),
        fileName: 'lesson4-completed-full-name.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson4-completed-full-name/lesson4-completed-full-name.component.ts'),
        fileName: 'lesson4-completed-full-name.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../full-name/full-name.component.html'),
        fileName: 'full-name.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../full-name/full-name.component.ts'),
        fileName: 'full-name.component.ts',
        language: 'typescript'
      }
    ]
  };
  heroAdderLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson4-completed-hero-adder/lesson4-completed-hero-adder.component.html'),
        fileName: 'lesson4-completed-hero-adder.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson4-completed-hero-adder/lesson4-completed-hero-adder.component.ts'),
        fileName: 'lesson4-completed-hero-adder.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../hero-adder/hero-adder.component.html'),
        fileName: 'hero-adder.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../hero-adder/hero-adder.component.ts'),
        fileName: 'hero-adder.component.ts',
        language: 'typescript'
      }
    ]
  };
}
