import { ParsedContentDetailesType } from '@/app/types';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';
import { useState } from 'react';
import CommentPlaceholder from './CommentPlaceholder';

export default function Comment({ data }: { data: ParsedContentDetailesType }) {
  const [isItOpen, setIsItOPen] = useState(false);
  const { time, by, kids, text } = data;

  return (
    <li className="comment container flex flex-col gap-4 rounded-lg border-2 bg-white p-2 sm:p-4">
      <div className="flex flex-wrap justify-between gap-2">
        <span className="text-h6 font-bold">{by}</span>
        <span className="text-h6 font-semibold">{time}</span>
      </div>

      <p className="text-content indent-4">{parse(text)}</p>

      <button
        className="flex items-center gap-2 self-end"
        type="button"
        onClick={() => {
          setIsItOPen((state) => !state);
        }}
        disabled={!kids.length}
      >
        <ChatBubbleLeftIcon className="text-palette-blue-dark h-4 w-4" />
        <h6 className="text-caption">{kids.length} comments</h6>
      </button>
      {isItOpen && <Comments kids={data.kids} />}
    </li>
  );
}

export function Comments({ kids }: { kids: number[] }) {
  const { data, isFetching, isError } = useGetAllStoriesQuery(kids);

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching)
    return (
      <ul className="flex flex-col gap-4">
        {kids.map((item) => {
          return <CommentPlaceholder key={item} />;
        })}
      </ul>
    );

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
