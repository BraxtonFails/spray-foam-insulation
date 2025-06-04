'use client';

import React from 'react';
import Link from 'next/link';
import type { Service } from '../../types';
import Image from 'next/image';

export default function Services() {
  const services: Service[] = [
    {
      id: 'residential',
      title: 'Residential Insulation',
      description: 'Our residential spray foam insulation services provide superior energy efficiency and comfort for your home.',
      benefits: [
        'Reduced energy bills',
        'Improved indoor air quality',
        'Better temperature control',
        'Noise reduction',
        'Moisture control'
      ],
      applications: [
        'Attics',
        'Walls',
        'Crawl spaces',
        'Basements',
        'New construction'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Insulation',
      description: 'Professional insulation solutions for commercial buildings that improve energy efficiency and reduce operating costs.',
      benefits: [
        'Lower energy costs',
        'Improved building efficiency',
        'Better climate control',
        'Enhanced structural integrity',
        'LEED certification support'
      ],
      applications: [
        'Office buildings',
        'Warehouses',
        'Retail spaces',
        'Industrial facilities',
        'Schools and institutions'
      ]
    },
    {
      id: 'agricultural',
      title: 'Agricultural Insulation',
      description: 'Specialized insulation solutions for agricultural buildings to maintain optimal conditions for livestock and stored products.',
      benefits: [
        'Temperature regulation',
        'Moisture control',
        'Energy cost reduction',
        'Better climate control',
        'Extended building life'
      ],
      applications: [
        'Barns',
        'Storage facilities',
        'Livestock buildings',
        'Equipment storage',
        'Processing facilities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            We provide comprehensive spray foam insulation solutions for residential, commercial, and agricultural properties.
            Our expert team ensures professional installation and superior results.
          </p>
        </div>
      </section>

      {/* Residential Section */}
      <section id="residential" className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Residential3.jpeg"
                alt="Residential Spray Foam Insulation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Residential Insulation</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our residential spray foam insulation services provide homeowners with superior energy efficiency and comfort.
                  We use high-quality materials and advanced application techniques to ensure optimal results.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Attic and roof insulation</li>
                  <li>Wall cavity insulation</li>
                  <li>Crawl space insulation</li>
                  <li>Basement insulation</li>
                  <li>Air sealing and weatherization</li>
                </ul>
                <p>
                  Our experienced team will assess your home's needs and recommend the best insulation solution for your specific situation.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-primary mt-8"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section id="commercial" className="section bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Commercial Insulation</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We provide comprehensive insulation solutions for commercial buildings, helping businesses reduce energy costs
                  and maintain comfortable environments for employees and customers.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Office buildings</li>
                  <li>Retail spaces</li>
                  <li>Warehouses</li>
                  <li>Industrial facilities</li>
                  <li>Schools and institutions</li>
                </ul>
                <p>
                  Our commercial insulation services are designed to meet building codes and energy efficiency requirements
                  while providing long-lasting performance.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-primary mt-8"
              >
                Request Consultation
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/Commercial6.jpeg"
                alt="Commercial Spray Foam Insulation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Section */}
      <section id="agricultural" className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Commercial2.jpeg"
                alt="Agricultural Spray Foam Insulation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Agricultural Insulation</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our agricultural insulation services help farmers and ranchers maintain optimal conditions in their facilities
                  while reducing energy costs and improving efficiency.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Barns and stables</li>
                  <li>Storage facilities</li>
                  <li>Equipment buildings</li>
                  <li>Livestock facilities</li>
                  <li>Temperature-controlled spaces</li>
                </ul>
                <p>
                  We understand the unique requirements of agricultural buildings and provide customized insulation solutions
                  to meet your specific needs.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-primary mt-8"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-700 dark:bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and estimate. Our team is ready to help you find the perfect insulation solution for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-100 text-primary-700 dark:text-primary-800 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white hover:scale-[1.02] hover:shadow-lg"
            >
              Contact Us Today
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 