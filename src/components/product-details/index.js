import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Inner,
  Image,
  ImageHolder,
  DetailsHolder,
  ProductDesc,
  ProducTitle,
} from './styles/product-details';
import { Price } from '../product/styles/product';
import { fetchProduct } from '../../features/product-details/productDetailstSlice';

export default function ProductDetails() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.loading);
  const { image, title, description, price, category, rating } = product;
  useEffect(() => {
    dispatch(fetchProduct(pathname.split('/')[3]));
  }, [dispatch, pathname]);

  return isLoading ? (
    <div style={{ fontSize: '40px', textAlign: 'center' }}>Loading</div>
  ) : (
    <Container>
      <Inner>
        <ImageHolder>
          <Image src={image} />
        </ImageHolder>
        <DetailsHolder>
          <ProducTitle>{product ? title : 'product name'}</ProducTitle>
          <ProductDesc>{product ? description : 'Description'}</ProductDesc>
          <Price>Price: {product ? `$${price}` : 'Price'}</Price>
          <Price>Category: {product ? category : 'Category'}</Price>
          <Price>Rate: {rating ? rating.rate : 'Rate'}</Price>
          <Price>Count: {rating ? rating.count : 'Count'}</Price>
        </DetailsHolder>
      </Inner>
    </Container>
  );
}
