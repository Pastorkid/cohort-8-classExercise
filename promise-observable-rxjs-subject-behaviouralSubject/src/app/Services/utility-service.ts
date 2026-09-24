import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface FormatedPrice {
  formatedPrice: number;
  currency: string;
}

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  defeaultCurency = '$';
  constructor() {
    this.$selectedCurrency.subscribe({
      next: (data) => {
        console.log('selected currency', data);
        this.defeaultCurency = data;
      },
    });
    // this.$selecetdCurrencyBehavour.subscribe({
    //   next: (data) => {
    //     console.log('selected currency', data);
    //     this.defeaultCurency = data;
    //   },
    // });
  }
  $selectedCurrency: Subject<string> = new Subject<string>();
  // $selecetdCurrencyBehavour: BehaviorSubject<string> = new BehaviorSubject<string>('$');

  resetPriceFormat(priceInDollar: number): FormatedPrice {
    let formatdPrice: FormatedPrice = {
      formatedPrice: priceInDollar,
      currency: this.defeaultCurency,
    };
    if (this.defeaultCurency === '#') {
      const rate = 1326;
      formatdPrice = {
        formatedPrice: priceInDollar * rate,
        currency: this.defeaultCurency,
      };
    } else if (this.defeaultCurency === '€') {
      const rate = 0.88;
      formatdPrice = {
        formatedPrice: priceInDollar * rate,
        currency: this.defeaultCurency,
      };
    } else {
      formatdPrice.formatedPrice = priceInDollar;
    }
    return formatdPrice;
  }
}
