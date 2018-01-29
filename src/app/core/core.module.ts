import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AboutModule } from '../about/about.module';
import { NotFoundModule } from '../not-found/not-found.module';
// import { LogoTextComponent } from './components/logo-text/logo-text.component';
// import { ForeLeafComponent } from './components/fore-leaf/fore-leaf.component';
// import { BackLeafComponent } from './components/back-leaf/back-leaf.component';
// import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutModule,
    NotFoundModule,
  ],
  declarations: [],
  exports: [
    // AboutComponent
  ]
})
export class CoreModule { }
