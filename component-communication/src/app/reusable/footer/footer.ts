import { Component, HostListener, signal } from '@angular/core';
import { footerAnimations } from './footer.animations';

interface FooterColumn {
  readonly heading: string;
  readonly items: readonly { label: string; href: string }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  animations: footerAnimations,
})
export class Footer {
  protected readonly year = 2026;
  protected readonly shimmer = signal<'idle' | 'sweep'>('idle');
  protected readonly glowByIndex = signal<Record<number, 'inactive' | 'active'>>({});

  protected readonly logoSrc = '/myLogo.jpg';
  protected readonly brandName = 'Young Researcher Academy';
  protected readonly tagline = 'Publish · Research · Impact · Collaborate';
  protected readonly mission =
    'A collaborative research community supporting academic growth, skill development and research excellence.';
  protected readonly contactEmail = 'info.youngresearcheracademy@gmail.com';

  protected readonly columns: readonly FooterColumn[] = [
    {
      heading: 'Explore',
      items: [
        { label: 'About YRA', href: '#' },
        { label: 'Programmes', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'Events', href: '#' },
      ],
    },
    {
      heading: 'Learn',
      items: [
        { label: 'Media', href: '#' },
        { label: 'Opportunities', href: '#' },
      ],
    },
    {
      heading: 'Membership',
      items: [
        { label: 'Membership', href: '#' },
        { label: 'Member Login', href: '#' },
      ],
    },
    {
      heading: 'Support',
      items: [
        { label: 'Contact', href: '#' },
        { label: 'FAQs', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ];

  @HostListener('mouseenter')
  onFooterEnter(): void {
    this.shimmer.set('sweep');
    setTimeout(() => this.shimmer.set('idle'), 1500);
  }

  onLinkHover(columnIndex: number, active: boolean): void {
    this.glowByIndex.update((current) => ({
      ...current,
      [columnIndex]: active ? 'active' : 'inactive',
    }));
  }

  protected glowFor(index: number): 'inactive' | 'active' {
    return this.glowByIndex()[index] ?? 'inactive';
  }
}
