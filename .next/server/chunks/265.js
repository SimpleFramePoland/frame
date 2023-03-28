"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 5706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I5": () => (/* binding */ categoryPathBySlug),
  "tG": () => (/* binding */ getAllCategories),
  "CP": () => (/* binding */ getCategories),
  "fj": () => (/* binding */ getCategoryBySlug)
});

// UNUSED EXPORTS: mapCategoryData

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(5759);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/categories.js

const QUERY_ALL_CATEGORIES = client_.gql`
  query AllCategories {
    categories(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
`;
const QUERY_CATEGORY_BY_SLUG = client_.gql`
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      databaseId
      description
      id
      name
      slug
    }
  }
`;
const QUERY_CATEGORY_SEO_BY_SLUG = client_.gql`
  query CategorySEOBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
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
`;
;// CONCATENATED MODULE: ./src/lib/categories.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * categoryPathBySlug
 */

function categoryPathBySlug(slug) {
  return `/kategoria/${slug}`;
}
/**
 * getAllCategories
 */

async function getAllCategories() {
  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES
  });
  const categories = data === null || data === void 0 ? void 0 : data.data.categories.edges.map(({
    node = {}
  }) => node);
  return {
    categories
  };
}
/**
 * getCategoryBySlug
 */

async function getCategoryBySlug(slug) {
  var _categoryData, _categoryData2;

  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  const apiHost = new URL("https://simpleframe.pl/graphql").host;
  let categoryData;
  let seoData;

  try {
    categoryData = await apolloClient.query({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: {
        slug
      }
    });
  } catch (e) {
    console.log(`[categories][getCategoryBySlug] Failed to query category data: ${e.message}`);
    throw e;
  }

  if (!((_categoryData = categoryData) !== null && _categoryData !== void 0 && _categoryData.data.category)) return {
    category: undefined
  };
  const category = mapCategoryData((_categoryData2 = categoryData) === null || _categoryData2 === void 0 ? void 0 : _categoryData2.data.category); // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (false) { var _seoData, _seoData$data; }

  return {
    category
  };
}
/**
 * getCategories
 */

async function getCategories({
  count
} = {}) {
  const {
    categories
  } = await getAllCategories();
  return {
    categories: categories.slice(0, count)
  };
}
/**
 * mapCategoryData
 */

function mapCategoryData(category = {}) {
  const data = _objectSpread({}, category);

  return data;
}

/***/ }),

/***/ 8657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate),
/* harmony export */   "v": () => (/* binding */ sortObjectsByDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_locale_pl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7325);
/* harmony import */ var date_fns_locale_pl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_pl__WEBPACK_IMPORTED_MODULE_1__);


/**
 * formatDate
 */

function formatDate(date, pattern = 'PPP') {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(date), pattern, {
    locale: (date_fns_locale_pl__WEBPACK_IMPORTED_MODULE_1___default())
  });
}
/**
 * sortObjectsByDate
 */

function sortObjectsByDate(array, {
  key = 'date'
} = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}

/***/ }),

/***/ 6686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K0": () => (/* binding */ getAllPages),
  "pJ": () => (/* binding */ getBreadcrumbsByUri),
  "Cg": () => (/* binding */ getPageByUri),
  "Gy": () => (/* binding */ getTopLevelPages),
  "yA": () => (/* binding */ pagePathBySlug)
});

// UNUSED EXPORTS: mapPageData

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(5759);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/pages.js

const PAGE_FIELDS = client_.gql`
  fragment PageFields on Page {
    children {
      edges {
        node {
          id
          slug
          uri
          ... on Page {
            id
            title
          }
        }
      }
    }
    id
    menuOrder
    parent {
      node {
        id
        slug
        uri
        ... on Page {
          title
        }
      }
    }
    slug
    title
    uri
  }
`;
const QUERY_ALL_PAGES_INDEX = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;
const QUERY_ALL_PAGES_ARCHIVE = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;
const QUERY_ALL_PAGES = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
          content
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
`;
const QUERY_PAGE_BY_URI = client_.gql`
  query PageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      children {
        edges {
          node {
            id
            slug
            uri
            ... on Page {
              id
              title           
            }
          }
        }
      }
      podstrony {
        pierwszaCzescTekstu
        shortcodeGrid
        drugaCzescTekstu
        shortcodeGridDrugi
      }
      content
      featuredImage {
        node {
          altText
          caption
          id
          sizes
          sourceUrl
          srcSet
        }
      }
      id
      menuOrder
      parent {
        node {
          id
          slug
          uri
          ... on Page {
            title
          }
        }
      }
      slug
      title
      uri
    }
  }
