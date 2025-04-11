/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { REVALIDATE, XREVALIDATE } from './constants';
import { routing } from './i18n/routing';

// export default createMiddleware(routing);
const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const response = (intlMiddleware as any)(req);
  
  const revalidate = req?.nextUrl?.searchParams?.get(REVALIDATE) || 'false';

  response.headers.set(XREVALIDATE, revalidate);
  
  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // matcher: '/((?!api|_next|.*\\..*).*)',
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
