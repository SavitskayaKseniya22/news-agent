import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import { hackerNewsApi } from './hackerNews';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(hackerNewsApi.middleware),
});

export default store;
