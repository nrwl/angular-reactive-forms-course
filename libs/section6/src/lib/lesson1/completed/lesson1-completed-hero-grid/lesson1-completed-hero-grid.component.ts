import {
  Component,
  OnInit,
  Output,
  ViewChild,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Sort, MatSort } from '@angular/material/sort';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormControl
} from '@angular/forms';
import { takeUntil, tap, filter } from 'rxjs/operators';
import { Hero, HeroColumnFilters } from '../../../+state/hero.utils';

@Component({
  selector: 'forms-course-lesson1-completed-hero-grid',
  templateUrl: './lesson1-completed-hero-grid.component.html',
  styleUrls: ['./lesson1-completed-hero-grid.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson1CompletedHeroGridComponent,
      multi: true
    }
  ]
})
export class Lesson1CompletedHeroGridComponent
  implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
  @ViewChild(MatSort, { static: true }) private _matSort: MatSort;
  @Output() sort: Observable<Sort>;
  @Input() heroes: Hero[] = [];
  @Input() columnFiltersTurnedOn = false;
  @Input() loading = false;
  private _columnFiltersTurnedOn$ = new BehaviorSubject<boolean>(
    this.columnFiltersTurnedOn
  );
  columns: (keyof Hero)[] = ['name', 'attack', 'defense', 'speed', 'health'];
  private _destroying$ = new Subject<void>();
  form: FormGroup;
  private _onTouched;

  ngOnInit() {
    this.sort = this._matSort.sortChange;
  }

  writeValue(v: HeroColumnFilters): void {
    if (!this.form) {
      this.form = new FormGroup(
        this.columns.reduce(
          (acc, columnName) => ({ ...acc, [columnName]: new FormControl('') }),
          {}
        )
      );
      this._columnFiltersTurnedOn$
        .pipe(
          takeUntil(this._destroying$),
          filter(v => !v),
          tap(() =>
            this.form.setValue(
              this.columns.reduce(
                (acc, columnName) => ({ ...acc, [columnName]: '' }),
                {}
              )
            )
          )
        )
        .subscribe();
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

  registerOnTouched(fn) {}

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.columnFiltersTurnedOn) {
      this._columnFiltersTurnedOn$.next(this.columnFiltersTurnedOn);
    }
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
