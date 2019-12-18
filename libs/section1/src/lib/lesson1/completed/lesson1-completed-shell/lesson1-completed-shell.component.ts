import { Component, OnInit } from '@angular/core';
import { FileToPreview } from '@forms-course/ui-common';
import { LessonFrame } from 'libs/ui-common/src/lib/lesson-frame.interface';
import { LessonFrameComponent } from 'libs/ui-common/src/lib/lesson-frame/lesson-frame.component';

@Component({
  selector: 'forms-course-lesson1-completed-shell',
  templateUrl: './lesson1-completed-shell.component.html',
  styleUrls: ['./lesson1-completed-shell.component.css']
})
export class Lesson1CompletedShellComponent implements OnInit {
  textInputFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../lesson1-completed-text-input/lesson1-completed-text-input.component.html'),
        fileName: 'lesson1-completed-text-input.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../lesson1-completed-text-input/lesson1-completed-text-input.component.ts'),
        fileName: 'lesson1-completed-text-input.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../../text-input/text-input.component.html'),
        fileName: 'text-input.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../text-input/text-input.component.ts'),
        fileName: 'text-input.component.ts',
        language: 'typescript'
      }
    ]
  };
  numberInputFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../lesson1-completed-number-input/lesson1-completed-number-input.component.html'),
        fileName: 'lesson1-completed-number-input.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../lesson1-completed-number-input/lesson1-completed-number-input.component.ts'),
        fileName: 'lesson1-completed-number-input.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../../number-input/number-input.component.html'),
        fileName: 'number-input.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../number-input/number-input.component.ts'),
        fileName: 'number-input.component.ts',
        language: 'typescript'
      }
    ]
  };
  otherControlsFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../lesson1-completed-other-controls/lesson1-completed-other-controls.component.html'),
        fileName: 'lesson1-completed-other-controls.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../lesson1-completed-other-controls/lesson1-completed-other-controls.component.ts'),
        fileName: 'lesson1-completed-other-controls.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../../other-controls/other-controls.component.html'),
        fileName: 'other-controls.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../other-controls/other-controls.component.ts'),
        fileName: 'other-controls.component.ts',
        language: 'typescript'
      }
    ]
  };
  makingFormsDynamicFiles: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../lesson1-completed-making-forms-dynamic/lesson1-completed-making-forms-dynamic.component.html'),
        fileName: 'lesson1-completed-making-forms-dynamic.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../lesson1-completed-making-forms-dynamic/lesson1-completed-making-forms-dynamic.component.ts'),
        fileName: 'lesson1-completed-making-forms-dynamic.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../../making-forms-dynamic/making-forms-dynamic.component.html'),
        fileName: 'making-forms-dynamic.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../making-forms-dynamic/making-forms-dynamic.component.ts'),
        fileName: 'making-forms-dynamic.component.ts',
        language: 'typescript'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
