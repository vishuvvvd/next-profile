import { defaultLocale, localePrefix, locales } from "@/constants/language";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({ locales, localePrefix, defaultLocale });
