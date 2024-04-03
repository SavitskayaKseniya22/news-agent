export enum ContentType {
  JOB = 'job',
  STORY = 'story',
  COMMENT = 'comment',
  POLL = 'poll',
  POLLOPT = 'pollopt',
}

export interface ContentDetailesType {
  id: number;
  deleted?: boolean;
  type?: string;
  by?: string;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
}

export interface PexelsResponseType {
  total_results: number;
  page: number;
  per_page: number;
  photos: [
    {
      id: number;
      width: number;
      height: number;
      url: string;
      photographer: 'Lukas Rodriguez';
      photographer_url: 'https://www.pexels.com/@lukas-rodriguez-1845331';
      photographer_id: number;
      avg_color: '#374824';
      src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
      };
      liked: boolean;
      alt: string;
    },
  ];
  next_page: string;
}

export type FullStoryType = {
  story: ContentDetailesType;
  photo: PexelsResponseType;
  time: string;
};

export interface UserType {
  id: string;
  created: number;
  karma: number;
  delay?: number;
  about?: string;
  submitted?: number[];
}

export enum StoryPreviewType {
  SMALL,
  MEDIUM,
  BIG,
  GIGANTIC,
}
