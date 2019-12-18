import { Component } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson4-shell',
  templateUrl: './lesson4-shell.component.html',
  styleUrls: ['./lesson4-shell.component.css']
})
export class Lesson4ShellComponent {
  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson4-completed-server-side-table/lesson4-completed-server-side-table.component.html'),
        fileName: 'lesson4-completed-server-side-table.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson4-completed-server-side-table/lesson4-completed-server-side-table.component.ts'),
        fileName: 'lesson4-completed-server-side-table.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../server-side-table/server-side-table.component.html'),
        fileName: 'server-side-table.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../server-side-table/server-side-table.component.ts'),
        fileName: 'server-side-table.component.ts',
        language: 'typescript'
      }
    ]
  };
}
