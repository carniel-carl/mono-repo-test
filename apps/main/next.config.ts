import type { NextConfig } from 'next';

import path from 'path';
import dotenv from 'dotenv';

// tell dotenv where your root .env.local lives
dotenv.config({
	path: path.resolve(__dirname, '../../.env'),
});

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
	transpilePackages: ['@workspace/ui'],
	async rewrites() {
		if (!isDev) {
			// no dev proxies in production
			return [];
		}
		return [
			{
				source: '/admin/:path*',
				destination: 'http://localhost:3001/admin/:path*',
			},
			{
				source: '/blog/:path*',
				destination: 'http://localhost:3002/blog/:path*',
			},
		];
	},
};

export default nextConfig;
