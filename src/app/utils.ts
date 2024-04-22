import { ContentDetailesType, ParsedContentDetailesType } from './types';

export function parseUnixTimeStamp(timestamp: number) {
  const dateObject = new Date(timestamp * 1000);
  return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
}

export function refineTitle(string: string) {
  return string
    .split(' ')
    .filter((item) => item.length > 0)
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ')
    .replace('Ask HN: ', '')
    .replace('Show HN: ', '');
}

export function refineStoryResponse({
  response,
}: {
  response: ContentDetailesType;
}): ParsedContentDetailesType | null {
  if (
    response.type === 'comment' &&
    (response.text === undefined || response.text.length === 0)
  ) {
    return null;
  }
  return {
    ...response,
    time:
      (response.time && parseUnixTimeStamp(response.time)) || 'Some time ago',
    title: response.title ? refineTitle(response.title) : 'Item Without Title',
    score: response.score || 0,
    descendants: response.descendants || 0,
    by: response.by || 'Unknown author',
    type: response.type || 'Unclassified',
    text: response.text || '',
    kids: response.kids || [],
    url: response.url || 'https://www.google.com/',
  };
}
