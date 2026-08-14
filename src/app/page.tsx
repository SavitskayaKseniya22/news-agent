'use client';

import { useGetTopStoriesQuery } from '@/api/hackerNewsApi';
import SignUpPanel from './lib/sign-up-panel/SignUpPanel';
import { Quote } from './lib/quote/Quote';
import Story, { Stories } from './lib/story/Story';
import { StoryPreviewType } from './types';

export default function Home() {
  const { data, isError, isFetching } = useGetTopStoriesQuery();

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="container grid grow place-content-center gap-8 self-center p-4 xl:grid-cols-3 xl:grid-rows-5">
          <div className="xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-3">
            {isFetching && <div>Loading</div>}
            {isError && <div>An error has occurred!</div>}
            {data && <Story id={data[0]} type={StoryPreviewType.GIGANTIC} />}
          </div>

          <div className="flex flex-col gap-4 p-4 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-6">
            <h4 className="text-h4">Popular today</h4>
            <ul className="flex grow flex-col justify-between gap-2">
              {isError && <div>An error has occurred!</div>}
              <Stories kids={data} length={10} type={StoryPreviewType.SMALL} />
            </ul>
          </div>

          <div className="flex flex-col gap-4 p-4 xl:col-start-2 xl:col-end-3 xl:row-start-3 xl:row-end-6">
            <Quote />
          </div>

          <div className="flex flex-col gap-4 p-4 xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-6"></div>
        </div>
      </div>
      <SignUpPanel />
    </>
  );
}
