import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ConfigSettings,
  configSettingsSelector,
  savePendingSelector,
  submitSaveRequest
} from '../+state';
import { Observable, Subject, combineLatest, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import {
  takeUntil,
  tap,
  startWith,
  map,
  shareReplay,
  take,
  switchMap
} from 'rxjs/operators';
import { createConfigSettingFormControl } from '../wizard-form.utils';
import * as deepEqual from 'deep-equal';
import { CompletedDiscardChangesDialogComponent } from '../completed/completed-discard-changes-dialog/completed-discard-changes-dialog.component';
import { CompletedConfimationDialogComponent } from '../completed/completed-confimation-dialog/completed-confimation-dialog.component';

@Component({
  selector: 'forms-course-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnDestroy {
  control: FormControl;
  configSettingsFromStore$: Observable<ConfigSettings> = this.store.pipe(
    select(configSettingsSelector)
  );
  private _formHasChanges$: Observable<boolean>;
  private _formIsValid$: Observable<boolean>;
  private _destroying$ = new Subject<void>();
  submitButtonDisabled$: Observable<boolean>;
  discardChangesButtonDisabled$: Observable<boolean>;
  savePending$: Observable<boolean> = this.store.pipe(
    select(savePendingSelector)
  );

  constructor(private store: Store<any>, private dialog: MatDialog) {
    this.configSettingsFromStore$
      .pipe(
        takeUntil(this._destroying$),
        tap(configSettings => {
          // create your form here in lesson 3
        })
      )
      .subscribe();
    // this._formIsValid$ = this.control.statusChanges.pipe(
    //   startWith(this.control.status),
    //   map(status => status === 'VALID')
    // );
    this._formHasChanges$ = of(true); // implement your change detection here!!! (in lesson 3)
    this.submitButtonDisabled$ = combineLatest([
      this._formIsValid$,
      this._formHasChanges$,
      this.savePending$
    ]).pipe(
      map(
        ([formIsValid, formHasChanges, savePending]) =>
          !formIsValid || !formHasChanges || savePending
      )
    );
    this.discardChangesButtonDisabled$ = this._formHasChanges$.pipe(
      map(hasChanges => !hasChanges)
    );
    // this.savePending$
    //   .pipe(
    //     takeUntil(this._destroying$),
    //     tap(savePending =>
    //       savePending ? this.control.disable() : this.control.enable()
    //     )
    //   )
    //   .subscribe();
  }

  confirmSave() {
    // add your implementation here in lesson 5
  }

  discardChanges() {
    // add your implementation here in lesson 3
  }

  canDeactivate(): Observable<boolean> {
    // add your implmentation here in lesson 4
    return of(true);
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
