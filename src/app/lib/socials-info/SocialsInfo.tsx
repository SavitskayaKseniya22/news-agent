/* eslint-disable react/require-default-props */
import { StoryPreviewType } from '@/app/types';
import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function SocialsInfo({
  score,
  descendants,
  type,
}: {
  score: number;
  descendants: number;
  type: StoryPreviewType;
}) {
  if (type === StoryPreviewType.GIGANTIC) {
    return (
      <ul className="flex justify-center gap-4 text-h6-semibold text-black">
        <li className="flex items-center gap-2 ">
          <HeartIcon className="h-6 w-6 text-palette-blue-light" />
          {score}
        </li>
        <li className="flex items-center gap-2">
          <ChatBubbleLeftIcon className="h-6 w-6 text-palette-blue-light" />
          {descendants}
        </li>
      </ul>
    );
  }
  return (
    <ul className="flex justify-center gap-4 text-caption text-black">
      <li className="flex items-center gap-2">
        <HeartIcon className="h-4 w-4 text-palette-blue-dark" />
        {score}
      </li>
      <li className="flex items-center gap-2">
        <ChatBubbleLeftIcon className="h-4 w-4 text-palette-blue-dark" />
        {descendants}
      </li>
    </ul>
  );
}
