import { TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { ProductTableComponentModule } from './product-table.component-module';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductTableComponentHarness } from './product-table.component-harness';
import { makeProductDtoStub } from '../../../application/ports/secondary/dto/product.dto.stub';

describe('ProductTableComponent', () => {
  const given = async (
    data: Partial<{ getsAllProductDtoPortStub: ProductDTO[] }>
  ) => {
    TestBed.configureTestingModule({
      imports: [ProductTableComponentModule],
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
      ProductTableComponentHarness
    );

    return {
      getRows: () => componentHarness.getRows(),
    };
  };
  [
    {
      givenData: {
        getsAllProductDtoPortStub: [],
      },
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
      const { getRows } = await given(givenData);

      const actual = await getRows();

      expect(actual.length).toEqual(
        givenData.getsAllProductDtoPortStub.length + 1
      );
    })
  );
});
@Component({
  template: '<lib-product-table></lib-product-table>',
})
class TestPage {}
