import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ContentDetailesType,
  ParsedContentDetailesType,
  UserType,
} from '../types';

import { refineStoryResponse } from '../utils';

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
    getStory: builder.query<ParsedContentDetailesType | null, { id: number }>({
      query: ({ id }) => ({
        url: `item/${id}.json?print=pretty`,
        method: 'GET',
      }),
      transformResponse: (
        response: ContentDetailesType,
      ): ParsedContentDetailesType | null => refineStoryResponse({ response }),
    }),

    getUser: builder.query<UserType, { id: string }>({
      query: ({ id }) => ({
        url: `user/${id}.json?print=pretty`,
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
