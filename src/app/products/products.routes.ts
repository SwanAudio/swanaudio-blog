import { ProductComponent } from './product-detail/product.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes = [
  { path: 'products', component: ProductListComponent, data: {title: 'Products' } },
  { path: 'products/:product', component: ProductComponent },
];
