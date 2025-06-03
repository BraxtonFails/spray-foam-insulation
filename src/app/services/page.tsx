'use client';

import React from 'react';
import Link from 'next/link';
import type { Service } from '../../types';

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
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="space-y-16">
          {services.map((service) => (
            <section key={service.id} id={service.id} className="scroll-mt-16">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-8">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Applications</h3>
                      <ul className="space-y-2">
                        {service.applications.map((application, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
} 