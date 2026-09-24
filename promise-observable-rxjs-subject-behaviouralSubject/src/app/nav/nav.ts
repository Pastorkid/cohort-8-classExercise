import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilityService } from '../Services/utility-service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(private utilityService: UtilityService) {}
  myContactPath = 'contact';
  handleSelectionChange(event: any) {
    event.preventDefault();
    console.log(event.target.value);
    this.utilityService.$selectedCurrency.next(event.target.value);
    this.utilityService.$selectedCurrency.subscribe({
      next: (data) => {
        console.log('i remeber my last emit', data);
      },
    });
    // this.utilityService.$selecetdCurrencyBehavour.next(event.target.value);
  }

  myAge = 20;
}
