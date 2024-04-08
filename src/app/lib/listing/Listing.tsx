import {
  ListingType,
  ParsedContentDetailesType,
  StoryPreviewType,
} from '@/app/types';
import Link from 'next/dist/client/link';
import { useGetAllStoriesQuery } from '@/app/store/queryApi';
import SocialsInfo from '../socials-info/SocialsInfo';

export default function Listing({
  type,
  data,
}: {
  type: ListingType;
  data: ParsedContentDetailesType;
}) {
  const { title, time, score, descendants, by, url, id } = data;

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

export function Listings({
  kids,
  type,
}: {
  kids: number[];
  type: ListingType;
}) {
  const { data, isLoading, isError } = useGetAllStoriesQuery(kids);

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  if (data) {
    return data.length ? (
      data.map((item) => <Listing data={item} key={item.id} type={type} />)
    ) : (
      <li className="text-content">No listings here yet</li>
    );
  }
}
