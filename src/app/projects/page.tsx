'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'agricultural', name: 'Agricultural' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Home Insulation',
      category: 'residential',
      description: 'Complete spray foam insulation for walls and ceiling, providing superior thermal protection and energy efficiency.',
      details: 'Enhanced home comfort with reduced energy costs and improved air quality.',
      image: '/images/Residential3.jpeg'
    },
    {
      id: 2,
      title: 'Commercial Warehouse',
      category: 'commercial',
      description: 'Large-scale warehouse insulation project with spray foam application for optimal temperature control.',
      details: 'Improved energy efficiency and consistent temperature maintenance throughout the facility.',
      image: '/images/Commercial6.jpeg'
    },
    {
      id: 3,
      title: 'Storage Shed',
      category: 'commercial',
      description: 'Comprehensive insulation for storage facility, protecting valuable items from temperature fluctuations.',
      details: 'Weather-resistant insulation ensuring year-round protection for stored items.',
      image: '/images/Commercial2.jpeg'
    },
    {
      id: 4,
      title: 'Air Condition Ducts',
      category: 'commercial',
      description: 'Professional ductwork insulation to minimize energy loss and improve HVAC system efficiency.',
      details: 'Enhanced air distribution and reduced energy waste in commercial HVAC systems.',
      image: '/images/Commercial3.jpeg'
    },
    {
      id: 5,
      title: 'Residential Shop',
      category: 'commercial',
      description: 'Custom insulation solution for a residential workshop, providing year-round comfort and energy savings.',
      details: 'Temperature-controlled environment for optimal working conditions.',
      image: '/images/Commercial4.jpeg'
    },
    {
      id: 6,
      title: 'Tiny House',
      category: 'residential',
      description: 'Specialized insulation for compact living space, maximizing comfort in a minimal footprint.',
      details: 'Space-efficient insulation solution providing excellent thermal performance.',
      image: '/images/Residential4.jpeg'
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-4 py-2 text-sm font-medium
                  ${category.id === selectedCategory
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }
                  ${category.id === categories[0].id ? 'rounded-l-md' : ''}
                  ${category.id === categories[categories.length - 1].id ? 'rounded-r-md' : ''}
                  border border-gray-300
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600">{project.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation and estimate for your insulation needs.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white hover:bg-green-500 font-bold py-3 px-8 rounded-lg inline-block transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 