/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import PageContent from '@/app/lib/page-content/PageContent';
import RefetchButton from '@/app/lib/refetch-button/RefetchButton';
import { useGetBestStoriesQuery } from '@/app/store/hackerNewsApi';
import { ContentViewType } from '@/app/types';

export default function Page() {
  const { data, isError, isFetching, refetch } = useGetBestStoriesQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching) return <div>Loading</div>;

  if (data) {
    return (
      <>
        <PageContent
          data={data}
          type={ContentViewType.STORY}
          itemsOnPage={16}
        />
        <RefetchButton
          istItDisabled={!data}
          onClick={() => {
            refetch();
          }}
        />
      </>
    );
  }
}
