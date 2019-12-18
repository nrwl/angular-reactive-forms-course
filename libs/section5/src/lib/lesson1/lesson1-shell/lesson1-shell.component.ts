import { Component, OnInit } from '@angular/core';
import {
  createBooleanConfigSettingControl,
  createNumberConfigSettingControl,
  createStringConfigSettingControl
} from '../../config-settings.utils';
import { FormControl } from '@angular/forms';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson1-shell',
  templateUrl: './lesson1-shell.component.html',
  styleUrls: ['./lesson1-shell.component.css']
})
export class Lesson1ShellComponent {
  booleanControl = createBooleanConfigSettingControl(false);
  booleanStoreValueControl = new FormControl(false);

  numberControl = createNumberConfigSettingControl(8);
  numberStoreValueControl = new FormControl(5);

  stringControl = createStringConfigSettingControl('foo');
  stringStoreValueControl = new FormControl('bar');

  booleanLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../../completed/completed-boolean-config-setting-form/completed-boolean-config-setting-form.component.html'),
        fileName: 'completed-boolean-config-setting-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../completed/completed-boolean-config-setting-form/completed-boolean-config-setting-form.component.ts'),
        fileName: 'completed-boolean-config-setting-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../boolean-config-setting-form/boolean-config-setting-form.component.html'),
        fileName: 'boolean-config-setting-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../boolean-config-setting-form/boolean-config-setting-form.component.ts'),
        fileName: 'boolean-config-setting-form.component.ts',
        language: 'typescript'
      }
    ]
  };

  numberLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../../completed/completed-number-config-setting-form/completed-number-config-setting-form.component.html'),
        fileName: 'completed-number-config-setting-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../completed/completed-number-config-setting-form/completed-number-config-setting-form.component.ts'),
        fileName: 'completed-number-config-setting-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../number-config-setting-form/number-config-setting-form.component.html'),
        fileName: 'number-config-setting-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../number-config-setting-form/number-config-setting-form.component.ts'),
        fileName: 'number-config-setting-form.component.ts',
        language: 'typescript'
      }
    ]
  };

  stringLessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../../completed/completed-string-config-setting-form/completed-string-config-setting-form.component.html'),
        fileName: 'completed-string-config-setting-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../../completed/completed-string-config-setting-form/completed-string-config-setting-form.component.ts'),
        fileName: 'completed-string-config-setting-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../string-config-setting-form/string-config-setting-form.component.html'),
        fileName: 'string-config-setting-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../string-config-setting-form/string-config-setting-form.component.ts'),
        fileName: 'string-config-setting-form.component.ts',
        language: 'typescript'
      }
    ]
  };
}
