'use client';

import SocialsInfo from '@/app/lib/socials-info/SocialsInfo';
import { StoryPreviewType } from '@/app/types';
import { useParams } from 'next/navigation';
import parse from 'html-react-parser';
import { useGetStoryQuery } from '@/app/store/hackerNewsApi';
import Link from 'next/dist/client/link';
import { Comments } from '@/app/lib/comment/Comment';

export default function Page() {
  const params = useParams();

  const story = useGetStoryQuery(
    { id: params.story as unknown as number },
    { skip: !params.story },
  );

  if (story.isError) return <div>An error has occurred!</div>;

  if (story.isLoading) return <div>Loading</div>;

  if (story.data) {
    const { title, time, score, descendants, by, text, url } = story.data;
    return (
      <main className="flex w-320 flex-grow flex-col gap-12 p-4">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <span>{by}</span>
            <span className="text-h6-semibold">{time}</span>
          </div>
          <h1 className="text-h3">{title}</h1>

          <SocialsInfo
            score={score}
            descendants={descendants}
            type={StoryPreviewType.GIGANTIC}
          />

          {text.length ? <p className="text-content">{parse(text)}</p> : ''}

          <Link
            className="btn btn_orange self-end"
            href={`${url}`}
            target="_blank"
          >
            Source
          </Link>
        </div>

        <Comments kids={story.data.kids} />

        <button
          type="button"
          className="btn btn_orange self-end"
          onClick={() => {}}
        >
          Load More
        </button>
      </main>
    );
  }
  return null;
}
