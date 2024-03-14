import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('zoommentToken')?.value;
  const url = request.nextUrl;
  const newToken = url.searchParams.get('zoommentToken');

  //TODO add token validation

  if (newToken) {
    let res = NextResponse.redirect(new URL('/dashboard', url));

    url.searchParams.delete('zoommentToken');
    res.cookies.set('zoommentToken', newToken, {
      expires: new Date(+new Date() + 30000000000),
      path: '/',
      domain: `.${url.hostname}`,
      sameSite: 'none',
      secure: true,
    });

    return res;
  }

  if (token && url.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/dashboard', url));
  }

  if (!token && url.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/auth', url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
