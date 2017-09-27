import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductFilterPipe } from '../../products/product-filter.pipe';
import {RouterModule} from '@angular/router';
import { StarComponent } from '../../shared/star/star.component';

import { ProductDetailComponent } from '../../products/product-detail/product-detail.component'
import {AddProductComponent} from '../../products/add-product/add-product.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:pId',component:ProductDetailComponent},
      {path:'add-products',component:AddProductComponent}

    ])
  ],
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    AddProductComponent
  ]
})
export class ProductsModule { }
