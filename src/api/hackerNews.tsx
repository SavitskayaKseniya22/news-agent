import { ParsedContentDetailesType, ContentDetailesType } from '@/app/types';
import { refineStoryResponse } from '@/app/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0',
  }),
  endpoints: (builder) => ({
    getStory: builder.query<ParsedContentDetailesType | null, { id: number }>({
      query: ({ id }) => ({
        url: `item/${id}.json?print=pretty`,
        method: 'GET',
      }),
      transformResponse: (response: ContentDetailesType): ParsedContentDetailesType | null =>
        refineStoryResponse({ response }),
    }),
    getAllStories: builder.query({
      queryFn: async (ids: number[]) => {
        const promises = ids.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then((res) => res.json())
            .then((story: ContentDetailesType) => {
              const refinedStory = refineStoryResponse({
                response: story,
              });
              if (refinedStory === null) {
                return Promise.reject();
              }
              return refinedStory;
            }),
        );

        const results = await Promise.allSettled(promises);

        const filtredResult = results
          .filter((res) => res.status === 'fulfilled')
          .map((res) => (res as PromiseFulfilledResult<ParsedContentDetailesType>).value);

        return {
          data: filtredResult,
        };
      },
    }),
  }),
});

export const { useGetStoryQuery, useGetAllStoriesQuery } = hackerNewsApi;
