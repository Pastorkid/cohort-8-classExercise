import {
  animate,
  animateChild,
  animation,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const easeOutCubic = 'cubic-bezier(0.33, 1, 0.68, 1)';
const easeOutBack = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
const easeInOutCubic = 'cubic-bezier(0.65, 0, 0.35, 1)';

const shimmerKeyframes = keyframes([
  style({ transform: 'translateX(-120%) skewX(-12deg)', offset: 0 }),
  style({ transform: 'translateX(220%) skewX(-12deg)', offset: 1 }),
]);

const footerEnterStagger = animation(
  [
    style({ opacity: 0, transform: 'translateY(28px) scale(0.98)', filter: 'blur(6px)' }),
    stagger('90ms', [
      animate(
        '720ms {{easing}}',
        style({ opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0px)' }),
      ),
    ]),
  ],
  { params: { easing: easeOutCubic } },
);

export const footerAnimations = [
  trigger('footerReveal', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(40px)' }),
      group([
        animate(
          '900ms ' + easeOutCubic,
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
        query('@columnReveal, @linkReveal, @bottomRowReveal, @brandReveal', [
          animateChild(),
        ], { optional: true }),
      ]),
    ]),
  ]),

  trigger('brandReveal', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(18px)' }),
      animate('700ms 180ms ' + easeOutBack, style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
  ]),

  trigger('columnReveal', [
    transition(':enter', [useAnimation(footerEnterStagger)]),
  ]),

  trigger('linkReveal', [
    transition(':enter', [useAnimation(footerEnterStagger)]),
  ]),

  trigger('bottomRowReveal', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(14px)' }),
      animate('700ms 520ms ' + easeOutCubic, style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
  ]),

  trigger('shimmerSweep', [
    state('idle', style({})),
    transition('* => sweep', [
      animate('1400ms ' + easeInOutCubic, shimmerKeyframes),
    ]),
  ]),

  trigger('glowPulse', [
    state(
      'inactive',
      style({
        boxShadow: '0 0 0 0 rgba(31,134,165, 0)',
      }),
    ),
    state(
      'active',
      style({
        boxShadow: '0 0 0 8px rgba(31,134,165, 0.18)',
      }),
    ),
    transition('inactive => active', [animate('280ms ' + easeOutCubic)]),
    transition('active => inactive', [animate('520ms ' + easeOutCubic)]),
  ]),
];

