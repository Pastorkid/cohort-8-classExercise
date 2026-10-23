import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { IsLoggedIn } from './services/is-logged-in';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isLoggedInToken = signal<string>('');
  constructor(private isLoggedInService: IsLoggedIn) {
    this.isLoggedInService.$isLoggedIn.subscribe({
      next: (data) => {
        console.log('i get data and it is', data);

        this.isLoggedInToken.set(data);
      },
    });
  }

  protected readonly title = signal('angularMaterial');
}
