import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request : any) {
    const url = request.nextUrl.pathname;
    const userData = request.cookies.get('refreshToken');

    console.log(url)
}
 
// See "Matching Paths" below to learn more
export const config = {
    // matcher: ['/login', '/admin/:path*'],
    matcher: ['/:path*'],
};