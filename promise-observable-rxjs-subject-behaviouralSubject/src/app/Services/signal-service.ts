import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  constructor() {
    effect(() => {
      console.log(this.cart());

      console.log(this.totalPrice());
    });
  }
  totalPrice = signal<number>(0);
  cart = signal<Product[]>([]);
  addProduct(product: Product) {
    this.cart.update((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return [...prev];
      } else {
        return [...prev, product];
      }
    });
  }

  calculateTotalPrice() {
    this.totalPrice.set(
      this.cart().reduce((prev, cur) => {
        return prev + Number(cur.productprice.replace('$', ''));
      }, 0),
    );
  }
}
