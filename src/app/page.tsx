'use client';

import SignUpPanel from '../components/blocks/sign-up-panel/SignUpPanel';
import { Quote } from '../components/blocks/quote/Quote';
import { StoryPreviewType } from './types';
import Spinner from '@/components/elements/Spinner/Spinner';
import { useGetStoriesQuery } from '@/api/queryApi';
import StoryPreview from './lib/story-preview/StoryPreview';
import StoryPlaceholder from './lib/story-placeholder/StoryPlaceholder';

export default function Home() {
  const { data, isError, isFetching, isLoading } = useGetStoriesQuery('top');

  const mainStoryWidget = data?.[0];
  const rightStories = data?.slice(1, 10);
  const leftStories = data?.slice(10, 16);

  if (isError) {
    return <div className="flex w-full items-center justify-center">An error has occurred!</div>;
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="container grid grow place-content-center gap-8 self-center p-4 xl:grid-cols-3">
        <div className="relative xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-3">
          {isLoading ? (
            <StoryPlaceholder length={1} type={StoryPreviewType.GIGANTIC} />
          ) : mainStoryWidget ? (
            <StoryPreview data={mainStoryWidget} type={StoryPreviewType.GIGANTIC} />
          ) : (
            <div>No data</div>
          )}
        </div>

        <div className="flex grow flex-col gap-8 border-l p-6 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-6">
          <ul className="flex grow flex-col gap-8">
            {isLoading ? (
              <StoryPlaceholder length={9} type={StoryPreviewType.SMALL} />
            ) : rightStories ? (
              rightStories.map((item) => <StoryPreview data={item} type={StoryPreviewType.SMALL} key={item.story.id} />)
            ) : (
              <li>No data</li>
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-4 p-4 xl:col-start-2 xl:col-end-3 xl:row-start-3 xl:row-end-6">
          <Quote />
          <SignUpPanel />
        </div>

        <div className="flex flex-col gap-4 border-r p-4 xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-6">
          <ul className="flex grow flex-col gap-8">
            {isLoading ? (
              <StoryPlaceholder length={6} type={StoryPreviewType.SMALL} />
            ) : leftStories ? (
              leftStories.map((item) => <StoryPreview data={item} type={StoryPreviewType.SMALL} key={item.story.id} />)
            ) : (
              <li>No data</li>
            )}
          </ul>
        </div>
      </div>
      {isFetching && data && (
        <div className="absolute flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
