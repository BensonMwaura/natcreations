import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AboutModule } from '../about/about.module';
import { ProductsModule } from '../products/products.module';
import { NotFoundModule } from '../not-found/not-found.module';
// import { ProductsModule } from './../products/products.module';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './services/seo.service';
// import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
// import { LogoTextComponent } from './components/logo-text/logo-text.component';
// import { ForeLeafComponent } from './components/fore-leaf/fore-leaf.component';
// import { BackLeafComponent } from './components/back-leaf/back-leaf.component';
// import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutModule,
    ProductsModule,
    NotFoundModule
  ],
  declarations: [FooterComponent ],
  exports: [
    // AboutComponent
    FooterComponent
  ],
  providers: [SeoService ]
})
export class CoreModule { }
