import { StoryPreviewType, FullStoryType } from '@/app/types';
import Link from 'next/link';
import Image from 'next/image';
import SocialsInfo from '../socials-info/SocialsInfo';
import { CustomLink } from '@/components/elements/Link/Link';

export default function Story({ type, data }: { type: StoryPreviewType; data: FullStoryType }) {
  const { story, photo } = data;
  const { title, time, score, descendants, by, type: storyType, id } = story;

  const imageSrc = photo?.photos[0]?.src?.medium || '/image-placeholder.png';
  const imageAlt = photo?.photos[0]?.alt || story.title;

  const detailedTime = new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  if (type === StoryPreviewType.GIGANTIC) {
    return (
      <div className="flex h-112 gap-8 overflow-hidden">
        <div className="relative w-[30%] shrink-0">
          <Image
            fill
            src={imageSrc}
            alt={imageAlt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP0+Q8AAZ0BTSKFuNAAAAAASUVORK5CYII="
            className="object-cover"
          />
        </div>

        <div className="flex w-[70%] min-w-0 flex-col gap-2">
          <p className="text-caption self-end">{detailedTime}</p>
          <div className="flex min-h-0 grow flex-col justify-center gap-2">
            <CustomLink href={`/story/${id}`}>
              <h1 className="text-h1 wrap-break-word">{title}</h1>
            </CustomLink>
            <p className="text-content">
              by <span className="font-bold italic">{by}</span>
            </p>
          </div>
          <SocialsInfo score={score} descendants={descendants} type={type} classList="self-end" />
        </div>
      </div>
    );
  }
  if (type === StoryPreviewType.SMALL) {
    return (
      <li className="shrink-0 grow-0">
        <Link href={`/story/${id}`} className="flex gap-4">
          <div className="relative w-[30%] shrink-0">
            <Image
              fill
              src={imageSrc}
              alt={imageAlt}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk4OSsBwAAtgCTDcYLIwAAAABJRU5ErkJggg=="

              className="object-cover"
            />
          </div>

          <div className="flex grow flex-col justify-center gap-4">
            <h3 className="text-h3">{title}</h3>
            <div className="flex justify-between gap-4">
              <p className="text-caption text-palette-blue-dark">{storyType}</p>
              <p className="text-caption">{time}</p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
  if (type === StoryPreviewType.MEDIUM) {
    return (
      <li className="gap-2 border-2">
        <Link href={`/story/${id}`} className="relative flex h-full w-full shrink-0 flex-col gap-4 p-2">
          <p className="text-caption self-end">{time}</p>
          <div className="relative h-14 w-full grow">
            <Image
              fill
              src={imageSrc}
              alt={imageAlt}
              placeholder="blur"
              className="object-cover"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP0+Q8AAZ0BTSKFuNAAAAAASUVORK5CYII="
            />
          </div>

          <h3 className="text-h6 text-center font-semibold">{title}</h3>
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <p className="text-caption text-palette-gray-light">
              by <span className="font-bold italic">{by}</span>
            </p>
            <SocialsInfo score={score} descendants={descendants} type={type} />
          </div>
        </Link>
      </li>
    );
  }
}
