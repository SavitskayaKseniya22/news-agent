export async function GET() {
  const response = await fetch('https://api.api-ninjas.com/v2/quoteoftheday', {
    headers: {
      'X-Api-Key': process.env.API_QUOTE_KEY!,
    },
  });

  if (!response.ok) {
    return Response.json({ error: 'Failed to fetch quote' }, { status: response.status });
  }

  return Response.json(await response.json());
}
