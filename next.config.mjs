/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "punepropertyinvestor.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/properties",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/luxury-properties-in-pune",
        destination: "/projects?type=luxury",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/mantra-burgundy-mundhwa",
        destination: "/projects/mantra-burgundy",
        permanent: true,
      },
      {
        source: "/the-ark-voyage-nibm",
        destination: "/projects/the-ark-voyage",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-kharadi",
        destination: "/locations/kharadi",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-dhanori",
        destination: "/locations/dhanori",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-wagholi",
        destination: "/locations/wagholi",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-charholi",
        destination: "/locations/charholi",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-mundhwa",
        destination: "/locations/mundhwa",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-nibm",
        destination: "/locations/nibm",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-hadapsar",
        destination: "/locations/hadapsar",
        permanent: true,
      },
      {
        source: "/2-bhk-flats-in-keshav-nagar",
        destination: "/locations/mundhwa",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/contact-us?subject=careers",
        permanent: true,
      },
      {
        source: "/career-in-pune",
        destination: "/contact-us?subject=careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
