/* eslint-disable react/no-array-index-key */
import StoryPreview from '@/app/lib/story-preview/StoryPreview';
import {
  useGetFullStoryQuery,
  useGetAllFullStoriesQuery,
} from '@/app/store/queryApi';

import { StoryPreviewType } from '@/app/types';
import StoryPlaceholder from '../story-placeholder/StoryPlaceholder';

export default function Story({
  id,
  type,
}: {
  id: number;
  type: StoryPreviewType;
}) {
  const { data, isFetching, isError } = useGetFullStoryQuery(id);

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching) return <div>Loading</div>;

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
  const { data, isFetching, isError } = useGetAllFullStoriesQuery(kids);

  if (isError) return <div>An error has occurred!</div>;
  if (isFetching) return <StoryPlaceholder length={kids.length} type={type} />;

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
