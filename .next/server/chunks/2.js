exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 4868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Container_Container)
});

// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(6423);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Container/Container.module.scss
var Container_module = __webpack_require__(700);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Container/Container.js





const Container = ({
  children,
  className
}) => {
  const containerClassName = new classname/* default */.Z((Container_module_default()).container);
  containerClassName.addIf(className, className);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: containerClassName.toString(),
    children: children
  });
};

/* harmony default export */ const Container_Container = (Container);
;// CONCATENATED MODULE: ./src/components/Container/index.js


/***/ }),

/***/ 3942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer_Footer)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Section/index.js + 1 modules
var Section = __webpack_require__(1294);
// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(4868);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js








const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Section/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: "text-white absolute w-full bg-black",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex lg:flex-1",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "/",
              className: " ",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Your Company"
              }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: "/logo.png",
                alt: "Landscape picture",
                width: 250,
                height: 100
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "mt-4 ml-6 ",
            children: ["ul. Wiertnicza 135A", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "02-952 Warszawa", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "KRS 0000673577", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "NIP 5213776916", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Regon 367060762"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "lg:w-1/4 md:w-1/2 w-full px-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "title-font font-bold text-babyblue tracking-widest text-sm mb-3",
              children: "Produkcja filmowa "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
              className: "list-none mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/film-reklamowy",
                  className: "text-white hover:text-babyblue",
                  children: "Film Reklamowy"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/film-korporacyjny",
                  className: "text-white hover:text-babyblue",
                  children: "Film Korporacyjny"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/film-promocyjny",
                  className: "text-white hover:text-babyblue",
                  children: "Film Promocyjny"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/film-produktowy",
                  className: "text-white hover:text-babyblue",
                  children: "Film Produktowy"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "lg:w-1/4 md:w-1/2 w-full px-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "title-font font-bold text-babyblue tracking-widest text-sm mb-3",
              children: "Animacje"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
              className: "list-none mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/animacja-3d/",
                  className: "text-white hover:text-babyblue",
                  children: "Animacja 3D"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/animacja-2d",
                  className: "text-white hover:text-babyblue",
                  children: "Animacja 2D"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/animacja-techniczna",
                  className: "text-white hover:text-babyblue",
                  children: "Animacja Techniczna"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/animacja-produktowa",
                  className: "text-white hover:text-babyblue",
                  children: "Animacja Produktowa"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "lg:w-1/4 md:w-1/2 w-full px-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "title-font font-bold text-babyblue tracking-widest text-sm mb-3",
              children: "Postprodukcja"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
              className: "list-none mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-white hover:text-babyblue",
                  children: "Postproduckja"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/montaz-filmow",
                  className: "text-white hover:text-babyblue",
                  children: "Monta\u017C film\xF3w"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/produkcja-animacji",
                  className: "text-white hover:text-babyblue",
                  children: "Produkcja Animacji"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "lg:w-1/4 md:w-1/2 w-full px-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "title-font font-bold text-babyblue tracking-widest text-sm mb-3",
              children: "Uslugi"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
              className: "list-none mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/billboard-sponsorski",
                  className: "text-white hover:text-babyblue",
                  children: "Billboard Sponsorski"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/teledyski",
                  className: "text-white hover:text-babyblue",
                  children: "Teledyski"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/fotografia",
                  className: "text-white hover:text-babyblue",
                  children: "Fotografia"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/streaming-video",
                  className: "text-white hover:text-babyblue",
                  children: "Streaming"
                })
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-babyblue fonttext-sm text-center sm:text-left",
            children: "\xA9 2023 SimpleFrame"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "text-babyblue",
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                fill: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ml-3 text-babyblue",
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                fill: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ml-3 text-babyblue",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
                  width: "20",
                  height: "20",
                  x: "2",
                  y: "2",
                  rx: "5",
                  ry: "5"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ml-3 text-babyblue",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                fill: "currentColor",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "0",
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  stroke: "none",
                  d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12h3z"
                }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                  cx: "4",
                  cy: "4",
                  r: "2",
                  stroke: "none"
                })]
              })
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Footer/index.js


/***/ }),

