import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable()
export class ProductService {

  constructor(private http: Http)  {}

  public getProducts(): Observable<Product[]> {
    return null;
    /*
    return this.http.get('/api/products/list')
      .toPromise()
      .then(response => response.json() as Product[])
      .catch(this.handleError)
    */
  }

  public getProduct(slug: string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.slug === slug)),
    );
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
