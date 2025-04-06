/* eslint-disable import/no-unused-modules */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { NextRequest, NextResponse } from 'next/server';

export async function errorMiddleware(req: NextRequest, next: Function) {
  try {
    return await next();
  } catch (error) {
    // Catch and handle any errors thrown by the next() function
    console.error(error); // Log error for debugging

    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message:
          error instanceof Error ? error.message : 'Unknown error occurred.',
      }),
      { status: 500 }
    );
  }
}
