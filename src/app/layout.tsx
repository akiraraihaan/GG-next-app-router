"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import { useState } from 'react';
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })
const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [varz, setVarz] = useState(0);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
        <h1>
          layout (home)
        </h1>
        <div className="m-8 text-4xl">
          {varz} (global layout)
        </div>
        <button className="m-2 font-bold text-green-800" onClick={() => setVarz(varz + 1)}>Increment</button>
        <button className="m-2 font-bold text-red-800" onClick={() => setVarz(varz - 1)}>Decrement</button>
      </body>
    </html>
  )
}
