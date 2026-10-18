import { get } from '@khulnasoft/edge-config';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(): Promise<Response> {
  try {
    const before = Date.now();
    const keyForTest = await get<string>('keyForTest');
    const after = Date.now();
    return NextResponse.json({ keyForTest, durationMs: after - before });
  } catch (e) {
    return NextResponse.json(
      { message: (e as Error).message },
      { status: 500 },
    );
  }
}
