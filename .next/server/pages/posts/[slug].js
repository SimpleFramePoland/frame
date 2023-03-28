(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 7485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1272);
/* harmony import */ var lib_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5706);
/* harmony import */ var lib_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8657);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4166);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7108);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5792);
/* harmony import */ var hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6314);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7002);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5853);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1294);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4868);
/* harmony import */ var components_Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1904);
/* harmony import */ var components_Metadata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(496);
/* harmony import */ var components_FeaturedImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8528);
/* harmony import */ var styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8407);
/* harmony import */ var styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout__WEBPACK_IMPORTED_MODULE_10__]);
components_Layout__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function Post({
  post,
  socialImage,
  related
}) {
  var _post$og;

  const {
    title,
    metaTitle,
    description,
    content,
    date,
    author,
    categories,
    modified,
    featuredImage,
    isSticky = false
  } = post;
  const {
    metadata: siteMetadata = {},
    homepage
  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)();

  if (!post.og) {
    post.og = {};
  }

  post.og.imageUrl = `${homepage}${socialImage}`;
  post.og.imageSecureUrl = post.og.imageUrl;
  post.og.imageWidth = 1000;
  post.og.imageHeight = 1000;
  const {
    metadata
  } = (0,hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
    metadata: _objectSpread(_objectSpread({}, post), {}, {
      title: metaTitle,
      description: description || ((_post$og = post.og) === null || _post$og === void 0 ? void 0 : _post$og.description) || `Read more about ${title}`
    })
  });

  if (true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const metadataOptions = {
    compactCategories: false
  };
  const {
    posts: relatedPostsList,
    title: relatedPostsTitle
  } = related || {};
  const helmetSettings = (0,lib_site__WEBPACK_IMPORTED_MODULE_6__/* .helmetSettingsFromMetadata */ .iB)(metadata);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, _objectSpread({}, helmetSettings)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_5__/* .ArticleJsonLd */ .dX, {
      post: post,
      siteTitle: siteMetadata.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "mx-auto mt-[120px]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "relative isolate overflow-hidden  bg-black shadow-2xl rounded-3xl sm:px-16  lg:flex lg:gap-x-20 lg:px-24 ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("svg", {
            viewBox: "0 0 1024 1024",
            className: "absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2",
            "aria-hidden": "true",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("circle", {
              cx: 512,
              cy: 512,
              r: 512,
              fill: "url(#759c1415-0410-454c-8f7c-9a820de03641)",
              fillOpacity: "0.7"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("defs", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("radialGradient", {
                id: "759c1415-0410-454c-8f7c-9a820de03641",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("stop", {
                  stopColor: "#19b5fe"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("stop", {
                  offset: 1,
                  stopColor: "#19b5fe"
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left align-middle mt-10",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h1", {
              className: "text-white banerek ",
              dangerouslySetInnerHTML: {
                __html: title
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(components_Metadata__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              className: "text-white ",
              date: date,
              categories: categories,
              options: metadataOptions,
              isSticky: isSticky
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: " max-w-md mx-auto text-center mlg:flex-auto justify-center lg:py-12 justify-self-center align-center flex items-center  ",
            children: featuredImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(components_FeaturedImage__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, featuredImage), {}, {
              src: featuredImage.sourceUrl,
              dangerouslySetInnerHTML: featuredImage.caption,
              className: "  flex items-center justify-center  w-[56rem] "
            }))
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "prose max-w-screen-lg mx-auto px-7 sm:px-10 text-xl",
      dangerouslySetInnerHTML: {
        __html: content
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_18___default().postFooter),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: Array.isArray(relatedPostsList) && relatedPostsList.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_18___default().relatedPosts),
          children: [relatedPostsTitle.name ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
            children: ["Wi\u0119cej z kategorii ", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: relatedPostsTitle.link,
              children: relatedPostsTitle.name
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            children: "More Posts"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("ul", {
            children: relatedPostsList.map(post => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .postPathBySlug */ .F3)(post.slug),
                children: post.title
              })
            }, post.title))
          })]
        })
      })
    })]
  });
}
async function getStaticProps({
  params = {}
} = {}) {
  const {
    post
  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getPostBySlug */ .zQ)(params === null || params === void 0 ? void 0 : params.slug);

  if (!post) {
    return {
      props: {},
      notFound: true,
      queryIncludes: 'all'
    };
  }

  const {
    categories,
    databaseId: postId
  } = post;
  const props = {
    post,
    socialImage: `${"/images/og"}/${params === null || params === void 0 ? void 0 : params.slug}.png`
  };
  const {
    category: relatedCategory,
    posts: relatedPosts
  } = (await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getRelatedPosts */ .EE)(categories, postId)) || {};
  const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

  if (hasRelated) {
    props.related = {
      posts: relatedPosts,
      title: {
        name: relatedCategory.name || null,
        link: (0,lib_categories__WEBPACK_IMPORTED_MODULE_3__/* .categoryPathBySlug */ .I5)(relatedCategory.slug)
      }
    };
  }

  return {
    props
  };
}
async function getStaticPaths() {
  // Only render the most recent posts to avoid spending unecessary time
  // querying every single post from WordPress
  // Tip: this can be customized to use data or analytitcs to determine the
  // most popular posts and render those instead
  const {
    posts
  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getRecentPosts */ .no)({
    count: 5,
    // Update this value in next.config.js!
    queryIncludes: 'index'
  });
  const paths = posts.filter(({
    slug
  }) => typeof slug === 'string').map(({
    slug
  }) => ({
    params: {
      slug
    }
  }));
  return {
    paths,
    fallback: 'blocking'
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8407:
/***/ ((module) => {

// Exports
module.exports = {
	"postMetadata": "Post_postMetadata__MmjQM",
	"postFooter": "Post_postFooter__VeGaB",
	"postModified": "Post_postModified__I0FYc",
	"relatedPosts": "Post_relatedPosts__M0knh",
	"header": "Post_header__LrQDH"
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 9476:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/20/solid");

/***/ }),

/***/ 2135:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 7325:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale/pl");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8181:
/***/ ((module) => {

"use strict";
module.exports = require("parameterize");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,489,2,265,166,677,730], () => (__webpack_exec__(7485)));
module.exports = __webpack_exports__;

})();