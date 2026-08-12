import { useGetQuotesQuery } from '@/api/quotesApi';
import { QuoteResponseType } from '@/app/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Quote({ data }: { data: { img: string } & QuoteResponseType }) {
  return (
    <div className="flex items-center gap-8 p-2">
      <div className="bg-palette-blue-dark flex h-18 w-16 rotate-45 items-center justify-center rounded-full">
        <Image
          src={data.img}
          alt={data.author}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk4OSsBwAAtgCTDcYLIwAAAABJRU5ErkJggg=="
          className="h-16 w-16 -rotate-45 rounded-full bg-white"
        />
      </div>

      <dl className="border-palette-gray-dark after:border-t-palette-gray-dark relative flex flex-col gap-2 border bg-white p-4 before:absolute before:top-[17px] before:-left-[20px] before:z-10 before:h-0 before:w-0 before:content-normal before:border-t-20 before:border-l-20 before:border-transparent before:border-t-white after:absolute after:top-4 after:-left-[22px] after:h-0 after:w-0 after:content-normal after:border-t-22 after:border-l-22 after:border-transparent">
        <dt className="text-h6-bold">{data.content}</dt>
        <dd className="text-caption">{data.author}</dd>
      </dl>
    </div>
  );
}
export function QuotePlaceholder() {
  return (
    <div>
      <div></div>
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>
    </div>
  );
}

export function Quotes() {
  const [counter, setCounter] = useState(0);
  const { data, isFetching, isError } = useGetQuotesQuery();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((state) => (state < 9 ? (state += 1) : 0));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching) {
    return <QuotePlaceholder />;
  }

  if (data) {
    return <Quote data={{ ...data[counter], img: '' }}></Quote>;
  }
}
