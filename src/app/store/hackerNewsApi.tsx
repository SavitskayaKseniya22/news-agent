import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContentDetailesType } from '../types';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0',
  }),
  endpoints: (builder) => ({
    getTopStories: builder.query<number[], void>({
      query: () => ({ url: `/topstories.json?print=pretty`, method: 'GET' }),
    }),
    getStory: builder.query<ContentDetailesType, { id: number }>({
      query: ({ id }) => ({
        url: `item/${id}.json?print=pretty`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTopStoriesQuery, useGetStoryQuery } = hackerNewsApi;
