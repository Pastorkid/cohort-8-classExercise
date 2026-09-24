import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UtilityService } from '../Services/utility-service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
  ) {}

  products = [
    {
      id: 1,
      productName: 'Camera Pro',
      productprice: '$150',
      productImagePath: 'product1.png',
      rating: 4.5,
      category: 'Camera',
    },
    {
      id: 2,
      productName: 'Apple Watch',
      productprice: '$350',
      productImagePath: 'product2.png',
      rating: 4.8,
      category: 'watch',
    },
  ];

  viewProduct(id: number) {
    this.router.navigate(['/product-details', id]);
  }
  ngOnInit(): void {
    console.log('Products compoent works!');
    this.activatedRoute.queryParamMap.subscribe({
      next: (data) => {
        const category = data.get('category');
        const sort = data.get('sort');
        const filter = data.get('filter');
        console.log({ category, sort, filter });
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  getFormatedPrice(priceInDollar: string) {
    const priceInNumber = Number(priceInDollar.replace('$', ''));
    console.log(priceInNumber);
    return this.utilityService.resetPriceFormat(priceInNumber);
  }
}