/***/ 3242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9698);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5792);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7108);
/* harmony import */ var components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8664);
/* harmony import */ var components_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7972);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3942);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Nav__WEBPACK_IMPORTED_MODULE_5__]);
components_Nav__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Layout = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    asPath
  } = router;
  const {
    homepage,
    metadata = {}
  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();

  if (!metadata.og) {
    metadata.og = {};
  }

  metadata.og.url = `${homepage}${asPath}`;

  const helmetSettings = _objectSpread({
    defaultTitle: metadata.title,
    titleTemplate:  false ? 0 : `%s - ${metadata.title}`
  }, (0,lib_site__WEBPACK_IMPORTED_MODULE_4__/* .helmetSettingsFromMetadata */ .iB)(metadata, {
    setTitle: false,
    link: [{
      rel: 'alternate',
      type: 'application/rss+xml',
      href: '/feed.xml'
    }, // Favicon sizes and manifest generated via https://favicon.io/
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    }, {
      rel: 'manifest',
      href: '/site.webmanifest'
    }]
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().layoutContainer),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, _objectSpread({}, helmetSettings)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_Nav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_Main__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3242);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Main_Main)
});

// EXTERNAL MODULE: ./src/components/Main/Main.module.scss
var Main_module = __webpack_require__(1744);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Main/Main.js



const Main = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: (Main_module_default()).main,
    children: children
  });
};

/* harmony default export */ const Main_Main = (Main);
;// CONCATENATED MODULE: ./src/components/Main/index.js


/***/ }),

