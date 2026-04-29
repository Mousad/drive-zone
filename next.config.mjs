const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
    ],
    unoptimized: true,
  },

  experimental: {
    serverActions: {
      allowedOrigins: ['*.vusercontent.net'],
    },
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig