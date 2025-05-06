"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './about/profile/navbar'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [varz, setVarz] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
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
