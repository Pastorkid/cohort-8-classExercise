import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { navAnimations } from '../../animation';

@Component({
  selector: 'app-main-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './man-nav.html',
  styleUrl: './man-nav.css',
  animations: navAnimations,
})
export class MainNav {
  constructor(private router: Router) {}
  mobileMenuOpen = false;
  isHeaderStuck = false;
  tappedLink = new Map<string, 'idle' | 'tap'>();

  navLinks = [
    {
      name: 'About',
      path: 'about',
    },
    {
      name: 'Programmes',
      path: 'programmes',
    },
    {
      name: 'Resources',
      path: 'resources',
    },
    {
      name: 'Events',
      path: 'events',
    },
    {
      name: 'Media',
      path: 'media',
    },
    {
      name: 'Opportunities',
      path: 'opportunities',
    },
    {
      name: 'Community',
      path: 'joinYra',
    },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onLinkTap(path: string) {
    this.tappedLink.set(path, 'tap');
    requestAnimationFrame(() => requestAnimationFrame(() => this.tappedLink.set(path, 'idle')));
    this.mobileMenuOpen = false;
  }

  linkTapState(path: string): 'idle' | 'tap' {
    return this.tappedLink.get(path) ?? 'idle';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderStuck = window.scrollY > 4;
  }
}
