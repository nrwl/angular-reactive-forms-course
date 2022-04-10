import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionShellComponent } from './section-shell/section-shell.component';
import { LessonFrameComponent } from './lesson-frame/lesson-frame.component';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
