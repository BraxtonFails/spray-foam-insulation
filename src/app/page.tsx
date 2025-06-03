'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const images = [
    '/images/Commercial3.jpeg',
    '/images/Residential3.jpeg',
    '/images/Commercial2.jpeg',
    '/images/Commercial4.jpeg',
    '/images/Residential4.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Spray Foam Insulation Project ${index + 1}`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Advanced Insulation
          </h1>
          <p className="text-xl sm:text-2xl mb-8 drop-shadow-lg">
            Professional Spray Foam Insulation Services in Winnsboro, TX
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Residential Insulation</h3>
              <p className="text-gray-600 mb-4">
                Improve your home's energy efficiency and comfort with our professional spray foam insulation services.
              </p>
              <Link href="/services#residential" className="text-primary hover:text-green-600 font-medium">
                Learn More →
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Commercial Insulation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive insulation solutions for commercial buildings, warehouses, and industrial facilities.
              </p>
              <Link href="/services#commercial" className="text-primary hover:text-green-600 font-medium">
                Learn More →
              </Link>
            </div>

            {/* Agricultural */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Agricultural Insulation</h3>
              <p className="text-gray-600 mb-4">
                Specialized insulation solutions for barns, storage facilities, and agricultural buildings.
              </p>
              <Link href="/services#agricultural" className="text-primary hover:text-green-600 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Advanced Insulation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-primary text-4xl mb-4">20+</div>
              <h3 className="font-bold mb-2">Years Experience</h3>
              <p className="text-gray-600">Serving East Texas with excellence</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-4">100%</div>
              <h3 className="font-bold mb-2">Satisfaction</h3>
              <p className="text-gray-600">Guaranteed quality service</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-4">24/7</div>
              <h3 className="font-bold mb-2">Support</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-4">1000+</div>
              <h3 className="font-bold mb-2">Projects</h3>
              <p className="text-gray-600">Successfully completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Improve Your Property's Insulation?
          </h2>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 