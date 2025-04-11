'use server';

import { headers } from 'next/headers';
import { getLocale } from 'next-intl/server';

import { XREVALIDATE } from '@/constants';

export async function getServerLocaleRevalidate() {
  const headersList = headers();
  const locale = await getLocale();
  const revalidate = (await headersList).get(XREVALIDATE);
  return { locale, revalidate };
}
