import { NextResponse } from 'next/server';

import { hireme } from '@/assets/data/hireme';
import { handleApiError } from '@/lib/errorHandler';

export async function GET() {
  try {
    const data = hireme;
    return NextResponse.json({ data });
  } catch (error) {
    return handleApiError(NextResponse, error); // Handle errors globally
  }
}
