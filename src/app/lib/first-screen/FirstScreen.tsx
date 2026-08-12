'use client';

import { useGetTopStoriesQuery } from '@/api/hackerNewsApi';
import { StoryPreviewType } from '@/app/types';
import Header from '../header/Header';
import WidgetPopular from './lib/widget-popular/WidgetPopular';
import Story from '../story/Story';
import { Quotes } from '../quote/Quote';

export default function FirstScreen() {
  const { data, isError, isFetching } = useGetTopStoriesQuery();

  return (
    <div className="bg-palette-gray-dark flex w-full flex-col gap-4 xl:h-dvh">
      <Header />
      <div className="container grid grow place-content-center gap-8 self-center overflow-hidden p-4 xl:max-h-full xl:grid-cols-3 xl:grid-rows-5">
        <div className="xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-3">
          {isFetching && <div>Loading</div>}
          {isError && <div>An error has occurred!</div>}
          {data && <Story id={data[0]} type={StoryPreviewType.GIGANTIC} />}
        </div>

        <div className="bg-palette-gray-light flex flex-col gap-4 p-4 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-6">
          <h4 className="text-h4 text-white">Popular today</h4>
          <WidgetPopular />
        </div>

        <div className="bg-palette-gray-light flex h-full w-full flex-col gap-4 p-4 xl:col-start-2 xl:col-end-3 xl:row-start-3 xl:row-end-6">
          <Quotes />
        </div>

        <div className="bg-palette-gray-light flex h-full w-full flex-col gap-4 p-4 xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-6"></div>
      </div>
    </div>
  );
}
