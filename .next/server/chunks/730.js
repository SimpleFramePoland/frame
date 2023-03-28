exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 1904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Content_Content)
});

// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(6423);
// EXTERNAL MODULE: ./src/components/Content/Content.module.scss
var Content_module = __webpack_require__(3145);
var Content_module_default = /*#__PURE__*/__webpack_require__.n(Content_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Content/Content.js




const Content = ({
  children,
  className
}) => {
  const contentClassName = new classname/* default */.Z((Content_module_default()).content);
  contentClassName.addIf(className, className);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: contentClassName.toString(),
    children: children
  });
};

/* harmony default export */ const Content_Content = (Content);
;// CONCATENATED MODULE: ./src/components/Content/index.js


/***/ }),

/***/ 5853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Header_Header)
});

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(4868);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(4288);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/Header.js





const Header = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: (Header_module_default()).header,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      children: children
    })
  });
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Header/index.js


/***/ }),

/***/ 3145:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Content_content__HI96t"
};


/***/ }),

/***/ 4288:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__NLhag"
};


/***/ })

};
;