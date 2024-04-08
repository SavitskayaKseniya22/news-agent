import StoryPreview from '@/app/lib/story-preview/StoryPreview';
import { useGetFullStoryQuery, useGetAllFullStoriesQuery } from '@/app/store/queryApi';

import { StoryPreviewType } from '@/app/types';

export default function Story({
  id,
  type,
}: {
  id: number;
  type: StoryPreviewType;
}) {
  const { data, isLoading, isError } = useGetFullStoryQuery(id);

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return <StoryPreview data={data} type={type} />;
  }
}

export function Stories({
  kids,
  type,
}: {
  kids: number[];
  type: StoryPreviewType;
}) {
  const { data, isLoading, isError } = useGetAllFullStoriesQuery(kids);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading</div>;

  if (data) {
    if (data.length) {
      return data.map((item) => (
        <StoryPreview data={item} type={type} key={item.story.id} />
      ));
    }
  } else {
    <li className="text-content">No stories here yet</li>;
  }
}