`;
const QUERY_PAGE_SEO_BY_URI = client_.gql`
  query PageSEOByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
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
`;
;// CONCATENATED MODULE: ./src/lib/pages.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * pagePathBySlug
 */

function pagePathBySlug(slug) {
  return `/${slug}`;
}
/**
 * getPageByUri
 */

async function getPageByUri(uri) {
  var _pageData, _pageData2;

  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  const apiHost = new URL("https://simpleframe.pl/graphql").host;
  let pageData;
  let seoData;

  try {
    pageData = await apolloClient.query({
      query: QUERY_PAGE_BY_URI,
      variables: {
        uri
      }
    });
  } catch (e) {
    console.log(`[pages][getPageByUri] Failed to query page data: ${e.message}`);
    throw e;
  }

  if (!((_pageData = pageData) !== null && _pageData !== void 0 && _pageData.data.page)) return {
    page: undefined
  };
  const page = [(_pageData2 = pageData) === null || _pageData2 === void 0 ? void 0 : _pageData2.data.page].map(mapPageData)[0]; // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (false) { var _seoData, _seoData$data; }

  return {
    page
  };
}
/**
 * getAllPages
 */

const allPagesIncludesTypes = {
  all: QUERY_ALL_PAGES,
  archive: QUERY_ALL_PAGES_ARCHIVE,
  index: QUERY_ALL_PAGES_INDEX
};
async function getAllPages(options = {}) {
  const {
    queryIncludes = 'index'
  } = options;
  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  const data = await apolloClient.query({
    query: allPagesIncludesTypes[queryIncludes]
  });
  const pages = data === null || data === void 0 ? void 0 : data.data.pages.edges.map(({
    node = {}
  }) => node).map(mapPageData);
  return {
    pages
  };
}
/**
 * getTopLevelPages
 */

async function getTopLevelPages(options) {
  const {
    pages
  } = await getAllPages(options);
  const navPages = pages.filter(({
    parent
  }) => parent === null); // Order pages by menuOrder

  navPages.sort((a, b) => parseFloat(a.menuOrder) - parseFloat(b.menuOrder));
  return navPages;
}
/**
 * mapPageData
 */

function mapPageData(page = {}) {
  const data = _objectSpread({}, page);

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  if (data.parent) {
    data.parent = data.parent.node;
  }

  if (data.children) {
    data.children = data.children.edges.map(({
      node
    }) => node);
  }

  return data;
}
/**
 * getBreadcrumbsByUri
 */

function getBreadcrumbsByUri(uri, pages) {
  const breadcrumbs = [];
  const uriSegments = uri.split('/').filter(segment => segment !== ''); // We don't want to show the current page in the breadcrumbs, so pop off
  // the last chunk before we start

  uriSegments.pop(); // Work through each of the segments, popping off the last chunk and finding the related
  // page to gather the metadata for the breadcrumbs

  do {
    const breadcrumb = pages.find(page => page.uri === `/${uriSegments.join('/')}/`); // If the breadcrumb is the active page, we want to pass udefined for the uri to
    // avoid the breadcrumbs being rendered as a link, given it's the current page

    if (breadcrumb) {
      breadcrumbs.push({
        id: breadcrumb.id,
        title: breadcrumb.title,
        uri: breadcrumb.uri
      });
    }

    uriSegments.pop();
  } while (uriSegments.length > 0); // When working through the segments, we're doing so from the lowest child to the parent
  // which means the parent will be at the end of the array. We need to reverse to show
  // the correct order for breadcrumbs


  breadcrumbs.reverse();
  return breadcrumbs;
}

/***/ }),

/***/ 1272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bd": () => (/* binding */ getAllPosts),
  "tm": () => (/* binding */ getPagesCount),
  "BP": () => (/* binding */ getPaginatedPosts),
  "zQ": () => (/* binding */ getPostBySlug),
  "DI": () => (/* binding */ getPostsByAuthorSlug),
  "qd": () => (/* binding */ getPostsByCategoryId),
  "no": () => (/* binding */ getRecentPosts),
  "EE": () => (/* binding */ getRelatedPosts),
  "F3": () => (/* binding */ postPathBySlug),
  "$4": () => (/* binding */ sanitizeExcerpt)
});

// UNUSED EXPORTS: getPostsPerPage, mapPostData, sortStickyPosts

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(5759);
// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var lib_categories = __webpack_require__(5706);
// EXTERNAL MODULE: ./src/lib/users.js + 1 modules
var users = __webpack_require__(7979);
// EXTERNAL MODULE: ./src/lib/datetime.js
var datetime = __webpack_require__(8657);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/posts.js

const POST_FIELDS = client_.gql`
  fragment PostFields on Post {
    id
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;
const QUERY_ALL_POSTS_INDEX = client_.gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_ALL_POSTS_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
            }}
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;
const QUERY_ALL_POSTS = client_.gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;
const QUERY_POST_BY_SLUG = client_.gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
        }
      }
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          srcSet
          sizes
          id
        }
      }
      modified
      databaseId
      title
      slug
      isSticky
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID_INDEX = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          featuredImage {
            node {
              sourceUrl
            }}
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;
const QUERY_POST_SEO_BY_SLUG = client_.gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
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
`;
const QUERY_POST_PER_PAGE = client_.gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;
;// CONCATENATED MODULE: ./src/lib/posts.js
const _excluded = ["slug"],
      _excluded2 = ["categoryId"],
      _excluded3 = ["count"],
      _excluded4 = ["currentPage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * postPathBySlug
 */

function postPathBySlug(slug) {
  return `/posts/${slug}`;
}
/**
 * getPostBySlug
 */

async function getPostBySlug(slug) {
  var _postData, _postData2;

  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  const apiHost = new URL("https://simpleframe.pl/graphql").host;
  let postData;
  let seoData;

  try {
    postData = await apolloClient.query({
      query: QUERY_POST_BY_SLUG,
      variables: {
        slug
      }
    });
  } catch (e) {
    console.log(`[posts][getPostBySlug] Failed to query post data: ${e.message}`);
    throw e;
  }

  if (!((_postData = postData) !== null && _postData !== void 0 && _postData.data.post)) return {
    post: undefined
  };
  const post = [(_postData2 = postData) === null || _postData2 === void 0 ? void 0 : _postData2.data.post].map(mapPostData)[0]; // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (false) { var _seoData, _seoData$data; }

  return {
    post
  };
}
/**
 * getAllPosts
 */

const allPostsIncludesTypes = {
  all: QUERY_ALL_POSTS,
  archive: QUERY_ALL_POSTS_ARCHIVE,
  index: QUERY_ALL_POSTS_INDEX
};
async function getAllPosts(options = {}) {
  const {
    queryIncludes = 'index'
  } = options;
  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes]
  });
  const posts = data === null || data === void 0 ? void 0 : data.data.posts.edges.map(({
    node = {}
  }) => node);
  return {
    posts: Array.isArray(posts) && posts.map(mapPostData)
  };
}
/**
 * getPostsByAuthorSlug
 */

const postsByAuthorSlugIncludesTypes = {
  all: QUERY_POSTS_BY_AUTHOR_SLUG,
  archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX
};
async function getPostsByAuthorSlug(_ref) {
  var _postData3;

  let {
    slug
  } = _ref,
      options = _objectWithoutProperties(_ref, _excluded);

  const {
    queryIncludes = 'index'
  } = options;
  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  let postData;

  try {
    postData = await apolloClient.query({
      query: postsByAuthorSlugIncludesTypes[queryIncludes],
      variables: {
        slug
      }
    });
  } catch (e) {
    console.log(`[posts][getPostsByAuthorSlug] Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = (_postData3 = postData) === null || _postData3 === void 0 ? void 0 : _postData3.data.posts.edges.map(({
    node = {}
  }) => node);
  return {
    posts: Array.isArray(posts) && posts.map(mapPostData)
  };
}
/**
 * getPostsByCategoryId
 */

