import { StoryPreviewType, FullStoryType } from '@/app/types';
import Link from 'next/link';
import Image from 'next/image';
import SocialsInfo from '../../../components/blocks/socials-info/SocialsInfo';
import { CustomLink } from '@/components/elements/Link/Link';

export default function StoryPreview({ type, data }: { type: StoryPreviewType; data: FullStoryType }) {
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
          <p className="text-content self-end">{detailedTime}</p>
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
        <Link href={`/story/${id}`} className="relative flex h-full w-full shrink-0 flex-col">
          <Image
            width={300}
            height={350}
            src={imageSrc}
            alt={imageAlt}
            className="h-16 w-full grow object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP0+Q8AAZ0BTSKFuNAAAAAASUVORK5CYII="
          />
          <div className="flex flex-col items-center justify-center gap-4 p-2 text-center">
            <h6 className="text-h6 flex grow items-center justify-center">{title}</h6>
            <div className="text-palette-gray-light flex w-full items-center justify-between gap-4">
              <h6 className="text-caption">{by}</h6>
              <h6 className="text-caption">{time}</h6>
            </div>
            <div className="absolute top-0 right-0 bg-white p-2">
              <SocialsInfo score={score} descendants={descendants} type={type} />
            </div>
          </div>
        </Link>
      </li>
    );
  }
}
