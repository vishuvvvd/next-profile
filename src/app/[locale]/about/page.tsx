import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

export default function AboutPage() {
  const t = useTranslations('HOMEPAGE');
  return (
    <div>
      <h1>{t('TITLE')}</h1>
      <Link href="/about">{t('ABOUT')}</Link>
    </div>
  );
}
