import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpProductsServiceModule,
  ProductListComponentModule,
} from '../../../../projects/products/src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductListComponentModule,
    HttpProductsServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
