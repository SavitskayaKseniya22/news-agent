import { configureStore } from '@reduxjs/toolkit';
import { pexelsApi } from './pexelsApi';
import { hackerNewsApi } from './hackerNewsApi';
import { queryApi } from './queryApi';
import { quotesApi } from './quotesApi';

const store = configureStore({
  reducer: {
    [pexelsApi.reducerPath]: pexelsApi.reducer,
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
    [queryApi.reducerPath]: queryApi.reducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pexelsApi.middleware)
      .concat(hackerNewsApi.middleware)
      .concat(queryApi.middleware)
      .concat(quotesApi.middleware),
});

export default store;