const postsByCategoryIdIncludesTypes = {
  all: QUERY_POSTS_BY_CATEGORY_ID,
  archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  index: QUERY_POSTS_BY_CATEGORY_ID_INDEX
};
async function getPostsByCategoryId(_ref2) {
  var _postData4;

  let {
    categoryId
  } = _ref2,
      options = _objectWithoutProperties(_ref2, _excluded2);

  const {
    queryIncludes = 'index'
  } = options;
  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  let postData;

  try {
    postData = await apolloClient.query({
      query: postsByCategoryIdIncludesTypes[queryIncludes],
      variables: {
        categoryId
      }
    });
  } catch (e) {
    console.log(`[posts][getPostsByCategoryId] Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = (_postData4 = postData) === null || _postData4 === void 0 ? void 0 : _postData4.data.posts.edges.map(({
    node = {}
  }) => node);
  return {
    posts: Array.isArray(posts) && posts.map(mapPostData)
  };
}
/**
 * getRecentPosts
 */

async function getRecentPosts(_ref3) {
  let {
    count
  } = _ref3,
      options = _objectWithoutProperties(_ref3, _excluded3);

  const {
    posts
  } = await getAllPosts(options);
  const sorted = (0,datetime/* sortObjectsByDate */.v)(posts);
  return {
    posts: sorted.slice(0, count)
  };
}
/**
 * sanitizeExcerpt
 */

function sanitizeExcerpt(excerpt) {
  if (typeof excerpt !== 'string') {
    throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
  }

  let sanitized = excerpt; // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;'); // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace('....', '.');
  sanitized = sanitized.replace('.&hellip;', '.'); // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '');
  return sanitized;
}
/**
 * mapPostData
 */

function mapPostData(post = {}) {
  var _data$author;

  const data = _objectSpread({}, post); // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node


  if (data.author) {
    data.author = _objectSpread({}, data.author.node);
  } // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default


  if ((_data$author = data.author) !== null && _data$author !== void 0 && _data$author.avatar) {
    data.author.avatar = (0,users/* updateUserAvatar */.BA)(data.author.avatar);
  } // Clean up the categories to make them more easy to access


  if (data.categories) {
    data.categories = data.categories.edges.map(({
      node
    }) => {
      return _objectSpread({}, node);
    });
  } // Clean up the featured image to make them more easy to access


  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}
/**
 * getRelatedPosts
 */

async function getRelatedPosts(categories, postId, count = 5) {
  if (!Array.isArray(categories) || categories.length === 0) return;
  let related = {
    category: categories && categories.shift()
  };

  if (related.category) {
    const {
      posts
    } = await getPostsByCategoryId({
      categoryId: related.category.databaseId,
      queryIncludes: 'archive'
    });
    const filtered = posts.filter(({
      postId: id
    }) => id !== postId);
    const sorted = (0,datetime/* sortObjectsByDate */.v)(filtered);
    related.posts = sorted.map(post => ({
      title: post.title,
      slug: post.slug
    }));
  }

  if (!Array.isArray(related.posts) || related.posts.length === 0) {
    const relatedPosts = await getRelatedPosts(categories, postId, count);
    related = relatedPosts || related;
  }

  if (Array.isArray(related.posts) && related.posts.length > count) {
    return related.posts.slice(0, count);
  }

  return related;
}
/**
 * sortStickyPosts
 */

function sortStickyPosts(posts) {
  return [...posts].sort(post => post.isSticky ? -1 : 1);
}
/**
 * getPostsPerPage
 */

async function getPostsPerPage() {
  //If POST_PER_PAGE is defined at next.config.js
  if (process.env.POSTS_PER_PAGE) {
    console.warn('You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").');
    return Number(process.env.POSTS_PER_PAGE);
  }

  try {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const {
      data
    } = await apolloClient.query({
      query: QUERY_POST_PER_PAGE
    });
    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.log(`Failed to query post per page data: ${e.message}`);
    throw e;
  }
}
/**
 * getPageCount
 */

async function getPagesCount(posts, postsPerPage) {
  const _postsPerPage = postsPerPage ?? (await getPostsPerPage());

  return Math.ceil(posts.length / _postsPerPage);
}
/**
 * getPaginatedPosts
 */

async function getPaginatedPosts(_ref4 = {}) {
  let {
    currentPage = 1
  } = _ref4,
      options = _objectWithoutProperties(_ref4, _excluded4);

  const {
    posts
  } = await getAllPosts(options);
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);
  const {
    categories
  } = await (0,lib_categories/* getAllCategories */.tG)();
  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      categories,
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount
      }
    };
  }

  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount
    }
  };
}

/***/ }),

/***/ 7979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h$": () => (/* binding */ authorPathByName),
  "Wt": () => (/* binding */ getUserByNameSlug),
  "BA": () => (/* binding */ updateUserAvatar)
});

// UNUSED EXPORTS: authorPathBySlug, getAllAuthors, getAllUsers, getUserBySlug, mapUserData, userSlugByName

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(5759);
// EXTERNAL MODULE: external "parameterize"
var external_parameterize_ = __webpack_require__(8181);
var external_parameterize_default = /*#__PURE__*/__webpack_require__.n(external_parameterize_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/users.js

const QUERY_ALL_USERS = client_.gql`
  query AllUsers {
    users(first: 10000) {
      edges {
        node {
          avatar {
            height
            width
            url
          }
          description
          id
          name
          roles {
            nodes {
              name
            }
          }
          slug
        }
      }
    }
  }
`;
const QUERY_ALL_USERS_SEO = client_.gql`
  query AllUsersSeo {
    users(first: 10000) {
      edges {
        node {
          id
          seo {
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            title
            social {
              youTube
              wikipedia
              twitter
              soundCloud
              pinterest
              mySpace
              linkedIn
              instagram
              facebook
            }
          }
        }
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/lib/users.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // const ROLES_AUTHOR = ['author', 'administrator'];

/**
 * postPathBySlug
 */

function authorPathBySlug(slug) {
  return `/authors/${slug}`;
}
/**
 * getUserBySlug
 */

async function getUserBySlug(slug) {
  const {
    users
  } = await getAllUsers();
  const user = users.find(user => user.slug === slug);
  return {
    user
  };
}
/**
 * authorPathByName
 */

function authorPathByName(name) {
  return `/authors/${external_parameterize_default()(name)}`;
}
/**
 * getUserByNameSlug
 */

async function getUserByNameSlug(name) {
  const {
    users
  } = await getAllUsers();
  const user = users.find(user => external_parameterize_default()(user.name) === name);
  return {
    user
  };
}
/**
 * userSlugByName
 */

function userSlugByName(name) {
  return parameterize(name);
}
/**
 * getAllUsers
 */

async function getAllUsers() {
  var _usersData;

  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  let usersData;
  let seoData;

  try {
    usersData = await apolloClient.query({
      query: QUERY_ALL_USERS
    });
  } catch (e) {
    console.log(`[users][getAllUsers] Failed to query users data: ${e.message}`);
    throw e;
  }

  let users = (_usersData = usersData) === null || _usersData === void 0 ? void 0 : _usersData.data.users.edges.map(({
    node = {}
  }) => node).map(mapUserData); // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (false) {}

  return {
    users
  };
}
/**
 * getAllAuthors
 */

async function getAllAuthors() {
  const {
    users
  } = await getAllUsers(); // TODO: Roles aren't showing in response - we should be filtering here
  // const authors = users.filter(({ roles }) => {
  //   const userRoles = roles.map(({ name }) => name);
  //   const authorRoles = userRoles.filter(role => ROLES_AUTHOR.includes(role));
  //   return authorRoles.length > 0;
  // });

  return {
    authors: users
  };
}
/**
 * mapUserData
 */

function mapUserData(user) {
  return _objectSpread(_objectSpread({}, user), {}, {
    roles: [...user.roles.nodes],
    avatar: user.avatar && updateUserAvatar(user.avatar)
  });
}
/**
 * updateUserAvatar
 */

function updateUserAvatar(avatar) {
  var _avatar$url;

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default
  return _objectSpread(_objectSpread({}, avatar), {}, {
    url: (_avatar$url = avatar.url) === null || _avatar$url === void 0 ? void 0 : _avatar$url.replace('http://', 'https://')
  });
}

/***/ })

};
;