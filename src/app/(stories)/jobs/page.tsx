'use client';

import { StoryType } from '@/api/queryApi';
import Listings from '@/components/blocks/listings/Listings';

export default function Page() {
  return <Listings pageType={StoryType.JOB} itemsOnPage={24} />;
}
