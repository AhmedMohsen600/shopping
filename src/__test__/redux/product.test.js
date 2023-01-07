import axios from 'axios';
import { getSinleProduct } from '../../apis/product';

jest.mock('axios');

describe('Test redux', () => {
  test('Should test Single product', async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 8,
        title: '...',
        price: '...',
        category: 'jewelery',
        description: '...',
        image: '...',
      },
    });
    const product = await getSinleProduct(8);
    expect(product).toEqual({
      id: 8,
      title: '...',
      price: '...',
      category: 'jewelery',
      description: '...',
      image: '...',
    });
    expect(axios.get).toBeCalledWith('https://fakestoreapi.com/products/8');
  });
});

test('Should catch error', async () => {
  axios.get.mockImplementation(() => {
    throw new Error('Test');
  });
  const products = await getSinleProduct(8);
  expect(products).toEqual('Test');
});
