'use client';

import SocialsInfo from '@/app/lib/socials-info/SocialsInfo';
import { StoryPreviewType } from '@/app/types';
import { useParams } from 'next/navigation';
import parse from 'html-react-parser';
import { useGetStoryQuery } from '@/app/store/hackerNewsApi';
import Comment from '../lib/comment/Comment';

export default function Page() {
  const params = useParams();

  const { data, isError, isLoading } = useGetStoryQuery(
    { id: params.story as unknown as number },
    { skip: !params.story },
  );

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    const { title, time, score, descendants, by, text } = data;
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

          <p className="text-content">{parse(text)}</p>
        </div>

        <ul className="flex flex-col gap-4">
          {data.kids.length ? (
            data.kids.map((item) => <Comment id={item} key={item} />)
          ) : (
            <li className="text-content">No comments here yet</li>
          )}
        </ul>
      </main>
    );
  }
}
