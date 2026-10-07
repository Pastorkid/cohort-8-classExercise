import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './reusable/footer/footer';
import { MainNav } from './reusable/nav/man-nav/man-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, MainNav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('youngResearchAcademy');
  constructor() {}
}
