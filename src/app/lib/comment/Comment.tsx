/* eslint-disable @typescript-eslint/no-use-before-define */

import { useGetAllStoriesQuery } from '@/app/store/queryApi';
import { ParsedContentDetailesType } from '@/app/types';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';
import { useState } from 'react';

export default function Comment({ data }: { data: ParsedContentDetailesType }) {
  const [isItOpen, setIsItOPen] = useState(false);
  const { time, by, kids, text } = data;

  return (
    <li className="flex w-312 flex-col gap-4 rounded-lg border-2 bg-white p-4">
      <div className="flex justify-between">
        <span className="text-h6-bold">{by}</span>
        <span className="text-h6-semibold">{time}</span>
      </div>

      <p className="indent-4 text-content">{parse(text)}</p>

      <button
        className="flex items-center gap-2 self-end"
        type="button"
        onClick={() => {
          setIsItOPen((state) => !state);
        }}
        disabled={!kids.length}
      >
        <ChatBubbleLeftIcon className="h-4 w-4 text-palette-blue-dark" />
        <h6 className="text-caption">{kids.length} comments</h6>
      </button>
      {isItOpen && <Comments kids={data.kids} />}
    </li>
  );
}

export function Comments({ kids }: { kids: number[] }) {
  const { data, isLoading, isError } = useGetAllStoriesQuery(kids);

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return (
      <ul className="flex flex-col gap-4">
        {data.length ? (
          data.map((item) => <Comment data={item} key={item.id} />)
        ) : (
          <li className="text-content">No comments here yet</li>
        )}
      </ul>
    );
  }
}
