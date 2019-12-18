import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'forms-course-lesson1-completed-text-input',
  templateUrl: './lesson1-completed-text-input.component.html',
  styleUrls: ['./lesson1-completed-text-input.component.css']
})
export class Lesson1CompletedTextInputComponent implements OnInit, OnDestroy {
  control = new FormControl('zack');
  controlValueHistory: string[] = [];
  private _destroying$ = new Subject<void>();

  ngOnInit() {
    this.control.valueChanges
      .pipe(
        tap(value => this.controlValueHistory.unshift(value)),
        takeUntil(this._destroying$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._destroying$.next();
  }

  setFormToMyName() {
    this.control.setValue('Zack');
  }

  toggleFormEnabled() {
    if (this.control.enabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  clearHistory() {
    this.controlValueHistory = [];
  }
}
