import useGetFullStory from '@/app/hooks';
import { refineTitle } from '@/app/utils';
import Link from 'next/dist/client/link';
import Image from 'next/image';

export default function WidgetPopularItem({ id }: { id: number }) {
  const { data, isLoading, isError } = useGetFullStory({ id });

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading</div>;

  return (
    <li>
      <Link href="/#" className="flex gap-4">
        <Image
          width={130}
          height={100}
          src={data?.photo.photos[0].src.medium || '/image-placeholder.png'}
          alt={data?.photo.photos[0].alt || data?.story.title || 'news'}
          className="h-24 w-32 flex-shrink-0 bg-white object-cover object-center"
        />
        <div className="flex flex-grow flex-col justify-center gap-4">
          <h6 className="text-h6-bold">
            {(data?.story.title && refineTitle(data.story.title)) ||
              'Item Without Title'}
          </h6>
          <div className="flex justify-between">
            <span className="text-caption text-palette-blue-light">
              {data?.story.type || 'unclassified'}
            </span>
            <span className="text-caption">{data?.time}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
