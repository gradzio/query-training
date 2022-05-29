import { ComponentHarness } from '@angular/cdk/testing';

export class ProductListComponentHarness extends ComponentHarness {
  static hostSelector = 'lib-product-list';

  getItems() {
    return this.locatorForAll(`ul li`)();
  }
}
