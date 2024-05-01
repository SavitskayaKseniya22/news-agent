/* eslint-disable react/no-array-index-key */

import { StoryPreviewType } from '@/app/types';

export default function StoryPlaceholder({
  length,
  type,
}: {
  length: number;
  type: StoryPreviewType;
}) {
  if (type === StoryPreviewType.MEDIUM) {
    return new Array(length).fill(0).map((j, i) => (
      <li className="flex w-full animate-pulse flex-col gap-2 border-2" key={i}>
        <div className="h-16 w-full flex-grow bg-palette-gray-light" />
        <div className="flex flex-col items-center justify-center gap-4 p-2 text-center">
          <div className="h-3 w-32 flex-grow rounded-full bg-palette-gray-light" />
          <div className="flex w-full items-center justify-between gap-4 text-palette-gray-light">
            <div className="h-2 w-4 flex-grow rounded-full bg-palette-gray-light" />
            <div className="h-2 w-16 flex-grow rounded-full bg-palette-gray-light" />
          </div>
        </div>
      </li>
    ));
  }

  if (type === StoryPreviewType.SMALL) {
    return new Array(length).fill(0).map((j, i) => (
      <li className="flex min-h-24 flex-shrink-0 animate-pulse gap-4" key={i}>
        <div className="h-24 w-32 flex-shrink-0 bg-palette-gray-dark" />
        <div className="flex flex-grow flex-col justify-center gap-4 p-2">
          <div className="flex flex-grow flex-col gap-2">
            <div className="h-3 rounded-full bg-palette-gray-dark" />
            <div className="h-3 rounded-full bg-palette-gray-dark" />
            <div className="h-3 rounded-full bg-palette-gray-dark" />
          </div>
          <div className="flex justify-between gap-4">
            <div className="h-2 w-2 flex-grow rounded-full bg-palette-gray-dark" />
            <div className="h-2 w-8 flex-grow rounded-full bg-palette-gray-dark" />
          </div>
        </div>
      </li>
    ));
  }
}
