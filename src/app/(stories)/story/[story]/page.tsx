'use client';

import { StoryPreviewType } from '@/app/types';
import { useParams } from 'next/navigation';
import { Comments } from '@/components/blocks/comment/comment';
import { useGetStoryQuery } from '@/api/hacker-news';
import Story from '@/components/blocks/story/story';
import Spinner from '@/components/elements/spinner/spinner';

export default function Page() {
  const parameters = useParams();

  const { data, isFetching, isError, refetch } = useGetStoryQuery(
    { id: parameters.story as unknown as number },
    { skip: !parameters.story },
  );

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching) return <Spinner />;

  if (data) {
    return (
      <main className="container flex grow flex-col gap-12 p-4">
        <Story
          type={StoryPreviewType.BIG}
          data={{
            story: data,
            photo: null,
          }}
          onRefetch={() => {
            refetch();
          }}
        />
        <Comments kids={data.kids} />
      </main>
    );
  }

  return null;
}
