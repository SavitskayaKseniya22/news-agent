'use client';

import { useGetTopStoriesQuery } from '@/app/store/hackerNewsApi';
import { StoryPreviewType } from '@/app/types';
import Header from '../header/Header';
import WidgetPopular from './lib/widget-popular/WidgetPopular';
import Story from '../story/Story';

export default function FirstScreen() {
  const { data, isError, isLoading } = useGetTopStoriesQuery();

  return (
    <div className="flex h-dvh w-full flex-col bg-palette-gray-dark">
      <Header />
      <div className="grid max-h-full w-320 flex-grow grid-cols-5 grid-rows-3 place-content-center gap-8 self-center p-16">
        <div className="col-start-1 col-end-4 row-start-1 row-end-3 ">
          {isLoading && <div>Loading</div>}
          {isError && <div>An error has occurred!</div>}
          {data && <Story id={data[0]} type={StoryPreviewType.GIGANTIC} />}
        </div>

        <div className="col-start-4 col-end-6 row-start-1 row-end-4">
          {isLoading && <div>Loading</div>}
          {isError && <div>An error has occurred!</div>}
          {data && <WidgetPopular ids={data.slice(0, 7)} />}
        </div>

        <div className="col-start-1 col-end-4 row-start-3 row-end-4" />
      </div>
    </div>
  );
}
