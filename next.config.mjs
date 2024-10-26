import BundleAnalyser from '@next/bundle-analyzer';

// Configuration
import envConfiguration from './.env-cmdrc.json' assert { type: 'json' };

/** @type {Promise<import('next').NextConfig>} */
const nextConfig = async () => ({
  env: envConfiguration['local'],
});

let defaultConfiguration = nextConfig;

if (process.env.ENABLE_BUNDLE_ANALYSER === 'true') {
  defaultConfiguration = BundleAnalyser({
    enabled: process.env.ENABLE_BUNDLE_ANALYSER === 'true',
  });
}

export default defaultConfiguration;
