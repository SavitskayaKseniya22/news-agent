import { baseApi } from './baseApi';

import { z } from 'zod';

export const QuoteSchema = z.object({
  quote: z.string(),
  author: z.string(),
  work: z.string(),
  categories: z.array(z.string()),
});

export const QuotesSchema = z.array(QuoteSchema);

export type QuoteResponseType = z.infer<typeof QuoteSchema>;

export const quotesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuoteOfTheDay: builder.query<QuoteResponseType[], void>({
      query: () => '/quote',
      transformResponse: (response: unknown) => {
        return QuotesSchema.parse(response);
      },
    }),
  }),
});

export const { useGetQuoteOfTheDayQuery } = quotesApi;
