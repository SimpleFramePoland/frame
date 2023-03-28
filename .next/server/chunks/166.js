"use strict";
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 4166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PA": () => (/* binding */ WebpageJsonLd),
/* harmony export */   "Yh": () => (/* binding */ AuthorJsonLd),
/* harmony export */   "dX": () => (/* binding */ ArticleJsonLd)
/* harmony export */ });
/* unused harmony exports WebsiteJsonLd, LogoJsonLd */
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7979);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1272);
/* harmony import */ var lib_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6686);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4147);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function ArticleJsonLd({
  post = {},
  siteTitle = ''
}) {
  const {
    homepage = '',
    faviconPath = '/favicon.ico'
  } = _package_json__WEBPACK_IMPORTED_MODULE_4__;
  const {
    title,
    slug,
    excerpt,
    date,
    author,
    categories,
    modified,
    featuredImage
  } = post;
  const path = (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .postPathBySlug */ .F3)(slug);
  const datePublished = !!date && new Date(date);
  const dateModified = !!modified && new Date(modified);
  /** TODO - As image is a recommended field would be interesting to have a
   * default image in case there is no featuredImage comming from WP,
   * like the open graph social image
   * */

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${homepage}${path}`
    },
    headline: title,
    image: [featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.sourceUrl],
    datePublished: datePublished ? datePublished.toISOString() : '',
    dateModified: dateModified ? dateModified.toISOString() : datePublished.toISOString(),
    description: excerpt,
    keywords: [categories.map(({
      name
    }) => `${name}`).join(', ')],
    copyrightYear: datePublished ? datePublished.getFullYear() : '',
    author: {
      '@type': 'Person',
      name: author === null || author === void 0 ? void 0 : author.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: `${homepage}${faviconPath}`
      }
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
    encodeSpecialCharacters: false,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("script", {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd)
    })
  });
}
function WebsiteJsonLd({
  siteTitle = ''
}) {
  const {
    homepage = ''
  } = config;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteTitle,
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${homepage}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
  return /*#__PURE__*/_jsx(Helmet, {
    encodeSpecialCharacters: false,
    children: /*#__PURE__*/_jsx("script", {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd)
    })
  });
}
function WebpageJsonLd({
  title = '',
  description = '',
  siteTitle = '',
  slug = ''
}) {
  const {
    homepage = ''
  } = _package_json__WEBPACK_IMPORTED_MODULE_4__;
  const path = (0,lib_pages__WEBPACK_IMPORTED_MODULE_3__/* .pagePathBySlug */ .yA)(slug);
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${homepage}${path}`,
    publisher: {
      '@type': 'ProfilePage',
      name: siteTitle
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
    encodeSpecialCharacters: false,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("script", {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd)
    })
  });
}
function AuthorJsonLd({
  author = {}
}) {
  const {
    homepage = ''
  } = _package_json__WEBPACK_IMPORTED_MODULE_4__;
  const {
    name,
    avatar,
    description
  } = author;
  const path = (0,lib_users__WEBPACK_IMPORTED_MODULE_1__/* .authorPathByName */ .h$)(name);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    image: avatar === null || avatar === void 0 ? void 0 : avatar.url,
    url: `${homepage}${path}`,
    description: description
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
    encodeSpecialCharacters: false,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("script", {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd)
    })
  });
}
function LogoJsonLd() {
  const {
    homepage = '',
    faviconPath = '/favicon.ico'
  } = config;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: `${homepage}`,
    logo: `${homepage}${faviconPath}`
  };
  return /*#__PURE__*/_jsx(Helmet, {
    encodeSpecialCharacters: false,
    children: /*#__PURE__*/_jsx("script", {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd)
    })
  });
}

/***/ })

};
;