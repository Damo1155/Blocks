import { NextConfig } from 'next';
import BundleAnalyser from '@next/bundle-analyzer';

const nextConfig = (): NextConfig => ({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgo: false },
        },
      ],
    });

    return config;
  },
});

let defaultConfiguration = nextConfig;

if (process.env.ENABLE_BUNDLE_ANALYSER === 'true') {
  defaultConfiguration = BundleAnalyser({
    enabled: process.env.ENABLE_BUNDLE_ANALYSER === 'true',
  });
}

export default defaultConfiguration;
