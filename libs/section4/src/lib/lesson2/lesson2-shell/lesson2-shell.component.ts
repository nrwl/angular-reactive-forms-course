import { Component, OnInit } from '@angular/core';
import { createPartyFormControl } from '../../hero-party-utils';
import { FormGroup } from '@angular/forms';
import { LessonFrame } from '@forms-course/ui-common';

@Component({
  selector: 'forms-course-lesson2-shell',
  templateUrl: './lesson2-shell.component.html',
  styleUrls: ['./lesson2-shell.component.css']
})
export class Lesson2ShellComponent {
  partyForm = new FormGroup({
    party: createPartyFormControl({
      name: 'test',
      size: 2,
      heroes: [
        {
          name: 'testHero1',
          stats: {
            attack: 5,
            defense: 5,
            speed: 5,
            health: 5
          }
        },
        {
          name: 'testHero2',
          stats: {
            attack: 5,
            defense: 5,
            speed: 5,
            health: 5
          }
        }
      ]
    })
  });

  submit() {
    window.alert(
      `Form submitted with value: ${JSON.stringify(
        this.partyForm.get('party').value,
        null,
        2
      )}`
    );
  }

  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-hero-party-form/lesson2-completed-hero-party-form.component.html'),
        fileName: 'lesson2-completed-hero-party-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson2-completed-hero-party-form/lesson2-completed-hero-party-form.component.ts'),
        fileName: 'lesson2-completed-hero-party-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../hero-party-form/hero-party-form.component.html'),
        fileName: 'hero-party-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../hero-party-form/hero-party-form.component.ts'),
        fileName: 'hero-party-form.component.ts',
        language: 'typescript'
      }
    ]
  };
}
