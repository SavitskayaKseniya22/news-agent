import { FullStoryType } from '@/app/types';
import { baseApi } from './base-api';

export enum StoryType {
  TOP = 'top',
  NEW = 'new',
  BEST = 'best',
  ASK = 'ask',
  SHOW = 'show',
  JOB = 'job',
}

type GetStoriesParameters = {
  type: StoryType;
  page?: number;
  perPage?: number;
};

type GetStoriesResponse = {
  stories: FullStoryType[];
  pagination: {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    nextPage: number | null;
  };
};

export const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStories: builder.query<GetStoriesResponse, GetStoriesParameters>({
      query: ({ type, page = 1, perPage = 16 }) => ({
        url: '/stories',
        params: {
          type,
          page,
          perPage,
        },
      }),
    }),
  }),
});

export const { useGetStoriesQuery } = queryApi;
