import { Listings } from '@/app/lib/listing/Listing';
import Pagination from '@/app/lib/pagination/Pagination';
import { Stories } from '@/app/lib/story/Story';
import { ContentViewType, ListingType, StoryPreviewType } from '@/app/types';
import { useRef, useReducer, useState, useEffect } from 'react';

export function reducer(
  state: { page: number },
  action: {
    type: 'increase_page' | 'decrease_page' | 'change_page';
    value: number;
  },
) {
  switch (action.type) {
    case 'increase_page': {
      return {
        ...state,
        page: state.page + 1,
      };
    }
    case 'decrease_page': {
      return {
        ...state,
        page: state.page - 1,
      };
    }
    case 'change_page': {
      return {
        ...state,
        page: action.value,
      };
    }

    default: {
      return state;
    }
  }
}

export default function PageContent({
  data,
  type,
  itemsOnPage,
  typeOfListing,
}: {
  data: number[];
  type: ContentViewType;
  itemsOnPage: number;
  // eslint-disable-next-line react/require-default-props
  typeOfListing?: ListingType;
}) {
  const initialState = { page: 1 };

  const range = useRef({
    min: 1,
    max: Math.ceil(data.length / itemsOnPage),
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const [content, setContent] = useState<number[]>(data.slice(0, itemsOnPage));

  useEffect(() => {
    if (data) {
      setContent(
        data.slice(
          (state.page - 1) * itemsOnPage,
          (state.page - 1) * itemsOnPage + itemsOnPage,
        ),
      );
    }
  }, [state.page]);

  return (
    <main className="flex w-320 flex-grow flex-col items-center justify-between gap-8 p-2">
      {type === 'story' && (
        <ul className="grid flex-grow grid-cols-4 grid-rows-4 gap-2">
          <Stories kids={content} type={StoryPreviewType.MEDIUM} />
        </ul>
      )}

      {type === 'listing' && typeOfListing !== undefined && (
        <ul className="grid flex-grow grid-cols-2 grid-rows-8 gap-4">
          <Listings kids={content} type={typeOfListing} />
        </ul>
      )}

      <Pagination
        onIncrease={() => {
          if (state.page < range.current.max) {
            dispatch({ type: 'increase_page', value: 0 });
          }
        }}
        onDecrease={() => {
          if (state.page > range.current.min) {
            dispatch({ type: 'decrease_page', value: 0 });
          }
        }}
        onLast={() => {
          if (state.page !== range.current.max) {
            dispatch({ type: 'change_page', value: range.current.max });
          }
        }}
        onFirst={() => {
          if (state.page !== range.current.min) {
            dispatch({ type: 'change_page', value: range.current.min });
          }
        }}
        page={state.page}
        range={{ min: range.current.min, max: range.current.max }}
      />
    </main>
  );
}