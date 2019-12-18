import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionShellComponent } from './section-shell/section-shell.component';
import { LessonFrameComponent } from './lesson-frame/lesson-frame.component';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import {
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    SectionShellComponent,
    LessonFrameComponent,
    CodePreviewComponent,
    InstructionsComponent
  ],
  exports: [
    SectionShellComponent,
    LessonFrameComponent,
    CodePreviewComponent,
    InstructionsComponent
  ]
})
export class UiCommonModule {}
