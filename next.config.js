const indexSearch = require('./plugins/search-index');
const feed = require('./plugins/feed');
const sitemap = require('./plugins/sitemap');

module.exports = () => {
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    env: {
      OG_IMAGE_DIRECTORY: '/images/og',
      POSTS_PRERENDER_COUNT: 15,
      WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
      WORDPRESS_MENU_LOCATION_NAVIGATION: process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || 'PRIMARY',
      WORDPRESS_PLUGIN_SEO: parseEnvValue(process.env.WORDPRESS_PLUGIN_SEO, true),
    },
    async redirects() {
      return [
        {
          source: '/blog/:slug',
          destination: '/posts/:slug',
          permanent: true,
        },
      ];
    },
    basePath: '',
    images: {
      domains: ['old.simpleframe.pl'],
    },
  };

  const plugins = [indexSearch, feed, sitemap];
  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig);
};

/**
 * parseEnvValue
 * @description Helper function to check if a variable is defined and parse booleans
 */
function parseEnvValue(value, defaultValue) {
  if (typeof value === 'undefined') return defaultValue;
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return value;
}
