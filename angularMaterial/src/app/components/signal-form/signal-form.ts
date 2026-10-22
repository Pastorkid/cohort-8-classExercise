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

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
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

  async onSubmit(event: Event) {
    event.preventDefault(); //this methods prevent the crednetials from been append to the url
  }
}
