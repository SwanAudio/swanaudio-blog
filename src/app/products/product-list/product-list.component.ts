import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: [ 'product-list.component.styl' ],
})
export class ProductListComponent implements OnInit {

  public products: Observable<Product[]>;

  public constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
