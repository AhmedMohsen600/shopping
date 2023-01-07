import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Product } from '../../components';

describe('Test Component', () => {
  test('Should test the Product component', () => {
    const tree = render(
      <BrowserRouter>
        <Product
          src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
          title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
          price={109}
          description="3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability."
          id={11}
          category="electronics"
        />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
