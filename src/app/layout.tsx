import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleTagManager from '../components/GoogleTagManager'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Advanced Insulation - Professional Spray Foam Insulation Services',
  description: 'Professional spray foam insulation services in Winnsboro, TX and surrounding areas. Residential, commercial, and agricultural insulation solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className={poppins.className}>
        <GoogleTagManager />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 