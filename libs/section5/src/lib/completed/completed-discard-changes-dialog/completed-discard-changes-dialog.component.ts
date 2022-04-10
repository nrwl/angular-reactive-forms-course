import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'forms-course-completed-discard-changes-dialog',
  templateUrl: './completed-discard-changes-dialog.component.html',
  styleUrls: ['./completed-discard-changes-dialog.component.css']
})
export class CompletedDiscardChangesDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<CompletedDiscardChangesDialogComponent>
  ) {}

  leave() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
