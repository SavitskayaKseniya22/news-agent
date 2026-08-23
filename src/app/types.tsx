import { PexelsResponseType } from '@/api/pexels-api';

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
export interface ParsedContentDetailesType {
  id: number;
  deleted?: boolean;
  dead?: boolean;
  parent?: number;
  poll?: number;
  parts?: number[];
  time: string;
  title: string;
  score: number;
  descendants: number;
  by: string;
  type: string;
  text: string;
  kids: number[];
  url: string;
}

export type FullStoryType = {
  story: ParsedContentDetailesType;
  photo: PexelsResponseType | null;
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
