import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LessonFrame } from '@forms-course/ui-common';
import { combineLatest, Observable, of } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import {
  createDateRangePickerFormControl,
  isDateWithinRange
} from '../../date-range-picker-utils';

@Component({
  selector: 'forms-course-lesson1-shell',
  templateUrl: './lesson1-shell.component.html',
  styleUrls: ['./lesson1-shell.component.css']
})
export class Lesson1ShellComponent {
  rangeControl = createDateRangePickerFormControl();
  dateTimeControl = new FormControl(new Date(), Validators.required);
  dateIsWithinRange$: Observable<string | boolean> = combineLatest([
    this.rangeControl.statusChanges.pipe(
      startWith(this.rangeControl.status),
      map(status => status === 'VALID')
    ),
    this.dateTimeControl.statusChanges.pipe(
      startWith(this.dateTimeControl.status),
      map(status => status === 'VALID')
    )
  ]).pipe(
    debounceTime(0),
    switchMap(boolArr =>
      boolArr.some(x => !x)
        ? of('ONE OF YOUR CONTROLS IS INVALID')
        : combineLatest([
            this.rangeControl.valueChanges.pipe(
              startWith(this.rangeControl.value)
            ),
            this.dateTimeControl.valueChanges.pipe(
              startWith(this.dateTimeControl.value)
            )
          ]).pipe(
            debounceTime(0),
            map(([range, date]) => isDateWithinRange(date, range))
          )
    )
  );

  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-date-time-range-picker/lesson1-completed-date-time-range-picker.component.html'),
        fileName: 'lesson1-completed-date-time-range-picker.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson1-completed-date-time-range-picker/lesson1-completed-date-time-range-picker.component.ts'),
        fileName: 'lesson1-completed-date-time-range-picker.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../date-range-picker-form/date-range-picker-form.component.html'),
        fileName: 'date-range-picker-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../date-range-picker-form/date-range-picker-form.component.ts'),
        fileName: 'date-range-picker-form.component.ts',
        language: 'typescript'
      }
    ]
  };
}
