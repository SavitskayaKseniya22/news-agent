import Button from '@/components/elements/Button/Button';
import SVGWrapper from '@/components/elements/SVGWrapper/SVGWrapper';
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

const emptyString = '...';

function reduceDots(arr: (number | '...')[]) {
  return arr.filter((elem, index) => elem !== emptyString || arr[index - 1] !== emptyString);
}

export default function Pagination({
  totalItems = 0,
  currentPage = 1,
  onPageChange,
  isDisabled = false,
  totalPages = 1,
}: {
  totalItems?: number;
  currentPage?: number;
  onPageChange: (value: number) => void;
  isDisabled?: boolean;
  totalPages?: number;
}) {
  const pages: number[] = Array.from({ length: totalPages }, (_, index) => index + 1);

  const filteredPages = pages.map((page) => {
    const isItOnMargin = page === 1 || page === pages[pages.length - 1];
    const isItInMiddleThree = page === currentPage - 1 || page === currentPage + 1 || page === currentPage;

    if (isItOnMargin || isItInMiddleThree) {
      return page;
    } else return emptyString;
  });

  const reducedPages = reduceDots(filteredPages);

  return (
    <div className="flex items-center gap-1 sm:gap-4">
      <Button
        type="button"
        onClick={() => onPageChange(1)}
        disabled={isDisabled || totalItems === 0 || currentPage === 1}
        view="transparent"
      >
        <SVGWrapper view={'stroke'}>
          <ChevronDoubleLeftIcon />
        </SVGWrapper>
      </Button>
      <Button
        view={'transparent'}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isDisabled || totalItems === 0 || currentPage === 1}
        size="small"
      >
        <SVGWrapper view={'stroke'}>
          <ChevronLeftIcon />
        </SVGWrapper>
      </Button>

      <div className="flex items-center justify-center gap-4 p-1">
        {reducedPages.map((page, i) => {
          return page == emptyString ? (
            <Button view={'transparent'} key={page + i} size="small" disabled>
              {page}
            </Button>
          ) : (
            <Button
              view={page == currentPage ? 'secondary' : 'transparent'}
              key={page}
              onClick={() => onPageChange(page)}
              disabled={isDisabled || totalItems === 0 || page == currentPage}
              size="small"
            >
              {page}
            </Button>
          );
        })}
      </div>

      <Button
        view={'transparent'}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isDisabled || totalItems === 0 || currentPage === totalPages}
        size="small"
      >
        <SVGWrapper view={'stroke'}>
          <ChevronRightIcon />
        </SVGWrapper>
      </Button>
      <Button
        type="button"
        onClick={() => onPageChange(totalPages)}
        disabled={isDisabled || totalItems === 0 || currentPage == totalPages}
        view="transparent"
      >
        <SVGWrapper view={'stroke'}>
          <ChevronDoubleRightIcon />
        </SVGWrapper>
      </Button>
    </div>
  );
}
