import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, startWith, takeUntil, tap } from 'rxjs/operators';

const createPaginationOptions = (
  currentPage: number,
  totalPages: number
): number[] => {
  const temp: number[] = [currentPage];
  let negativePointer = currentPage - 1;
  let positivePointer = currentPage + 1;
  while (
    temp.length < 5 &&
    (negativePointer > 0 || positivePointer <= totalPages)
  ) {
    if (negativePointer > 0) {
      temp.unshift(negativePointer);
    }
    if (positivePointer <= totalPages) {
      temp.push(positivePointer);
    }
    negativePointer--;
    positivePointer++;
  }
  return temp;
};

@Component({
  selector: 'forms-course-lesson1-completed-pagination-form',
  templateUrl: './lesson1-completed-pagination-form.component.html',
  styleUrls: ['./lesson1-completed-pagination-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson1CompletedPaginationFormComponent,
      multi: true
    }
  ]
})
export class Lesson1CompletedPaginationFormComponent
  implements ControlValueAccessor, OnDestroy, OnChanges {
  @Input() totalPages: number;
  private _totalPages$ = new ReplaySubject<number>(1);
  control: FormControl;
  private _destroying = new Subject<void>();
  public paginationOptions$: Observable<number[]>;
  public showFirst$: Observable<boolean>;
  public showFirstElipsis$: Observable<boolean>;
  public showLast$: Observable<boolean>;
  public showLastElipsis$: Observable<boolean>;

  writeValue(v: number) {
    if (this.control) {
      this.control.setValue(v);
    } else {
      this.control = new FormControl(v);
      this.paginationOptions$ = combineLatest([
        this.control.valueChanges.pipe(startWith(this.control.value)),
        this._totalPages$
      ]).pipe(
        map(([currentPage, totalPages]) =>
          createPaginationOptions(currentPage, totalPages)
        ),
        shareReplay(1)
      );
      combineLatest([
        this.control.valueChanges.pipe(startWith(this.control.value)),
        this._totalPages$
      ])
        .pipe(
          takeUntil(this._destroying),
          tap(([currentPage, totalPages]) => {
            if (currentPage > totalPages) {
              this.control.setValue(totalPages);
            }
          })
        )
        .subscribe();
      this.showFirst$ = this.paginationOptions$.pipe(
        map(options => options.length > 1 && !options.includes(1))
      );
      this.showFirstElipsis$ = this.paginationOptions$.pipe(
        map(options => options.length > 2 && !options.includes(2))
      );
      this.showLast$ = combineLatest([
        this.paginationOptions$,
        this._totalPages$
      ]).pipe(
        map(
          ([options, totalPages]) =>
            options.length > 1 && !options.includes(totalPages)
        )
      );
      this.showLastElipsis$ = combineLatest([
        this.paginationOptions$,
        this._totalPages$
      ]).pipe(
        map(
          ([options, totalPages]) =>
            options.length > 2 && !options.includes(totalPages - 1)
        )
      );
    }
  }

  registerOnChange(fn) {
    this.control.valueChanges
      .pipe(
        takeUntil(this._destroying),
        tap(fn)
      )
      .subscribe();
  }

  registerOnTouched(fn) {}

  userClick(targetPage: number) {
    this.control.setValue(targetPage);
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.totalPages) {
      this._totalPages$.next(this.totalPages);
    }
  }

  ngOnDestroy() {
    this._destroying.next();
  }
}
