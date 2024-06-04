import { ListingType, ParsedContentDetailesType, StoryPreviewType } from '@/app/types';
import Link from 'next/dist/client/link';
import { useGetAllStoriesQuery } from '@/app/store/queryApi';
import SocialsInfo from '../socials-info/SocialsInfo';
import ListingPlaceholder from './ListingPlaceholder';

export default function Listing({ type, data }: { type: ListingType; data: ParsedContentDetailesType }) {
  const { title, time, score, descendants, by, url, id } = data;

  const cutUrl =
    url === 'https://www.google.com/' ? 'Unknown source' : url.slice(url.indexOf('//') + 2, url.indexOf('/', 8));

  return (
    <li className="border-2">
      <Link
        className="flex h-full flex-col items-center justify-center gap-4 p-2 text-center"
        target={type === ListingType.JOB ? '_blank' : '_self'}
        href={type === ListingType.JOB ? url : `/story/${id}`}
      >
        <h6 className="flex flex-grow items-center justify-center text-h6-semibold">{title}</h6>
        <div className="flex w-full flex-wrap items-center justify-between gap-2 text-palette-gray-light">
          <span className="order-2 text-caption sm:order-1">{by}</span>
          {type === ListingType.JOB ? (
            <div className="order-1 w-full sm:order-2 sm:w-auto">{cutUrl}</div>
          ) : (
            <SocialsInfo
              score={score}
              descendants={descendants}
              type={StoryPreviewType.MEDIUM}
              classList="order-2 sm:w-auto "
            />
          )}

          <span className="order-3 text-caption">{time}</span>
        </div>
      </Link>
    </li>
  );
}

export function Listings({ kids, type }: { kids: number[]; type: ListingType }) {
  const { data, isFetching, isError } = useGetAllStoriesQuery(kids);

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching) return <ListingPlaceholder length={kids.length} />;

  if (data) {
    return data.length ? (
      data.map((item) => <Listing data={item} key={item.id} type={type} />)
    ) : (
      <li className="text-content">No listings here yet</li>
    );
  }
}
