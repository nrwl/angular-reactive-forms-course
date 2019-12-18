import { Component, OnInit } from '@angular/core';
import {
  createFamilyTreeControl,
  FamilyTreeModel
} from '../../family-tree.utils';
import { LessonFrame } from '@forms-course/ui-common';

const zackFamilyTree: FamilyTreeModel = {
  name: 'Zack',
  age: 32,
  children: [
    {
      name: 'Kylie',
      age: 18,
      children: [
        {
          name: 'Kaydan',
          age: 1,
          children: []
        }
      ]
    },
    {
      name: 'Eli',
      age: 10,
      children: []
    },
    {
      name: 'Luke',
      age: 9,
      children: []
    },
    {
      name: 'Claire',
      age: 3,
      children: []
    },
    {
      name: 'Averie',
      age: 1,
      children: []
    }
  ]
};

const homerFamilyTree: FamilyTreeModel = {
  name: 'Homer',
  age: 45,
  children: [
    {
      name: 'Bart',
      age: 12,
      children: []
    },
    {
      name: 'Lisa',
      age: 9,
      children: []
    },
    {
      name: 'Maggie',
      age: 1,
      children: []
    }
  ]
};

@Component({
  selector: 'forms-course-lesson3-shell',
  templateUrl: './lesson3-shell.component.html',
  styleUrls: ['./lesson3-shell.component.css']
})
export class Lesson3ShellComponent {
  form = createFamilyTreeControl(zackFamilyTree);

  setToHomerSimpsonFamily() {
    this.form.setValue(homerFamilyTree);
  }

  setToZackFamilyTree() {
    this.form.setValue(zackFamilyTree);
  }

  lessonFrame: LessonFrame = {
    completed: [
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-family-tree-form/lesson3-completed-family-tree-form.component.html'),
        fileName: 'lesson3-completed-family-tree-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../completed/lesson3-completed-family-tree-form/lesson3-completed-family-tree-form.component.ts'),
        fileName: 'lesson3-completed-family-tree-form.component.ts',
        language: 'typescript'
      }
    ],
    working: [
      {
        fileContents: require('!!raw-loader!../family-tree-form/family-tree-form.component.html'),
        fileName: 'family-tree-form.component.html',
        language: 'html'
      },
      {
        fileContents: require('!!raw-loader!../family-tree-form/family-tree-form.component.ts'),
        fileName: 'family-tree-form.component.ts',
        language: 'typescript'
      }
    ]
  };
}
