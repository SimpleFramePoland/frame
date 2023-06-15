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
        {
          source: '/portfolio/:slug',
          destination: '/posts/:slug',
          permanent: true,
        },
        {
          source: '/film-wizerunkowy-eurocash',
          destination: '/posts/film-wizerunkowy-eurocash',
          permanent: true,
        },
        {
          source: '/sciton-prezentacja-3d',
          destination: '/posts/sciton-prezentacja-3d',
          permanent: true,
        },
        {
          source: '/betfan-reklama-telewizyjna/',
          destination: '/posts/betfan-reklama-telewizyjna/',
          permanent: true,
        },
        {
          source: '/pastelowa-animacja-3d-mpack/',
          destination: '/posts/pastelowa-animacja-3d-mpack/',
          permanent: true,
        },
        {
          source: '/polbram-animacja-3d-produktu/',
          destination: '/posts/polbram-animacja-3d-produktu/',
          permanent: true,
        },
        {
          source: '/animacje-reklamowe/',
          destination: '/produkcja-animacji/',
          permanent: true,
        },
        {
          source: '/animacja-trojwymiarowa/',
          destination: '/animacja-3d/',
          permanent: true,
        },
        {
          source: '/mlekovita/mlekovita_ik01/',
          destination: '/posts/mlekovita/',
          permanent: true,
        },
        {
          source: '/animacja-2d-playtegra/',
          destination: '/posts/animacja-2d-playtegra/',
          permanent: true,
        },
        {
          source: '/prestige-vt/',
          destination: '/posts/prestige-vt/',
          permanent: true,
        },
        {
          source: '/film-promocyjny-3/',
          destination: '/posts/film-promocyjny-3/',
          permanent: true,
        },
        {
          source: '/lufthansa/',
          destination: '/posts/lufthansa/',
          permanent: true,
        },
        {
          source: '/hh/',
          destination: '/posts/hh/',
          permanent: true,
        },
        {
          source: '/zelmer/',
          destination: '/posts/zelmer/',
          permanent: true,
        },
        {
          source: '/klimatherm-film-produktowy/',
          destination: '/posts/klimatherm-film-produktowy/',
          permanent: true,
        },
        {
          source: '/produkcja-filmowa-polaczenie-doswiadczenia-z-kreatywnoscia/',
          destination: '/posts/produkcja-filmowa-polaczenie-doswiadczenia-z-kreatywnoscia/',
          permanent: true,
        },
        {
          source: '/ey-business-advisory/',
          destination: '/posts/ey-business-advisory/',
          permanent: true,
        },
        {
          source: '/badz-na-czasie-pokaz-sie-na-instagramie/',
          destination: '/posts/badz-na-czasie-pokaz-sie-na-instagramie/',
          permanent: true,
        },
        {
          source: '/streaming-video-arabiantravelmarket/',
          destination: '/posts/streaming-video-arabiantravelmarket/',
          permanent: true,
        },
        {
          source: '/hotel-spa/',
          destination: '/posts/hotel-spa/',
          permanent: true,
        },
        {
          source: '/beko/',
          destination: '/posts/beko/',
          permanent: true,
        },
        {
          source: '/unilogistics-2/',
          destination: '/posts/unilogistics-2/',
          permanent: true,
        },
        {
          source: '/film-edukacyjny2/',
          destination: '/posts/film-edukacyjny2/',
          permanent: true,
        },
        {
          source: '/zielona-budka/',
          destination: '/posts/zielona-budka/',
          permanent: true,
        },
        {
          source: '/ice-on/',
          destination: '/posts/ice-on/',
          permanent: true,
        },
        {
          source: '/projektowanie-aranzacje-wizualizacje/',
          destination: '/posts/projektowanie-aranzacje-wizualizacje/',
          permanent: true,
        },
        {
          source: '/ujecia-mniej-tradycyjne/',
          destination: '/posts/ujecia-mniej-tradycyjne/',
          permanent: true,
        },
        {
          source: '/film-promocyjny-orly-gorskiego/',
          destination: '/posts/film-promocyjny-orly-gorskiego/',
          permanent: true,
        },
        {
          source: '/lumag/',
          destination: '/posts/lumag/',
          permanent: true,
        },
        {
          source: '/indykpol-postprodukcja-obrazu-i-dzwieku/',
          destination: '/posts/indykpol-postprodukcja-obrazu-i-dzwieku/',
          permanent: true,
        },
        {
          source: '/lumag/',
          destination: '/posts/lumag/',
          permanent: true,
        },
        {
          source: '/ar-check-film-promocyjny/',
          destination: '/posts/ar-check-film-promocyjny/',
          permanent: true,
        },
        {
          source: '/badz-na-czasie-pokaz-sie-na-instagramie/',
          destination: '/posts/badz-na-czasie-pokaz-sie-na-instagramie/',
          permanent: true,
        },
        {
          source: '/lotnisko-chopina/',
          destination: '/posts/lotnisko-chopina/',
          permanent: true,
        },
        {
          source: '/film-animowany/',
          destination: '/posts/film-animowany/',
          permanent: true,
        },
        {
          source: '/badz-na-czasie-pokaz-sie-na-instagramie/',
          destination: '/posts/badz-na-czasie-pokaz-sie-na-instagramie/',
          permanent: true,
        },
        {
          source: '/neomag/',
          destination: '/posts/neomag/',
          permanent: true,
        },
        {
          source: '/posts/opi',
          destination: '/posts/animacja-techniczna-opi/',
          permanent: true,
        },
        {
          source: '/scholler-video/',
          destination: '/posts/scholler-video/',
          permanent: true,
        },
        {
          source: '/sniezka/',
          destination: '/posts/sniezka/',
          permanent: true,
        },
           {
          source: '/pofilm-promocyjny-dr-marchewka-wizjoner/',
          destination: '/posts/film-promocyjny-dr-marchewka-wizjoner/',
          permanent: true,
        },
           {
          source: '/posts/corega-billboard-sponsorski/',
          destination: '/posts/corega/',
          permanent: true,
        },
           {
          source: '/posts/vershold-2/',
          destination: '/posts/vershold/',
          permanent: true,
        },
           {
          source: '/portfolio/bell-billboard-sponsorski/bell-5/',
          destination: '/posts/billboard-sponsorski-bell',
          permanent: true,
        },
        {
          source: '/modelowanie-3d/',
          destination: '/posts/modelowanie-3d/',
          permanent: true,
        },
        {
          source: '/prezentacja-multimedialna-2/',
          destination: '/prezentacja-multimedialna/',
          permanent: true,
        },
        {
          source: '/pagen-billboard-sponsorski',
          destination: '/posts/billboard-sponsorski-bell',
          permanent: true,
        },
          {
          source: '/posts/ernstyoung-2',
          destination: '/posts/ey-business-advisory',
          permanent: true,
        },
          {
          source: '/posts/playtegra',
          destination: '/posts/animacja-2d-playtegra',
          permanent: true,
        },
        {
          source: '/prezentacje-powerpoint-tworzenie-prezentacji-w-powerpoint/',
          destination: '/prezentacja-powerpoint/',
          permanent: true,
        },
        {
          source: '/mpwik-film-na-instagram/',
          destination: '/posts/mpwik-film-na-instagram/',
          permanent: true,
        },
        {
          source: '/5945-2/',
          destination: '/posts/5945-2/',
          permanent: true,
        },
        {
          source: '/rutinacea/',
          destination: '/posts/rutinacea/',
          permanent: true,
        },
        {
          source: '/kategoria/blog/animacja-na-instagram/',
          destination: '/kategoria/animacja-na-instagram/',
          permanent: true,
        },
        {
          source: '/e-containers-animacja-produktowa/',
          destination: '/posts/e-containers-animacja-produktowa/',
          permanent: true,
        },
        {
          source: '/animacja-2d-net-dc/',
          destination: '/posts/animacja-2d-net-dc/',
          permanent: true,
        },
        {
          source: '/orange-b2s/',
          destination: '/posts/postprodukcja-orange-b2s/',
          permanent: true,
        },
      
        {
          source: '/vastint/vastint_ik/',
          destination: '/posts/film-korporacyjny-vastint/',
          permanent: true,
        },
      
        {
          source: '/postprodukcja-orange-b2s/',
          destination: '/posts/postprodukcja-orange-b2s/',
          permanent: true,
        },
        {
          source: '/prezentacja-na-ekran-led/',
          destination: '/posts/prezentacja-na-ekran-led/',
          permanent: true,
        },
        {
          source: '/film-instruktazowy/',
          destination: '/posts/film-instruktazowy-lotnisko-chopina/',
          permanent: true,
        },
        {
          source: '/infracert/',
          destination: '/posts/infracert/',
          permanent: true,
        },
        {
          source: '/selena/',
          destination: '/posts/selena/',
          permanent: true,
        },
        {
          source: '/kategoria/blog/:slug',
          destination: '/kategoria/:slug',
          permanent: true,
        },
        {
          source: '/sponsorem-programu-jest-czyli-wskazania-sponsorskie/',
          destination: '/posts/sponsorem-programu-jest-czyli-wskazania-sponsorskie/',
          permanent: true,
        },
        {
          source: '/munja-postprodukcja/munja_ik_02/',
          destination: '/posts/munja-postprodukcja/',
          permanent: true,
        },
        {
          source: '/film-promocyjny-dr-marchewka-wizjoner/',
          destination: '/posts/film-promocyjny-dr-marchewka-wizjoner/',
          permanent: true,
        },
        {
          source: '/film-z-targow/',
          destination: '/posts/film-z-targow/',
          permanent: true,
        },
        {
          source: '/eurobank-2/eurobank_ik/',
          destination: '/posts/eurobank-2/',
          permanent: true,
        },
        {
          source: '/animacja-2d-gemius-adreal/',
          destination: '/posts/animacja-2d-gemius-adreal/',
          permanent: true,
        },
        {
          source: '/portfolio_category/billboard-sponsorski/',
          destination: '/kategoria/billboard-sponsorski/',
          permanent: true,
        },
        {
          source: '/animacja-2d-sage-symfonia-handel/',
          destination: '/posts/animacja-2d-sage-symfonia-handel/',
          permanent: true,
        },
        {
          source: '/animacje-komputerowe/',
          destination: '/posts/animacje-komputerowe/',
          permanent: true,
        },
        {
          source: '/nescafe-azera/',
          destination: '/posts/nescafe-azera/',
          permanent: true,
        },
        {
          source: '/unilogistics/',
          destination: '/posts/unilogistics/',
          permanent: true,
        },
        {
          source: '/stylista-jedzenia/',
          destination: '/posts/stylista-jedzenia/',
          permanent: true,
        },
        {
          source: '/unilogistics/',
          destination: '/posts/unilogistics/',
          permanent: true,
        },
        {
          source: '/film-animowany-elis/',
          destination: '/posts/film-animowany-elis/',
          permanent: true,
        },
        {
          source: '/prezentacja-szkoleniowa/',
          destination: '/posts/prezentacja-szkoleniowa/',
          permanent: true,
        },
        {
          source: '/munja-postprodukcja/',
          destination: '/posts/munja-postprodukcja/',
          permanent: true,
        },
        {
          source: '/sezon-na-sphinxa/sphinx_ik/',
          destination: '/posts/sezon-na-sphinxa/',
          permanent: true,
        },
        {
          source: '/portfolio/nexler/nexler-3/',
          destination: '/posts/nexler/',
          permanent: true,
        },
        {
          source: '/facebook-2/',
          destination: '/posts/nowoczesny-swiat-facebooka/',
          permanent: true,
        },
        {
          source: '/animacja-medyczna-2/',
          destination: '/posts/animacja-medyczna-2/',
          permanent: true,
        },
        {
          source: '/animacja-2d-ideafactor24/',
          destination: '/posts/animacja-2d-ideafactor24/',
          permanent: true,
        },
        {
          source: '/kostrzewa/',
          destination: '/posts/animacja-produktowa-kostrzewa/',
          permanent: true,
        },
        {
          source: '/prezentacja-3d/zpue_s-2/',
          destination: '/posts/film-produktowy-3d-zpue-koronea-group/',
          permanent: true,
        },
        {
          source: '/pl/film/',
          destination: '/film-produktowy/',
          permanent: true,
        },
        {
          source: '/mpack-animacja-3d/',
          destination: '/posts/mpack-animacja-3d/',
          permanent: true,
        },
        {
          source: '/filmy-produktowe/',
          destination: '/film-produktowy/',
          permanent: true,
        },
        {
          source: '/animacja-produktu-niezwykla-dbalosc-o-detale/',
          destination: '/posts/animacja-produktu-niezwykla-dbalosc-o-detale/',
          permanent: true,
        },
        {
          source: '/fryderyk-chopin/',
          destination: '/posts/fryderyk-chopin/',
          permanent: true,
        },
        {
          source: '/kategoria/prezentacja-marketingowa/',
          destination: '/kategoria/prezentacja-marketing/',
          permanent: true,
        },
        {
          source: '/webdesign/',
          destination: '/streaming-videoo/',
          permanent: true,
        },
        {
          source: '/wegirls/',
          destination: '/posts/wegirls/',
          permanent: true,
        },
        {
          source: '/pl/animacja3d/',
          destination: '/animacja-3d/',
          permanent: true,
        },
        {
          source: '/pl/produkcja-animacji/',
          destination: '/produkcja-animacji/',
          permanent: true,
        },
        {
          source: '/kreowanie-swiata-w-3d/mpack_blog-2/',
          destination: '/posts/animacja-3d-mpack/',
          permanent: true,
        },
        {
          source: '/animacja-2d-smsapi/',
          destination: '/posts/animacja-2d-smsapi/',
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
