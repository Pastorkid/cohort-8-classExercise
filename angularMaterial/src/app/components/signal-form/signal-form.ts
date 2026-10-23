import { Component, effect, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  maxLength,
  minLength,
  PathKind,
  required,
  SchemaPathTree,
} from '@angular/forms/signals';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IsLoggedIn } from './../../services/is-logged-in';
interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, MatProgressSpinnerModule],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  constructor(
    private isLoggedInService: IsLoggedIn,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    effect(() => {
      if (this.loginForm.email().touched() && this.loginForm.email().invalid()) {
        for (let index = 0; index < this.loginForm.email().errors().length; index++) {
          const emailError = this.loginForm.email().errors()[index];
          console.log('emailError ', emailError.message);
          this.showError(emailError.message as string);
        }
      }
    });
    effect(() => {
      if (this.loginForm.password().touched() && this.loginForm.password().invalid()) {
        for (let index = 0; index < this.loginForm.password().errors().length; index++) {
          const passwordError = this.loginForm.password().errors()[index];
          console.log('passwordError ', passwordError.message);
          this.showError(passwordError.message as string);
        }
      }
    });
  }
  //creating a new signal varibale for loginModel
  isProcessingLoggingIn = signal(false);
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  //creating a signal form by calling a form function and passing it to signal variable

  loginForm = form(this.loginModel, this.validations);

  validations(schemaPath: SchemaPathTree<LoginData, PathKind.Root>) {
    required(schemaPath.email, { message: 'email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'password is required' });
    minLength(schemaPath.password, 6, { message: 'password must be at least 6 characters long' });
    maxLength(schemaPath.password, 12, { message: 'password must be at most 12 characters long' });
  }

  private showError(message: string): void {
    this.snackBar.dismiss();
    this.snackBar.open(message, 'Dismiss', {
      panelClass: ['snackbar-error'],
    });
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'OK', {
      panelClass: ['snackbar-success'],
    });
  }

  async generateIsLoggedInToken(password: string, email: string) {
    const token = password + email + ' 2026';
    localStorage.setItem('isLoggedInToken', token);
  }

  async onSubmit(event: Event) {
    event.preventDefault(); //this methods prevent the crednetials from been append to the url
    this.isProcessingLoggingIn.set(true);
    setTimeout(async () => {
      await this.generateIsLoggedInToken(this.loginModel().password, this.loginModel().email);
      const getToken = localStorage.getItem('isLoggedInToken');
      this.isLoggedInService.$isLoggedIn.next(getToken as string);

      this.router.navigate(['/home']);
      this.showSuccess('Login successful');
    }, 2000);
  }
}
