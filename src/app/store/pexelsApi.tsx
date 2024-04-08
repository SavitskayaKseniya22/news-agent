import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PexelsResponseType } from '../types';

export const apiKey =
  'gGtWZcXFsPTCQsNtTebitSFib967u4H2g9dAs6CEU9Do1HJTdxyZ0YDC';

export const pexelsApi = createApi({
  reducerPath: 'pexelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pexels.com/v1/',
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<PexelsResponseType, { query: string }>({
      query: ({ query }) => ({
        url: `/search?query=${query}&per_page=3`,
        method: 'GET',
        headers: { Authorization: `${apiKey}` },
      }),
    }),
  }),
});

export const { useGetPhotosQuery } = pexelsApi;
