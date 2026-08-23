'use client';

import { StoryType } from '@/api/query-api';
import Listings from '@/components/blocks/listings/listings';

export default function Page() {
  return <Listings pageType={StoryType.ASK} itemsOnPage={20} />;
}
