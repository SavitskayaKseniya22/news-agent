'use client';

import { StoryPreviewType } from '@/app/types';
import { useParams } from 'next/navigation';
import { Comments } from '@/components/blocks/comment/Comment';
import { useGetStoryQuery } from '@/api/hackerNews';
import Story from '@/components/blocks/story/Story';
import Spinner from '@/components/elements/Spinner/Spinner';

export default function Page() {
  const params = useParams();

  const { data, isFetching, isError, refetch } = useGetStoryQuery(
    { id: params.story as unknown as number },
    { skip: !params.story },
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
