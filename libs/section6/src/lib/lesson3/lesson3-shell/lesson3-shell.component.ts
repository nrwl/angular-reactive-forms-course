import { Component } from '@angular/core';
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
        fileContents: require('!!raw-loader!../completed/lesson3-completed-client-side-table/lesson3-completed-client-side-table.component.html'),
        fileName: 'lesson1-completed-client-side-table.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-client-side-table/lesson3-completed-client-side-table.component.ts'),
        fileName: 'lesson1-completed-client-side-table.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../client-side-table/client-side-table.component.html'),
        fileName: 'client-side-table.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../client-side-table/client-side-table.component.ts'),
        fileName: 'client-side-table.component.ts',
        language: 'typescript'
      }
    ]
  };
}
