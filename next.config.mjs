/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: '/personal-website-2.0',
    assetPrefix: '/personal-website-2.0',
    trailingSlash: true,
};

export default nextConfig;
