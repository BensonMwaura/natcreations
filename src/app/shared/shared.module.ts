import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule, MatTabsModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './../core/components/header/header.component';
import { LogoTextComponent } from './../core/components/logo-text/logo-text.component';
import { BackLeafComponent } from '../core/components/back-leaf/back-leaf.component';
import { ForeLeafComponent } from '../core/components/fore-leaf/fore-leaf.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [HeaderComponent, LogoTextComponent, BackLeafComponent, ForeLeafComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule,
    HeaderComponent,
    LogoTextComponent,
    BackLeafComponent,
    ForeLeafComponent ]
})
export class SharedModule { }
