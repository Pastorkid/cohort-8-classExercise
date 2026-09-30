import { Component, computed, signal, WritableSignal, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  themeColor = signal<string>('light');
  constructor() {
    effect(() => {
      const color = localStorage.setItem('themeColor', this.themeColor());
      console.log('i get color frpom localstaroage and it is', color);
    });
  }
  price = signal<number>(20);
  quantity = signal<number>(2);
  isDiscount = signal<boolean>(true);
  totalPrice = computed(() => {
    if (this.isDiscount()) {
      return this.price() * this.quantity() * 0.8;
    } else {
      return this.price() * this.quantity();
    }
  });
  totalPriceReadOnly = this.price.asReadonly();
  // mySchoolName: WritableSignal<string> = signal('');
  // mySchoolName = signal<string>('St phillips');
  // // myAge:WritableSignal<number> = signal(0)
  // myName = signal<string>('Miracle');
  resetColor() {
    this.themeColor.set('blue');
  }
  resetTotalPrice() {
    // this.totalPriceReadOnly.set()
    this.price.set(34);
    // this.totalPrice();
    // this.quantity.update((prevQuantity) => prevQuantity + 1);
    // this.mySchoolName.update((prevSchoolName) => prevSchoolName + ' Anglican grammar school');
    // this.mySchoolName.set('St phillps');
  }
}
