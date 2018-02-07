import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsOverviewComponent } from './products/products-overview/products-overview.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  // { path: 'products', component: ProductsOverviewComponent },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
