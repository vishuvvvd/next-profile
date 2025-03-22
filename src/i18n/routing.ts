import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "hi"],
  //  localeDetection: false,
  localePrefix: "as-needed",
  // Used when no locale matches
  defaultLocale: "en",
});
