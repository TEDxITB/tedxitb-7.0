import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const reqPath = req.nextUrl.pathname;
    const token = req.nextauth.token;

    const unAuthenticatedRoute = ["/auth/sign-in", "/auth/verify-request"];
    const authenticatedRoute = ["/main-event/ticket"];

    // Unathenticated user requests for authenticated only page
    if (!token && authenticatedRoute.some((path) => reqPath.startsWith(path))) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.nextUrl));
    }

    // Authenticated user requests for unauthenticated only page
    if (
      token &&
      unAuthenticatedRoute.some((path) => reqPath.startsWith(path))
    ) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // middleware runs only if authorized() returns true
      authorized: ({ req, token }) => true,
    },
  }
);

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
