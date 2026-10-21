import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Store } from '@ngrx/store';
import { Icounter } from '../../AppState/store';
import { addCounter } from '../../AppState/counter/counter.action';

interface counterData {
  counter: number;
}

@Component({
  imports: [FormField],
  selector: 'app-custom-counter',
  styleUrl: './custom-counter.css',
  templateUrl: './custom-counter.html',
})
export class CustomCounter {
  constructor(private store: Store<Icounter>) {}
  counterModel = signal<counterData>({
    counter: 0,
  });

  counterForm = form(this.counterModel);
  addCounter() {
    console.log(this.counterModel());
    console.log(this.store.dispatch(addCounter({ counter: this.counterModel().counter })));

    this.store.dispatch(addCounter({ counter: this.counterModel().counter }));
  }
}
