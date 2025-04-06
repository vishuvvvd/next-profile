import { NextResponse } from 'next/server';

import { about } from '@/assets/data/about';
import { handleApiError } from '@/lib/errorHandler';

export async function GET() {
  try {
    const data = about;
    return NextResponse.json({ data });
  } catch (error) {
    return handleApiError(NextResponse, error); // Handle errors globally
  }
}
