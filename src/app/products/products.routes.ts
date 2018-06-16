import { Routes } from '@angular/router';

import { ProductComponent } from './product-detail/product.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent, data: {title: 'Products' } },
  { path: 'products/:product', component: ProductComponent },
];
