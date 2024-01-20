import { type NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const reqPath = req.nextUrl.pathname;

  // Coming soon
  const comingSoonPath = ["/main-event"];
  if (comingSoonPath.includes(reqPath)) {
    return NextResponse.redirect(new URL("/coming-soon", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon.ico (PWA icon file)
     * - robots.txt (SEO file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.ico|robots.txt).*)",
  ],
};
