'use client';

import SocialsInfo from '@/app/lib/socials-info/SocialsInfo';
import { StoryPreviewType } from '@/app/types';
import { useParams } from 'next/navigation';
import parse from 'html-react-parser';
import { useGetStoryQuery } from '@/app/store/hackerNewsApi';
import Link from 'next/dist/client/link';
import { Comments } from '@/app/lib/comment/Comment';

import RefetchButton from '@/app/lib/refetch-button/RefetchButton';

export default function Page() {
  const params = useParams();

  const { data, isFetching, isError, refetch, isLoading, currentData } =
    useGetStoryQuery(
      { id: params.story as unknown as number },
      { skip: !params.story },
    );

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    const { title, time, score, descendants, by, text, url } = data;
    return (
      <main className="container flex flex-grow flex-col gap-12 p-4">
        <div className="flex flex-col gap-12">
          <div className="flex justify-between gap-4">
            <span className="text-h6-bold">{by}</span>
            <span className="text-h6-semibold">{time}</span>
          </div>
          <h1 className="text-h3">{title}</h1>

          {text.length ? (
            <p className="indent-4 text-content">{parse(text)}</p>
          ) : (
            ''
          )}

          <div className="flex flex-wrap justify-between gap-4">
            <SocialsInfo
              score={currentData?.score || score}
              descendants={currentData?.descendants || descendants}
              type={StoryPreviewType.GIGANTIC}
            />
            <div className="flex gap-4">
              <RefetchButton
                istItDisabled={!data}
                onClick={() => {
                  refetch();
                }}
              />

              <Link
                className="btn btn_orange self-end"
                href={`${url}`}
                target="_blank"
              >
                Source
              </Link>
            </div>
          </div>
        </div>
        {isFetching && <div>Loading</div>}
        {currentData && !isFetching && <Comments kids={currentData.kids} />}
      </main>
    );
  }
  return null;
}
