import { StoryPreviewType } from '@/app/types';
import { Stories } from '../../../story/Story';

export default function WidgetPopular({ ids }: { ids: number[] }) {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-palette-gray-light p-4">
      <h4 className="text-h4 text-white">Popular today</h4>
      <ul className="flex flex-grow flex-col justify-between gap-2">
        <Stories kids={ids.slice(0, 7)} type={StoryPreviewType.SMALL} />
      </ul>
    </div>
  );
}
