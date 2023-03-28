"use strict";
exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X$": () => (/* binding */ SearchProvider),
  "ZP": () => (/* binding */ useSearch)
});

// UNUSED EXPORTS: SEARCH_STATE_ERROR, SEARCH_STATE_LOADED, SEARCH_STATE_LOADING, SEARCH_STATE_READY, SearchContext, useSearchState

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__(2733);
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);
;// CONCATENATED MODULE: ./src/lib/search.js
/**
 * getSearchData
 */
async function getSearchData() {
  const response = await fetch('/wp-search.json');
  const json = await response.json();
  return json;
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/hooks/use-search.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SEARCH_KEYS = ['slug', 'title'];
const SEARCH_STATE_LOADING = 'LOADING';
const SEARCH_STATE_READY = 'READY';
const SEARCH_STATE_ERROR = 'ERROR';
const SEARCH_STATE_LOADED = 'LOADED';
const SearchContext = /*#__PURE__*/(0,external_react_.createContext)();
const SearchProvider = props => {
  const search = useSearchState();
  return /*#__PURE__*/jsx_runtime_.jsx(SearchContext.Provider, _objectSpread({
    value: search
  }, props));
};
function useSearchState() {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(SEARCH_STATE_READY);
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  let client;

  if (data) {
    client = new (external_fuse_js_default())(data.posts, {
      keys: SEARCH_KEYS,
      isCaseSensitive: false
    });
  } // On load, we want to immediately pull in the search index, which we're
  // storing clientside and gets built at compile time


  (0,external_react_.useEffect)(() => {
    (async function getData() {
      setState(SEARCH_STATE_LOADING);
      let searchData;

      try {
        searchData = await getSearchData();
      } catch (e) {
        setState(SEARCH_STATE_ERROR);
        return;
      }

      setData(searchData);
      setState(SEARCH_STATE_LOADED);
    })();
  }, []);
  return {
    state,
    data,
    client
  };
}
function useSearch({
  defaultQuery = null,
  maxResults
} = {}) {
  const search = (0,external_react_.useContext)(SearchContext);
  const {
    client
  } = search;
  const {
    0: query,
    1: setQuery
  } = (0,external_react_.useState)(defaultQuery);
  let results = []; // If we have a query, make a search. Otherwise, don't modify the
  // results to avoid passing back empty results

  if (client && query) {
    results = client.search(query).map(({
      item
    }) => item);
  }

  if (maxResults && results.length > maxResults) {
    results = results.slice(0, maxResults);
  } // If the defaultQuery argument changes, the hook should reflect
  // that update and set that as the new state


  (0,external_react_.useEffect)(() => setQuery(defaultQuery), [defaultQuery]);
  /**
   * handleSearch
   */

  function handleSearch({
    query
  }) {
    setQuery(query);
  }
  /**
   * handleClearSearch
   */


  function handleClearSearch() {
    setQuery(null);
  }

  return _objectSpread(_objectSpread({}, search), {}, {
    query,
    results,
    search: handleSearch,
    clearSearch: handleClearSearch
  });
}

/***/ })

};
;