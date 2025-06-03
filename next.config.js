/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization where possible
  output: 'export',
  
  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  },

  // Minimize JavaScript bundles
  swcMinify: true,

  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Disable server-side rendering for static pages
  // This will make the site load faster after initial deployment
  experimental: {
    isrMemoryCacheSize: 0, // Disable ISR cache
  },

  // Environment variables
  env: {
    EMAIL_USER: 'sprayfoam@rocketmail.com',
    EMAIL_PASSWORD: 'wirbiglxxfrpfoup'
  }
}

module.exports = nextConfig 