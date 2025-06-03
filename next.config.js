/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    unoptimized: true
  },

  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Environment Variables
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  }
}

module.exports = nextConfig 