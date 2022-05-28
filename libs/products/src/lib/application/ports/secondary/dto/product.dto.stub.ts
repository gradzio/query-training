export const makeProductDtoStub = (name: string) => ({
  id: Math.ceil(Math.random() * 10000),
  name,
  price: Math.ceil(Math.random() * 100),
});
