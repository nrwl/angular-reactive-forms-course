import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import { FamilyTreeModel } from '../../family-tree.utils';

@Component({
  selector: 'forms-course-family-tree-form',
  templateUrl: './family-tree-form.component.html',
  styleUrls: ['./family-tree-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FamilyTreeFormComponent,
      multi: true
    }
  ]
})
export class FamilyTreeFormComponent
  implements OnDestroy, ControlValueAccessor {
  form: FormGroup;
  private _destroying$ = new Subject<void>();

  writeValue(v: FamilyTreeModel) {
    // add your own implementation here!
    // make sure you use and understand the functions in the
    // family-tree.utils file!!!
  }

  registerOnChange(fn) {
    // add your own implmentation here!
  }

  registerOnTouched(fn) {}

  addChild() {
    // add your own implementation here!
    // make sure you use and understand the functions in the
    // family-tree.utils file!!!
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
