import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiCommonModule } from '@forms-course/ui-common';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiCommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'Nrwl Forms Course'
    }),
    RouterModule.forRoot([
      {
        path: 'section-1',
        loadChildren: () =>
          import('@forms-course/section1').then(
            module => module.Section1Module
          ),
        data: {
          name: 'Section 1',
          subtitle: 'Form Models',
          icon: 'build'
        }
      },
      {
        path: 'section-2',
        loadChildren: () =>
          import('@forms-course/section2').then(
            module => module.Section2Module
          ),
        data: {
          name: 'Section 2',
          subtitle: 'Validation',
          icon: 'done'
        }
      },
      {
        path: 'section-3',
        loadChildren: () =>
          import('@forms-course/section3').then(
            module => module.Section3Module
          ),
        data: {
          name: 'Section 3',
          subtitle: 'ControlValueAccessor',
          icon: 'keyboard'
        }
      },
      {
        path: 'section-4',
        loadChildren: () =>
          import('@forms-course/section4').then(
            module => module.Section4Module
          ),
        data: {
          name: 'Section 4',
          subtitle: 'Handling Complexity',
          icon: 'device_hub'
        }
      },
      {
        path: 'section-5',
        loadChildren: () =>
          import('@forms-course/section5').then(
            module => module.Section5Module
          ),
        data: {
          name: 'Section 5',
          subtitle: 'Creating a Wizard',
          icon: 'star_border'
        }
      },
      {
        path: 'section-6',
        loadChildren: () =>
          import('@forms-course/section6').then(
            module => module.Section6Module
          ),
        data: {
          name: 'Section 6',
          subtitle: 'Creating a Table',
          icon: 'table_chart'
        }
      },
      { path: '**', redirectTo: 'section-1' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
