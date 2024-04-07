import { useGetStoryQuery } from '@/app/store/hackerNewsApi';
import { ListingType, StoryPreviewType } from '@/app/types';
import Link from 'next/dist/client/link';
import SocialsInfo from '../socials-info/SocialsInfo';

export default function Listing({
  id,
  type,
}: {
  id: number;
  type: ListingType | undefined;
}) {
  const { data, isLoading, isError } = useGetStoryQuery({ id });

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    const { title, time, score, descendants, by, url } = data;

    const cutUrl =
      url === 'https://www.google.com/'
        ? 'Unknown source'
        : url.slice(url.indexOf('//') + 2, url.indexOf('/', 8));

    return (
      <li className="border-2">
        <Link
          className="flex h-full flex-col items-center justify-center gap-1 p-2 text-center"
          target={type === ListingType.JOB ? '_blank' : '_self'}
          href={type === ListingType.JOB ? url : `/${id}`}
        >
          <h6 className="flex flex-grow items-center justify-center text-h6-semibold">
            {title}
          </h6>
          <div className="flex w-full items-center justify-between gap-4 text-palette-gray-light">
            <span className="text-caption">{by}</span>
            {type === ListingType.JOB ? (
              <div>{cutUrl}</div>
            ) : (
              <SocialsInfo
                score={score}
                descendants={descendants}
                type={StoryPreviewType.MEDIUM}
              />
            )}

            <span className="text-caption">{time}</span>
          </div>
        </Link>
      </li>
    );
  }
  return null;
}
