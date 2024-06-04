import { StoryPreviewType } from '@/app/types';
import { useGetTopStoriesQuery } from '@/app/store/hackerNewsApi';
import { Stories } from '../../../story/Story';

export default function WidgetPopular() {
  const { data, isError } = useGetTopStoriesQuery();

  return (
    <ul className="flex flex-grow flex-col justify-between gap-2 overflow-x-auto">
      {isError && <div>An error has occurred!</div>}
      <Stories kids={data} length={10} type={StoryPreviewType.SMALL} />
    </ul>
  );
}
