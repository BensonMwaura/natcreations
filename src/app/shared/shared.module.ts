import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LogoTextComponent } from './../core/components/logo-text/logo-text.component';
import { BackLeafComponent } from '../core/components/back-leaf/back-leaf.component';
import { ForeLeafComponent } from '../core/components/fore-leaf/fore-leaf.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [LogoTextComponent, BackLeafComponent, ForeLeafComponent],
  exports: [LogoTextComponent, BackLeafComponent, ForeLeafComponent]
})
export class SharedModule { }
