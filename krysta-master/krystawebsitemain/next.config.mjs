/** @type {import('next').NextConfig} */

// Check if the build is for production
const isProd = process.env.NODE_ENV === 'production';

// Final config object
const nextConfig = {
  output: 'export', // Required for static export (next export)
  
  // These are important for GitHub Pages to find assets and routes correctly
  basePath: isProd ? '/krysta-master' : '',
  assetPrefix: isProd ? '/krysta-master/' : '',

  // Optional: skip lint/type checks during build (useful if deploying quickly or for testing)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Important: needed when using static export and Next.js's Image component
  images: {
    unoptimized: true,
  },
};

// Export the config using ES modules syntax
export default nextConfig;
