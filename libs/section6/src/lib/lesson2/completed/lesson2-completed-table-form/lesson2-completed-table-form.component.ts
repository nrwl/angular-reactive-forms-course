import {
  Component,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  FormControl
} from '@angular/forms';
import { Subject, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { takeUntil, tap, startWith, map } from 'rxjs/operators';
import { HeroTableFormValue } from '../../../+state/hero.utils';

@Component({
  selector: 'forms-course-lesson2-completed-table-form',
  templateUrl: './lesson2-completed-table-form.component.html',
  styleUrls: ['./lesson2-completed-table-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson2CompletedTableFormComponent,
      multi: true
    }
  ]
})
export class Lesson2CompletedTableFormComponent
  implements ControlValueAccessor, OnDestroy, OnChanges {
  @Input() totalItems: number;
  private _totalItems$: BehaviorSubject<number>;
  form: FormGroup;
  private _destroying$ = new Subject<void>();
  public totalPages$: Observable<number>;

  writeValue(v: HeroTableFormValue) {
    if (!this.form) {
      this.form = new FormGroup({
        filter: new FormControl(v.filter),
        columnFilters: new FormControl(v.columnFilters),
        pageSize: new FormControl(v.pageSize),
        currentPage: new FormControl(v.currentPage)
      });
      this.totalPages$ = combineLatest([
        this.form
          .get('pageSize')
          .valueChanges.pipe(startWith(this.form.get('pageSize').value)),
        this._totalItems$
      ]).pipe(
        map(([pageSize, totalItems]) => Math.ceil(totalItems / pageSize))
      );
    } else {
      this.form.setValue(v);
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges
      .pipe(
        takeUntil(this._destroying$),
        tap(fn)
      )
      .subscribe();
  }

  registerOnTouched() {}

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.totalItems) {
      if (!this._totalItems$) {
        this._totalItems$ = new BehaviorSubject<number>(this.totalItems);
      } else {
        this._totalItems$.next(this.totalItems);
      }
    }
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
