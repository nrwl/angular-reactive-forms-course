import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson2-shell',
  templateUrl: './lesson2-shell.component.html',
  styleUrls: ['./lesson2-shell.component.css']
})
export class Lesson2ShellComponent {
  dateTimeControl = new FormControl(new Date());

  toggleDisable() {
    if (this.dateTimeControl.enabled) {
      this.dateTimeControl.disable();
    } else {
      this.dateTimeControl.enable();
    }
  }

  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-date-time-picker/lesson2-completed-date-time-picker.component.html'),
        fileName: 'lesson2-completed-date-time-picker.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-date-time-picker/lesson2-completed-date-time-picker.component.ts'),
        fileName: 'lesson2-completed-date-time-picker.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../date-time-picker/date-time-picker.component.html'),
        fileName: 'date-time-picker.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../date-time-picker/date-time-picker.component.ts'),
        fileName: 'date-time-picker.component.ts',
        language: 'typescript'
      }
    ]
  };
}
