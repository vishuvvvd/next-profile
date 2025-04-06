import { NextResponse } from 'next/server';

import { skills } from '@/assets/data/skills';
import { handleApiError } from '@/lib/errorHandler';

export async function GET() {
  try {
    const data = skills;
    return NextResponse.json({ data });
  } catch (error) {
    return handleApiError(NextResponse, error); // Handle errors globally
  }
}
