'use client';

import Stories from '@/components/blocks/stories/stories';
import { StoryType } from '@/api/query-api';

export default function Page() {
  return <Stories pageType={StoryType.NEW} itemsOnPage={16} />;
}
