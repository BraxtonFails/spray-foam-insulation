/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization where possible
  output: 'export',
  
  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  },

  // Enable React strict mode for better performance
  reactStrictMode: true
}

module.exports = nextConfig 