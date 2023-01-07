import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchProducts } from '../../features/products/productsSlice';
import {
  Container,
  Nav,
  BackArrow,
  Categories,
  Category,
} from './styles/header';
import data from '../../fixtures/categories.json';

export default function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(
    JSON.parse(localStorage.getItem('category')) || 'electronics'
  );
  const productLength = useSelector((state) => state.products.data.length);

  return (
    <>
      <Container>
        <Nav>
          <BackArrow to="/">
            {pathname === '/' ? `${current}` : 'Back'}
          </BackArrow>
          <Categories>
            {data.map((categ) => (
              <Link className="link" to="/" key={categ}>
                <Category
                  onClick={() => {
                    localStorage.setItem('category', JSON.stringify(categ));
                    if (categ === current) return;
                    setCurrent(categ);
                    dispatch(fetchProducts(categ));
                  }}
                  active={categ === current}
                >
                  {categ}
                </Category>
              </Link>
            ))}
          </Categories>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
}
