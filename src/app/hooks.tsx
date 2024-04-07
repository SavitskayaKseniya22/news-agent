import { useState, useEffect } from 'react';
import { useGetStoryQuery } from './store/hackerNewsApi';
import { useGetPhotosQuery } from './store/pexelsApi';
import { FullStoryType } from './types';

export default function useGetFullStory({ id }: { id: number }) {
  const [data, setData] = useState<null | FullStoryType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const content = useGetStoryQuery({ id });

  const photo = useGetPhotosQuery(
    {
      query:
        content.data?.title
          .split('')
          .filter((item) => item.match(/[\s\w]/))
          .join('') || 'unknown',
    },
    { skip: !content.isSuccess },
  );

  useEffect(() => {
    if (content.isSuccess && photo.isSuccess && content.data !== null) {
      setIsSuccess(true);
      setData({
        story: content.data,
        photo: photo.data,
      });
    }
  }, [content.data, content.isSuccess, photo.data, photo.isSuccess]);

  useEffect(() => {
    if (content.isError || photo.isError) {
      setIsError(true);
    }
  }, [content.isError, photo.isError]);

  useEffect(() => {
    if (content.isLoading || photo.isLoading) {
      setIsLoading(true);
    }

    if (!content.isLoading && !photo.isLoading && (isSuccess || isError)) {
      setIsLoading(false);
    }
  }, [content.isLoading, isError, isSuccess, photo.isLoading]);

  return { data, isLoading, isError, isSuccess };
}
