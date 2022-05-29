import { TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { ProductListComponentModule } from './product-list.component-module';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductListComponentHarness } from './product-list.component-harness';
import { makeProductDtoStub } from '../../../application/ports/secondary/dto/product.dto.stub';

describe('ProductListComponent', () => {
  const given = async (
    data: Partial<{ getsAllProductDtoPortStub: ProductDTO[] }>
  ) => {
    TestBed.configureTestingModule({
      imports: [ProductListComponentModule],
      declarations: [TestPage],
      providers: [
        {
          provide: GETS_ALL_PRODUCT_DTO,
          useValue: {
            getAll: () => of(data.getsAllProductDtoPortStub),
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(TestPage);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const componentHarness = await loader.getHarness(
      ProductListComponentHarness
    );

    return {
      getItems: () => componentHarness.getItems(),
    };
  };
  [
    {
      givenData: { getsAllProductDtoPortStub: [] },
    },
    {
      givenData: {
        getsAllProductDtoPortStub: [
          makeProductDtoStub('Product 1'),
          makeProductDtoStub('Product 2'),
        ],
      },
    },
    {
      givenData: {
        getsAllProductDtoPortStub: new Array(
          Math.ceil(Math.random() * 100)
        ).fill(makeProductDtoStub('Same product')),
      },
    },
  ].forEach(({ givenData }, i) =>
    it(`should render items #${i + 1}`, async () => {
      const { getItems } = await given(givenData);

      const actual = await getItems();

      expect(actual.length).toEqual(givenData.getsAllProductDtoPortStub.length);
    })
  );
});
@Component({
  template: '<lib-product-list></lib-product-list>',
})
class TestPage {}
