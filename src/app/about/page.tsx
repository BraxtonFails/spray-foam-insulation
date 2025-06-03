'use client';

import React from 'react';
import Link from 'next/link';
import type { TeamMember } from '../../types';

export default function About() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Travis Fails',
      role: 'Owner',
      description: '20+ years of experience in spray foam insulation'
    },
    {
      name: 'Harvey Mendez',
      role: 'Senior Technician',
      description: '15+ years of commercial insulation expertise'
    },
    {
      name: 'Braxton Fails',
      role: 'Social Media Manager',
      description: '2 years of social media management'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Company Overview */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-12">About Advanced Insulation</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              Advanced Insulation has been serving Winnsboro and the surrounding East Texas area for over two decades. 
              We specialize in providing top-quality spray foam insulation solutions for residential, commercial, and 
              agricultural properties.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to quality, attention to detail, and customer satisfaction has made us the trusted choice 
              for insulation services in East Texas. We use only the highest quality materials and stay up-to-date with 
              the latest industry standards and techniques.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our materials or workmanship.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and professionalism.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority, from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
} 