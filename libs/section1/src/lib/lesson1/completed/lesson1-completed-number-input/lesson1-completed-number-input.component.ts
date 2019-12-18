import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'forms-course-lesson1-completed-number-input',
  templateUrl: './lesson1-completed-number-input.component.html',
  styleUrls: ['./lesson1-completed-number-input.component.css']
})
export class Lesson1CompletedNumberInputComponent implements OnInit, OnDestroy {
  control = new FormControl(20, { updateOn: 'blur' });
  controlValueHistory: number[] = [];
  private _destroying = new Subject<void>();

  constructor() {}

  ngOnInit() {
    this.control.valueChanges
      .pipe(
        tap(value => this.controlValueHistory.unshift(value)),
        tap(value => {
          if (value > 25) {
            this.control.setValue(25);
          } else if (value < 5) {
            this.control.setValue(5);
          } else if (value % 5 !== 0) {
            this.control.setValue(value - (value % 5));
          }
        }),
        takeUntil(this._destroying)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._destroying.next();
  }
}
