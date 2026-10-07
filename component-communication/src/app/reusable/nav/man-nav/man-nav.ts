import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { navAnimations } from '../../animation';
import { UpperNav } from '../upper-nav/upper-nav';
import { Button } from '../../button/button';

@Component({
  selector: 'app-main-nav',
  imports: [RouterLink, RouterLinkActive, UpperNav, Button],
  templateUrl: './man-nav.html',
  styleUrl: './man-nav.css',
  animations: navAnimations,
})
export class MainNav {
  constructor(private router: Router) {}
  mobileMenuOpen = false;
  isHeaderStuck = false;
  tappedLink = new Map<string, 'idle' | 'tap'>();

  buttonClicked(buttonText: string) {
    console.log(buttonText, ' i am cliked from main nav componet');
  }

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
