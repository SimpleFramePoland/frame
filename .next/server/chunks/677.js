exports.id = 677;
exports.ids = [677];
exports.modules = {

/***/ 8528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ FeaturedImage_FeaturedImage)
});

// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(6423);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Image/Image.module.scss
var Image_module = __webpack_require__(9797);
var Image_module_default = /*#__PURE__*/__webpack_require__.n(Image_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Image/Image.js






const Image = ({
  children,
  className,
  width = '100%',
  height = 'auto',
  src,
  alt,
  srcSet,
  sizes,
  dangerouslySetInnerHTML
}) => {
  const imageClassName = new classname/* default */.Z((Image_module_default()).image);
  imageClassName.addIf(className, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
    className: imageClassName.toString(),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Image_module_default()).featuredImageImg,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        width: width,
        height: height,
        src: src,
        alt: alt || '',
        srcSet: srcSet,
        sizes: sizes
      })
    }), children && /*#__PURE__*/jsx_runtime_.jsx("figcaption", {
      children: children
    }), dangerouslySetInnerHTML && /*#__PURE__*/jsx_runtime_.jsx("figcaption", {
      dangerouslySetInnerHTML: {
        __html: dangerouslySetInnerHTML
      }
    })]
  });
};

/* harmony default export */ const Image_Image = (Image);
;// CONCATENATED MODULE: ./src/components/Image/index.js

// EXTERNAL MODULE: ./src/components/FeaturedImage/FeaturedImage.module.scss
var FeaturedImage_module = __webpack_require__(5545);
var FeaturedImage_module_default = /*#__PURE__*/__webpack_require__.n(FeaturedImage_module);
;// CONCATENATED MODULE: ./src/components/FeaturedImage/FeaturedImage.js
const _excluded = ["className", "alt"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const FeaturedImage = _ref => {
  let {
    className,
    alt
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const featuredImageClassName = new classname/* default */.Z((FeaturedImage_module_default()).featuredImage);
  featuredImageClassName.addIf(className, className);
  return /*#__PURE__*/jsx_runtime_.jsx(Image_Image, _objectSpread({
    className: featuredImageClassName,
    alt: alt
  }, rest));
};

/* harmony default export */ const FeaturedImage_FeaturedImage = (FeaturedImage);
;// CONCATENATED MODULE: ./src/components/FeaturedImage/index.js


/***/ }),

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Metadata_Metadata)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var lib_categories = __webpack_require__(5706);
// EXTERNAL MODULE: ./src/lib/users.js + 1 modules
var users = __webpack_require__(7979);
// EXTERNAL MODULE: ./src/lib/datetime.js
var datetime = __webpack_require__(8657);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(6423);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/Metadata/Metadata.module.scss
var Metadata_module = __webpack_require__(5243);
var Metadata_module_default = /*#__PURE__*/__webpack_require__.n(Metadata_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Metadata/Metadata.js









const DEFAULT_METADATA_OPTIONS = {
  compactCategories: true
};

const Metadata = ({
  className,
  author,
  date,
  categories,
  options = DEFAULT_METADATA_OPTIONS,
  isSticky = false
}) => {
  const metadataClassName = new classname/* default */.Z((Metadata_module_default()).metadata);
  metadataClassName.addIf(className, className);
  const {
    compactCategories
  } = options;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: metadataClassName.toString(),
    children: [author && /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: (Metadata_module_default()).metadataAuthor,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("address", {
        children: [author.avatar && /*#__PURE__*/jsx_runtime_.jsx("img", {
          width: author.avatar.width,
          height: author.avatar.height,
          src: author.avatar.url,
          alt: "Author Avatar"
        }), "By", ' ', /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: (0,users/* authorPathByName */.h$)(author.name),
          rel: "author",
          children: author.name
        })]
      })
    }), date && /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("time", {
        pubdate: "pubdate",
        dateTime: date,
        children: (0,datetime/* formatDate */.p)(date)
      })
    }), Array.isArray(categories) && categories[0] && /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: (Metadata_module_default()).metadataCategories,
      children: [compactCategories && /*#__PURE__*/jsx_runtime_.jsx("p", {
        title: categories.map(({
          name
        }) => name).join(', '),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: (0,lib_categories/* categoryPathBySlug */.I5)(categories[0].slug),
          children: categories[0].name
        })
      }), !compactCategories && /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: categories.map(category => {
          return /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: (0,lib_categories/* categoryPathBySlug */.I5)(category.slug),
              children: category.name
            })
          }, category.slug);
        })
      })]
    }), isSticky && /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: (Metadata_module_default()).metadataSticky,
      children: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaMapPin, {
        "aria-label": "Sticky Post"
      })
    })]
  });
};

/* harmony default export */ const Metadata_Metadata = (Metadata);
;// CONCATENATED MODULE: ./src/components/Metadata/index.js


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

/***/ 5545:
/***/ ((module) => {

// Exports
module.exports = {
	"featuredImage": "FeaturedImage_featuredImage__bheWa"
};


/***/ }),

/***/ 9797:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "Image_image__1H4C3"
};


/***/ }),

/***/ 5243:
/***/ ((module) => {

// Exports
module.exports = {
	"metadata": "Metadata_metadata__DBDXc",
	"metadataAuthor": "Metadata_metadataAuthor__ytsac",
	"metadataCategories": "Metadata_metadataCategories__yOeC4",
	"metadataSticky": "Metadata_metadataSticky__kmI14"
};


/***/ })

};
;