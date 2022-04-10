import { Component, OnInit, Inject } from '@angular/core';
import { ConfigSettings } from '../../+state';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { animations } from '@forms-course/ui-common';

export interface ConfirmationDialogData {
  name: keyof ConfigSettings;
  replacedValue: boolean | number | string;
  replacingValue: boolean | number | string;
}

@Component({
  selector: 'forms-course-completed-confimation-dialog',
  templateUrl: './completed-confimation-dialog.component.html',
  styleUrls: ['./completed-confimation-dialog.component.css'],
  animations
})
export class CompletedConfimationDialogComponent {
  columns = ['name', 'replacedValue', 'replacingValue'];
  constructor(
    private dialogRef: MatDialogRef<CompletedConfimationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData[]
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
