import { Component } from '@angular/core';
import { HomeUser } from '../components/home-user/home-user';
import { HomeAdmin } from '../components/home-admin/home-admin';
import { Store } from '@ngrx/store';
import { Icounter } from '../AppState/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../AppState/counter/counter.action';
import { AsyncPipe } from '@angular/common';
import { CustomCounter } from '../components/custom-counter/custom-counter';

@Component({
  imports: [HomeUser, HomeAdmin, AsyncPipe, CustomCounter],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  counter$: Observable<number>;
  constructor(private store: Store<Icounter>) {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
