exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 3184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PostCard_PostCard)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var posts = __webpack_require__(1272);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Metadata/index.js + 1 modules
var Metadata = __webpack_require__(496);
// EXTERNAL MODULE: ./src/components/FeaturedImage/index.js + 3 modules
var FeaturedImage = __webpack_require__(8528);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/PostCard/PostCard.module.scss
var PostCard_module = __webpack_require__(2231);
var PostCard_module_default = /*#__PURE__*/__webpack_require__.n(PostCard_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/PostCard/PostCard.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const PostCard = ({
  post,
  options = {}
}) => {
  const {
    title,
    excerpt,
    slug,
    date,
    featuredImage,
    categories,
    isSticky = false
  } = post;
  const {
    excludeMetadata = []
  } = options;
  const metadata = {};

  if (!excludeMetadata.includes('image')) {
    metadata.featuredImage = featuredImage;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = (PostCard_module_default()).postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${(PostCard_module_default()).postCardSticky}`;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "bg-white mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm mb-5",
        children: [/*#__PURE__*/jsx_runtime_.jsx(FeaturedImage/* default */.Z, _objectSpread(_objectSpread({}, featuredImage), {}, {
          src: featuredImage.sourceUrl,
          dangerouslySetInnerHTML: featuredImage.caption
        })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "p-5",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: " font-semibold text-2xl  mb-2",
            children: [" ", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: (0,posts/* postPathBySlug */.F3)(slug),
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "",
                dangerouslySetInnerHTML: {
                  __html: title
                }
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Metadata/* default */.Z, _objectSpread({
            className: (PostCard_module_default()).postCardMetadata
          }, metadata)), excerpt && /*#__PURE__*/jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: (0,posts/* sanitizeExcerpt */.$4)(excerpt)
            }
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const PostCard_PostCard = (PostCard);
;// CONCATENATED MODULE: ./src/components/PostCard/index.js


/***/ }),

/***/ 7264:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TemplateArchive)
/* harmony export */ });
/* unused harmony export getStaticProps */
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4166);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7108);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5792);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7002);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5706);
/* harmony import */ var components_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3184);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout__WEBPACK_IMPORTED_MODULE_4__]);
components_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const DEFAULT_POST_OPTIONS = {};
function TemplateArchive({
  categories,
  title = 'Archive',
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  slug,
  metadata,
  description
}) {
  const {
    metadata: siteMetadata = {}
  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();

  if (true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const helmetSettings = (0,lib_site__WEBPACK_IMPORTED_MODULE_2__/* .helmetSettingsFromMetadata */ .iB)(metadata);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, _objectSpread({}, helmetSettings)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_1__/* .WebpageJsonLd */ .PA, {
      title: title,
      description: metadata.description,
      siteTitle: siteMetadata.title,
      slug: slug
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "flex  px-2 mt-[8rem] px-12 justify-center  ",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "flex-1 flex-none",
        children: categories && categories.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
          className: "border-4 border-babyblue max-w-[13rem] lg:max-w-full rounded-xl",
          children: categories.map(category => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: (0,lib_categories__WEBPACK_IMPORTED_MODULE_6__/* .categoryPathBySlug */ .I5)(category.slug),
              children: category.name
            })
          }, category.slug))
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "flex-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto",
          children: posts.map(post => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_PostCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                post: post,
                options: postOptions
              })
            }, post.slug);
          })
        })
      })]
    })]
  });
}
async function getStaticProps() {
  const {
    posts
  } = await getPaginatedPosts({
    queryIncludes: 'archive'
  });
  const {
    categories
  } = await getAllCategories();
  return {
    props: {
      posts,
      categories
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2231:
/***/ ((module) => {

// Exports
module.exports = {
	"postCard": "PostCard_postCard__Jrp1b",
	"postCardSticky": "PostCard_postCardSticky__o_Xl8",
	"postCardTitle": "PostCard_postCardTitle__rhEZE",
	"postCardContent": "PostCard_postCardContent__3GwQH",
	"postCardMetadata": "PostCard_postCardMetadata__urTx_"
};


/***/ })

};
;