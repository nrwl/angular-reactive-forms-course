import { Component, OnInit } from '@angular/core';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson3-shell',
  templateUrl: './lesson3-shell.component.html',
  styleUrls: ['./lesson3-shell.component.css']
})
export class Lesson3ShellComponent implements OnInit {
  simpleDynamicArrayFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-simple-dynamic-array/lesson3-completed-simple-dynamic-array.component.html'),
        fileName: 'lesson3-completed-simple-dynamic-array.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-simple-dynamic-array/lesson3-completed-simple-dynamic-array.component.ts'),
        fileName: 'lesson3-completed-simple-dynamic-array.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../simple-dynamic-array/simple-dynamic-array.component.html'),
        fileName: 'simple-dynamic-array.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../simple-dynamic-array/simple-dynamic-array.component.ts'),
        fileName: 'simple-dynamic-array.component.ts',
        language: 'typescript'
      }
    ]
  };
  partyFormFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-party-form/lesson3-completed-party-form.component.html'),
        fileName: 'lesson3-completed-party-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-party-form/lesson3-completed-party-form.component.ts'),
        fileName: 'lesson3-completed-party-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../party-form/party-form.component.html'),
        fileName: 'party-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../party-form/party-form.component.ts'),
        fileName: 'party-form.component.ts',
        language: 'typescript'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
