import { NextResponse } from 'next/server';

import { education } from '@/assets/data/education';
import { handleApiError } from '@/lib/errorHandler';

export async function GET() {
  try {
    const data = education;
    return NextResponse.json({ data });
  } catch (error) {
    return handleApiError(NextResponse, error); // Handle errors globally
  }
}
