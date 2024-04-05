'use client';

import { useGetJobStoriesQuery } from '@/app/store/hackerNewsApi';
import { ContentViewType, ListingType } from '@/app/types';
import PageContent from '../lib/page-content/PageContent';

export default function Page() {
  const { data, isError, isLoading } = useGetJobStoriesQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

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
