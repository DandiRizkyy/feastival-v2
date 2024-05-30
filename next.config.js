/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'via.placeholder.com',
      'res.cloudinary.com',
      'images.unsplash.com',
      'cdn.sanity.io',
      'www.exscribe.com',
      's3-ap-southeast-1.amazonaws.com',
      's-light.tiket.photos',
      'encrypted-tbn2.gstatic.com',
      'awsimages.detik.net.id',
      'encrypted-tbn3.gstatic.com',
      'encrypted-tbn0.gstatic.com',
      'soundcorners.com',
    ],
  },
};

module.exports = nextConfig;
