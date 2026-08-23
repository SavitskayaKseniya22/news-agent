'use client';

import { StoryType, useGetStoriesQuery } from '@/api/query-api';
import Pagination from '@/components/blocks/pagination/pagination';
import { StoryPreviewType } from '@/app/types';
import { useState } from 'react';
import StoryPreview from '../story/story';
import Spinner from '@/components/elements/spinner/spinner';

export default function Stories({ itemsOnPage, pageType }: { itemsOnPage: number; pageType: StoryType }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isFetching } = useGetStoriesQuery({
    type: pageType,
    perPage: itemsOnPage,
    page: currentPage,
  });

  if (isError) return <div>An error has occurred!</div>;

  return (
    <main className="container flex grow flex-col items-center justify-between gap-8 p-2">
      {isFetching ? (
        <div className="flex grow items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <ul className="grid w-full gap-2 md:grid-cols-2 xl:grid-cols-4">
          {data?.stories.map((item) => (
            <StoryPreview data={item} type={StoryPreviewType.MEDIUM} key={item.story.id} />
          ))}
        </ul>
      )}

      <Pagination
        totalItems={data?.pagination.totalItems ?? 0}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isDisabled={isFetching}
        totalPages={data?.pagination.totalPages ?? 1}
      />
    </main>
  );
}
