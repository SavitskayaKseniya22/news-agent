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
    getNewStories: builder.query<number[], void>({
      query: () => ({ url: `/newstories.json?print=pretty`, method: 'GET' }),
    }),
    getBestStories: builder.query<number[], void>({
      query: () => ({ url: `/beststories.json?print=pretty`, method: 'GET' }),
    }),
    getAskStories: builder.query<number[], void>({
      query: () => ({ url: `/askstories.json?print=pretty`, method: 'GET' }),
    }),
    getShowStories: builder.query<number[], void>({
      query: () => ({ url: `/showstories.json?print=pretty`, method: 'GET' }),
    }),
    getJobStories: builder.query<number[], void>({
      query: () => ({ url: `/jobstories.json?print=pretty`, method: 'GET' }),
    }),
    getStory: builder.query<ContentDetailesType, { id: number }>({
      query: ({ id }) => ({
        url: `item/${id}.json?print=pretty`,
        method: 'GET',
      }),
    }),
    getUser: builder.query<ContentDetailesType, { id: number }>({
      query: ({ id }) => ({
        url: `item/${id}.json?print=pretty`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetTopStoriesQuery,
  useGetStoryQuery,
  useGetNewStoriesQuery,
  useGetBestStoriesQuery,
  useGetAskStoriesQuery,
  useGetShowStoriesQuery,
  useGetJobStoriesQuery,
  useGetUserQuery,
} = hackerNewsApi;
