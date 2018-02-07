import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';

const PRODUCTSROUTES: Routes = [
  { path: 'products', component: ProductsOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PRODUCTSROUTES)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
