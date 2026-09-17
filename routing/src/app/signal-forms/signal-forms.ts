import { Component, signal } from '@angular/core';
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

interface loginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  loginModel = signal<loginData>({
    email: '',
    password: '',
  });
  loginForm = form(this.loginModel, this.validations);

  validations(schemaPath: SchemaPathTree<loginData, PathKind.Root>) {
    required(schemaPath.email, { message: 'email is required' });
    email(schemaPath.email, { message: 'email is invalid' });
    required(schemaPath.password, { message: 'password is required' });
    minLength(schemaPath.password, 6, { message: 'password must be at least 6 characters' });
    maxLength(schemaPath.password, 12, { message: 'password must be at most 12 characters' });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.loginModel());
  }
}
