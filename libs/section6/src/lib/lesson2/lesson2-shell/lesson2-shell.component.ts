import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson2-shell',
  templateUrl: './lesson2-shell.component.html',
  styleUrls: ['./lesson2-shell.component.css']
})
export class Lesson2ShellComponent {
  tableFormControl = new FormControl({
    filter: '',
    columnFilters: false,
    pageSize: 5,
    currentPage: 1
  });
  tableSizeControl = new FormControl(20);

  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-table-form/lesson2-completed-table-form.component.html'),
        fileName: 'lesson1-completed-table-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-table-form/lesson2-completed-table-form.component.ts'),
        fileName: 'lesson1-completed-table-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../table-form/table-form.component.html'),
        fileName: 'table-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../table-form/table-form.component.ts'),
        fileName: 'table-form.component.ts',
        language: 'typescript'
      }
    ]
  };
}
