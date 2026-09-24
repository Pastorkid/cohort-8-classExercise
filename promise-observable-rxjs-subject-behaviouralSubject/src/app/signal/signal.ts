import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  // myAge:WritableSignal<number> = signal(0)
  myName = signal<string>('Miracle');
  resetAge() {
    // this.myAge.set(30);
    this.myName.update((prevAge) => prevAge + 1);
  }
}
