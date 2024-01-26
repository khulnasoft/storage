import * as khulnasoftBlob from '@khulnasoft/blob';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const prefix = searchParams.get('prefix') ?? '';
  let hasMore = true;
  let cursor: string | undefined;
  while (hasMore) {
    // eslint-disable-next-line no-await-in-loop -- [@khulnasoft/style-guide@5 migration]
    const listResult = await khulnasoftBlob.list({
      cursor,
      prefix,
    });
    // eslint-disable-next-line no-await-in-loop -- [@khulnasoft/style-guide@5 migration]
    await khulnasoftBlob.del(listResult.blobs.map((blob) => blob.url));
    hasMore = listResult.hasMore;
    cursor = listResult.cursor;
  }

  return NextResponse.json({ success: true });
}
