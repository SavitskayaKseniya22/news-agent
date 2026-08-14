import { useGetQuoteOfTheDayQuery } from '@/api/quotesApi';

export function Quote() {
  const { data, isLoading, isError } = useGetQuoteOfTheDayQuery();

  const quote = data?.[0];

  return (
    <div className="flex flex-col gap-8 border-r border-l p-6">
      <h2 className="text-h2">Quote of the day</h2>
      <dl className="flex min-h-20 flex-col gap-4">
        {isError ? (
          <dt className="text-content font-bold">An error has occurred!</dt>
        ) : isLoading ? (
          <>
            <dt className="text-content font-bold">loading...</dt>
          </>
        ) : quote ? (
          <>
            <dt className="text-content">{quote.quote}</dt>
            <dd className="text-caption ml-auto italic">{quote.author}</dd>
          </>
        ) : (
          <dt className="text-content font-bold">No data found</dt>
        )}
      </dl>
    </div>
  );
}
