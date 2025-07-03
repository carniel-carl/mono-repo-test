import type { NextConfig } from 'next';
import path from 'path';
import dotenv from 'dotenv';

// tell dotenv where your root .env.local lives
dotenv.config({
	path: path.resolve(__dirname, '../../.env'),
});

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
	/* config options here */
	basePath: '/admin',
	experimental: { externalDir: true },
	transpilePackages: ['@workspace/ui'],
	async rewrites() {
		if (!isDev) {
			// no dev proxies in production
			return [];
		}
		return [
			{
				source: '/',
				destination: 'http://localhost:3000',
			},
		];
	},
};

export default nextConfig;
