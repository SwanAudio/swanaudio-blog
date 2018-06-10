import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { routes } from './products.routes';

import { ProductComponent } from './product-detail/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNavComponent } from './product-nav/product-nav.component';

import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProductComponent,
    ProductNavComponent,
    ProductListComponent,
  ],
  providers: [ ProductService ]
})
export class ProductsModule {}
