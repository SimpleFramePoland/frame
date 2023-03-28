(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(5792);
// EXTERNAL MODULE: ./src/hooks/use-search.js + 1 modules
var use_search = __webpack_require__(5733);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(7108);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var posts = __webpack_require__(1272);
// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var lib_categories = __webpack_require__(5706);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(5759);
// EXTERNAL MODULE: ./src/lib/pages.js + 1 modules
var pages = __webpack_require__(6686);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/menus.js

const QUERY_ALL_MENUS = client_.gql`
  query AllMenus {
    menus {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/lib/menus.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MENU_LOCATION_NAVIGATION_DEFAULT = 'DEFAULT_NAVIGATION';
/**
 * getAllMenus
 */

async function getAllMenus() {
  const apolloClient = (0,apollo_client/* getApolloClient */.W)();
  const data = await apolloClient.query({
    query: QUERY_ALL_MENUS
  });
  const menus = data === null || data === void 0 ? void 0 : data.data.menus.edges.map(mapMenuData);
  const defaultNavigation = createMenuFromPages({
    locations: [MENU_LOCATION_NAVIGATION_DEFAULT],
    pages: await (0,pages/* getTopLevelPages */.Gy)({
      queryIncludes: 'index'
    })
  });
  menus.push(defaultNavigation);
  return {
    menus
  };
}
/**
 * mapMenuData
 */

function mapMenuData(menu = {}) {
  const {
    node
  } = menu;

  const data = _objectSpread({}, node);

  data.menuItems = data.menuItems.edges.map(({
    node
  }) => {
    return _objectSpread({}, node);
  });
  return data;
}
/**
 * mapPagesToMenuItems
 */

function mapPagesToMenuItems(pages) {
  return pages.map(({
    id,
    uri,
    title
  }) => {
    return {
      label: title,
      path: uri,
      id
    };
  });
}
/**
 * createMenuFromPages
 */

function createMenuFromPages({
  locations,
  pages
}) {
  return {
    menuItems: mapPagesToMenuItems(pages),
    locations
  };
}
/**
 * parseHierarchicalMenu
 */

const parseHierarchicalMenu = (data = [], {
  idKey = 'id',
  parentKey = 'parentId',
  childrenKey = 'children'
} = {}) => {
  const tree = [];
  const childrenOf = {};
  data.forEach(item => {
    const newItem = _objectSpread({}, item);

    const {
      [idKey]: id,
      [parentKey]: parentId = 0
    } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem);
  });
  return tree;
};
/**
 * findMenuByLocation
 */

function findMenuByLocation(menus, location) {
  if (typeof location !== 'string') {
    throw new Error('Failed to find menu by location - location is not a string.');
  }

  const menu = menus.find(({
    locations
  }) => {
    return locations.map(loc => loc.toUpperCase()).includes(location.toUpperCase());
  });
  return menu && parseHierarchicalMenu(menu.menuItems);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/_variables.module.scss
var _variables_module = __webpack_require__(4060);
var _variables_module_default = /*#__PURE__*/__webpack_require__.n(_variables_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function App({
  Component,
  pageProps = {},
  metadata,
  recentPosts,
  categories,
  menus
}) {
  const site = (0,use_site/* useSiteContext */.AA)({
    metadata,
    recentPosts,
    categories,
    menus
  });
  return /*#__PURE__*/jsx_runtime_.jsx(use_site/* SiteContext.Provider */.DN.Provider, {
    value: site,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(use_search/* SearchProvider */.X$, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
        height: 4,
        color: (_variables_module_default()).progressbarColor
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

App.getStaticProps = async function (appContext) {
  const appProps = await app["default"].getStaticProps(appContext);
  const {
    posts: recentPosts
  } = await (0,posts/* getRecentPosts */.no)({
    count: 5,
    queryIncludes: 'index'
  });
  const {
    categories
  } = await (0,lib_categories/* getCategories */.CP)({
    count: 5
  });
  const {
    menus = []
  } = await getAllMenus();
  return _app_objectSpread(_app_objectSpread({}, appProps), {}, {
    metadata: await (0,site/* getSiteMetadata */.Oq)(),
    recentPosts,
    categories,
    menus
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 4060:
/***/ ((module) => {

// Exports
module.exports = {
	"progressbarColor": "#0070f3"
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

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

/***/ 2733:
/***/ ((module) => {

"use strict";
module.exports = require("fuse.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,544,489,265,733], () => (__webpack_exec__(7638)));
module.exports = __webpack_exports__;

})();