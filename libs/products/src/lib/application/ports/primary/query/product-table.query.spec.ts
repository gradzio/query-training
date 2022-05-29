import { ProductTableQuery } from './product-table.query';

describe('ProductTableQuery', () => {
  [
    {
      givenData: [],
      thenData: [],
    },
    {
      givenData: [{ id: 1, name: 'first item', price: 100, quantity: 0 }],
      thenData: [{ columns: ['1', '0', 'first item', '100'] }],
    },
    {
      givenData: [
        { id: 1, name: 'first item', price: 100, quantity: 0 },
        { id: 2, name: 'second item', price: 1000, quantity: 10 },
        { id: 30, name: 'third item', price: 10, quantity: 100 },
      ],
      thenData: [
        { columns: ['1', '0', 'first item', '100'] },
        { columns: ['2', '10', 'second item', '1000'] },
        { columns: ['30', '100', 'third item', '10'] },
      ],
    },
  ].forEach(({ givenData, thenData }) =>
    it('should create', () => {
      const query = new ProductTableQuery(givenData);

      expect(query.headers).toEqual(['id', 'quantity', 'name', 'price']);
      query.rows.forEach((row, i) => {
        expect(row).toEqual(expect.objectContaining(thenData[i]));
      });
    })
  );
});
