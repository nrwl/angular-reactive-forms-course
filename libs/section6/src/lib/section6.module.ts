import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Lesson1ShellComponent } from './lesson1/lesson1-shell/lesson1-shell.component';
import { Lesson1CompletedPaginationFormComponent } from './lesson1/completed/lesson1-completed-pagination-form/lesson1-completed-pagination-form.component';
import { UiCommonModule } from '@forms-course/ui-common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lesson2CompletedTableFormComponent } from './lesson2/completed/lesson2-completed-table-form/lesson2-completed-table-form.component';
import { Lesson2ShellComponent } from './lesson2/lesson2-shell/lesson2-shell.component';
import { Lesson1CompletedHeroGridComponent } from './lesson1/completed/lesson1-completed-hero-grid/lesson1-completed-hero-grid.component';
import { Lesson3ShellComponent } from './lesson3/lesson3-shell/lesson3-shell.component';
import { Lesson3CompletedClientSideTableComponent } from './lesson3/completed/lesson3-completed-client-side-table/lesson3-completed-client-side-table.component';
import { StoreModule } from '@ngrx/store';
import { heroReducer, initialHeroes } from './+state/hero.reducer';
import { Lesson4CompletedServerSideTableComponent } from './lesson4/completed/lesson4-completed-server-side-table/lesson4-completed-server-side-table.component';
import { Lesson4ShellComponent } from './lesson4/lesson4-shell/lesson4-shell.component';
import { HeroService } from './+state/hero.service';
import { PaginationFormComponent } from './lesson1/pagination-form/pagination-form.component';
import { HeroGridComponent } from './lesson1/hero-grid/hero-grid.component';
import { TableFormComponent } from './lesson2/table-form/table-form.component';
import { ClientSideTableComponent } from './lesson3/client-side-table/client-side-table.component';
import { ServerSideTableComponent } from './lesson4/server-side-table/server-side-table.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    UiCommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('heroes', heroReducer, {
      initialState: initialHeroes
    }),
    RouterModule.forChild([
      {
        path: 'lesson-1',
        component: Lesson1ShellComponent,
        data: {
          navText: 'Lesson 1: Creating Base Components',
          prev: 'section-5/completed',
          next: 'section-6/lesson-2'
        }
      },
      {
        path: 'lesson-2',
        component: Lesson2ShellComponent,
        data: {
          navText: 'Lesson 2: Creating a Parent Form Component',
          prev: 'section-6/lesson-1',
          next: 'section-6/lesson-3'
        }
      },
      {
        path: 'lesson-3',
        component: Lesson3ShellComponent,
        data: {
          navText: 'Lesson 3: Client-Side Strategy',
          prev: 'section-6/lesson-2',
          next: 'section-6/lesson-4'
        }
      },
      {
        path: 'lesson-4',
        component: Lesson4ShellComponent,
        data: {
          navText: 'Lesson 4: Server-Side Strategy',
          prev: 'section-6/lesson-3'
        }
      },
      {
        path: '**',
        redirectTo: 'lesson-1'
      }
    ])
  ],
  declarations: [
    Lesson1ShellComponent,
    Lesson1CompletedPaginationFormComponent,
    Lesson2CompletedTableFormComponent,
    Lesson2ShellComponent,
    Lesson1CompletedHeroGridComponent,
    Lesson3ShellComponent,
    Lesson3CompletedClientSideTableComponent,
    Lesson4CompletedServerSideTableComponent,
    Lesson4ShellComponent,
    PaginationFormComponent,
    HeroGridComponent,
    TableFormComponent,
    ClientSideTableComponent,
    ServerSideTableComponent
  ],
  providers: [HeroService]
})
export class Section6Module {}
