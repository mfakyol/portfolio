// Server-only locale resolution. Importing next/headers keeps this out of any
// client bundle (it throws if used in a Client Component).
import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "@/lib/i18n";

// Reading the cookie opts the route into dynamic rendering — fine for this site.
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
