import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set to true to lock the site to homepage-only (demo mode)
// Set to false to open all pages
const DEMO_MODE = true

export function middleware(request: NextRequest) {
  if (!DEMO_MODE) return NextResponse.next()

  const { pathname } = request.nextUrl

  // Allow homepage and all Next.js internals
  if (pathname === '/') return NextResponse.next()

  // Redirect everything else back to homepage
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|fonts|favicon.ico|api).*)'],
}
