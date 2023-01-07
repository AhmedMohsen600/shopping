import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSinleProduct } from '../../apis/product';

const initialState = {
  data: {},
  loading: false,
  error: '',
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const product = await getSinleProduct(id);
    return product;
  }
);

const productDetailsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.data = {};
      state.error = '';
    });
    builder.addCase(fetchProduct.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchProduct.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default productDetailsSlice.reducer;
