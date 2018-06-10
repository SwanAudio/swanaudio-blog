import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'product-nav',
  templateUrl: 'product-nav.component.html',
})
export class ProductNavComponent implements OnInit {

  public products: Observable<Product[]>;

  public constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
