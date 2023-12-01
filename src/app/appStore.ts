import { configureStore } from '@reduxjs/toolkit';
import { coinApi } from '../shared/api/coinApi';

export const store = configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
  },
  middleware: getDefaultMiddlware => getDefaultMiddlware().concat([coinApi.middleware]),
});
