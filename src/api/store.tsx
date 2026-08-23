/* eslint-disable unicorn/prefer-spread */
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './base-api';
import { hackerNewsApi } from './hacker-news';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(hackerNewsApi.middleware),
});

export default store;
