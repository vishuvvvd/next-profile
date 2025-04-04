import { defineRouting } from 'next-intl/routing';

import { defaultLocale, localePrefix, locales } from '@/constants/language';

export const routing = defineRouting({ locales, localePrefix, defaultLocale });
