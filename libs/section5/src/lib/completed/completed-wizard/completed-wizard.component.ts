import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import * as deepEqual from 'deep-equal';
import { combineLatest, Observable, Subject, of } from 'rxjs';
import {
  map,
  publishReplay,
  refCount,
  startWith,
  take,
  takeUntil,
  tap,
  switchMap
} from 'rxjs/operators';
import {
  configSettingsSelector,
  savePendingSelector,
  submitSaveRequest
} from '../../+state';
import { CompletedConfimationDialogComponent } from '../completed-confimation-dialog/completed-confimation-dialog.component';
import { CompletedDiscardChangesDialogComponent } from '../completed-discard-changes-dialog/completed-discard-changes-dialog.component';
import { createConfigSettingFormControl } from '../../wizard-form.utils';

@Component({
  selector: 'forms-course-completed-wizard',
  templateUrl: './completed-wizard.component.html',
  styleUrls: ['./completed-wizard.component.scss']
})
export class CompletedWizardComponent implements OnDestroy {
  control: FormControl;
  configSettingsFromStore$ = this.store.pipe(select(configSettingsSelector));
  private _formHasChanges$: Observable<boolean>;
  private _formIsValid$: Observable<boolean>;
  private _destroying$ = new Subject<void>();
  submitButtonDisabled$: Observable<boolean>;
  discardChangesButtonDisabled$: Observable<boolean>;
  savePending$ = this.store.pipe(select(savePendingSelector));

  constructor(private store: Store<any>, private dialog: MatDialog) {
    this.configSettingsFromStore$
      .pipe(
        takeUntil(this._destroying$),
        tap(configSettings => {
          if (!this.control) {
            this.control = createConfigSettingFormControl(configSettings);
            this._formIsValid$ = this.control.statusChanges.pipe(
              startWith(this.control.status),
              map(status => status === 'VALID')
            );
          } else {
            this.control.setValue(configSettings);
          }
        })
      )
      .subscribe();
    this._formHasChanges$ = combineLatest([
      this.control.valueChanges.pipe(startWith(this.control.value)),
      this.configSettingsFromStore$
    ]).pipe(
      map(
        ([formValue, storeConfigSettingValue]) =>
          !deepEqual(formValue, storeConfigSettingValue)
      ),
      publishReplay(1),
      refCount()
    );
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
    this.savePending$
      .pipe(
        takeUntil(this._destroying$),
        tap(savePending =>
          savePending ? this.control.disable() : this.control.enable()
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._destroying$.next();
  }

  async confirmSave() {
    const storeData = await this.configSettingsFromStore$
      .pipe(take(1))
      .toPromise();
    const dialogRef = this.dialog.open(CompletedConfimationDialogComponent, {
      width: '600px',
      data: Object.keys(storeData).reduce(
        (acc, settingName) =>
          this.control.value[settingName] === storeData[settingName]
            ? acc
            : [
                ...acc,
                {
                  name: settingName,
                  replacedValue: storeData[settingName],
                  replacingValue: this.control.value[settingName]
                }
              ],
        []
      )
    });
    const result = await dialogRef
      .afterClosed()
      .pipe(take(1))
      .toPromise();
    if (result) {
      this._submitSave();
    }
  }

  private _submitSave() {
    this.store.dispatch(
      submitSaveRequest({
        configSettings: this.control.value
      })
    );
  }

  async discardChanges() {
    const configSettings = await this.configSettingsFromStore$
      .pipe(take(1))
      .toPromise();
    this.control.setValue(configSettings);
  }

  canDeactivate(): Observable<boolean> {
    return this._formHasChanges$.pipe(
      switchMap(hasChanges => {
        if (!hasChanges) {
          return of(true);
        }
        const dialogRef: MatDialogRef<
          CompletedDiscardChangesDialogComponent
        > = this.dialog.open(CompletedDiscardChangesDialogComponent);
        return dialogRef.afterClosed() as Observable<boolean>;
      })
    );
  }
}
