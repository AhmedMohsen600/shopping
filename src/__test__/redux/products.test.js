jest.mock('axios');
import axios from 'axios';
import { getProducts } from '../../apis/products';

describe('Test redux pure function', () => {
  test('Should test', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 8,
          title: '...',
          price: '...',
          category: 'jewelery',
          description: '...',
          image: '...',
        },
      ],
    });
    const products = await getProducts('jewelery');
    expect(products).toEqual([
      {
        id: 8,
        title: '...',
        price: '...',
        category: 'jewelery',
        description: '...',
        image: '...',
      },
    ]);
    expect(axios.get).toBeCalledWith(
      'https://fakestoreapi.com/products/category/jewelery'
    );
  });

  test('Should catch error', async () => {
    axios.get.mockImplementation(() => {
      throw new Error('Test');
    });
    const products = await getProducts('jewelery');
    expect(products).toEqual('Test');
  });
});
