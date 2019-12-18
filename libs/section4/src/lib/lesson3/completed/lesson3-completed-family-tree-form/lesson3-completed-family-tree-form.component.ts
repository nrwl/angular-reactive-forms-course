import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormArray
} from '@angular/forms';
import { Subject } from 'rxjs';
import {
  FamilyTreeModel,
  updateFamilyTreeFormGroup,
  createFamilyTreeGroup,
  createFamilyTreeControl
} from '../../../family-tree.utils';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'forms-course-lesson3-completed-family-tree-form',
  templateUrl: './lesson3-completed-family-tree-form.component.html',
  styleUrls: ['./lesson3-completed-family-tree-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Lesson3CompletedFamilyTreeFormComponent,
      multi: true
    }
  ]
})
export class Lesson3CompletedFamilyTreeFormComponent
  implements OnDestroy, ControlValueAccessor {
  form: FormGroup;
  private _destroying$ = new Subject<void>();

  writeValue(v: FamilyTreeModel) {
    if (this.form) {
      updateFamilyTreeFormGroup(this.form, v);
    } else {
      this.form = createFamilyTreeGroup(v);
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

  addChild() {
    (this.form.get('children') as FormArray).push(
      createFamilyTreeControl({ name: '', age: 0, children: [] })
    );
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
