"use strict";
exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 5792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AA": () => (/* binding */ useSiteContext),
/* harmony export */   "DN": () => (/* binding */ SiteContext),
/* harmony export */   "ZP": () => (/* binding */ useSite)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4147);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3610);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SiteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/**
 * useSiteContext
 */

function useSiteContext(data) {
  let {
    homepage = ''
  } = _package_json__WEBPACK_IMPORTED_MODULE_1__; // Trim the trailing slash from the end of homepage to avoid
  // double // issues throughout the metadata

  homepage = (0,lib_util__WEBPACK_IMPORTED_MODULE_2__/* .removeLastTrailingSlash */ .bq)(homepage);
  return _objectSpread(_objectSpread({}, data), {}, {
    homepage
  });
}
/**
 * useSite
 */

function useSite() {
  const site = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SiteContext);
  return site;
}

/***/ }),

/***/ 5759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getApolloClient)
/* harmony export */ });
/* unused harmony export _createApolloClient */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3610);


let client;
/**
 * getApolloClient
 */

function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }

  return client;
}
/**
 * createApolloClient
 */

function _createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
      uri: (0,lib_util__WEBPACK_IMPORTED_MODULE_1__/* .removeLastTrailingSlash */ .bq)("https://simpleframe.pl/graphql")
    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true
        },
        RootMutation: {
          mutationType: true
        }
      }
    })
  });
}

/***/ }),

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z0": () => (/* binding */ constructPageMetadata),
  "Oq": () => (/* binding */ getSiteMetadata),
  "iB": () => (/* binding */ helmetSettingsFromMetadata)
});

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(5759);
// EXTERNAL MODULE: ./src/lib/util.js
var util = __webpack_require__(3610);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/site.js

