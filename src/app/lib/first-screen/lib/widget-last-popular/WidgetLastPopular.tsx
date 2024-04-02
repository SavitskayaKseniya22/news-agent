import useGetFullStory from '@/app/hooks';

import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/dist/client/link';

export default function WidgetLastPopular({ id }: { id: number }) {
  const { data, isLoading, isError } = useGetFullStory({ id });

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex justify-between">
        <h6 className="text-h6-bold text-white">{data?.time}</h6>
        <div className="flex flex-col gap-4">
          <h6 className="text-h6-bold text-white">
            {data?.story.by || 'Unknown author'}
          </h6>
          <h6 className="text-caption text-palette-blue-light">
            {data?.story.type}
          </h6>
        </div>
      </div>

      <h1 className="text-h1 text-white">{data?.story.title}</h1>

      <div className="flex items-center justify-between">
        <ul className="flex justify-center gap-4 text-white">
          <li className="flex items-center gap-2 text-h6-semibold">
            <HeartIcon className="h-6 w-6 text-palette-blue-light" />
            {data?.story.score}
          </li>
          <li className="flex items-center gap-2 text-h6-semibold">
            <ChatBubbleLeftIcon className="h-6 w-6 text-palette-blue-light" />
            {data?.story.descendants}
          </li>
        </ul>

        <Link className="btn" href="/">
          Follow
        </Link>
      </div>
    </div>
  );
}
