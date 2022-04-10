import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Lesson1CompletedToggleFormComponent } from './lesson1/completed/lesson1-completed-toggle-form/lesson1-completed-toggle-form.component';
import { Lesson1ShellComponent } from './lesson1/lesson1-shell/lesson1-shell.component';
import { UiCommonModule } from '@forms-course/ui-common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lesson1CompletedNumberPickerComponent } from './lesson1/completed/lesson1-completed-number-picker/lesson1-completed-number-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { Lesson3ShellComponent } from './lesson3/lesson3-shell/lesson3-shell.component';
import { Lesson2ShellComponent } from './lesson2/lesson2-shell/lesson2-shell.component';
import { Lesson3CompletedHeroFormComponent } from './lesson3/completed/lesson3-completed-hero-form/lesson3-completed-hero-form.component';
import { Lesson2CompletedDateTimePickerComponent } from './lesson2/completed/lesson2-completed-date-time-picker/lesson2-completed-date-time-picker.component';
import { NumberPickerComponent } from './lesson1/number-picker/number-picker.component';
import { ToggleFormComponent } from './lesson1/toggle-form/toggle-form.component';
import { DateTimePickerComponent } from './lesson2/date-time-picker/date-time-picker.component';
import { HeroFormComponent } from './lesson3/hero-form/hero-form.component';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: 'lesson-1',
        component: Lesson1ShellComponent,
        data: {
          navText: 'Lesson 1: Creating Our Own ControlValueAccessor',
          prev: 'section-2/lesson-4',
          next: 'section-3/lesson-2'
        }
      },
      {
        path: 'lesson-2',
        component: Lesson2ShellComponent,
        data: {
          navText: 'Lesson 2: Encapsulating Multiple Forms',
          prev: 'section-3/lesson-1',
          next: 'section-3/lesson-3'
        }
      },
      {
        path: 'lesson-3',
        component: Lesson3ShellComponent,
        data: {
          navText: 'Lesson 3: Reusable Controls for Complex Objects',
          prev: 'section-3/lesson-2',
          next: 'section-4/lesson-1'
        }
      },
      { path: '**', redirectTo: 'lesson-1' }
    ])
  ],
  declarations: [
    Lesson1CompletedToggleFormComponent,
    Lesson1ShellComponent,
    Lesson1CompletedNumberPickerComponent,
    Lesson3ShellComponent,
    Lesson2ShellComponent,
    Lesson3CompletedHeroFormComponent,
    Lesson2CompletedDateTimePickerComponent,
    NumberPickerComponent,
    ToggleFormComponent,
    DateTimePickerComponent,
    HeroFormComponent
  ],
  exports: [HeroFormComponent]
})
export class Section3Module {}