/***/ 2307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9476);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const produkcje = [{
  name: 'Film Reklamowy',
  description: 'Skuteczna reklama wideo dla Twojego biznesu',
  href: '/film-reklamowy',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.FilmIcon
}, {
  name: 'Film Korporacyjny',
  description: 'Profesjonalna prezentacja Twojej firmy',
  href: '/film-korporacyjny',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.BuildingOffice2Icon
}, {
  name: 'Film Promocyjny',
  description: 'Zachęć swoich klientów do zakupów ',
  href: '/film-promocyjny',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.EyeIcon
}, {
  name: 'Film Produktowy',
  description: 'Pokaż swoje produkty w najlepszym świetle',
  href: '/film-produktowy',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.VideoCameraIcon
}, {
  name: 'Dron',
  description: 'Osiągnij nowe perspektywy i zaskocz swoich odbiorców',
  href: '/dron-filmowanie-z-powietrza',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.PaperAirplaneIcon
}];
const Postprodukcja = [{
  name: 'Postproduckja',
  description: 'Stwórz wyjątkową animację od pomysłu po finalny efekt',
  href: '/postprodukcja',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ComputerDesktopIcon
}, {
  name: 'Montaż filmów',
  description: 'Zaoszczędź czas i powierz montaż swojego filmu naszym profesjonalnym edytorom',
  href: '/montaz-filmow',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.AdjustmentsHorizontalIcon
}, {
  name: 'Produkcja Animacji',
  description: 'Stwórz wyjątkową animację od pomysłu po finalny efekt',
  href: '/produkcja-animacji',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.SquaresPlusIcon
}];
const animacje = [{
  name: 'Animacja 3D',
  description: 'Ożyw swoje pomysły w trójwymiarowej przestrzeni',
  href: '/animacja-3d/',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CubeIcon
}, {
  name: 'Animacja 2D',
  description: 'Zaprojektuj animację dopasowaną do Twojej marki',
  href: '/animacja-2d',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowPathIcon
}, {
  name: 'Animacja Techniczna',
  description: 'Wyjaśnij skomplikowane tematy w prosty sposób',
  href: '/animacja-techniczna',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.WrenchScrewdriverIcon
}, {
  name: 'Animacja Produktowa',
  description: 'Przedstaw swoje produkty w nowoczesny i innowacyjny sposób',
  href: '/animacja-produktowa',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CakeIcon
}];
const uslugi = [{
  name: 'Billboard Sponsorski',
  description: 'Promuj swoją markę i dotrzyj do szerszej publiczności',
  href: '/billboard-sponsorski',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowsPointingOutIcon
}, {
  name: 'Teledyski',
  description: 'Prezentuj swoje produkty lub usługi za pomocą interesującej treści wideo',
  href: '/teledyski',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.MusicalNoteIcon
}, {
  name: 'Fotografia',
  description: 'Uchwyć wspaniałe obrazy, które reprezentują Twoją markę i przyciągają klientów',
  href: '/fotografia',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CameraIcon
}, {
  name: 'Streaming',
  description: 'Dostarczaj wysokiej jakości treści swojej publiczności za pomocą transmisji na żywo',
  href: '/streaming-video',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ComputerDesktopIcon
}, {
  name: 'PPT',
  description: 'Twórz wizualnie atrakcyjne prezentacje, które skutecznie komunikują Twoją wiadomość',
  href: '/prezentacje-multimedialne',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowPathIcon
}];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Header() {
  const {
    0: mobileMenuOpen,
    1: setMobileMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
    className: "bg-black w-full left-0 z-10 fixed",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
      className: "mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-14",
      "aria-label": "Global",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "flex lg:flex-1",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/",
          className: "-m-1.5 p-1.5 ",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
            src: "/logo.png",
            alt: "Logo Simple Frame",
            width: 315,
            height: 45
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "flex lg:hidden",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white",
          onClick: () => setMobileMenuOpen(true),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "sr-only",
            children: "Open main menu"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Bars3Icon, {
            className: "h-6 w-6",
            "aria-hidden": "true"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Group, {
        className: "hidden lg:flex lg:gap-x-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
            className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none",
            children: ["Produkcja filmowa", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
              className: "h-5 w-5 flex-none text-gray-400",
              "aria-hidden": "true"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition ease-out duration-200",
            enterFrom: "opacity-0 translate-y-1",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-150",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
              className: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "p-4",
                children: produkcje.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-grey",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(item.icon, {
                      className: "h-6 w-6 text-white group-hover:text-babyblue",
                      "aria-hidden": "true"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex-auto",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                      href: item.href,
                      className: "block font-semibold text-white group-hover:text-babyblue",
                      children: [item.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                        className: "absolute inset-0"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      className: "mt-1 text-white",
                      children: item.description
                    })]
                  })]
                }, item.name))
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
            className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none",
            children: ["Postprodukcja", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
              className: "h-5 w-5 flex-none text-gray-400",
              "aria-hidden": "true"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition ease-out duration-200",
            enterFrom: "opacity-0 translate-y-1",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-150",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
              className: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "p-4",
                children: Postprodukcja.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-grey",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(item.icon, {
                      className: "h-6 w-6 text-white group-hover:text-babyblue",
                      "aria-hidden": "true"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex-auto",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                      href: item.href,
                      className: "block font-semibold text-white group-hover:text-babyblue",
                      children: [item.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                        className: "absolute inset-0"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      className: "mt-1 text-white",
                      children: item.description
                    })]
                  })]
                }, item.name))
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
            className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none",
            children: ["Animacja", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
              className: "h-5 w-5 flex-none text-gray-400",
              "aria-hidden": "true"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition ease-out duration-200",
            enterFrom: "opacity-0 translate-y-1",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-150",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
              className: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "p-4",
                children: animacje.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50 ",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-black group-hover:text-babyblue",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(item.icon, {
                      className: "h-6 w-6 text-white group-hover:text-babyblue",
                      "aria-hidden": "true"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex-auto",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                      href: item.href,
                      className: "block font-semibold text-white group-hover:text-babyblue",
                      children: [item.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                        className: "absolute inset-0"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      className: "mt-1 text-white",
                      children: item.description
                    })]
                  })]
                }, item.name))
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
            className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none ",
            children: ["Us\u0142ugi", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
              className: "h-5 w-5 flex-none text-gray-400",
              "aria-hidden": "true"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition ease-out duration-200",
            enterFrom: "opacity-0 translate-y-1",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-150",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
              className: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5 group-hover:text-babyblue",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "p-4",
                children: uslugi.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50 group-hover:text-babyblue",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-black group-hover:text-babyblue",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(item.icon, {
                      className: "h-6 w-6 text-white group-hover:text-babyblue",
                      "aria-hidden": "true"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex-auto",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                      href: item.href,
                      className: "block font-semibold text-white group-hover:text-babyblue",
                      children: [item.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                        className: "absolute inset-0"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      className: "mt-1 text-white",
                      children: item.description
                    })]
                  })]
                }, item.name))
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          href: "/posts",
          className: "text-sm font-semibold leading-6 text-white",
          children: "Blog"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "hidden lg:flex lg:flex-1 lg:justify-end ",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          className: "btn btn-sm btn-primary align-middle  ",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            href: "/porozmawiajmy",
            className: "text-white capitalize",
            children: "Kontakt"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
      as: "div",
      className: "lg:hidden",
      open: mobileMenuOpen,
      onClose: setMobileMenuOpen,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "fixed inset-0 z-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Panel, {
        className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/",
            className: "-m-1.5 p-1.5",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: "sr-only",
              children: "Simple Frame"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            type: "button",
            className: "-m-2.5 rounded-md p-2.5 text-white",
            onClick: () => setMobileMenuOpen(false),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: "sr-only",
              children: "Close menu"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.XMarkIcon, {
              className: "h-6 w-6",
              "aria-hidden": "true"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "mt-6 flow-root",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "-my-6 divide-y divide-white-500/10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "space-y-2 py-6",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                as: "div",
                className: "-mx-3",
                children: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                    className: "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-white font-semibold leading-7 hover:text-babyblue",
                    children: ["Produkcja filmowa", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                      className: classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none'),
                      "aria-hidden": "true"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                    className: "mt-2 space-y-2",
                    children: [...produkcje].map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                      as: "a",
                      href: item.href,
                      className: "block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:text-babyblue",
                      children: item.name
                    }, item.name))
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                href: "#",
                className: "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50",
                children: "Postprodukcja"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                as: "div",
                className: "-mx-3",
                children: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                    className: "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-white font-semibold leading-7 hover:text-babyblue",
                    children: ["Animacja", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                      className: classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none'),
                      "aria-hidden": "true"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                    className: "mt-2 space-y-2",
                    children: [...animacje].map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                      as: "a",
                      href: item.href,
                      className: "block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:text-babyblue",
                      children: item.name
                    }, item.name))
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                as: "div",
                className: "-mx-3",
                children: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                    className: "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-white font-semibold leading-7 hover:text-babyblue",
                    children: ["Us\u0142ugi", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                      className: classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none'),
                      "aria-hidden": "true"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                    className: "mt-2 space-y-2",
                    children: [...uslugi].map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                      as: "a",
                      href: item.href,
                      className: "block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:text-babyblue",
                      children: item.name
                    }, item.name))
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                href: "/posts",
                className: "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50",
                children: "Blog"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
              className: "bg-babyblue w-1/4 rounded ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                href: "/porozmawiajmy",
                className: "-mx-3 block rounded-lg py-2.5 px-3 text-base font-bold leading-7 text-white hover:bg-black-50",
                children: "Kontakt"
              })
            })]
          })
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2307);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Nav__WEBPACK_IMPORTED_MODULE_0__]);
_Nav__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Section_Section)
});

// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(6423);
// EXTERNAL MODULE: ./src/components/Section/Section.module.scss
var Section_module = __webpack_require__(9429);
var Section_module_default = /*#__PURE__*/__webpack_require__.n(Section_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Section/Section.js
const _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Section = _ref => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const sectionClassName = new classname/* default */.Z((Section_module_default()).section);
  sectionClassName.addIf(className, className);
  return /*#__PURE__*/jsx_runtime_.jsx("section", _objectSpread(_objectSpread({
    className: sectionClassName.toString()
  }, rest), {}, {
    children: children
  }));
};

/* harmony default export */ const Section_Section = (Section);
;// CONCATENATED MODULE: ./src/components/Section/index.js


/***/ }),

/***/ 6423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ClassName {
  constructor(className) {
    this.base = className;

    if (!Array.isArray(className)) {
      this.base = [this.base];
    }
  }

  add(className) {
    if (!Array.isArray(className)) {
      className = [className];
    }

    this.base = [...this.base, ...className];
    return this;
  }

  addIf(className, condition) {
    if (condition) this.add(className);
    return this;
  }

  toString() {
    return this.base.join(' ');
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassName);

/***/ }),

/***/ 700:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__jY5v0"
};


/***/ }),

/***/ 9698:
/***/ ((module) => {

// Exports
module.exports = {
	"layoutContainer": "Layout_layoutContainer__5pQvD"
};


/***/ }),

/***/ 1744:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 9429:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Section_section___TusU"
};


/***/ })

};
;