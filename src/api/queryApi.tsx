import { FullStoryType } from '@/app/types';
import { baseApi } from './baseApi';

type StoryType = 'top' | 'new' | 'best' | 'ask' | 'show' | 'job';

export const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStories: builder.query<FullStoryType[], StoryType>({
      query: (type) => ({
        url: '/stories',
        params: {
          type,
        },
      }),
    }),
  }),
});

export const { useGetStoriesQuery } = queryApi;
