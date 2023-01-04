import { configureStore } from '@reduxjs/toolkit';

const srore = configureStore({
  reducer: {
    product: {},
    products: {},
  },
});

export default srore;
