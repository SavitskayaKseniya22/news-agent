'use client';

import PageContent from '@/app/lib/page-content/PageContent';
import { useGetBestStoriesQuery } from '@/app/store/hackerNewsApi';
import { ContentViewType } from '@/app/types';

export default function Page() {
  const { data, isError, isLoading } = useGetBestStoriesQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return (
      <PageContent data={data} type={ContentViewType.STORY} itemsOnPage={16} />
    );
  }
}
