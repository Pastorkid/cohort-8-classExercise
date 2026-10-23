import { Component } from '@angular/core';
import { SignalForm } from '../components/signal-form/signal-form';

@Component({
  imports: [SignalForm],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
