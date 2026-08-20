'use client';

import Stories from '@/components/blocks/stories/Stories';
import { StoryType } from '@/api/queryApi';

export default function Page() {
  return <Stories pageType={StoryType.SHOW} itemsOnPage={16} />;
}
