import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale, } from 'next-intl';

import { routing } from '@/i18n/routing';

export const metadata = {
  title: 'Vishal Patil',
  description: 'Developer'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
