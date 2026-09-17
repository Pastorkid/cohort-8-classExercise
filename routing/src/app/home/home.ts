import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignalForms } from '../signal-forms/signal-forms';

@Component({
  selector: 'app-home',
  imports: [SignalForms],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}
  isEmailVeried = false;
  isKyCompleted = true;
  goToAbout() {
    if (this.isEmailVeried) {
      this.router.navigate(['/about']);
    } else if (this.isKyCompleted) {
      this.router.navigate(['/contact']);
    } else {
      this.router.navigate(['/products']);
    }
  }
}
