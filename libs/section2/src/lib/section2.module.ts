import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Lesson1ShellComponent } from './lesson1/lesson1-shell/lesson1-shell.component';
import { Lesson1CompletedSimpleBuiltInValidatorsComponent } from './lesson1/completed/lesson1-completed-simple-built-in-validators/lesson1-completed-simple-built-in-validators.component';
import { UiCommonModule } from '@forms-course/ui-common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lesson1CompletedHeroValidationComponent } from './lesson1/completed/lesson1-completed-hero-validation/lesson1-completed-hero-validation.component';
import { Lesson2ShellComponent } from './lesson2/lesson2-shell/lesson2-shell.component';
import { Lesson3ShellComponent } from './lesson3/lesson3-shell/lesson3-shell.component';
import { Lesson4ShellComponent } from './lesson4/lesson4-shell/lesson4-shell.component';
import { Lesson5ShellComponent } from './lesson5/lesson5-shell/lesson5-shell.component';
import { Lesson3CompletedHeroValidationComponent } from './lesson3/completed/lesson3-completed-hero-validation/lesson3-completed-hero-validation.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Lesson2CompletedBootstrapExampleComponent } from './lesson2/completed/lesson2-completed-bootstrap-example/lesson2-completed-bootstrap-example.component';
import { Lesson2CompletedMaterialExampleComponent } from './lesson2/completed/lesson2-completed-material-example/lesson2-completed-material-example.component';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './+state/hero.reducer';
import { Lesson4CompletedHeroAdderComponent } from './lesson4/completed/lesson4-completed-hero-adder/lesson4-completed-hero-adder.component';
import { Lesson4CompletedFullNameComponent } from './lesson4/completed/lesson4-completed-full-name/lesson4-completed-full-name.component';
import { SimpleBuiltInValidatorsComponent } from './lesson1/simple-built-in-validators/simple-built-in-validators.component';
import { HeroValidationComponent } from './lesson1/hero-validation/hero-validation.component';
import { HeroValidationComponent as HeroValidation2Component } from './lesson3/hero-validation/hero-validation.component';
import { BootstapExampleComponent } from './lesson2/bootstap-example/bootstap-example.component';
import { MaterialExampleComponent } from './lesson2/material-example/material-example.component';
import { FullNameComponent } from './lesson4/full-name/full-name.component';
import { HeroAdderComponent } from './lesson4/hero-adder/hero-adder.component';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('hero', heroReducer),
    RouterModule.forChild([
      {
        path: 'lesson-1',
        component: Lesson1ShellComponent,
        data: {
          navText: 'Lesson 1: Built-in Validators',
          prev: 'section-1/lesson-3',
          next: 'section-2/lesson-2'
        }
      },
      {
        path: 'lesson-2',
        component: Lesson2ShellComponent,
        data: {
          navText: 'Lesson 2: Meaningful Validity Feedback',
          prev: 'section-2/lesson-1',
          next: 'section-2/lesson-3'
        }
      },
      {
        path: 'lesson-3',
        component: Lesson3ShellComponent,
        data: {
          navText: 'Lesson 3: Writing Custom Validation',
          prev: 'section-2/lesson-2',
          next: 'section-2/lesson-4'
        }
      },
      {
        path: 'lesson-4',
        component: Lesson4ShellComponent,
        data: {
          navText: 'Lesson 4: Async Validation',
          prev: 'section-2/lesson-3',
          next: 'section-3/lesson-1'
        }
      },
      // {
      //   path: 'lesson-5',
      //   component: Lesson5ShellComponent,
      //   data: {
      //     navText: 'Lesson 5: Dynamic Validation',
      //     prev: 'section-2/lesson-4',
      //     next: 'section-3/lesson-1'
      //   }
      // },
      { path: '**', redirectTo: 'lesson-1' }
    ])
  ],
  declarations: [
    Lesson1ShellComponent,
    Lesson1CompletedSimpleBuiltInValidatorsComponent,
    Lesson1CompletedHeroValidationComponent,
    Lesson2ShellComponent,
    Lesson3ShellComponent,
    Lesson4ShellComponent,
    Lesson5ShellComponent,
    Lesson3CompletedHeroValidationComponent,
    Lesson2CompletedBootstrapExampleComponent,
    Lesson2CompletedMaterialExampleComponent,
    Lesson4CompletedHeroAdderComponent,
    Lesson4CompletedFullNameComponent,
    SimpleBuiltInValidatorsComponent,
    HeroValidationComponent,
    BootstapExampleComponent,
    MaterialExampleComponent,
    HeroValidation2Component,
    FullNameComponent,
    HeroAdderComponent
  ]
})
export class Section2Module {}
