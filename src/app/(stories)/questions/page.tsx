'use client';

import PageContent from '@/app/lib/page-content/PageContent';
import { useGetAskStoriesQuery } from '@/app/store/hackerNewsApi';
import { ContentViewType, ListingType } from '@/app/types';

export default function Page() {
  const { data, isError, isLoading } = useGetAskStoriesQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return (
      <PageContent
        data={data}
        type={ContentViewType.LISTING}
        itemsOnPage={16}
        typeOfListing={ListingType.QUESTION}
      />
    );
  }
}
