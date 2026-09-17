import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  productDeatils = signal<Product>({} as Product);

  getProductByid(id: number) {
    console.log(id);

    // this.procutService.getProductById(id);
  }
  ngOnInit(): void {
    console.log('Product-detail compoent works!');
    this.activatedRoute.paramMap.subscribe({
      next: (data) => {
        console.log(data.get('id'));
        const productDetails = this.getProductByid(Number(data.get('id')));
        this.productDeatils.set(productDetails as any);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
