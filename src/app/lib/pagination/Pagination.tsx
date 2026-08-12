import Button from '@/components/Button/Button';
import SVGWrapper from '@/components/SVGWrapper/SVGWrapper';
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
    <div className="flex items-center gap-1 sm:gap-4">
      <Button type="button" onClick={onFirst} disabled={isItFirst} view="transparent">
        <SVGWrapper view={'stroke'}>
          <ChevronDoubleLeftIcon />
        </SVGWrapper>
      </Button>

      <Button type="button" onClick={onDecrease} disabled={isItFirst} view="transparent">
        <SVGWrapper view={'stroke'}>
          <ChevronLeftIcon />
        </SVGWrapper>
      </Button>

      <ul className="flex items-center justify-center gap-4 p-1">
        <li>
          <Button type="button" onClick={onDecrease} disabled={isItFirst} view="transparent">
            {page - 1}
          </Button>
        </li>

        <li className="text-palette-blue-dark">{page}</li>

        <li>
          <Button type="button" onClick={onIncrease} disabled={isItLast} view="transparent">
            {page + 1}
          </Button>
        </li>
      </ul>

      <Button type="button" onClick={onIncrease} disabled={isItLast} view="transparent">
        <SVGWrapper view={'stroke'}>
          <ChevronRightIcon />
        </SVGWrapper>
      </Button>

      <Button type="button" onClick={onLast} disabled={isItLast} view="transparent">
        <SVGWrapper view={'stroke'}>
          <ChevronDoubleRightIcon />
        </SVGWrapper>
      </Button>
    </div>
  );
}
