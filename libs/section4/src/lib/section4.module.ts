import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Lesson1ShellComponent } from './lesson1/lesson1-shell/lesson1-shell.component';
import { Lesson2ShellComponent } from './lesson2/lesson2-shell/lesson2-shell.component';
import { Lesson3ShellComponent } from './lesson3/lesson3-shell/lesson3-shell.component';
import { Lesson4ShellComponent } from './lesson4/lesson4-shell/lesson4-shell.component';
import { Lesson1CompletedDateTimeRangePickerComponent } from './lesson1/completed/lesson1-completed-date-time-range-picker/lesson1-completed-date-time-range-picker.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UiCommonModule } from '@forms-course/ui-common';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Lesson2CompletedHeroPartyFormComponent } from './lesson2/completed/lesson2-completed-hero-party-form/lesson2-completed-hero-party-form.component';
import { Lesson3CompletedFamilyTreeFormComponent } from './lesson3/completed/lesson3-completed-family-tree-form/lesson3-completed-family-tree-form.component';
import { DateRangePickerFormComponent } from './lesson1/date-range-picker-form/date-range-picker-form.component';
import { HeroPartyFormComponent } from './lesson2/hero-party-form/hero-party-form.component';
import { FamilyTreeFormComponent } from './lesson3/family-tree-form/family-tree-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    UiCommonModule,
    RouterModule.forChild([
      {
        path: 'lesson-1',
        component: Lesson1ShellComponent,
        data: {
          navText: 'Lesson 1: Composing Forms From Existing Forms (Part 1)',
          prev: 'section-3/lesson-3',
          next: 'section-4/lesson-2'
        }
      },
      {
        path: 'lesson-2',
        component: Lesson2ShellComponent,
        data: {
          navText: 'Lesson 2: Composing Forms From Existing Forms (Part 2)',
          prev: 'section-4/lesson-1',
          next: 'section-4/lesson-3'
        }
      },
      {
        path: 'lesson-3',
        component: Lesson3ShellComponent,
        data: {
          navText: 'Lesson 3: Building a Recursive Form',
          prev: 'section-4/lesson-2',
          next: 'section-5/lesson-1'
        }
      },
      // {
      //   path: 'lesson-4',
      //   component: Lesson4ShellComponent,
      //   data: {
      //     navText: 'Lesson 4: Handling Validity',
      //     prev: 'section-4/lesson-3',
      //     next: 'section-5/lesson-1'
      //   }
      // },
      { path: '**', redirectTo: 'lesson-1' }
    ])
  ],
  declarations: [
    Lesson1ShellComponent,
    Lesson2ShellComponent,
    Lesson3ShellComponent,
    Lesson4ShellComponent,
    Lesson1CompletedDateTimeRangePickerComponent,
    DateTimePickerComponent,
    HeroFormComponent,
    Lesson2CompletedHeroPartyFormComponent,
    Lesson3CompletedFamilyTreeFormComponent,
    DateRangePickerFormComponent,
    HeroPartyFormComponent,
    FamilyTreeFormComponent
  ]
})
export class Section4Module {}
