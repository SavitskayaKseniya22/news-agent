import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ContentDetailesType,
  ParsedContentDetailesType,
  UserType,
} from '../types';
import { parseUnixTimeStamp, refineTitle } from '../utils';

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
      ): ParsedContentDetailesType | null => {
        if (
          response.type === 'comment' &&
          (response.text === undefined || response.text.length === 0)
        ) {
          return null;
        }

        return {
          ...response,
          time:
            (response.time && parseUnixTimeStamp(response.time)) ||
            'Some time ago',
          title: response.title
            ? refineTitle(response.title)
            : 'Item Without Title',
          score: response.score || 0,
          descendants: response.descendants || 0,
          by: response.by || 'Unknown author',
          type: response.type || 'Unclassified',
          text: response.text || '',
          kids: response.kids || [],
          url: response.url || 'https://www.google.com/',
        };
      },
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
