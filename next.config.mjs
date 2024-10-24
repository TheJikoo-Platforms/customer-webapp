/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  reloadOnOnline: true,
  aggressiveFrontEndNavCaching: true,
  cacheOnFrontEndNav: true,
  swMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPWA({
  output: "standalone",
  images: {
    domains: ["jikoo-store.s3.eu-north-1.amazonaws.com"], // Add the allowed image domain here
  },
});

// export default nextConfig;
