import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import productReducer from '../features/product-details/productDetailstSlice';

const srore = configureStore({
  reducer: {
    product: productReducer,
    products: productsReducer,
  },
});

export default srore;
