(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 9595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Title_Title)
});

// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(6423);
// EXTERNAL MODULE: ./src/components/Title/Title.module.scss
var Title_module = __webpack_require__(6539);
var Title_module_default = /*#__PURE__*/__webpack_require__.n(Title_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Title/Title.js





const Title = ({
  className,
  title,
  thumbnail
}) => {
  const titleClassName = new classname/* default */.Z((Title_module_default()).title);
  titleClassName.addIf(className, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: titleClassName.toString(),
    children: [thumbnail && /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: thumbnail.url,
      alt: "",
      "aria-hidden": "true"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: title
    })]
  });
};

/* harmony default export */ const Title_Title = (Title);
;// CONCATENATED MODULE: ./src/components/Title/index.js


/***/ }),

/***/ 5877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Author),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var lib_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7979);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1272);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4166);
/* harmony import */ var hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6314);
/* harmony import */ var templates_archive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7264);
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([templates_archive__WEBPACK_IMPORTED_MODULE_4__]);
templates_archive__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Author({
  user,
  posts
}) {
  var _user$og;

  const {
    title,
    name,
    avatar,
    description,
    slug
  } = user;
  const {
    metadata
  } = (0,hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    metadata: _objectSpread(_objectSpread({}, user), {}, {
      title,
      description: description || ((_user$og = user.og) === null || _user$og === void 0 ? void 0 : _user$og.description) || `Read ${posts.length} posts from ${name}`
    })
  });
  const postOptions = {
    excludeMetadata: ['author']
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_2__/* .AuthorJsonLd */ .Yh, {
      author: user
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(templates_archive__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      title: name,
      Title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: name,
        thumbnail: avatar
      }),
      posts: posts,
      postOptions: postOptions,
      slug: slug,
      metadata: metadata
    })]
  });
}
async function getStaticProps({
  params = {}
} = {}) {
  const {
    user
  } = await (0,lib_users__WEBPACK_IMPORTED_MODULE_0__/* .getUserByNameSlug */ .Wt)(params === null || params === void 0 ? void 0 : params.slug);

  if (!user) {
    return {
      props: {},
      notFound: true
    };
  }

  const {
    posts
  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_1__/* .getPostsByAuthorSlug */ .DI)({
    slug: user === null || user === void 0 ? void 0 : user.slug,
    queryIncludes: 'archive'
  });
  return {
    props: {
      user,
      posts
    }
  };
}
async function getStaticPaths() {
  // By default, we don't render any Author pages as they're
  // we're considering them non-critical pages
  // To enable pre-rendering of Author pages:
  // 1. Add import to the top of the file
  //
  // import { getAllAuthors, userSlugByName } from 'lib/users';
  // 2. Uncomment the below
  //
  // const { authors } = await getAllAuthors();
  // const paths = authors.map((author) => {
  //   const { name } = author;
  //   return {
  //     params: {
  //       slug: userSlugByName(name),
  //     },
  //   };
  // });
  // 3. Update `paths` in the return statement below to reference the `paths` constant above
  return {
    paths: [],
    fallback: 'blocking'
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6539:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Title_title__RWKyi"
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
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,489,2,265,166,677,264], () => (__webpack_exec__(5877)));
module.exports = __webpack_exports__;

})();