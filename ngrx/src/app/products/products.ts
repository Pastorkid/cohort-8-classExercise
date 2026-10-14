import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  products = [
    {
      id: 1,
      productName: 'Camera Pro',
      productPrice: '$150',
      productImagePath: 'product1.png',
      quantity: 1,
      rating: 4.5,
      category: 'Camera',
    },
    {
      id: 2,
      productName: 'Apple Watch',
      productPrice: '$300',
      productImagePath: 'product2.png',
      quantity: 2,
      rating: 4.8,
      category: 'Watch',
    },
  ];

  // passing the route query using navigate()
  viewDetails(id: number) {
    // console.log(id);
    this.router.navigate(['/product-details', id]);
  }

  // reading queryParameter using routerLink

  ngOnInit(): void {
    console.log('Product page is working');

    // this.activatedRoute.queryParamMap.subscribe({
    //   next: (data) => {
    //     const category = data.get('category');
    //     const sort = data.get('sort');
    //     console.log({ category, sort });
    //   },
    //   error(err) {
    //     console.log('I get error while retriving query');
    //   },
    //   complete: () => {
    //     console.log('I just finished getting the query');
    //   },
    // });
  }

  // passing the queryParam using navigate() methods
  queryProduct(category: string, sort: string) {
    // console.log(id);
    this.router.navigate(['/products'], {
      queryParams: {
        category,
        sort,
      },
    });
    console.log({ category, sort });
  }
}
