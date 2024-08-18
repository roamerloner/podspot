/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'merry-albatross-919.convex.cloud'
            },
            {
            protocol: 'https',
            hostname: 'img.clerk.com'
            },
        ]
    }
};

export default nextConfig;
