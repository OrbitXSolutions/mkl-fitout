import { NextResponse, type NextRequest } from "next/server";
import { COOKIES_KEYS } from "./lib/constants/cookies-keys";

export async function middleware(request: NextRequest) {
  //debugger;
  const lang = request.nextUrl.searchParams.get("lang");
  const locale = request.cookies.get(COOKIES_KEYS.LOCALE)?.value || "en";
  if (lang && lang !== locale) {
    request.cookies.set(COOKIES_KEYS.LOCALE, lang);
  }
  return NextResponse.next({request})
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
