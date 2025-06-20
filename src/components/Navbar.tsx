'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className={`${isHomePage ? 'absolute top-0 left-0 right-0 z-50 py-4' : 'w-full bg-gray-100 py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`${isHomePage 
          ? 'bg-gradient-to-r from-primary-600/95 to-primary-700/95 backdrop-blur-sm' 
          : 'bg-gradient-to-r from-primary-600 to-primary-700'
        } shadow-xl rounded-2xl border border-primary-500/50`}>
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="relative h-14 w-44 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/images/sprayfoamlogo.jpg"
                    alt="Advanced Insulation Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center flex-1 justify-center space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-4 py-2 text-white font-medium transition-all duration-300 hover:text-primary-100 rounded-lg hover:bg-white/10 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                  </Link>
                ))}
              </div>

              {/* Get Started Button */}
              <div className="hidden md:flex items-center">
                <Link
                  href="/contact"
                  className="bg-white text-primary-700 hover:bg-gray-50 font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-white hover:text-primary-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4">
                <div className={`px-2 pt-2 pb-4 space-y-1 ${isHomePage 
                  ? 'bg-primary-700/95 backdrop-blur-sm' 
                  : 'bg-primary-700'
                } rounded-lg border border-primary-500/50 shadow-lg`}>
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-white hover:text-primary-100 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-primary-500/50">
                    <Link
                      href="/contact"
                      className="bg-white text-primary-700 hover:bg-gray-50 font-bold py-3 px-4 rounded-lg transition-all duration-300 block text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 