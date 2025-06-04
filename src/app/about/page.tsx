'use client';

import React from 'react';
import Link from 'next/link';
import type { TeamMember } from '../../types';
import Image from 'next/image';

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Advanced Insulation is a leading provider of spray foam insulation services in Winnsboro, TX and surrounding areas.
            With over 20 years of experience, we deliver quality solutions for residential, commercial, and agricultural properties.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Commercial3.jpeg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2000, Advanced Insulation has grown from a small local business to a trusted name in spray foam insulation
                  across East Texas. Our commitment to quality and customer satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  We take pride in our experienced team of professionals who are dedicated to delivering superior results on every project.
                  From residential homes to large commercial facilities, we bring the same level of expertise and attention to detail.
                </p>
                <p>
                  Our mission is to help property owners achieve optimal energy efficiency while creating comfortable living and working
                  environments through advanced insulation solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
              <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We use only the highest quality materials and follow industry best practices to ensure lasting results.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
              <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Communication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain clear communication throughout the project to ensure customer satisfaction.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
              <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work efficiently to minimize disruption while delivering superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={`/images/Commercial${index + 4}.jpeg`}
                    alt={`Team Member ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-700 dark:bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your insulation needs and get a free estimate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-100 text-primary-700 dark:text-primary-800 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white hover:scale-[1.02] hover:shadow-lg"
            >
              Get in Touch
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