var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body,\ninput,\nbutton {\n  font-family: \"Raleway\", sans-serif; }\n\nbody {\n  background: #f4f4f4;\n  margin: auto; }\n\n.main-container {\n  margin: 50px 350px;\n  display: flex; }\n  @media only screen and (max-width: 600px) {\n    .main-container {\n      margin: 0;\n      flex-direction: column; } }\n  @media (min-width: 1200px) {\n    .main-container {\n      max-width: 1140px;\n      margin: auto; } }\n  .main-container span {\n    font-weight: 600; }\n  .main-container .left,\n  .main-container .right {\n    flex: 1;\n    padding: 15px; }\n  .main-container button {\n    background: #225283;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    width: 100px; }\n    .main-container button:hover {\n      background: rgba(34, 82, 131, 0.8);\n      cursor: pointer; }\n    .main-container button.save {\n      padding: 15px;\n      background: white;\n      color: #225283;\n      font-size: 16px;\n      font-weight: 500;\n      margin-top: 10px; }\n      .main-container button.save:hover {\n        background: rgba(255, 255, 255, 0.8); }\n  .main-container .search-panel {\n    padding: 30px;\n    background: white;\n    border-radius: 5px; }\n    .main-container .search-panel form {\n      display: flex;\n      justify-content: space-between; }\n      @media only screen and (max-width: 600px) {\n        .main-container .search-panel form {\n          display: flex;\n          flex-direction: column; } }\n      .main-container .search-panel form .input-group {\n        display: flex;\n        flex-direction: column; }\n        @media only screen and (max-width: 600px) {\n          .main-container .search-panel form .input-group {\n            margin-bottom: 20px; } }\n        .main-container .search-panel form .input-group label {\n          margin-bottom: 10px; }\n        .main-container .search-panel form .input-group input {\n          border: 0;\n          outline: 0;\n          background: transparent;\n          border-bottom: 1px solid black; }\n      @media only screen and (max-width: 600px) {\n        .main-container .search-panel form button {\n          width: 100%;\n          height: 50px; } }\n  .main-container .results {\n    width: 100%;\n    position: relative; }\n    .main-container .results figure.background-img {\n      width: 100%;\n      margin-top: 30px;\n      position: relative; }\n      .main-container .results figure.background-img img {\n        width: 100%;\n        border-radius: 5px;\n        object-fit: cover;\n        width: 100%;\n        height: 450px; }\n    .main-container .results .backdrop {\n      position: absolute;\n      z-index: 1;\n      display: flex;\n      flex-direction: column;\n      width: calc(100% - 100px);\n      height: calc(100% - 100px);\n      align-items: center;\n      margin: 50px;\n      background: #00000078;\n      border-radius: 5px;\n      top: 0;\n      transition: ease 0.2s; }\n      @media only screen and (max-width: 600px) {\n        .main-container .results .backdrop {\n          width: calc(100% - 30px);\n          height: calc(100% - 30px);\n          margin: 15px; } }\n      .main-container .results .backdrop:hover {\n        width: calc(100% - 90px);\n        height: calc(100% - 90px);\n        margin: 45px; }\n        @media only screen and (max-width: 600px) {\n          .main-container .results .backdrop:hover {\n            width: calc(100% - 30px);\n            height: calc(100% - 30px);\n            margin: 15px; } }\n      .main-container .results .backdrop .header {\n        display: flex;\n        color: white;\n        margin-top: 35px; }\n        .main-container .results .backdrop .header label {\n          color: rgba(255, 255, 255, 0.7); }\n        .main-container .results .backdrop .header .trip {\n          margin-right: 20px; }\n        .main-container .results .backdrop .header h3 {\n          font-size: 32px;\n          font-weight: 600;\n          margin-top: 10px; }\n      .main-container .results .backdrop .temp {\n        margin-top: 30px;\n        display: flex;\n        justify-content: center;\n        color: #f4f4f4; }\n        .main-container .results .backdrop .temp h1 {\n          font-size: 52px;\n          font-weight: 600; }\n        .main-container .results .backdrop .temp figure {\n          margin-left: 25px;\n          margin-right: 25px;\n          width: 15%; }\n          .main-container .results .backdrop .temp figure img {\n            width: 100%; }\n        .main-container .results .backdrop .temp .type {\n          display: flex;\n          flex-direction: column;\n          justify-content: center; }\n          .main-container .results .backdrop .temp .type label {\n            text-align: center; }\n      .main-container .results .backdrop .meta-info {\n        color: white;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-top: 10px;\n        letter-spacing: 1px; }\n        .main-container .results .backdrop .meta-info * {\n          margin-bottom: 5px; }\n        .main-container .results .backdrop .meta-info label {\n          padding: 0 20px;\n          text-align: center; }\n  .main-container .recently-added-block {\n    background: white;\n    border-radius: 5px;\n    padding: 20px 20px; }\n    .main-container .recently-added-block h2 {\n      font-size: 16px;\n      font-weight: 500;\n      margin-bottom: 30px; }\n    .main-container .recently-added-block .result {\n      display: flex;\n      margin-bottom: 15px;\n      padding-bottom: 20px;\n      border-bottom: 1px solid rgba(34, 82, 131, 0.5); }\n      @media only screen and (max-width: 600px) {\n        .main-container .recently-added-block .result {\n          flex-direction: column; }\n          .main-container .recently-added-block .result * {\n            margin-bottom: 5px; } }\n      .main-container .recently-added-block .result p {\n        margin-right: 15px; }\n      .main-container .recently-added-block .result figure img {\n        border-radius: 5px;\n        object-fit: cover;\n        width: 150px;\n        height: 140px; }\n        @media only screen and (max-width: 600px) {\n          .main-container .recently-added-block .result figure img {\n            width: 100%; } }\n      .main-container .recently-added-block .result .details {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin-left: 10px; }\n        .main-container .recently-added-block .result .details * {\n          margin-bottom: 10px; }\n        @media only screen and (max-width: 600px) {\n          .main-container .recently-added-block .result .details {\n            width: 100%;\n            margin: 0; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n  box-sizing: border-box; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style-type: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_resets_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/client/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ __webpack_exports__["default"] = (_js_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const subBtn = document.getElementById('submit-btn');
if (subBtn) {
  document.getElementById('submit-btn').addEventListener('click', () => {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const unixDate = getDates(new Date(date).getTime(), 1000)

    // checking the provided date within a week or not. if not it takes as a future. 
    const today = getDates(new Date().getTime(), 1000);
    const daysAhead = getDates((unixDate - today), 86400);
    const isFuture = daysAhead > 7;
    if (location && date) {
      const data = {
        location: location,
        date: unixDate,
        isFuture: isFuture,
        daysAhead: daysAhead
      };

      getForecast(data).then(async (res) => {
        try {
          const result = await res.json();
          if (result) {
            document.getElementById('trip-to').innerHTML = location;
            document.getElementById('trip-on').innerHTML = date;
            document.getElementById('day-info').innerHTML = `${daysAhead} ${daysAhead >= 1 ? 'days away!' : 'days behind!'}`;
            document.getElementById('weather').innerHTML = result.summary || 'not provided';
            document.getElementById('high').innerHTML = result.tempHigh || '-';
            document.getElementById('low').innerHTML = result.tempLow || '-';
            document.getElementById('trip-img').src = result.img || '-';

          }
        } catch (error) {
          alert('error occoured! try again.');
        }
      });
    } else {
      alert('please enter valid details!')
    }
  });
}

const savBtn = document.getElementById('save-btn');
if (savBtn) {
  document.getElementById('save-btn').addEventListener('click', () => {
    if (document.getElementById('trip-to').innerHTML !== '--') {
      let existingTrips = JSON.parse(localStorage.getItem('tripArr')) || [];
      existingTrips.push({
        location: document.getElementById('trip-to').innerHTML,
        date: document.getElementById('trip-on').innerHTML,
        daysAhead: document.getElementById('day-info').innerHTML,
        summary: document.getElementById('weather').innerHTML,
        tempHigh: document.getElementById('high').innerHTML,
        tempLow: document.getElementById('low').innerHTML,
        img: document.getElementById('trip-img').src,
      })
      localStorage.setItem('tripArr', JSON.stringify(existingTrips));
      setSavedList();
    } else {
      alert('Please search for a location first!')
    }

  });
}

const getForecast = async (data) => {
  return await fetch(`http://localhost:8082/getForecast`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

const getDates = (date, divider) => {
  return Math.round(date / divider);
}

const setSavedList = () => {
  const fragment = document.createDocumentFragment();
  const container = document.getElementById('recently-added');
  let existingTrips = JSON.parse(localStorage.getItem('tripArr')) || [];
  const el = document.getElementById('result-wrapper');
  if (el) {
    el.remove();
    if (existingTrips.length) {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('id', 'result-wrapper');
      existingTrips.forEach((trip, index) => {
        const result = document.createElement('div');
        result.classList.add('result');
        const count = document.createElement('p');
        count.innerHTML = index + 1;
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = trip.img;
        result.appendChild(count);
        figure.appendChild(img);
        result.appendChild(figure);
        const details = document.createElement('div');
        details.classList.add('details');
        const label1 = document.createElement('label');
        label1.innerHTML = `Location: ${trip.location}`;
        const label2 = document.createElement('label');
        label2.innerHTML = `Date: ${trip.date}`;
        const label3 = document.createElement('label');
        label3.innerHTML = `Days from today: ${trip.daysAhead}`;
        const label4 = document.createElement('label');
        label4.innerHTML = `Summary: ${trip.summary}`;
        const label5 = document.createElement('label');
        label5.innerHTML = `High-Low: ${trip.tempHigh} - ${trip.tempLow}`;
        details.appendChild(label1);
        details.appendChild(label2);
        details.appendChild(label3);
        details.appendChild(label4);
        details.appendChild(label5);
        result.appendChild(details);
        wrapper.appendChild(result);
        fragment.appendChild(wrapper);
      });

    } else {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('id', 'result-wrapper');
      const count = document.createElement('p');
      count.innerHTML = 'You have no trips saved';
      wrapper.appendChild(count);
      fragment.appendChild(wrapper);
    }
  }
  if (container)
    container.appendChild(fragment);
}

(() => {
  setSavedList();
})();

module.exports = { getDates };

/***/ }),

/***/ "./src/client/styles/main.scss":
/*!*************************************!*\
  !*** ./src/client/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./resets.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map