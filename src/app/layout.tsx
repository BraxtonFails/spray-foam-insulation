import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleTagManager from '../components/GoogleTagManager'
import { ThemeProvider } from '../context/ThemeProvider'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Advanced Insulation - Winnsboro, TX',
  description: 'Professional spray foam insulation services in Winnsboro, TX and surrounding areas. Energy-efficient solutions for residential and commercial properties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className={poppins.className}>
        <ThemeProvider>
          <GoogleTagManager />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 