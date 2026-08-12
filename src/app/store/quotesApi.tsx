import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QuoteResponseType } from '../types';

export const quotesApi = createApi({
  reducerPath: 'quotesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.quotable.io/',
  }),
  endpoints: (builder) => ({
    getQuotes: builder.query<QuoteResponseType[], void>({
      query: () => ({
        url: `/quotes/random?tags=technology&limit=10`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetQuotesQuery } = quotesApi;
