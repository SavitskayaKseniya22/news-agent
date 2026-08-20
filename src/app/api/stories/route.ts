import { PexelsResponseType } from '@/api/pexelsApi';
import { StoryType } from '@/api/queryApi';
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

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const type = searchParams.get('type') as StoryType;

  const page = Number(searchParams.get('page') ?? 1);
  const perPage = Number(searchParams.get('perPage') ?? 20);

  // Валидация type
  if (!type || !(type in storyEndpoints)) {
    return NextResponse.json({ error: 'Invalid story type' }, { status: 400 });
  }

  // Валидация page
  if (!Number.isInteger(page) || page < 1) {
    return NextResponse.json({ error: 'Page must be a positive integer' }, { status: 400 });
  }

  // Валидация perPage
  if (!Number.isInteger(perPage) || perPage < 1 || perPage > 100) {
    return NextResponse.json(
      {
        error: 'perPage must be an integer between 1 and 100',
      },
      { status: 400 },
    );
  }

  // 1. Получаем все IDs
  const idsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/${storyEndpoints[type]}.json`);

  if (!idsResponse.ok) {
    return NextResponse.json({ error: 'Failed to fetch story IDs' }, { status: idsResponse.status });
  }

  const ids: number[] = await idsResponse.json();

  // 2. Рассчитываем pagination
  const totalItems = ids.length;
  const totalPages = Math.ceil(totalItems / perPage);

  // Если page выходит за пределы
  if (page > totalPages && totalPages > 0) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const pageIds = ids.slice(startIndex, endIndex);

  const nextPage = page < totalPages ? page + 1 : null;

  // 3. Получаем stories текущей страницы
  const storyResults = await Promise.allSettled(
    pageIds.map(async (id) => {
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

  // 4. Получаем картинки

  let fullStories: {
    story: ParsedContentDetailesType;
    photo: null | PexelsResponseType;
  }[] = stories.map((story) => ({
    story,
    photo: null,
  }));

  if (type != StoryType.ASK && type != StoryType.JOB) {
    fullStories = await Promise.all(
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
  }

  // 5. Возвращаем данные + pagination
  return NextResponse.json({
    stories: fullStories,

    pagination: {
      page,
      perPage,
      totalItems,
      totalPages,
      nextPage,
    },
  });
}
