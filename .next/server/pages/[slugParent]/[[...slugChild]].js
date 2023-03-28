(() => {
var exports = {};
exports.id = 651;
exports.ids = [651];
exports.modules = {

/***/ 1133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Slider)
});

;// CONCATENATED MODULE: external "flowbite-react"
const external_flowbite_react_namespaceObject = require("flowbite-react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/komponenty/Carousel.js




function Slider() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "h-76 sm:h-64 xl:h-80 2xl:h-96 lg:-mt-5 ",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_flowbite_react_namespaceObject.Carousel, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/baner1.jpg",
        alt: "..."
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/baner2.jpg",
        alt: "..."
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/baner3.jpg",
        alt: "..."
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/baner4.jpg",
        alt: "..."
      })]
    })
  });
}

/***/ }),

/***/ 6314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePageMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5792);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7108);




function usePageMetadata({
  metadata: pageMetadata
}) {
  const {
    homepage,
    metadata: defaultMetadata
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(hooks_use_site__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .DN);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const metadata = (0,lib_site__WEBPACK_IMPORTED_MODULE_3__/* .constructPageMetadata */ .z0)(defaultMetadata, pageMetadata, {
    homepage,
    router
  });
  return {
    metadata
  };
}

/***/ }),

/***/ 6560:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6686);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4166);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7108);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5792);
/* harmony import */ var hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6314);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7002);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5853);
/* harmony import */ var components_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1904);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1294);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4868);
/* harmony import */ var components_komponenty_Carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1133);
/* harmony import */ var styles_pages_Page_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8021);
/* harmony import */ var styles_pages_Page_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styles_pages_Page_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout__WEBPACK_IMPORTED_MODULE_8__]);
components_Layout__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function Page({
  page,
  breadcrumbs
}) {
  var _page$og, _page$podstrony, _page$podstrony2, _page$podstrony3, _page$podstrony4;

  const {
    title,
    metaTitle,
    description,
    slug,
    content,
    featuredImage,
    children
  } = page;
  const {
    metadata: siteMetadata = {}
  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)();
  const {
    metadata
  } = (0,hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
    metadata: _objectSpread(_objectSpread({}, page), {}, {
      title: metaTitle,
      description: description || ((_page$og = page.og) === null || _page$og === void 0 ? void 0 : _page$og.description) || `Read more about ${title}`
    })
  });

  if (true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const hasChildren = Array.isArray(children) && children.length > 0;
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;
  const helmetSettings = (0,lib_site__WEBPACK_IMPORTED_MODULE_4__/* .helmetSettingsFromMetadata */ .iB)(metadata);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("script", {
      async: true,
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("script", {
      async: true,
      src: "https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/front/fancybox.js?ver=2.7.3",
      id: "modula-fancybox-js"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("link", {
      rel: "stylesheet",
      id: "modula-video-css-css",
      href: "https://simpleframe.pl/wp-content/plugins/modula-video/assets/css/modula-video-css.css?ver=6.1.1",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("link", {
      rel: "stylesheet",
      id: "modula-css",
      href: "https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/css/front.css?ver=2.7.3",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("link", {
      rel: "stylesheet",
      id: "modula-pro-effects-css",
      href: "https://simpleframe.pl/wp-content/plugins/modula/assets/css/effects.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("script", {
      async: true,
      src: "https://simpleframe.pl/wp-content/plugins/modula-video/assets/js/fancybox-modula-video.js?ver=6.1.1",
      id: "modula-fancybox-video-js"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("script", {
      async: true,
      src: "https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/front/fancybox.js?ver=2.7.3",
      id: "modula-fancybox-js"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("script", {
      async: true,
      src: "https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/modula-wf.js?ver=2.7.3",
      id: "modula-wf-js"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("script", {
      async: true,
      src: "https://simpleframe.pl/wp-content/plugins/modula/assets/js/modula-pro.js?ver=2.6.1",
      id: "modula-pro-js"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, _objectSpread({}, helmetSettings)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_3__/* .WebpageJsonLd */ .PA, {
      title: metadata.title,
      description: metadata.description,
      siteTitle: siteMetadata.title,
      slug: slug
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(components_komponenty_Carousel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(components_Content__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "text-lg   ",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: (styles_pages_Page_module_scss__WEBPACK_IMPORTED_MODULE_15___default().content),
              dangerouslySetInnerHTML: {
                __html: content
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: " prose max-w-screen-lg w-full  mx-auto",
              dangerouslySetInnerHTML: {
                __html: (_page$podstrony = page.podstrony) === null || _page$podstrony === void 0 ? void 0 : _page$podstrony.pierwszaCzescTekstu
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: "mt-10 mb-10 ",
              dangerouslySetInnerHTML: {
                __html: (_page$podstrony2 = page.podstrony) === null || _page$podstrony2 === void 0 ? void 0 : _page$podstrony2.shortcodeGrid
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: "prose  max-w-screen-lg w-full  mx-auto ",
              dangerouslySetInnerHTML: {
                __html: (_page$podstrony3 = page.podstrony) === null || _page$podstrony3 === void 0 ? void 0 : _page$podstrony3.drugaCzescTekstu
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: "mt-10",
              dangerouslySetInnerHTML: {
                __html: (_page$podstrony4 = page.podstrony) === null || _page$podstrony4 === void 0 ? void 0 : _page$podstrony4.shortcodeGridDrugi
              }
            })]
          })
        })
      }), hasChildren && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        className: (styles_pages_Page_module_scss__WEBPACK_IMPORTED_MODULE_15___default().sectionChildren),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("aside", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("p", {
              className: (styles_pages_Page_module_scss__WEBPACK_IMPORTED_MODULE_15___default().childrenHeader),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("strong", {
                children: title
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("ul", {
              children: children.map(child => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                    href: child.uri,
                    children: child.title
                  })
                }, child.id);
              })
            })]
          })
        })
      })]
    })]
  });
}
async function getStaticProps({
  params = {}
} = {}) {
  const {
    slugParent,
    slugChild
  } = params; // We can use the URI to look up our page and subsequently its ID, so
  // we can first contruct our URI from the page params

  let pageUri = `/${slugParent}/`; // We only want to apply deeper paths to the URI if we actually have
  // existing children

  if (Array.isArray(slugChild) && slugChild.length > 0) {
    pageUri = `${pageUri}${slugChild.join('/')}/`;
  }

  const {
    page
  } = await (0,lib_pages__WEBPACK_IMPORTED_MODULE_2__/* .getPageByUri */ .Cg)(pageUri);

  if (!page) {
    return {
      props: {},
      notFound: true
    };
  } // In order to show the proper breadcrumbs, we need to find the entire
  // tree of pages. Rather than querying every segment, the query should
  // be cached for all pages, so we can grab that and use it to create
  // our trail


  const {
    pages
  } = await (0,lib_pages__WEBPACK_IMPORTED_MODULE_2__/* .getAllPages */ .K0)({
    queryIncludes: 'index'
  });
  const breadcrumbs = (0,lib_pages__WEBPACK_IMPORTED_MODULE_2__/* .getBreadcrumbsByUri */ .pJ)(pageUri, pages);
  return {
    props: {
      page,
      breadcrumbs
    }
  };
}
async function getStaticPaths() {
  const {
    pages
  } = await (0,lib_pages__WEBPACK_IMPORTED_MODULE_2__/* .getAllPages */ .K0)({
    queryIncludes: 'index'
  }); // Take all the pages and create path params. The slugParent will always be
  // the top level parent page, where the slugChild will be an array of the
  // remaining segments to make up the path or URI
  // We also filter out the `/` homepage as it will conflict with index.js if
  // as they have the same path, which will fail the build

  const paths = pages.filter(({
    uri
  }) => typeof uri === 'string' && uri !== '/').map(({
    uri
  }) => {
    const segments = uri.split('/').filter(seg => seg !== '');
    return {
      params: {
        slugParent: segments.shift(),
        slugChild: segments
      }
    };
  });
  return {
    paths,
    fallback: 'blocking'
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8021:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionChildren": "Page_sectionChildren__kMFY0",
	"childrenHeader": "Page_childrenHeader__fMEOW"
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
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,489,2,265,166,730], () => (__webpack_exec__(6560)));
module.exports = __webpack_exports__;

})();