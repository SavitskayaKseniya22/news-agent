import { PexelsResponseType } from '@/api/pexelsApi';
import { ContentDetailesType, ParsedContentDetailesType } from '@/app/types';
import { refineStoryResponse } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

const storyEndpoints = {
  top: 'topstories',
  new: 'newstories',
  best: 'beststories',
  ask: 'askstories',
  show: 'showstories',
  job: 'jobstories',
} as const;

type StoryType = keyof typeof storyEndpoints;

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type') as StoryType;

  if (!type || !(type in storyEndpoints)) {
    return NextResponse.json({ error: 'Invalid story type' }, { status: 400 });
  }

  // 1. Получаем IDs

  const idsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/${storyEndpoints[type]}.json`);

  if (!idsResponse.ok) {
    return NextResponse.json({ error: 'Failed to fetch story IDs' }, { status: idsResponse.status });
  }

  const ids: number[] = await idsResponse.json();

  const limitedIds = ids.slice(0, 30);

  // 2. Получаем stories

  const storyResults = await Promise.allSettled(
    limitedIds.map(async (id) => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

      if (!response.ok) {
        throw new Error(`Failed to fetch story ${id}`);
      }

      const story: ContentDetailesType = await response.json();

      const refinedStory = refineStoryResponse({
        response: story,
      });

      if (!refinedStory) {
        throw new Error(`Invalid story ${id}`);
      }

      return refinedStory;
    }),
  );

  const stories = storyResults
    .filter((result): result is PromiseFulfilledResult<ParsedContentDetailesType> => result.status === 'fulfilled')
    .map((result) => result.value);

  // 3. Получаем картинки

  const fullStories = await Promise.all(
    stories.map(async (story) => {
      try {
        const response = await fetch(
          `${request.nextUrl.origin}/api/pictures?${new URLSearchParams({
            query: story.title,
            per_page: '3',
          })}`,
        );

        if (!response.ok) {
          return {
            story,
            photo: null,
          };
        }

        const photo: PexelsResponseType = await response.json();

        return {
          story,
          photo,
        };
      } catch (error) {
        console.error(`Failed to fetch image for "${story.title}"`, error);

        return {
          story,
          photo: null,
        };
      }
    }),
  );

  return NextResponse.json(fullStories);
}
