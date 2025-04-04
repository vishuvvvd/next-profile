import { useTranslations } from 'next-intl';

import AppLayoutWrapper from '@/components/layout-wrapper';
import { Link } from '@/i18n/navigation';

export default function AboutPage() {
  const t = useTranslations('HOMEPAGE');
  return (
    <AppLayoutWrapper>
      <h1>{t('TITLE')}</h1>
      <Link href="/about">{t('ABOUT')}</Link>
    </AppLayoutWrapper>
  );
}
