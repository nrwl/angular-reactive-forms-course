import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson3-shell',
  templateUrl: './lesson3-shell.component.html',
  styleUrls: ['./lesson3-shell.component.css']
})
export class Lesson3ShellComponent {
  heroControl = new FormControl({
    name: 'test',
    stats: {
      attack: 1337,
      defense: 1337,
      speed: 1337,
      health: 1337
    }
  });

  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-hero-form/lesson3-completed-hero-form.component.html'),
        fileName: 'lesson3-completed-hero-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-hero-form/lesson3-completed-hero-form.component.ts'),
        fileName: 'lesson3-completed-hero-form.component.ts',
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
}
