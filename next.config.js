/** @type {import('next').NextConfig} */
const nextConfig = {
    // generateBuildId: async () => {
    //     // This could be anything, using the latest git hash
    //     return process.env.GIT_HASH || 'default-build-id';
    // },
    // experimental: {
    //     cacheHandler: require.resolve('./cache-handler.ts'),
    //     cacheMaxMemorySize: 0, // disable default in-memory caching
    // },
};

module.exports = nextConfig;
