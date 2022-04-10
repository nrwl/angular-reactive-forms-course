import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  FormControl
} from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Hero, HeroColumnFilters } from '../../+state/hero.utils';

@Component({
  selector: 'forms-course-hero-grid',
  templateUrl: './hero-grid.component.html',
  styleUrls: ['./hero-grid.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: HeroGridComponent, multi: true }
  ]
})
export class HeroGridComponent
  implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  @ViewChild(MatSort, { static: true }) private _matSort: MatSort;
  @Output() sort: Observable<Sort>;
  @Input() heroes: Hero[] = [];
  @Input() columnFiltersTurnedOn = false;
  @Input() loading = false;
  private _columnFiltersTurnedOn$ = new ReplaySubject<boolean>(1);
  columns: (keyof Hero)[] = ['name', 'attack', 'defense', 'speed', 'health'];
  private _destroying = new Subject<void>();
  form: FormGroup;

  writeValue(v: HeroColumnFilters) {
    // create your own implementation here
    this.form = new FormGroup(
      this.columns.reduce(
        (acc, columnName) => ({ ...acc, [columnName]: new FormControl('') }),
        {}
      )
    );
  }

  registerOnChange(fn) {
    // create your own implementation here
  }

  registerOnTouched(fn) {}

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnInit() {
    this.sort = this._matSort.sortChange;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.columnFiltersTurnedOn) {
      this._columnFiltersTurnedOn$.next(this.columnFiltersTurnedOn);
    }
  }

  ngOnDestroy() {
    this._destroying.next();
  }
}
