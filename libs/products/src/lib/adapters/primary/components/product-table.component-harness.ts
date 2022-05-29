import { ComponentHarness } from '@angular/cdk/testing';

export class ProductTableComponentHarness extends ComponentHarness {
  static hostSelector = 'lib-product-table';

  getRows() {
    return this.locatorForAll(`table tr`)();
  }
}
