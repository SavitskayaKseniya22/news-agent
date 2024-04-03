import useGetFullStory from '@/app/hooks';
import StoryPreview from '@/app/lib/story-preview/StoryPreview';
import { StoryPreviewType } from '@/app/types';

export default function Story({
  id,
  type,
}: {
  id: number;
  type: StoryPreviewType;
}) {
  const { data, isLoading, isError } = useGetFullStory({ id });

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return <StoryPreview data={data} type={type} id={id} />;
  }
}
