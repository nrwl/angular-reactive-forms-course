import { Component } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson2-shell',
  templateUrl: './lesson2-shell.component.html',
  styleUrls: ['./lesson2-shell.component.css']
})
export class Lesson2ShellComponent {
  bootstrapLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-bootstrap-example/lesson2-completed-bootstrap-example.component.html'),
        fileName: 'lesson2-completed-bootstrap-example.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-bootstrap-example/lesson2-completed-bootstrap-example.component.ts'),
        fileName: 'lesson2-completed-bootstrap-example.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../bootstap-example/bootstap-example.component.html'),
        fileName: 'bootstap-example.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../bootstap-example/bootstap-example.component.ts'),
        fileName: 'bootstap-example.component.ts',
        language: 'typescript'
      }
    ]
  };
  materialLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-material-example/lesson2-completed-material-example.component.html'),
        fileName: 'lesson2-completed-material-example.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-material-example/lesson2-completed-material-example.component.ts'),
        fileName: 'lesson2-completed-material-example.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../bootstap-example/bootstap-example.component.html'),
        fileName: 'bootstap-example.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../bootstap-example/bootstap-example.component.ts'),
        fileName: 'bootstap-example.component.ts',
        language: 'typescript'
      }
    ]
  };
}
