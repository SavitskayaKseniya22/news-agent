/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { pexelsApi } from './pexelsApi';
import { hackerNewsApi } from './hackerNewsApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pexelsApi.reducerPath]: pexelsApi.reducer,
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pexelsApi.middleware)
      .concat(hackerNewsApi.middleware),
});
