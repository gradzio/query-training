import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent],
})
export class ProductTableComponentModule {}
