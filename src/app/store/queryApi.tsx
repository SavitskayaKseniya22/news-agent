import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContentDetailesType, FullStoryType, ParsedContentDetailesType, PexelsResponseType } from '../types';

import { refineStoryResponse } from '../utils';
import { apiKey } from './pexelsApi';

export const queryApi = createApi({
  reducerPath: 'queryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  refetchOnMountOrArgChange: 1,
  endpoints: (builder) => ({
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
    getAllFullStories: builder.query({
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

              return fetch(`https://api.pexels.com/v1/search?query=${refinedStory.title}&per_page=3`, {
                method: 'GET',
                headers: { Authorization: `${apiKey}` },
              })
                .then((photo) => photo.json())
                .then((photo: PexelsResponseType) => ({
                  story: refinedStory,
                  photo,
                }))
                .catch((error) => {
                  console.error(error);

                  return {
                    story: refinedStory,
                    photo: null,
                  };
                });
            }),
        );

        const results = await Promise.allSettled(promises);

        const filtredResult = results
          .filter((res) => res.status === 'fulfilled')
          .map((res) => (res as PromiseFulfilledResult<FullStoryType>).value);

        return {
          data: filtredResult,
        };
      },
    }),
    getFullStory: builder.query({
      queryFn: async (id: number) => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);

        const story = await storyResponse.json();

        const refinedStory = refineStoryResponse({
          response: story,
        });

        if (refinedStory === null) {
          return { data: null };
        }

        const photoResponse = await fetch(`https://api.pexels.com/v1/search?query=${refinedStory.title}&per_page=3`, {
          method: 'GET',
          headers: { Authorization: `${apiKey}` },
        });

        if (photoResponse.ok) {
          const photo = await photoResponse.json();
          return {
            data: {
              story: refinedStory,
              photo,
            },
          };
        }

        return {
          data: {
            story: refinedStory,
            photo: null,
          },
        };
      },
    }),
  }),
});
// add errors
export const { useGetAllStoriesQuery, useGetAllFullStoriesQuery, useGetFullStoryQuery } = queryApi;
