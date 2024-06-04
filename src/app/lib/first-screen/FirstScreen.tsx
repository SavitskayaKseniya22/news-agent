'use client';

import { useGetTopStoriesQuery } from '@/app/store/hackerNewsApi';
import { ListingType, StoryPreviewType } from '@/app/types';
import Header from '../header/Header';
import WidgetPopular from './lib/widget-popular/WidgetPopular';
import Story from '../story/Story';
import { Listings } from '../listing/Listing';

export default function FirstScreen() {
  const { data, isError, isFetching } = useGetTopStoriesQuery();

  return (
    <div className="flex w-full flex-col gap-4 bg-palette-gray-dark xl:h-dvh">
      <Header />
      <div className="container grid flex-grow place-content-center gap-4 self-center overflow-hidden p-4 xl:max-h-full xl:grid-cols-3 xl:grid-rows-5">
        <div className="xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-3">
          {isFetching && <div>Loading</div>}
          {isError && <div>An error has occurred!</div>}
          {data && <Story id={data[0]} type={StoryPreviewType.GIGANTIC} />}
        </div>

        <div className="flex flex-col gap-4 bg-palette-gray-light p-4 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-6">
          <h4 className="text-h4 text-white">Popular today</h4>
          <WidgetPopular />
        </div>

        <div className="flex h-full w-full flex-col gap-4 bg-palette-gray-light p-4 xl:col-start-2 xl:col-end-3 xl:row-start-3 xl:row-end-6">
          <h4 className="text-h4 text-white">Hiring</h4>
          <ul className="flex flex-grow flex-col justify-between gap-2 overflow-x-auto">
            {data && <Listings kids={data.slice(7, 15)} type={ListingType.JOB} />}
          </ul>
        </div>

        <div className="flex h-full w-full flex-col gap-4 bg-palette-gray-light p-4 xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-6">
          <h4 className="text-h4 text-white">Ask HN</h4>
          <ul className="flex flex-grow flex-col justify-between gap-2 overflow-x-auto">
            {data && <Listings kids={data.slice(15, 23)} type={ListingType.QUESTION} />}
          </ul>
        </div>
      </div>
    </div>
  );
}
