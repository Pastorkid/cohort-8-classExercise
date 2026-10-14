import { Component } from '@angular/core';
import { HomeUser } from '../components/home-user/home-user';
import { HomeAdmin } from '../components/home-admin/home-admin';

@Component({
  imports: [HomeUser, HomeAdmin],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
}