const QUERY_SITE_DATA = client_.gql`
  query SiteData {
    generalSettings {
      description
      language
      title
    }
  }
`;
const QUERY_SEO_DATA = client_.gql`
  query SeoData {
    seo {
      webmaster {
        yandexVerify
        msVerify
        googleVerify
        baiduVerify
      }
      social {
        youTube {
          url
        }
        wikipedia {
          url
        }
        twitter {
          username
          cardType
        }
        pinterest {
          metaTag
          url
        }
        mySpace {
          url
        }
        linkedIn {
          url
        }
        instagram {
          url
        }
        facebook {
          url
          defaultImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/lib/site.js



/**
 * getSiteMetadata
 */

async function getSiteMetadata() {
  var _siteData;

  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  let siteData;
  let seoData;

  try {
    siteData = await apolloClient.query({
      query: QUERY_SITE_DATA
    });
  } catch (e) {
    console.log(`[site][getSiteMetadata] Failed to query site data: ${e.message}`);
    throw e;
  }

  const {
    generalSettings
  } = ((_siteData = siteData) === null || _siteData === void 0 ? void 0 : _siteData.data) || {};
  let {
    title,
    description,
    language
  } = generalSettings;
  const settings = {
    title,
    siteTitle: title,
    description
  }; // It looks like the value of `language` when US English is set
  // in WordPress is empty or "", meaning, we have to infer that
  // if there's no value, it's English. On the other hand, if there
  // is a code, we need to grab the 2char version of it to use ofr
  // the HTML lang attribute

  if (!language || language === '') {
    settings.language = 'en';
  } else {
    settings.language = language.split('_')[0];
  } // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings


  if (false) { var _seoData, _seoData$data; }

  settings.title = (0,util/* decodeHtmlEntities */.aV)(settings.title);
  return settings;
}
/**
 * constructHelmetData
 */

function constructPageMetadata(defaultMetadata = {}, pageMetadata = {}, options = {}) {
  const {
    router = {},
    homepage = ''
  } = options;
  const {
    asPath
  } = router;
  const url = `${homepage}${asPath}`;
  const pathname = new URL(url).pathname;
  const canonical = pageMetadata.canonical || `${homepage}${pathname}`;
  const metadata = {
    canonical,
    og: {
      url
    },
    twitter: {}
  }; // Static Properties
  // Loop through top level metadata properties that rely on a non-object value

  const staticProperties = ['description', 'language', 'title'];
  staticProperties.forEach(property => {
    const value = typeof pageMetadata[property] !== 'undefined' ? pageMetadata[property] : defaultMetadata[property];
    if (typeof value === 'undefined') return;
    metadata[property] = value;
  }); // Open Graph Properties
  // Loop through Open Graph properties that rely on a non-object value

  if (pageMetadata.og) {
    const ogProperties = ['description', 'imageUrl', 'imageHeight', 'imageSecureUrl', 'imageWidth', 'title', 'type'];
    ogProperties.forEach(property => {
      var _pageMetadata$og, _defaultMetadata$og;

      const pageOg = (_pageMetadata$og = pageMetadata.og) === null || _pageMetadata$og === void 0 ? void 0 : _pageMetadata$og[property];
      const pageStatic = pageMetadata[property];
      const defaultOg = (_defaultMetadata$og = defaultMetadata.og) === null || _defaultMetadata$og === void 0 ? void 0 : _defaultMetadata$og[property];
      const defaultStatic = defaultMetadata[property];
      const value = pageOg || pageStatic || defaultOg || defaultStatic;
      if (typeof value === 'undefined') return;
      metadata.og[property] = value;
    });
  } // Twitter Properties
  // Loop through Twitter properties that rely on a non-object value


  if (pageMetadata.twitter) {
    const twitterProperties = ['cardType', 'description', 'imageUrl', 'title', 'username'];
    twitterProperties.forEach(property => {
      var _pageMetadata$twitter;

      const pageTwitter = (_pageMetadata$twitter = pageMetadata.twitter) === null || _pageMetadata$twitter === void 0 ? void 0 : _pageMetadata$twitter[property];
      const pageOg = metadata.og[property];
      const value = pageTwitter || pageOg;
      if (typeof value === 'undefined') return;
      metadata.twitter[property] = value;
    });
  } // Article Properties
  // Loop through article properties that rely on a non-object value


  if (metadata.og.type === 'article' && pageMetadata.article) {
    metadata.article = {};
    const articleProperties = ['author', 'modifiedTime', 'publishedTime', 'publisher'];
    articleProperties.forEach(property => {
      const value = pageMetadata.article[property];
      if (typeof value === 'undefined') return;
      metadata.article[property] = value;
    });
  }

  return metadata;
}
/**
 * helmetSettingsFromMetadata
 */

function helmetSettingsFromMetadata(metadata = {}, options = {}) {
  var _metadata$og, _metadata$og2, _metadata$og3, _metadata$og4, _metadata$og5, _metadata$og6, _metadata$og7, _metadata$og8, _metadata$twitter, _metadata$og9, _metadata$twitter2, _metadata$og10, _metadata$twitter3, _metadata$og11, _metadata$twitter4, _metadata$twitter5, _metadata$article, _metadata$article2;

  const {
    link = [],
    meta = [],
    setTitle = true
  } = options;
  const sanitizedDescription = (0,util/* removeExtraSpaces */.zm)(metadata.description);
  const settings = {
    htmlAttributes: {
      lang: metadata.language
    }
  };

  if (setTitle) {
    settings.title = metadata.title;
  }

  settings.link = [...link, {
    rel: 'canonical',
    href: metadata.canonical
  }].filter(({
    href
  } = {}) => !!href);
  settings.meta = [...meta, {
    name: 'description',
    content: sanitizedDescription
  }, {
    property: 'og:title',
    content: ((_metadata$og = metadata.og) === null || _metadata$og === void 0 ? void 0 : _metadata$og.title) || metadata.title
  }, {
    property: 'og:description',
    content: ((_metadata$og2 = metadata.og) === null || _metadata$og2 === void 0 ? void 0 : _metadata$og2.description) || sanitizedDescription
  }, {
    property: 'og:url',
    content: (_metadata$og3 = metadata.og) === null || _metadata$og3 === void 0 ? void 0 : _metadata$og3.url
  }, {
    property: 'og:image',
    content: (_metadata$og4 = metadata.og) === null || _metadata$og4 === void 0 ? void 0 : _metadata$og4.imageUrl
  }, {
    property: 'og:image:secure_url',
    content: (_metadata$og5 = metadata.og) === null || _metadata$og5 === void 0 ? void 0 : _metadata$og5.imageSecureUrl
  }, {
    property: 'og:image:width',
    content: (_metadata$og6 = metadata.og) === null || _metadata$og6 === void 0 ? void 0 : _metadata$og6.imageWidth
  }, {
    property: 'og:image:height',
    content: (_metadata$og7 = metadata.og) === null || _metadata$og7 === void 0 ? void 0 : _metadata$og7.imageHeight
  }, {
    property: 'og:type',
    content: ((_metadata$og8 = metadata.og) === null || _metadata$og8 === void 0 ? void 0 : _metadata$og8.type) || 'website'
  }, {
    property: 'og:site_name',
    content: metadata.siteTitle
  }, {
    property: 'twitter:title',
    content: ((_metadata$twitter = metadata.twitter) === null || _metadata$twitter === void 0 ? void 0 : _metadata$twitter.title) || ((_metadata$og9 = metadata.og) === null || _metadata$og9 === void 0 ? void 0 : _metadata$og9.title) || metadata.title
  }, {
    property: 'twitter:description',
    content: ((_metadata$twitter2 = metadata.twitter) === null || _metadata$twitter2 === void 0 ? void 0 : _metadata$twitter2.description) || ((_metadata$og10 = metadata.og) === null || _metadata$og10 === void 0 ? void 0 : _metadata$og10.description) || sanitizedDescription
  }, {
    property: 'twitter:image',
    content: ((_metadata$twitter3 = metadata.twitter) === null || _metadata$twitter3 === void 0 ? void 0 : _metadata$twitter3.imageUrl) || ((_metadata$og11 = metadata.og) === null || _metadata$og11 === void 0 ? void 0 : _metadata$og11.imageUrl)
  }, {
    property: 'twitter:site',
    content: ((_metadata$twitter4 = metadata.twitter) === null || _metadata$twitter4 === void 0 ? void 0 : _metadata$twitter4.username) && `@${metadata.twitter.username}`
  }, {
    property: 'twitter:card',
    content: (_metadata$twitter5 = metadata.twitter) === null || _metadata$twitter5 === void 0 ? void 0 : _metadata$twitter5.cardType
  }, {
    property: 'article:modified_time',
    content: (_metadata$article = metadata.article) === null || _metadata$article === void 0 ? void 0 : _metadata$article.modifiedTime
  }, {
    property: 'article:published_time',
    content: (_metadata$article2 = metadata.article) === null || _metadata$article2 === void 0 ? void 0 : _metadata$article2.publishedTime
  }].filter(({
    content
  } = {}) => !!content);
  return settings;
}

/***/ }),

/***/ 3610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aV": () => (/* binding */ decodeHtmlEntities),
/* harmony export */   "bq": () => (/* binding */ removeLastTrailingSlash),
/* harmony export */   "zm": () => (/* binding */ removeExtraSpaces)
/* harmony export */ });
/**
 * decodeHtmlEntities
 */
function decodeHtmlEntities(text) {
  if (typeof text !== 'string') {
    throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`);
  }

  let decoded = text;
  const entities = {
    '&amp;': '\u0026',
    '&quot;': '\u0022',
    '&#039;': '\u0027'
  };
  return decoded.replace(/&amp;|&quot;|&#039;/g, char => entities[char]);
}
/**
 * removeLastTrailingSlash
 */

