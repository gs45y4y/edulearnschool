import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  /**
   * 1. DEFINE PROTECTED FOLDERS
   * Add any folder names here that you want to hide from scrapers.
   * Example: '/math' will protect everything inside the math folder.
   */
  const protectedPaths = [
    '/math',
    '/science',
    '/spanish',
    '/bw',
    '/active'
  ];

  // Check if the current request is trying to access a protected folder
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtected) {
    // 2. GET THE TOKEN FROM THE URL
    const token = searchParams.get('token');

   
    const secret = process.env.MY_SECRET_TOKEN;

    
    if (token !== secret) {
      
      return new NextResponse(
        `<html>
          <body style="background:#000;color:#ffdb7d;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;">
            <h1 style="border-bottom:1px solid #5e4a18;padding-bottom:10px;">403 - Access Denied</h1>
            <p style="color:#8a6a28;">Direct access or unauthorized scraping detected.</p>
            <a href="/" style="color:#ffdb7d;margin-top:20px;text-decoration:none;border:1px solid #5e4a18;padding:10px 20px;">Return to Hub</a>
          </body>
        </html>`,
        {
          status: 403,
          headers: { 'content-type': 'text/html' },
        }
      );
    }
  }


  return NextResponse.next();
}

/**
 * OPTIONAL: CONFIG
 * This tells Vercel exactly which files to run the middleware on 
 * to save on execution usage.
 */
export const config = {
  matcher: [
    '/math/:path*',
    '/science/:path*',
    '/spanish/:path*',
    '/bw/:path*',
  ],
};