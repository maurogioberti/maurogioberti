/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export for GitHub Pages
    images: {
      unoptimized: true, // Disable image optimization for GitHub Pages
    },
    basePath: '/maurogioberti', // Set base path to your repository name
    assetPrefix: '/maurogioberti/', // Prefix assets with your repository name
  };

export default nextConfig;
