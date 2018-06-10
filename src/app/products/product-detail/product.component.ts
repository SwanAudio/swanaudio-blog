import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styleUrls: [ 'product.component.styl' ],
})
export class ProductComponent implements OnInit {

  public product: Product;

  public constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
    this.product = <Product> { };
  }

  public ngOnInit(): void {
    const idField = 'product';
    /*this.route.params
      .switchMap((params: Params) => this.productService.getProduct(params[idField]))
      .subscribe(product => this.product = product); */
  }

}
