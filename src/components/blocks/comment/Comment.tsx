import { ParsedContentDetailesType } from '@/app/types';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';
import { useState } from 'react';
import CommentPlaceholder from '../comment-placeholder/comment-placeholder';
import { useGetAllStoriesQuery } from '@/api/hacker-news';
import CustomLinkButton from '@/components/elements/link/link';

export default function Comment({ data }: { data: ParsedContentDetailesType }) {
  const [isItOpen, setIsItOPen] = useState(false);
  const { time, by, kids, text } = data;

  return (
    <li className="comment container flex flex-col gap-2 rounded-lg border p-2">
      <div className="flex flex-wrap justify-between gap-2">
        <p className="text-content">
          by <span className="font-bold italic">{by}</span>
        </p>
        <p className="text-caption">{time}</p>
      </div>

      <div className="text-content indent-2">{parse(text)}</div>

      <CustomLinkButton
        className="flex items-center gap-2 self-end"
        type="button"
        onClick={() => {
          setIsItOPen((state) => !state);
        }}
        disabled={kids.length === 0}
      >
        <ChatBubbleLeftIcon className="text-palette-blue-dark h-4 w-4" />
        <p className="text-caption">{kids.length} comments</p>
      </CustomLinkButton>
      {isItOpen && <Comments kids={data.kids} />}
    </li>
  );
}

export function Comments({ kids }: { kids: number[] }) {
  const { data, isFetching, isError } = useGetAllStoriesQuery(kids);

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching)
    return (
      <ul className="flex flex-col gap-2">
        {kids.map((item) => {
          return <CommentPlaceholder key={item} />;
        })}
      </ul>
    );

  if (data) {
    return (
      <ul className="flex flex-col gap-2">
        {data.length > 0 ? (
          data.map((item) => <Comment data={item} key={item.id} />)
        ) : (
          <li className="text-content">No comments here yet</li>
        )}
      </ul>
    );
  }
}
