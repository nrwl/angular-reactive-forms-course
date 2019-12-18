import { Component, OnInit, Input } from '@angular/core';
import { LessonFrame } from '../lesson-frame.interface';
import {
  trigger,
  transition,
  animate,
  keyframes,
  style
} from '@angular/animations';

@Component({
  selector: 'forms-course-lesson-frame',
  templateUrl: './lesson-frame.component.html',
  styleUrls: ['./lesson-frame.component.css'],
  animations: [
    trigger('fadeout', [
      transition(
        ':leave',
        animate(
          '1s',
          keyframes([
            style({ opacity: '1', offset: 0, height: '*' }),
            style({ opacity: '0', offset: 0.5, height: '*' }),
            style({ opacity: '0', offset: 1, height: 0 })
          ])
        )
      )
    ]),
    trigger('fadein', [
      transition(
        ':enter',
        animate(
          '1s',
          keyframes([
            style({ opacity: '0', offset: 0, height: 0 }),
            style({ opacity: '0', offset: 0.5, height: '*' }),
            style({ opacity: '1', offset: 1, height: '*' })
          ])
        )
      )
    ])
  ]
})
export class LessonFrameComponent implements OnInit {
  @Input() lessonFrame: LessonFrame;
  @Input() title: string;
  collapsed = false;
  showSource = false;
  showCompleted = false;

  constructor() {}

  ngOnInit() {}
}
