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
  if (type === StoryPreviewType.GIGANTIC) {
    return (
      <ul className={`text-h6 flex justify-center gap-4 font-semibold ${classList}`}>
        <li className="flex items-center gap-2">
          <HeartIcon className="text-palette-blue-dark h-6 w-6" />
          {score}
        </li>
        <li className="flex items-center gap-2">
          <ChatBubbleLeftIcon className="text-palette-blue-dark h-6 w-6" />
          {descendants}
        </li>
      </ul>
    );
  }
  return (
    <ul className={`text-caption flex justify-center gap-4 ${classList}`}>
      <li className="flex items-center gap-2">
        <HeartIcon className="text-palette-blue-dark h-4 w-4" />
        {score}
      </li>
      <li className="flex items-center gap-2">
        <ChatBubbleLeftIcon className="text-palette-blue-dark h-4 w-4" />
        {descendants}
      </li>
    </ul>
  );
}
