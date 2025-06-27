import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to the login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const adminAuth = request.cookies.get("adminAuth");

  if (!adminAuth) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
