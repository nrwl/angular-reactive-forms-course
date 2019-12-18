import { Component } from '@angular/core';
import { defaultConfigSettings } from '../../+state';
import { createConfigSettingFormControl } from '../../wizard-form.utils';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson2-shell',
  templateUrl: './lesson2-shell.component.html',
  styleUrls: ['./lesson2-shell.component.css']
})
export class Lesson2ShellComponent {
  wizardForm = createConfigSettingFormControl();
  storeValue = defaultConfigSettings;

  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../../completed/completed-wizard-form/completed-wizard-form.component.html'),
        fileName: 'completed-wizard-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../completed/completed-wizard-form/completed-wizard-form.component.ts'),
        fileName: 'completed-wizard-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../wizard-form/wizard-form.component.html'),
        fileName: 'wizard-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../wizard-form/wizard-form.component.ts'),
        fileName: 'wizard-form.component.ts',
        language: 'typescript'
      }
    ]
  };
}
