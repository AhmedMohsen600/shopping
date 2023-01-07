import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';
import { Container, Inner } from './styles/product-list';
import Product from '../product';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    if (products.length) return;
    dispatch(
      fetchProducts(
        JSON.parse(localStorage.getItem('category')) || 'electronics'
      )
    );
  }, [dispatch, products.length]);

  return isLoading ? (
    <div style={{ fontSize: '40px', textAlign: 'center' }}>Loading</div>
  ) : (
    <Container>
      <Inner>
        {products.map(({ image, title, description, category, id, price }) => (
          <Product
            key={id}
            src={image}
            title={title}
            description={description}
            category={category}
            price={price}
            id={id}
          />
        ))}
      </Inner>
    </Container>
  );
}
