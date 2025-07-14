"use server"

import { cookies } from "next/headers";
import { COOKIES_KEYS } from "@/lib/constants/cookies-keys";

export async function toggleLanguage(lang: string) {
    const cookieStore = await cookies();
    cookieStore.set(COOKIES_KEYS.LOCALE, lang);
    return {
        success: true,
        message: "Language toggled successfully",
    }
}