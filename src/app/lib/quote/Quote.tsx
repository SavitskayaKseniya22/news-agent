import { useGetQuoteOfTheDayQuery } from '@/api/quotesApi';
import Image from 'next/image';

export function Quotes() {
  const { data, isLoading, isError } = useGetQuoteOfTheDayQuery();

  const quote = data?.[0];

  return (
    <div className="flex items-center gap-8 p-2">
      <div
        className={`bg-palette-blue-dark flex h-18 w-16 rotate-45 items-center justify-center rounded-full ${isLoading ? 'animate-spin' : ''}`}
      >
        <div className={`h-16 w-16 -rotate-45 overflow-hidden rounded-full bg-white`}>
          {quote && (
            <Image
              src="" //add
              alt={quote.author}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk4OSsBwAAtgCTDcYLIwAAAABJRU5ErkJggg=="
              className="h-16 w-16 rounded-full"
            />
          )}
        </div>
      </div>

      <dl className="relative flex min-h-25 grow flex-col gap-2 border bg-white p-4 before:absolute before:top-4.25 before:-left-5 before:z-10 before:h-0 before:w-0 before:content-normal before:border-t-20 before:border-l-20 before:border-transparent before:border-t-white after:absolute after:top-4 after:-left-5.5 after:h-0 after:w-0 after:content-normal after:border-t-22 after:border-l-22 after:border-transparent">
        {isError ? (
          <dt className="text-h6-bold">An error has occurred!</dt>
        ) : isLoading ? (
          <>
            <dt className="text-h6-bold">Loading...</dt>
          </>
        ) : quote ? (
          <>
            <dt className="text-h6-bold">{quote.quote}</dt>
            <dd className="text-caption">{quote.author}</dd>
          </>
        ) : (
          <dt className="text-h6-bold">No data found</dt>
        )}
      </dl>
    </div>
  );
}
