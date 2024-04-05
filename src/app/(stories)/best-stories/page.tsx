'use client';

import { useGetBestStoriesQuery } from '@/app/store/hackerNewsApi';

import PageContent from '../lib/page-content/PageContent';

export default function Page() {
  const { data, isError, isLoading } = useGetBestStoriesQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return <PageContent data={data} />;
  }
}
