import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompletedWizardComponent } from './completed/completed-wizard/completed-wizard.component';
import {
  ConfigSettingsEffects,
  configSettingsReducer,
  initialState
} from './+state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule } from '@angular/material/checkbox'
import {MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule } from '@angular/material/input'
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CompletedBooleanConfigSettingFormComponent } from './completed/completed-boolean-config-setting-form/completed-boolean-config-setting-form.component';
import { CompletedNumberConfigSettingFormComponent } from './completed/completed-number-config-setting-form/completed-number-config-setting-form.component';
import { CompletedStringConfigSettingFormComponent } from './completed/completed-string-config-setting-form/completed-string-config-setting-form.component';
import { CompletedWizardFormComponent } from './completed/completed-wizard-form/completed-wizard-form.component';
import { CompletedConfimationDialogComponent } from './completed/completed-confimation-dialog/completed-confimation-dialog.component';
import { CompletedConfirmDiscardChangesGuard } from './completed/completed-confirm-discard-changes.guard';
import { CompletedDiscardChangesDialogComponent } from './completed/completed-discard-changes-dialog/completed-discard-changes-dialog.component';
import { Lesson1ShellComponent } from './lesson1/lesson1-shell/lesson1-shell.component';
import { Lesson2ShellComponent } from './lesson2/lesson2-shell/lesson2-shell.component';
import { Lesson3ShellComponent } from './lesson3/lesson3-shell/lesson3-shell.component';
import { Lesson4ShellComponent } from './lesson4/lesson4-shell/lesson4-shell.component';
import { Lesson5ShellComponent } from './lesson5/lesson5-shell/lesson5-shell.component';
import { WizardComponent } from './wizard/wizard.component';
import { BooleanConfigSettingFormComponent } from './lesson1/boolean-config-setting-form/boolean-config-setting-form.component';
import { UiCommonModule } from '@forms-course/ui-common';
import { NumberConfigSettingFormComponent } from './lesson1/number-config-setting-form/number-config-setting-form.component';
import { StringConfigSettingFormComponent } from './lesson1/string-config-setting-form/string-config-setting-form.component';
import { WizardFormComponent } from './lesson2/wizard-form/wizard-form.component';
import { ConfirmDiscardChangesGuard } from './lesson4/confirm-discard-changes.guard.ts.guard';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('config-settings', configSettingsReducer, {
      initialState
    }),
    EffectsModule.forFeature([ConfigSettingsEffects]),
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    UiCommonModule,
    RouterModule.forChild([
      {
        path: 'lesson-1',
        component: Lesson1ShellComponent,
        data: {
          navText: 'Lesson 1: Creating Base Components',
          prev: 'section-4/lesson-3',
          next: 'section-5/lesson-2'
        }
      },
      {
        path: 'lesson-2',
        component: Lesson2ShellComponent,
        data: {
          navText: 'Lesson 2: Creating A Parent Form Component',
          prev: 'section-5/lesson-1',
          next: 'section-5/lesson-3'
        }
      },
      {
        path: 'lesson-3',
        component: Lesson3ShellComponent,
        data: {
          navText: 'Lesson 3: Detecting Changes',
          prev: 'section-5/lesson-2',
          next: 'section-5/lesson-4'
        }
      },
      {
        path: 'lesson-4',
        component: Lesson4ShellComponent,
        data: {
          navText: 'Lesson 4: Deactivation Guard When Changes Exist',
          prev: 'section-5/lesson-3',
          next: 'section-5/lesson-5'
        }
      },
      {
        path: 'lesson-5',
        component: Lesson5ShellComponent,
        data: {
          navText: 'Lesson 5: Save Confirmation Dialog',
          prev: 'section-5/lesson-4',
          next: 'section-5/current'
        }
      },
      {
        path: 'current',
        component: WizardComponent,
        canDeactivate: [ConfirmDiscardChangesGuard],
        data: {
          navText: 'Show Your Current Wizard',
          prev: 'section-5/lesson-5',
          next: 'section-5/completed'
        }
      },
      {
        path: 'completed',
        component: CompletedWizardComponent,
        canDeactivate: [CompletedConfirmDiscardChangesGuard],
        data: {
          navText: 'Show the Completed Wizard',
          prev: 'section-5/current',
          next: 'section-6/lesson-1'
        }
      },
      {
        path: '**',
        redirectTo: 'lesson-1'
      }
    ])
  ],
  declarations: [
    CompletedWizardComponent,
    CompletedBooleanConfigSettingFormComponent,
    CompletedNumberConfigSettingFormComponent,
    CompletedStringConfigSettingFormComponent,
    CompletedWizardFormComponent,
    CompletedConfimationDialogComponent,
    CompletedDiscardChangesDialogComponent,
    Lesson1ShellComponent,
    Lesson2ShellComponent,
    Lesson3ShellComponent,
    Lesson4ShellComponent,
    Lesson5ShellComponent,
    WizardComponent,
    BooleanConfigSettingFormComponent,
    NumberConfigSettingFormComponent,
    StringConfigSettingFormComponent,
    WizardFormComponent
  ],
  entryComponents: [
    CompletedConfimationDialogComponent,
    CompletedDiscardChangesDialogComponent
  ]
})
export class Section5Module {}
