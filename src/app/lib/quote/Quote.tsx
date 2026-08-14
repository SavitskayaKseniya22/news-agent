import { useGetQuoteOfTheDayQuery } from '@/api/quotesApi';

export function Quote() {
  const { data, isLoading, isError } = useGetQuoteOfTheDayQuery();

  const quote = data?.[0];

  return (
    <div>
      <dl className="flex min-h-25 grow flex-col gap-2 border p-4">
        {isError ? (
          <dt className="text-h6 font-bold">An error has occurred!</dt>
        ) : isLoading ? (
          <>
            <dt className="text-h6 font-bold">Loading...</dt>
          </>
        ) : quote ? (
          <>
            <dt className="text-h6 font-bold">{quote.quote}</dt>
            <dd className="text-caption">{quote.author}</dd>
          </>
        ) : (
          <dt className="text-h6 font-bold">No data found</dt>
        )}
      </dl>
    </div>
  );
}
