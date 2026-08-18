import z from 'zod';
import { baseApi } from './baseApi';

type GetPicturesParams = {
  query: string;
  per_page?: number;
  page?: number;
  orientation?: 'landscape' | 'portrait' | 'square';
  size?: 'large' | 'medium' | 'small';
  locale?: string;
};

export const PexelsResponseSchema = z.object({
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  photos: z.array(
    z.object({
      id: z.number(),
      width: z.number(),
      height: z.number(),
      url: z.string(),
      photographer: z.string(),
      photographer_url: z.string(),
      photographer_id: z.number(),
      avg_color: z.string(),
      src: z.object({
        original: z.string(),
        large2x: z.string(),
        large: z.string(),
        medium: z.string(),
        small: z.string(),
        portrait: z.string(),
        landscape: z.string(),
        tiny: z.string(),
      }),
      liked: z.boolean(),
      alt: z.string(),
    }),
  ),
  next_page: z.string().optional(),
});

export type PexelsResponseType = z.infer<typeof PexelsResponseSchema>;

export const pexelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPictures: builder.query<PexelsResponseType, GetPicturesParams>({
      query: (params) => ({
        url: '/pictures',
        params,
      }),
      transformResponse: (response: unknown) => {
        return PexelsResponseSchema.parse(response);
      },
    }),
  }),
});

export const { useGetPicturesQuery } = pexelsApi;
