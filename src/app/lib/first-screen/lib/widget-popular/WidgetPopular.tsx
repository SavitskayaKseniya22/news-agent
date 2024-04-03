import { StoryPreviewType } from '@/app/types';
import Story from '../../../story/Story';

export default function WidgetPopular({ ids }: { ids: number[] }) {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-palette-gray-light p-4">
      <h4 className="text-h4 text-white">Popular today</h4>
      <ul className="flex flex-grow flex-col justify-between gap-2">
        {new Array(7).fill(0).map((item, index) => (
          <Story
            id={ids[index]}
            key={ids[index]}
            type={StoryPreviewType.SMALL}
          />
        ))}
      </ul>
    </div>
  );
}
