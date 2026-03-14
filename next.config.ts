/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This generates static files for Netlify
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
}

module.exports = nextConfig