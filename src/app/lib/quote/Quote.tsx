import { useGetQuotesQuery } from '@/app/store/quotesApi';
import { QuoteResponseType } from '@/app/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Quote({ data }: { data: { img: string } & QuoteResponseType }) {
  return (
    <div className="flex items-center gap-8 p-2">
      <div className="flex h-[4.5rem] w-16 rotate-45 items-center justify-center rounded-full bg-palette-blue-dark">
        <Image
          src={data.img}
          alt={data.author}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk4OSsBwAAtgCTDcYLIwAAAABJRU5ErkJggg=="
          className="h-16 w-16 -rotate-45 rounded-full bg-white"
        />
      </div>

      <dl className="relative flex flex-col gap-2 border-[1px] border-palette-gray-dark bg-white p-4 before:absolute before:-left-[20px] before:top-[17px] before:z-10 before:h-0 before:w-0 before:content-normal before:border-l-[20px] before:border-t-[20px] before:border-transparent before:border-t-white after:absolute after:-left-[22px] after:top-4 after:h-0 after:w-0 after:content-normal after:border-l-[22px] after:border-t-[22px] after:border-transparent after:border-t-palette-gray-dark">
        <dt className="text-h6-bold">{data.content}</dt>
        <dd className="text-caption">{data.author}</dd>
      </dl>
    </div>
  );
}
//before:absolute before:-left-8 before:top-4 before:h-0 before:w-0 before:content-normal before:border-l-[32px] before:border-t-[32px] before:border-transparent before:border-t-white
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
