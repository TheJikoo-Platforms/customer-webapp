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
    disableDevLogs: true
  }
});

export default withPWA({
  output: 'standalone',
});

// export default nextConfig;
