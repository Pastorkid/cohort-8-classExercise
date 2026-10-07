import {
  animate,
  animateChild,
  animation,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const easeExpo = 'cubic-bezier(0.22, 1, 0.36, 1)';
const easeApple = 'cubic-bezier(0.16, 1, 0.3, 1)';
const easeSpringSoft = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

const headerEnter = animation([
  style({ opacity: 0, transform: 'translateY(40px)', filter: 'blur(8px)' }),
  animate(
    '750ms 150ms ' + easeExpo,
    style({ opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }),
  ),
]);

const headingEnter = animation([
  style({ opacity: 0, transform: 'translateY(24px)', filter: 'blur(6px)' }),
  animate(
    '850ms 270ms ' + easeApple,
    style({ opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }),
  ),
]);

const bulletEnter = animation([
  style({ transform: 'scale(0)', opacity: 0 }),
  animate('520ms 390ms ' + easeSpringSoft, style({ transform: 'scale(1)', opacity: 1 })),
]);

const titleMaskEnter = animation([
  style({ transform: 'translateY(110%)' }),
  animate('700ms 150ms ' + easeApple, style({ transform: 'translateY(0%)' })),
]);

const metricCardEnter = animation([
  style({
    opacity: 0,
    transform: 'translateY(60px) scale(0.94)',
    filter: 'blur(10px)',
  }),
  animate(
    '850ms ' + easeApple,
    style({ opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0px)' }),
  ),
]);

export const whiteCard1Animations = [
  trigger('cardContainer', [
    transition(':enter', [
      group([
        query('@cardHeader, @cardHeading, @cardBullet, @cardTitleMask', [animateChild()], {
          optional: true,
        }),
        query('@metricRow', [animateChild()], { optional: true }),
      ]),
    ]),
  ]),

  trigger('cardHeader', [transition(':enter', [useAnimation(headerEnter)])]),

  trigger('cardHeading', [transition(':enter', [useAnimation(headingEnter)])]),

  trigger('cardBullet', [transition(':enter', [useAnimation(bulletEnter)])]),

  trigger('cardTitleMask', [transition(':enter', [useAnimation(titleMaskEnter)])]),

  trigger('metricRow', [
    transition(':enter', [
      query('@metricCard', [stagger(150, [animateChild()])], { optional: true }),
    ]),
  ]),

  trigger('metricCard', [transition(':enter', [useAnimation(metricCardEnter)])]),
];

const heroEyebrowEnter = animation([
  style({
    opacity: 0,
    transform: 'translateY(22px)',
    filter: 'blur(6px)',
    letterSpacing: '0.22em',
  }),
  animate(
    '820ms 180ms ' + easeSpringSoft,
    style({
      opacity: 1,
      transform: 'translateY(0)',
      filter: 'blur(0px)',
      letterSpacing: '0.08em',
    }),
  ),
]);

const heroHeadingEnter = animation([
  style({
    opacity: 0,
    transform: 'translateY(52px) scale(0.985)',
    filter: 'blur(14px)',
  }),
  group([
    animate(
      '1050ms 300ms ' + easeApple,
      style({
        opacity: 1,
        transform: 'translateY(0) scale(1)',
      }),
    ),
    animate('1250ms 300ms ' + easeExpo, style({ filter: 'blur(0px)' })),
  ]),
]);

const heroLeadEnter = animation([
  style({
    opacity: 0,
    transform: 'translateY(30px)',
    filter: 'blur(8px)',
  }),
  animate(
    '950ms 520ms ' + easeApple,
    style({
      opacity: 1,
      transform: 'translateY(0)',
      filter: 'blur(0px)',
    }),
  ),
]);

export const pagesHeaderAnimations = [
  trigger('heroContainer', [
    transition(':enter', [
      query('@heroEyebrow, @heroHeading, @heroLead', [animateChild()], {
        optional: true,
      }),
    ]),
  ]),

  trigger('heroEyebrow', [transition(':enter', [useAnimation(heroEyebrowEnter)])]),

  trigger('heroHeading', [transition(':enter', [useAnimation(heroHeadingEnter)])]),

  trigger('heroLead', [transition(':enter', [useAnimation(heroLeadEnter)])]),
];

const easeSpringButton = 'cubic-bezier(0.36, 1.48, 0.56, 1)';

const buttonWrapperEnterAnim = animation([
  style({ opacity: 0, transform: 'translateY(24px)' }),
  animate('700ms 100ms ' + easeExpo, style({ opacity: 1, transform: 'translateY(0)' })),
]);

const buttonEnterAnim = animation([
  style({ opacity: 0, transform: 'translateY(20px) scale(0.96)' }),
  animate(
    '650ms 110ms ' + easeSpringButton,
    style({ opacity: 1, transform: 'translateY(0) scale(1)' }),
  ),
]);

export const buttonAnimations = [
  trigger('buttonsWrapper', [
    transition(':enter', [
      useAnimation(buttonWrapperEnterAnim),
      query('@buttonEnter, @buttonState', [stagger(110, [animateChild()])], { optional: true }),
    ]),
  ]),

  trigger('buttonEnter', [transition(':enter', [useAnimation(buttonEnterAnim)])]),

  trigger('buttonState', [
    state(
      'idle',
      style({
        transform: 'translateY(0) scale(1)',
        filter: 'brightness(1)',
        boxShadow: '0 4px 12px rgba(19, 49, 61, 0.08)',
      }),
    ),
    state(
      'hover',
      style({
        transform: 'translateY(-3px) scale(1.02)',
        filter: 'brightness(1.06)',
        boxShadow: '0 10px 24px rgba(19, 49, 61, 0.14), 0 0 0 1px rgba(31, 134, 165, 0.18)',
      }),
    ),
    state(
      'press',
      style({
        transform: 'translateY(-1px) scale(0.99)',
        filter: 'brightness(0.95)',
        boxShadow: '0 6px 14px rgba(19, 49, 61, 0.10)',
      }),
    ),
    transition(':enter', [useAnimation(buttonEnterAnim)]),
    transition('idle => hover', animate('320ms ' + easeSpringButton)),
    transition('hover => idle', animate('340ms ' + easeApple)),
    transition('hover => press', animate('140ms ' + easeExpo)),
    transition('press => hover', animate('260ms ' + easeSpringButton)),
    transition('press => idle', animate('280ms ' + easeApple)),
  ]),
];

const upperNavEnter = animation([
  style({ opacity: 0, transform: 'translateY(-100%)' }),
  animate('600ms 0ms ' + easeExpo, style({ opacity: 1, transform: 'translateY(0)' })),
]);

const mainNavEnter = animation([
  style({ opacity: 0, transform: 'translateY(-20px)', filter: 'blur(6px)' }),
  animate(
    '700ms 80ms ' + easeApple,
    style({ opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }),
  ),
]);

const navLinkEnter = animation([
  style({ opacity: 0, transform: 'translateY(16px) scale(0.96)' }),
  animate('520ms ' + easeSpringSoft, style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
]);

const mobileNavOpen = animation([
  style({ opacity: 0, transform: 'translateY(-30px) scaleY(0.92)', transformOrigin: 'top center' }),
  animate('480ms ' + easeSpringSoft, style({ opacity: 1, transform: 'translateY(0) scaleY(1)' })),
]);

const mobileNavClose = animation([
  style({ opacity: 1, transform: 'translateY(0) scaleY(1)', transformOrigin: 'top center' }),
  animate('320ms ' + easeExpo, style({ opacity: 0, transform: 'translateY(-20px) scaleY(0.92)' })),
]);

const hamburgerSpin = animation([animate('380ms ' + easeSpringSoft)]);

const stickyShrink = animation([
  style({ height: '{{fromHeight}}' }),
  animate('400ms ' + easeApple, style({ height: '{{toHeight}}' })),
]);

export const navAnimations = [
  trigger('navContainer', [
    transition(':enter', [
      group([
        query('@upperNavEnter, @mainNavEnter', [animateChild()], { optional: true }),
        query('@linkRow', [animateChild()], { optional: true }),
      ]),
    ]),
  ]),

  trigger('upperNavEnter', [transition(':enter', [useAnimation(upperNavEnter)])]),

  trigger('mainNavEnter', [transition(':enter', [useAnimation(mainNavEnter)])]),

  trigger('linkRow', [
    transition(':enter', [query('@navLink', [stagger(70, [animateChild()])], { optional: true })]),
  ]),

  trigger('navLink', [transition(':enter', [useAnimation(navLinkEnter)])]),

  trigger('mobileNavState', [
    state(
      'closed',
      style({
        opacity: 0,
        transform: 'translateY(-8px) scaleY(0.96)',
        transformOrigin: 'top center',
        maxHeight: '0px',
        marginTop: '0px',
      }),
    ),
    state(
      'open',
      style({
        opacity: 1,
        transform: 'translateY(0) scaleY(1)',
        transformOrigin: 'top center',
        maxHeight: '1200px',
      }),
    ),
    transition('closed => open', [
      style({
        opacity: 0,
        transform: 'translateY(-8px) scaleY(0.96)',
        maxHeight: '0px',
      }),
      group([
        animate(
          '520ms cubic-bezier(0.22, 1, 0.36, 1)',
          style({
            maxHeight: '1200px',
          }),
        ),
        animate(
          '380ms 40ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0) scaleY(1)',
          }),
        ),
      ]),
      query('@navLink, @navLinkMobile', [stagger(70, [animateChild()])], { optional: true }),
    ]),
    transition('open => closed', [
      style({ overflow: 'hidden' }),
      group([
        query('@navLinkMobile', [stagger(-40, [animateChild()])], { optional: true }),
        animate(
          '260ms 80ms cubic-bezier(0.4, 0, 1, 1)',
          style({
            opacity: 0,
            transform: 'translateY(-6px) scaleY(0.98)',
          }),
        ),
        animate(
          '340ms cubic-bezier(0.4, 0, 1, 1)',
          style({
            maxHeight: '0px',
          }),
        ),
      ]),
    ]),
  ]),

  trigger('navLinkMobile', [
    state('out', style({ opacity: 0, transform: 'translateX(-32px)' })),
    state('in', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('out => in', [animate('460ms cubic-bezier(0.34, 1.56, 0.64, 1)')]),
    transition('in => out', [animate('220ms cubic-bezier(0.4, 0, 1, 1)')]),
  ]),

  trigger('hamburgerState', [
    state('closed', style({ transform: 'rotate(0deg)' })),
    state('open', style({ transform: 'rotate(90deg)' })),
    transition('closed <=> open', [useAnimation(hamburgerSpin)]),
  ]),

  trigger('navLinkTapState', [
    state(
      'idle',
      style({
        transform: 'scale(1) translateY(0)',
        backgroundColor: 'transparent',
      }),
    ),
    state(
      'tap',
      style({
        transform: 'scale(0.94) translateY(2px)',
        backgroundColor: 'color-mix(in srgb, var(--color-brand-teal) 14%, transparent)',
        color: 'var(--color-brand-teal)',
        boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--color-brand-teal) 22%, transparent)',
      }),
    ),
    transition('idle => tap', animate('130ms cubic-bezier(0.22, 1, 0.36, 1)')),
    transition('tap => idle', animate('420ms cubic-bezier(0.34, 1.56, 0.64, 1)')),
  ]),

  trigger('stickyHeaderState', [
    state(
      'idle',
      style({
        boxShadow: '0 0 0 rgba(19, 49, 61, 0)',
        backdropFilter: 'blur(10px)',
      }),
    ),
    state(
      'stuck',
      style({
        boxShadow: '0 8px 32px rgba(19, 49, 61, 0.10), 0 1px 0 rgba(19, 49, 61, 0.04)',
        backdropFilter: 'blur(18px) saturate(160%)',
      }),
    ),
    transition('idle <=> stuck', animate('380ms ' + easeApple)),
  ]),
];
