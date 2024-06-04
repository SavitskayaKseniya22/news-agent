import { StoryPreviewType, FullStoryType } from '@/app/types';
import Link from 'next/link';
import Image from 'next/image';
import SocialsInfo from '../socials-info/SocialsInfo';

export default function StoryPreview({ type, data }: { type: StoryPreviewType; data: FullStoryType }) {
  const { story, photo } = data;
  const { title, time, score, descendants, by, type: storyType, id } = story;

  const imageSrc = photo?.photos[0]?.src?.medium || '/image-placeholder.png';
  const imageAlt = photo?.photos[0]?.alt || story.title;

  if (type === StoryPreviewType.SMALL) {
    return (
      <li className="flex-shrink-0 flex-grow-0 xl:h-24">
        <Link href={`/story/${id}`} className="flex items-center gap-4">
          <div className="relative h-32 w-20 flex-shrink-0 xl:h-24 xl:w-32">
            <Image
              fill
              src={imageSrc}
              alt={imageAlt}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk4OSsBwAAtgCTDcYLIwAAAABJRU5ErkJggg=="
              objectFit="cover"
            />
          </div>

          <div className="flex flex-grow flex-col justify-center gap-4">
            <h6 className="text-h6-bold">{title}</h6>
            <div className="flex justify-between gap-4">
              <span className="text-caption text-palette-blue-light">{storyType}</span>
              <span className="text-caption">{time}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  }
  if (type === StoryPreviewType.GIGANTIC) {
    return (
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex justify-between">
          <h6 className="text-h6-bold text-white">{time}</h6>
          <div className="flex flex-col gap-4">
            <h6 className="text-h6-bold text-white">{by}</h6>
            <h6 className="text-caption text-palette-blue-light">{storyType}</h6>
          </div>
        </div>

        <h1 className="text-h1 text-white">{title}</h1>

        <div className="flex items-center justify-between">
          <SocialsInfo score={score} descendants={descendants} type={type} />

          <Link className="btn btn_orange" href={`/story/${id}`}>
            Follow
          </Link>
        </div>
      </div>
    );
  }
  if (type === StoryPreviewType.MEDIUM) {
    return (
      <li className="gap-2 border-2">
        <Link href={`/story/${id}`} className="relative flex h-full w-full flex-shrink-0 flex-col">
          <Image
            width={300}
            height={350}
            src={imageSrc}
            alt={imageAlt}
            className="h-16 w-full flex-grow object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP0+Q8AAZ0BTSKFuNAAAAAASUVORK5CYII="
          />
          <div className="flex flex-col items-center justify-center gap-4 p-2 text-center">
            <h6 className="flex flex-grow items-center justify-center text-h6-semibold">{title}</h6>
            <div className="flex w-full items-center justify-between gap-4 text-palette-gray-light">
              <span className="text-caption">{by}</span>
              <span className="text-caption">{time}</span>
            </div>
            <div className="absolute right-0 top-0 bg-white p-2">
              <SocialsInfo score={score} descendants={descendants} type={type} />
            </div>
          </div>
        </Link>
      </li>
    );
  }
}
