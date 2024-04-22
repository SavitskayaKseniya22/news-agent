'use client';

import PageContent from '@/app/lib/page-content/PageContent';
import { useGetJobStoriesQuery } from '@/app/store/hackerNewsApi';
import { ContentViewType, ListingType } from '@/app/types';

export default function Page() {
  const { data, isError, isFetching } = useGetJobStoriesQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching) return <div>Loading</div>;

  if (data) {
    return (
      <PageContent
        data={data}
        type={ContentViewType.LISTING}
        itemsOnPage={16}
        typeOfListing={ListingType.JOB}
      />
    );
  }
}
