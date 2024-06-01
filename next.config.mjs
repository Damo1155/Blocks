// Configuration
import envConfiguration from './.env-cmdrc.json' assert { type: 'json' };

/** @type {Promise<import('next').NextConfig>} */
const nextConfig = async () => ({
  env: envConfiguration['local'],
});

export default nextConfig;
