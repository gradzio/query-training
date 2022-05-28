import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  InMemoryProductsServiceModule,
  ProductListComponentModule,
} from '@products';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductListComponentModule,
    InMemoryProductsServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
