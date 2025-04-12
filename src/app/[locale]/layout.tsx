import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale, } from 'next-intl';

import { fullWidth } from '@/assets/styles';
import theme from '@/assets/theme';
import AppFooter from '@/components/footer';
import AppHeader from '@/components/header';
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
    <html lang={locale} style={fullWidth}>
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NextIntlClientProvider locale={locale}>
              <AppHeader />
              {children}
              <AppFooter />
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
