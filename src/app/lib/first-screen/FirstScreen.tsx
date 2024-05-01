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
    <div className="flex h-dvh w-full flex-col bg-palette-gray-dark">
      <Header />
      <div className="container grid max-h-full flex-grow grid-cols-3 grid-rows-5 place-content-center gap-8 self-center p-16">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3">
          {isFetching && <div>Loading</div>}
          {isError && <div>An error has occurred!</div>}
          {data && <Story id={data[0]} type={StoryPreviewType.GIGANTIC} />}
        </div>

        <div className="col-start-3 col-end-4 row-start-1 row-end-6">
          {isFetching && <div>Loading</div>}
          {isError && <div>An error has occurred!</div>}
          {data && <WidgetPopular ids={data.slice(0, 7)} />}
        </div>

        <div className="col-start-2 col-end-3 row-start-3 row-end-6 bg-orange-400">
          <div className="flex h-full w-full flex-col gap-4 bg-palette-gray-light p-4">
            <h4 className="text-h4 text-white">Hiring</h4>
            <ul className="flex flex-grow flex-col justify-between gap-2">
              {data && (
                <Listings kids={data.slice(7, 13)} type={ListingType.JOB} />
              )}
            </ul>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-6 bg-orange-400">
          <div className="flex h-full w-full flex-col gap-4 bg-palette-gray-light p-4">
            <h4 className="text-h4 text-white">Ask HN</h4>
            <ul className="flex flex-grow flex-col justify-between gap-2">
              {data && (
                <Listings
                  kids={data.slice(15, 21)}
                  type={ListingType.QUESTION}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
