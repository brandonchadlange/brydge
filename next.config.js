/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["brydge.s3.eu-central-1.amazonaws.com", "picsum.photos"]
  }
};

module.exports = nextConfig;
