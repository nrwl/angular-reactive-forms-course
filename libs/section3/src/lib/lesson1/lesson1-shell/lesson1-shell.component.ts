import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson1-shell',
  templateUrl: './lesson1-shell.component.html',
  styleUrls: ['./lesson1-shell.component.css']
})
export class Lesson1ShellComponent {
  toggleControl = new FormControl(true);
  numberControl = new FormControl(50);

  toggleLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-toggle-form/lesson1-completed-toggle-form.component.html'),
        fileName: 'lesson1-completed-toggle-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-toggle-form/lesson1-completed-toggle-form.component.ts'),
        fileName: 'lesson1-completed-toggle-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../toggle-form/toggle-form.component.html'),
        fileName: 'toggle-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../toggle-form/toggle-form.component.ts'),
        fileName: 'toggle-form.component.ts',
        language: 'typescript'
      }
    ]
  };

  numberPickerLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-number-picker/lesson1-completed-number-picker.component.html'),
        fileName: 'lesson1-completed-number-picker.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-number-picker/lesson1-completed-number-picker.component.ts'),
        fileName: 'lesson1-completed-number-picker.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../number-picker/number-picker.component.html'),
        fileName: 'number-picker.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../number-picker/number-picker.component.ts'),
        fileName: 'number-picker.component.ts',
        language: 'typescript'
      }
    ]
  };
}
