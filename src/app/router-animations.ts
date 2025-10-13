import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transform: 'scale(0.98)',
      }),
    ]),
    query(':enter', [
      animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
  ]),
]);
