import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import React from 'react'

export function middleware(request: NextRequest) {
  const isLogin = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config ={
  matcher: ["/dashboard/:path*", "/product/:path*"]
}
