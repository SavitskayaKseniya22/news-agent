/* eslint-disable jsx-a11y/control-has-associated-label */

import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

export default function Pagination({
  onIncrease,
  onDecrease,
  onLast,
  onFirst,
  page,
  range,
}: {
  onIncrease: () => void;
  onDecrease: () => void;
  onLast: () => void;
  onFirst: () => void;
  page: number;
  range: { min: number; max: number };
}) {
  const isItFirst = page - 1 < range.min;
  const isItLast = page + 1 > range.max;

  return (
    <div className="flex gap-1 sm:gap-4">
      <button type="button" onClick={onFirst} disabled={isItFirst} className="btn">
        <ChevronDoubleLeftIcon />
      </button>

      <button type="button" onClick={onDecrease} disabled={isItFirst} className="btn">
        <ChevronLeftIcon />
      </button>

      <ul className="flex items-center justify-center gap-4 p-1">
        <li>
          <button type="button" onClick={onDecrease} disabled={isItFirst}>
            {page - 1}
          </button>
        </li>

        <li className="text-palette-blue-dark">{page}</li>

        <li>
          <button type="button" onClick={onIncrease} disabled={isItLast}>
            {page + 1}
          </button>
        </li>
      </ul>

      <button type="button" onClick={onIncrease} disabled={isItLast} className="btn">
        <ChevronRightIcon />
      </button>

      <button type="button" onClick={onLast} disabled={isItLast} className="btn">
        <ChevronDoubleRightIcon />
      </button>
    </div>
  );
}
