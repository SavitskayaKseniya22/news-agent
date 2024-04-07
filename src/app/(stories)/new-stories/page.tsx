'use client';

import { useGetNewStoriesQuery } from '@/app/store/hackerNewsApi';
import { ContentViewType } from '@/app/types';
import PageContent from '../lib/page-content/PageContent';

export default function Page() {
  const { data, isError, isLoading } = useGetNewStoriesQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return (
      <PageContent data={data} type={ContentViewType.STORY} itemsOnPage={16} />
    );
  }
}
