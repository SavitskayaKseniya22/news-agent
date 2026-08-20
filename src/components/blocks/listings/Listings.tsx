import { ParsedContentDetailesType, StoryPreviewType } from '@/app/types';
import Link from 'next/dist/client/link';
import { StoryType, useGetStoriesQuery } from '@/api/queryApi';
import SocialsInfo from '../socials-info/SocialsInfo';
import ListingPlaceholder from '../listing-placeholder/ListingPlaceholder';
import { useState } from 'react';
import Pagination from '../pagination/Pagination';
import Spinner from '@/components/elements/Spinner/Spinner';

function Listing({ pageType, data }: { pageType: StoryType; data: ParsedContentDetailesType }) {
  const { title, time, score, descendants, by, url, id } = data;

  const cutUrl =
    url === 'https://www.google.com/' ? 'Unknown source' : url.slice(url.indexOf('//') + 2, url.indexOf('/', 8));

  return (
    <li className="border">
      <Link
        className="flex h-full flex-col items-center justify-center gap-4 p-2 text-center"
        target={pageType === StoryType.JOB ? '_blank' : '_self'}
        href={pageType === StoryType.JOB ? url : `/story/${id}`}
      >
        <p className="text-caption self-end">{time}</p>
        <h3 className="text-h6 text-center font-semibold">{title}</h3>

        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <p className="text-caption text-palette-gray-light">
            by <span className="font-bold italic">{by}</span>
          </p>
          {pageType === StoryType.JOB ? (
            <div className="text-palette-gray-light w-full sm:w-auto">{cutUrl}</div>
          ) : (
            <SocialsInfo
              score={score}
              descendants={descendants}
              type={StoryPreviewType.MEDIUM}
              classList="sm:w-auto "
            />
          )}
        </div>
      </Link>
    </li>
  );
}

export default function Listings({ itemsOnPage, pageType }: { itemsOnPage: number; pageType: StoryType }) {
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
            <Listing data={item.story} key={item.story.id} pageType={pageType} />
          ))}
        </ul>
      )}
      <Pagination
        totalItems={data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isDisabled={isFetching}
      />
    </main>
  );
}
