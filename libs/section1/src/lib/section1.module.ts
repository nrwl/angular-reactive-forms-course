import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiCommonModule } from '@forms-course/ui-common';
import { Lesson1CompletedShellComponent } from './lesson1/completed/lesson1-completed-shell/lesson1-completed-shell.component';
import { Lesson1CompletedTextInputComponent } from './lesson1/completed/lesson1-completed-text-input/lesson1-completed-text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lesson1CompletedNumberInputComponent } from './lesson1/completed/lesson1-completed-number-input/lesson1-completed-number-input.component';
import { Lesson1CompletedOtherControlsComponent } from './lesson1/completed/lesson1-completed-other-controls/lesson1-completed-other-controls.component';
import { Lesson1CompletedMakingFormsDynamicComponent } from './lesson1/completed/lesson1-completed-making-forms-dynamic/lesson1-completed-making-forms-dynamic.component';
import { Lesson2ShellComponent } from './lesson2/lesson2-shell/lesson2-shell.component';
import { Lesson2CompletedFilteringAListComponent } from './lesson2/completed/lesson2-completed-filtering-a-list/lesson2-completed-filtering-a-list.component';
import { Lesson2CompletedHeroFormComponent } from './lesson2/completed/lesson2-completed-hero-form/lesson2-completed-hero-form.component';
import { Lesson3ShellComponent } from './lesson3/lesson3-shell/lesson3-shell.component';
import { Lesson3CompletedSimpleDynamicArrayComponent } from './lesson3/completed/lesson3-completed-simple-dynamic-array/lesson3-completed-simple-dynamic-array.component';
import { Lesson3CompletedPartyFormComponent } from './lesson3/completed/lesson3-completed-party-form/lesson3-completed-party-form.component';
import { MakingFormsDynamicComponent } from './lesson1/making-forms-dynamic/making-forms-dynamic.component';
import { NumberInputComponent } from './lesson1/number-input/number-input.component';
import { OtherControlsComponent } from './lesson1/other-controls/other-controls.component';
import { TextInputComponent } from './lesson1/text-input/text-input.component';
import { FilteringAListComponent } from './lesson2/filtering-a-list/filtering-a-list.component';
import { HeroFormComponent } from './lesson2/hero-form/hero-form.component';
import { PartyFormComponent } from './lesson3/party-form/party-form.component';
import { SimpleDynamicArrayComponent } from './lesson3/simple-dynamic-array/simple-dynamic-array.component';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'lesson-1-completed',
        component: Lesson1CompletedShellComponent,
        data: { navText: 'Lesson 1: Form Controls', next: 'section-1/lesson-2' }
      },
      {
        path: 'lesson-2',
        component: Lesson2ShellComponent,
        data: {
          navText: 'Lesson 2: Form Groups',
          prev: 'section-1/lesson-1',
          next: 'section-1/lesson-3'
        }
      },
      {
        path: 'lesson-3',
        component: Lesson3ShellComponent,
        data: {
          navText: 'Lesson 3: Form Arrays',
          prev: 'section-1/lesson-2',
          next: 'section-2/lesson-1'
        }
      },
      { path: '**', redirectTo: 'lesson-1-completed' }
    ])
  ],
  declarations: [
    Lesson1CompletedShellComponent,
    Lesson1CompletedTextInputComponent,
    Lesson1CompletedNumberInputComponent,
    Lesson1CompletedOtherControlsComponent,
    Lesson1CompletedMakingFormsDynamicComponent,
    Lesson2ShellComponent,
    Lesson2CompletedFilteringAListComponent,
    Lesson2CompletedHeroFormComponent,
    Lesson3ShellComponent,
    Lesson3CompletedSimpleDynamicArrayComponent,
    Lesson3CompletedPartyFormComponent,
    MakingFormsDynamicComponent,
    NumberInputComponent,
    OtherControlsComponent,
    TextInputComponent,
    FilteringAListComponent,
    HeroFormComponent,
    PartyFormComponent,
    SimpleDynamicArrayComponent
  ]
})
export class Section1Module {}
