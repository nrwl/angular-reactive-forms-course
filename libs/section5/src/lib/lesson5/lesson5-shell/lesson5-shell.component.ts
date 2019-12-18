import { Component, OnInit } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson5-shell',
  templateUrl: './lesson5-shell.component.html',
  styleUrls: ['./lesson5-shell.component.css']
})
export class Lesson5ShellComponent {
  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../../completed/completed-wizard/completed-wizard.component.html'),
        fileName: 'completed-wizard.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../completed/completed-wizard/completed-wizard.component.ts'),
        fileName: 'completed-wizard.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../../wizard/wizard.component.html'),
        fileName: 'wizard.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../wizard/wizard.component.ts'),
        fileName: 'wizard.component.ts',
        language: 'typescript'
      }
    ]
  };
}
