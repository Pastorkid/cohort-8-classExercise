import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IsLoggedIn } from './../../services/is-logged-in';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, MatProgressSpinnerModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private isLoggedInService: IsLoggedIn,
  ) {}
  isProcessingLoggingOut = signal(false);
  private showSuccess(message: string): void {
    this.snackBar.open(message, 'OK', {
      panelClass: ['snackbar-success'],
    });
  }

  logOut(): void {
    this.isProcessingLoggingOut.set(true);
    setTimeout(() => {
      localStorage.removeItem('isLoggedInToken');
      this.isLoggedInService.$isLoggedIn.next('');
      this.router.navigate(['']);
      this.showSuccess('Logout successful');
    }, 2000);
  }
}
