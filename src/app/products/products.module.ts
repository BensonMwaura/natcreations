import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsOverviewComponent, ProductsComponent]
})
export class ProductsModule { }
