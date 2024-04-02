import { useState, useEffect } from 'react';
import { useGetStoryQuery } from './store/hackerNewsApi';
import { useGetPhotosQuery } from './store/pexelsApi';
import { FullStoryType } from './types';
import { parseUnixTimeStamp } from './utils';

export default function useGetFullStory({ id }: { id: number }) {
  const [data, setData] = useState<null | FullStoryType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const content = useGetStoryQuery({ id });

  const photo = useGetPhotosQuery(
    { query: content.data?.title || 'unknown' },
    { skip: !content.isSuccess },
  );

  useEffect(() => {
    if (content.isSuccess && photo.isSuccess) {
      setIsSuccess(true);
      setData({
        story: content.data,
        photo: photo.data,
        time:
          (content.data.time && parseUnixTimeStamp(content.data.time)) ||
          'Some time ago',
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
