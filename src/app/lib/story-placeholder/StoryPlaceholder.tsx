import { StoryPreviewType } from '@/app/types';

export default function StoryPlaceholder({ length, type }: { length: number; type: StoryPreviewType }) {
  if (type === StoryPreviewType.GIGANTIC) {
    return new Array(length).fill(0).map((j, i) => (
      <div className="flex h-112 animate-pulse gap-8 overflow-hidden" key={i}>
        <div className="bg-palette-gray-dark h-full w-[30%] shrink-0"></div>
        <div className="flex w-[70%] min-w-0 flex-col gap-2">
          <div className="bg-palette-gray-dark h-6 w-32 self-end rounded-full" />
          <div className="flex min-h-0 grow flex-col justify-center gap-4">
            <div className="bg-palette-gray-dark h-12 rounded-full" />
            <div className="bg-palette-gray-dark h-6 w-40 rounded-full" />
          </div>
        </div>
      </div>
    ));
  }
  if (type === StoryPreviewType.MEDIUM) {
    return new Array(length).fill(0).map((j, i) => (
      <li className="flex w-full animate-pulse flex-col gap-2 border-2" key={i}>
        <div className="bg-palette-gray-light h-16 w-full grow" />
        <div className="flex flex-col items-center justify-center gap-4 p-2 text-center">
          <div className="bg-palette-gray-light h-3 w-32 grow rounded-full" />
          <div className="text-palette-gray-light flex w-full items-center justify-between gap-4">
            <div className="bg-palette-gray-light h-2 w-4 grow rounded-full" />
            <div className="bg-palette-gray-light h-2 w-16 grow rounded-full" />
          </div>
        </div>
      </li>
    ));
  }

  if (type === StoryPreviewType.SMALL) {
    return new Array(length).fill(0).map((j, i) => (
      <li className="flex min-h-24 shrink-0 animate-pulse gap-4" key={i}>
        <div className="bg-palette-gray-dark h-24 w-32 shrink-0" />
        <div className="flex grow flex-col justify-center gap-4 p-2">
          <div className="flex grow flex-col gap-2">
            <div className="bg-palette-gray-dark h-3 rounded-full" />
            <div className="bg-palette-gray-dark h-3 rounded-full" />
            <div className="bg-palette-gray-dark h-3 rounded-full" />
          </div>
          <div className="flex justify-between gap-4">
            <div className="bg-palette-gray-dark h-2 w-2 grow rounded-full" />
            <div className="bg-palette-gray-dark h-2 w-8 grow rounded-full" />
          </div>
        </div>
      </li>
    ));
  }
}
