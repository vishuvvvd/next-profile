'use server';

import { headers } from 'next/headers';
import { getLocale } from 'next-intl/server';

import { XREVALIDATE } from '@/constants';

export async function getServerLocaleRevalidate() {
  const headersList = await headers();
  const locale = await getLocale();
  const revalidate = headersList.get(XREVALIDATE);
  const forwardedProto = headersList.get('x-forwarded-proto');

  const protocol = forwardedProto || 'http'; // fallback to 'http'
  const host = headersList.get('x-forwarded-host') ?? headersList.get('host');
  const hostUrl = `${protocol}://${host}`;
  return { locale, revalidate, hostUrl };
}
