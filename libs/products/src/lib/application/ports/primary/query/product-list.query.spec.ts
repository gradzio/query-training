import { ProductListQuery } from './product-list.query';

describe('ProductListQuery', () => {
  [
    {
      givenData: [],
      thenData: [],
    },
    {
      givenData: [{ name: 'first item', price: 100 }],
      thenData: [{ text: 'The first item for only $100' }],
    },
    {
      givenData: [
        { name: 'Product 1', price: 99 },
        { name: 'Product 2', price: 10 },
      ],
      thenData: [
        { text: 'The Product 1 for only $99' },
        { text: 'The Product 2 for only $10' },
      ],
    },
  ].forEach(({ givenData, thenData }) =>
    it('should create', () => {
      const query = new ProductListQuery(givenData);

      query.items.forEach((item, i) => {
        expect(item).toEqual(expect.objectContaining(thenData[i]));
      });
    })
  );
});
