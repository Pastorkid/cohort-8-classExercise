import { Component } from '@angular/core';
import { Icounter } from '../../AppState/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-home-admin',
  styleUrl: './home-admin.css',
  templateUrl: './home-admin.html',
})
export class HomeAdmin {
  counter$: Observable<number>;
  constructor(private store: Store<Icounter>) {
    this.counter$ = this.store.select('counter');
  }
}
