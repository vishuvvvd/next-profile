import { NextResponse } from 'next/server';

import { experiance } from '@/assets/data/experaince';
import { handleApiError } from '@/lib/errorHandler';

export async function GET() {
  try {
    const data = experiance;
    return NextResponse.json({ data });
  } catch (error) {
    return handleApiError(NextResponse, error); // Handle errors globally
  }
}