function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}
function removeExtraSpaces(text) {
  if (typeof text !== 'string') return;
  return text.replace(/\s+/g, ' ').trim();
}

/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"simpleframe","homepage":"https://simpleframe.pl","version":"0.1.0","license":"MIT","author":"Colby Fayock <hello@colbyfayock.com>","scripts":{"build":"next build","dev":"next dev","export":"next export","format":"yarn lint --fix","format:no-path":"yarn lint:no-path --fix","lint":"eslint .","lint-staged":"lint-staged","lint:no-path":"eslint","start":"next start -p ${PORT:=3000}","prepare":"husky install"},"lint-staged":{"**/*.js":"yarn format:no-path","**/*.scss":"yarn prettier --write"},"dependencies":{"@apollo/client":"^3.7.7","@headlessui/react":"^1.7.13","@heroicons/react":"^2.0.16","autoprefixer":"^10.4.14","cross-env":"^7.0.3","daisyui":"^2.51.5","date-fns":"^2.29.3","dotenv":"^16.0.3","flowbite":"^1.6.4","flowbite-react":"^0.4.2","fuse.js":"^6.6.2","graphql":"^16.6.0","he":"^1.2.0","loader-utils":"^3.2.1","next":"12.3.1","nextjs-progressbar":"^0.0.14","parameterize":"^1.0.0","path":"^0.12.7","postcss":"^8.4.21","prop-types":"^15.8.1","react":"18.2.0","react-dom":"18.2.0","react-helmet":"^6.1.0","react-icons":"^4.8.0","rss":"^1.2.2","sass":"^1.58.0","sass-loader":"^13.2.1","style.css":"^1.0.3","tailwindcss":"^3.2.7","tailwindcss-typography":"^3.1.0","yarn":"^1.22.19"},"devDependencies":{"@babel/cli":"^7.21.0","@babel/core":"^7.21.3","@netlify/plugin-nextjs":"^4.32.2","@tailwindcss/typography":"^0.5.9","eslint":"8.23.1","eslint-config-next":"^12.3.1","eslint-config-prettier":"^8.7.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react":"^7.32.2","husky":"^8.0.3","lint-staged":">=13.1.0","playwright":"^1.26.0","prettier":"2.7.1"},"repository":{"type":"git","url":"https://github.com/colbyfayock/next-wordpress-starter"},"bugs":{"url":"https://github.com/colbyfayock/next-wordpress-starter/issues"}}');

/***/ })

};
;