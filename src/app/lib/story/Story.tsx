import StoryPreview from '@/app/lib/story-preview/StoryPreview';
import { useGetAllFullStoriesQuery } from '@/api/queryApi';
import { StoryPreviewType } from '@/app/types';
import StoryPlaceholder from '../story-placeholder/StoryPlaceholder';

export function Stories({ kids, type, length }: { kids: number[]; type: StoryPreviewType; length: number }) {
  const { data, isFetching, isError } = useGetAllFullStoriesQuery(kids.slice(0, length));

  if (isError) return <div>An error has occurred!</div>;
  if (isFetching || kids === undefined) return <StoryPlaceholder length={length} type={type} />;

  if (data && data.length) {
    return data.map((item) => <StoryPreview data={item} type={type} key={item.story.id} />);
  }
  if (data && data.length === 0) {
    return <li className="text-content">No stories here yet</li>;
  }
}
