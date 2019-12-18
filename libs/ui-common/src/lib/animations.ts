import {
  trigger,
  transition,
  animate,
  keyframes,
  style
} from '@angular/animations';

export const animations = [
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
];
