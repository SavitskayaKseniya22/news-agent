import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  const pexelsUrl = new URL('https://api.pexels.com/v1/search');

  searchParams.forEach((value, key) => {
    pexelsUrl.searchParams.set(key, value);
  });

  const response = await fetch(pexelsUrl, {
    headers: {
      Authorization: process.env.API_PEXELS_KEY!,
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: response.status });
  }

  return NextResponse.json(await response.json());
}
