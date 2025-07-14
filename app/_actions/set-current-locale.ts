"use server"
import { cookies } from "next/headers";
import { COOKIES_KEYS } from "@/lib/constants/cookies-keys";
import { getLocale } from "next-intl/server";

export async function setCurrentLocale(localParam?: string): Promise<{locale: string, dir: string}> {
  const locale = await getLocale();
  const _cookies = await cookies();
  if (localParam && locale != localParam) {
    _cookies.set(COOKIES_KEYS.LOCALE, locale);
  }
  return {locale, dir: locale === "ar" ? "rtl" : "ltr"};
}