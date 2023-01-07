import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../apis/products';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (
    category = JSON.parse(localStorage.getItem('category')) || 'electronics'
  ) => {
    const products = await getProducts(category);
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchProducts.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchProducts.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
