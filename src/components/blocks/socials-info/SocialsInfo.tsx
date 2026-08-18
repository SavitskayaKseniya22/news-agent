import { StoryPreviewType } from '@/app/types';
import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function SocialsInfo({
  score,
  descendants,
  type,
  classList,
}: {
  score: number;
  descendants: number;
  type: StoryPreviewType;
  classList?: string;
}) {
  return type === StoryPreviewType.GIGANTIC ? (
    <ul className={`text-content font-title flex justify-center gap-4 ${classList}`}>
      <li className="flex items-center gap-1">
        <HeartIcon className="text-palette-blue-dark h-6 w-6" />
        {score}
      </li>
      <li className="flex items-center gap-1">
        <ChatBubbleLeftIcon className="text-palette-blue-dark h-6 w-6" />
        {descendants}
      </li>
    </ul>
  ) : (
    <ul className={`text-caption font-title flex justify-center gap-4 ${classList}`}>
      <li className="flex items-center gap-1">
        <HeartIcon className="text-palette-blue-dark h-4 w-4" />
        {score}
      </li>
      <li className="flex items-center gap-1">
        <ChatBubbleLeftIcon className="text-palette-blue-dark h-4 w-4" />
        {descendants}
      </li>
    </ul>
  );
}
