import { useGetStoryQuery } from '@/app/store/hackerNewsApi';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';
import { useState } from 'react';

export default function Comment({ id }: { id: number }) {
  const { data, isError, isLoading } = useGetStoryQuery({ id });
  const [isItOpen, setIsItOPen] = useState(false);

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    const { time, by, kids, text } = data;
    return (
      <li className="w-312 flex flex-col gap-4 rounded-lg border-2 bg-white p-4">
        <div className="flex justify-between">
          <span className="text-h6-bold">{by}</span>
          <span className="text-h6-semibold">{time}</span>
        </div>

        <p className="text-content">{parse(text)}</p>

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
        {isItOpen && (
          <ul className="relative left-4 flex flex-col gap-4 ">
            {kids.map((item) => (
              <Comment id={item} key={item} />
            ))}
          </ul>
        )}
      </li>
    );
  }
}
