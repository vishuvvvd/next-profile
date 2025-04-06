import { NextResponse } from 'next/server';

import { goodHabbits } from '@/assets/data/dev-good-habbits';
import { handleApiError } from '@/lib/errorHandler';

export async function GET() {
  try {
    const data = goodHabbits;
    return NextResponse.json({ data });
  } catch (error) {
    return handleApiError(NextResponse, error); // Handle errors globally
  }
}
