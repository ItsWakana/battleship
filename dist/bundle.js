/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*, *::before, *::after {\\n    margin: 0;\\n    box-sizing: border-box;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n:root {\\n    --main-background-clr: rgb(6, 18, 31);\\n    --grid-border-clr: rgb(22, 47, 73);\\n    --box-hover-clr: rgb(15, 29, 44);\\n    --ship-clr: rgb(36, 60, 85);\\n    --secondary-clr: #cee61c;\\n}\\n\\nbody {\\n    height: 100vh;\\n    background-color: var(--main-background-clr);\\n    margin-top: 10px;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    gap: 30px;\\n}\\n\\nh2 {\\n    color: var(--secondary-clr);\\n}\\n\\n.start-game {\\n    background: var(--secondary-clr);\\n    outline: none;\\n    border: none;\\n    border-radius: 5px;\\n    padding: 8px 15px;\\n    cursor: pointer;\\n    transition: 150ms;\\n    font-weight: bold;\\n}\\n\\n.in-progress {\\n    cursor: not-allowed;\\n    background-color: gray;\\n    opacity: 0.5;\\n}\\n\\n.gameboards {\\n    display: flex;\\n    justify-content: center;\\n    gap: 20px;\\n    width: 80%;\\n}\\n.grid.left,\\n.grid.right {\\n    display: flex;\\n    background: var(--main-background-clr);\\n    border-radius: 5px;\\n    flex-shrink: 0;\\n    width: 50%;\\n    height: 100%;\\n    aspect-ratio: 1/1;\\n    transition: 100ms;\\n}\\n\\n/* .grid.left.disabled,\\n.grid.right.disabled {\\n    pointer-events: none;\\n    cursor: not-allowed;\\n} */\\n\\n.row {\\n    flex-grow: 1;\\n    display: flex;\\n    flex-direction: column;\\n    aspect-ratio: 1/1;\\n}\\n\\n.box,\\n.outer-box {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    /* border: solid 1px rgb(56, 58, 70); */\\n    border: solid 1px var(--grid-border-clr);\\n    flex-grow: 1;\\n    /* cursor: pointer; */\\n    aspect-ratio: 1/1;\\n    text-align: center;\\n    font-weight: bold;\\n    font-size: 30px;\\n}\\n\\n/* .box .disabled {\\n    pointer-events: none;\\n} */\\n\\n.disabled {\\n    cursor: not-allowed;\\n    pointer-events: none;\\n}\\n.box.hover {\\n    background-color: var(--box-hover-clr);\\n}\\n\\n.box.placed {\\n    background-color: var(--secondary-clr);\\n}\\n.outer-box {\\n    background-color: var(--main-background-clr);\\n    color: var(--secondary-clr);\\n    border: none;\\n    font-size: 0.6rem;\\n}\\n\\n.attack-marker {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 60%;\\n    height: 60%;\\n    border: solid 3px var(--secondary-clr);\\n    border-radius: 50%;\\n}\\n\\n.ship-hit-marker {\\n    width: 50%;\\n    height: 50%;\\n    background-color: white;\\n    border-radius: 50%;\\n}\\n\\n.player-ship-hit,\\n.computer-ship-hit {\\n    position: relative;\\n    border-radius: 0%;\\n    border: none;\\n}\\n\\n.player-ship-hit::before,\\n.player-ship-hit::after,\\n.computer-ship-hit::before,\\n.computer-ship-hit::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 2px;\\n  height: 100%;\\n  top: 0;\\n  left: 50%;\\n  transform: translateX(-50%) rotate(45deg);\\n}\\n\\n.player-ship-hit::before,\\n.player-ship-hit::after {\\n    background-color: var(--main-background-clr);\\n}\\n\\n.computer-ship-hit::before,\\n.computer-ship-hit::after {\\n    background-color: var(--secondary-clr);\\n}\\n\\n.player-ship-hit::after,\\n.computer-ship-hit::after {\\n  transform: translateX(-50%) rotate(-45deg);\\n}\\n\\n.ship-main-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    /* justify-content: center; */\\n    padding-top: 10px;\\n    gap: 20px;\\n    width: 100%;\\n    height: 200px;\\n    background: var(--grid-border-clr);\\n}\\n\\n.ship-sub-container {\\n    display: flex;\\n    gap: 25px;\\n}\\n\\n.ship-element-container {\\n    /* width: 100px;\\n    height: 100px; */\\n    /* border: solid 1px red; */\\n    position: relative;\\n    transition: 250ms ease-out;\\n}\\n\\n.ship-element {\\n    background: var(--secondary-clr);\\n    height: 30px;\\n    transition: 150ms;\\n}\\n\\n.ship-element:hover {\\n    border: solid 1px var(--main-background-clr);\\n}\\n\\n\\n.ship-element.length-2 {\\n    width: 50px;\\n}\\n\\n.ship-element.length-3 {\\n    width: 70px;\\n\\n}\\n\\n.ship-element.length-4 {\\n    width: 90px;\\n\\n}\\n\\n.ship-element.length-5 {\\n    width: 110px;\\n\\n}\\n\\n.ship-element.vertical {\\n    background: var(--secondary-clr);\\n    width: 30px;\\n}\\n\\n.ship-element.length-2.vertical {\\n    height: 50px;\\n}\\n\\n.ship-element.length-3.vertical {\\n    height: 70px;\\n}\\n\\n.ship-element.length-4.vertical {\\n    height: 90px;\\n}\\n\\n.ship-element.length-5.vertical {\\n    height: 110px;\\n}\\n\\n.rotate-button {\\n    position: absolute;\\n    width: 50px;\\n    left: 50%;\\n    transform: translate(-50%, calc(100% + -55px));\\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\\n    transition: transform 0.3s ease-in-out;\\n    transform-origin: center center;\\n}\\n\\n.rotate-button.active {\\n    transform: rotate(90deg);\\n    transform-origin: top left;\\n}\\n\\n/* .ship-element.length-2.rotate {\\n    transform: rotate(90deg);\\n}\\n\\n.ship-element.length-3.rotate {\\n    transform: rotate(90deg);\\n}\\n\\n.ship-element.length-4.rotate {\\n    transform: rotate(90deg);\\n\\n}\\n\\n.ship-element.length-5.rotate {\\n    transform: rotate(90deg);\\n} */\\n\\n.invisible {\\n    scale: 0;\\n    /* opacity: 0; */\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMCreation.js":
/*!****************************!*\
  !*** ./src/DOMCreation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CustomElementCreator\": () => (/* binding */ CustomElementCreator)\n/* harmony export */ });\n\nconst CustomElementCreator = () => {\n\n    const oneElement = (classTitle, element) => {\n        const newElement = document.createElement(element);\n        newElement.className = classTitle;\n    \n        return newElement;\n    }\n\n    const multipleElements = (element, qty) => {\n        const arr = [];\n        for (let i=0; i<qty; i++) {\n            const newElement = document.createElement(element);\n            arr.push(newElement);\n        }\n\n        return arr;\n    }\n\n    return { oneElement, multipleElements }\n}\n\n\n//# sourceURL=webpack://battleship/./src/DOMCreation.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"View\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/rotate.svg */ \"./src/assets/rotate.svg\");\n/* harmony import */ var _DOMCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMCreation */ \"./src/DOMCreation.js\");\n\n\n\nconst DOMHelperCreation = () => {\n\n    const creator = (0,_DOMCreation__WEBPACK_IMPORTED_MODULE_1__.CustomElementCreator)();\n\n    \n    const playerBoard = document.querySelector('.grid.left');\n    const computerBoard = document.querySelector('.grid.right');\n    \n    const makeGridSquares = (container, isCompGrid) => {\n            for (let i=0; i<11; i++) {\n\n                const row = creator.oneElement('row', 'div');\n                container.appendChild(row);\n    \n                for (let j=0; j<11; j++) {\n\n                        const box = creator.oneElement('box', 'div');\n                        row.appendChild(box)\n                        box.dataset.xyPos = `${j-1}${i-1}`;\n                        if (isCompGrid) {\n                            box.dataset.player = 'computer';\n                        } else {\n                            box.dataset.player = 'player';\n                        }\n                    \n                    if (i === 0) {\n                        box.className = 'outer-box';\n                        box.dataset.player = null;\n                        box.textContent = j;\n                    }\n                    if (j === 0) {\n                        box.className = 'outer-box';\n                        box.dataset.player = null;\n                        box.textContent = setAlphabet[i];\n                    }\n                }\n            }\n    }\n\n    const setAlphabet = {\n        1: 'A',\n        2: 'B',\n        3: 'C',\n        4: 'D',\n        5: 'E',\n        6: 'F',\n        7: 'G',\n        8: 'H',\n        9: 'I',\n        10: 'J'\n    }\n\n    const generateGrids = () => {\n\n        makeGridSquares(playerBoard, false);\n        makeGridSquares(computerBoard, true);\n    }\n\n    const generateShipElements = () => {\n        const shipElementArea = document.querySelector('.ship-main-container');\n\n        const title = creator.oneElement('user-instruction', 'h2');\n        title.textContent = 'Drag your fleet onto the battlefield, captain!'\n        shipElementArea.appendChild(title);\n        \n        const ships = creator.multipleElements('div', 4);\n        const shipLengths = [5,4,3,2];\n\n        ships.forEach((ship, i) => {\n            ship.dataset.length = shipLengths[i];\n        });\n        \n        for (const ship of ships) {\n            ship.className = 'ship-element';\n            ship.classList.add(`length-${ship.dataset.length}`);\n            shipElementArea.appendChild(ship);\n            ship.draggable = true;\n            ship.dataset.orientation = 'horizontal';\n        }\n    }\n\n    const generateShipRotationControls = (callback) => {\n        const shipMainContainer = document.querySelector('.ship-main-container');\n\n        const shipSubContainer = creator.oneElement('ship-sub-container', 'div');\n\n        const ships = shipMainContainer.querySelectorAll('.ship-element');\n\n        ships.forEach((ship) => {\n            shipMainContainer.removeChild(ship);\n\n            const shipContainer = creator.oneElement('ship-element-container', 'div');\n            shipContainer.appendChild(ship);\n\n            shipSubContainer.appendChild(shipContainer);\n\n            const rotateButton = creator.oneElement('rotate-button', 'img');\n            rotateButton.src = _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_0__;\n            rotateButton.draggable = false;\n            rotateButton.addEventListener('click', () => {\n                // rotateButton.classList.toggle('active');\n                callback(ship);\n                changeOrientation(ship);\n                // applyRotation(ship);\n            });\n\n            shipContainer.appendChild(rotateButton);\n        });\n\n        shipMainContainer.appendChild(shipSubContainer);\n    \n    }\n\n\n    const applyRotation = (shipElement) => {\n\n        if (shipElement.dataset.orientation === 'horizontal') {\n            shipElement.classList.add('vertical');\n        } else {\n            shipElement.classList.remove('vertical');\n        }\n    }\n\n    const changeOrientation = (ship) => {\n        if (ship.dataset.orientation === 'horizontal') {\n            ship.dataset.orientation = 'vertical';\n        } else {\n            ship.dataset.orientation = 'horizontal';\n        }\n    }\n\n    const removeGridsAndHeading = () => {\n        \n        while (playerBoard.hasChildNodes()) {\n            playerBoard.removeChild(playerBoard.lastChild);\n        }\n\n        while (computerBoard.hasChildNodes()) {\n            computerBoard.removeChild(computerBoard.lastChild);\n        }\n\n        const shipContainer = document.querySelector('.ship-container');\n        if (shipContainer) {\n            while (shipContainer.hasChildNodes()) {\n                shipContainer.removeChild(shipContainer.lastChild);\n            }\n        }\n\n        const heading = document.querySelector('.user-instruction');\n        heading.remove();\n\n\n    }\n\n    const disableCells = () => {\n\n        computerBoard.classList.add('disabled');\n        playerBoard.classList.add('disabled');\n\n        const enabledCells = document.querySelectorAll('.box');\n        enabledCells.forEach((cell) => {\n            cell.classList.add('disabled');\n        });\n    }\n\n    const enableCells = () => {\n\n        computerBoard.classList.remove('disabled');\n        playerBoard.classList.remove('disabled');\n\n        const disabledCells = document.querySelectorAll('.box');\n\n        disabledCells.forEach((cell) => {\n            cell.classList.remove('disabled');\n        });\n    }\n\n    const currentPlayerOutline = (isPlayersTurn) => {\n        if (isPlayersTurn) {\n            playerBoard.style.border = 'solid 3px red';\n            computerBoard.style.border = '3px transparent';\n        } else {\n            computerBoard.style.border = 'solid 3px green';\n            playerBoard.style.border = '3px transparent';\n        }\n    }\n\n    const setUserInstruction = (message) => {\n        const heading = document.querySelector('.user-instruction');\n        heading.textContent = message;\n    }\n\n    const setInGameStyles = () => {\n        const button = document.querySelector('.start-game');\n\n        button.classList.add('in-progress');\n    }\n\n    const resetGameStyles = () => {\n        const button = document.querySelector('.start-game');\n        button.classList.remove('in-progress');\n\n        playerBoard.style.border = 'none';\n        computerBoard.style.border = 'none';\n\n        enableCells();\n\n\n    }\n\n    return { generateGrids, generateShipElements, removeGridsAndHeading, currentPlayerOutline, enableCells, disableCells, setUserInstruction, setInGameStyles, resetGameStyles, generateShipRotationControls,applyRotation }\n}\n\nconst View = () => {\n\n    let playerCells;\n    let computerCells;\n\n    const DOMHelper = DOMHelperCreation();\n\n    const startButton = document.querySelector('.start-game');\n\n    const setPlayerAndComputerCells = () => {\n        playerCells = document.querySelectorAll('[data-player=\"player\"]');\n        computerCells = document.querySelectorAll('[data-player=\"computer\"]');\n    }\n    const onCellClick = (callback) => {\n\n            computerCells.forEach((cell) => {\n                cell.addEventListener('click', (e) => {\n                    callback(e.target.dataset.xyPos);\n                });\n            });\n    }\n\n    const setHit = (coordinate, isPlayer) => {\n\n        if (isPlayer) {\n            const element = document.querySelector(`[data-player=\"computer\"][data-xy-pos=\"${coordinate}\"]`);\n            const child = element.querySelector('.attack-marker');\n            child.classList.add('computer-ship-hit');\n        } else {\n            coordinate = coordinate.join('');\n            const element = document.querySelector(`[data-player=\"player\"][data-xy-pos=\"${coordinate}\"]`);\n            const child = element.querySelector('.attack-marker');\n            child.classList.add('player-ship-hit');\n        }\n    }\n\n    const dragAndDropShips = (callback) => {\n        const shipElements = document.querySelectorAll('.ship-element');\n        let draggedShip;\n        shipElements.forEach((ship) => {\n            ship.addEventListener('dragstart', () => {\n                draggedShip = ship;\n            });\n        });\n\n        \n        playerCells.forEach((cell) => {\n            cell.addEventListener('dragover', (e) => {\n                e.preventDefault();\n            });\n\n        playerCells.forEach((cell) => {\n            cell.addEventListener('dragenter', () => {\n                cell.classList.add('hover');\n            });\n        });\n\n        playerCells.forEach((cell) => {\n            cell.addEventListener('dragleave', () => {\n                cell.classList.remove('hover');\n            });\n        });\n\n        });\n        playerCells.forEach((cell) => {\n            cell.addEventListener('drop', (e) => {\n                callback(draggedShip, e.target.dataset.xyPos);\n            });\n        });\n    }\n\n    const updateBoard = (computerBoard, playerBoard) => {\n        computerCells.forEach((cell) => {\n            const xy = cell.dataset.xyPos;\n            if (computerBoard[xy[0]][xy[1]] === 'x') {\n                if (!cell.hasChildNodes()) {\n                    const marker = document.createElement('div');\n                    marker.className = 'attack-marker';\n                    cell.appendChild(marker);\n                }\n            }\n\n            if (typeof computerBoard[xy[0]][xy[1]] === 'object') {\n                cell.style.backgroundColor = 'red';\n            }\n        });\n\n        playerCells.forEach((cell) => {\n            const xy = cell.dataset.xyPos;\n            if (playerBoard[xy[0]][xy[1]] === 'x') {\n                if (!cell.hasChildNodes()) {\n                    const marker = document.createElement('div');\n                    marker.className = 'attack-marker';\n                    cell.appendChild(marker);\n                }  \n            }\n\n            if (typeof playerBoard[xy[0]][xy[1]] === 'object') {\n                cell.classList.add('placed');\n            }\n        });\n    }\n\n    const playerViewUpdate = () => {\n        DOMHelper.disableCells();\n        DOMHelper.currentPlayerOutline(true);\n        \n    }\n\n    const computerViewUpdate = () => {\n        DOMHelper.enableCells();\n        DOMHelper.currentPlayerOutline(false);\n    }\n\n    const alertWinner = (winner) => {\n        alert(`Player ${winner} has won the match!`);\n    }\n\n    const resetDisplay = () => {\n        playerCells.forEach((cell) => {\n            cell.textContent = '';\n        });\n\n        computerCells.forEach((cell) => cell.textContent = '');\n    }\n\n    return { DOMHelper, startButton, onCellClick, updateBoard, alertWinner, resetDisplay, playerViewUpdate, computerViewUpdate, dragAndDropShips, setPlayerAndComputerCells, setHit }\n}\n\n\n//# sourceURL=webpack://battleship/./src/displayController.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nconst Gameboard = () => {\n    const board = [];\n\n    const ships = [];\n\n    const placeComputerShip = (ship) => {\n        const validShipPositions = getValidShipPlacements();\n\n        const randomPlacement = Math.floor(Math.random() * validShipPositions.length);\n        const position = validShipPositions[randomPlacement];\n\n        const randomOrientation = Math.floor(Math.random() * 2)\n        if (canPlaceShip(ship, position, randomOrientation)) {\n            placeShip(ship, position, randomOrientation);\n            return;\n        }\n\n        placeComputerShip(ship);\n    }\n\n    const canPlaceShip = (ship, position, isVertical) => {\n\n        if (isVertical) {\n            if ((position[0] - 1) + ship.length > 9) {\n                console.log('Error: Ship does not fit on the board');\n                return false;\n            }\n\n            for (let i=0; i<ship.length; i++) {\n                if (typeof board[position[0] + i][position[1]] === 'object') {\n                    console.log('Error: Ship exists in this position');\n                    return false;\n                }\n            }\n\n            if (board[position[0]][position[1]] !== '') {\n                return false;\n            }\n\n            return true;\n        }\n\n        if ((position[1] - 1) + ship.length > 9) {\n            console.log('Error: Ship does not fit on the board');\n            return false;\n        }\n\n        for (let i=0; i<=ship.length; i++) {\n            if (typeof board[position[0]][position[1] + i] === 'object') {\n                console.log('Error: Ship exists in this position');\n                return false;\n            }\n        }\n\n        if (board[position[0]][position[1]] !== '') {\n            return false;\n        }\n\n        return true;\n    }\n\n    const allShipsPlaced = () => {\n        return ships.length >= 4;\n    }\n\n    const fillBoard = (board) => {\n        for (let i=0; i<10; i++) {\n            const arr = new Array(10);\n            arr.fill('');\n            board.push(arr);\n        }\n    }\n\n    const getBoard = () => board;\n\n    const getValidAttacks = () => {\n        const arr = [];\n\n        for (let i=0; i<board.length; i++) {\n            for (let j=0; j<board[i].length; j++) {\n                if (board[i][j] !== 'x') {\n                    arr.push([i,j]);\n                }\n            }\n        }\n        return arr;\n    }\n\n    const getValidShipPlacements = () => {\n        const arr = [];\n\n        for (let i=0; i<board.length; i++) {\n            for (let j=0; j<board[i].length; j++) {\n                if (typeof board[i][j] !== 'object') {\n                    arr.push([i,j]);\n                }\n            }\n        }\n        return arr;\n    }\n\n    const placeShip = (ship, coordinate, isVertical) => {\n\n        if (isVertical) {\n            for (let i=0; i<ship.length; i++) {\n                board[coordinate[0] + i][coordinate[1]] = ship;\n            }\n        } else {\n            for (let i=0; i<ship.length; i++) {\n                board[coordinate[0]][coordinate[1] + i] = ship;\n            }\n        }\n\n        ships.push(ship);\n    }\n\n    let lastHit = null;\n\n    const getLastHit = () => {\n        return lastHit;\n    }\n\n    const isValidAttack = (coordinate) => {\n        if (coordinate[0] <= 9 && coordinate[1] <= 9) {\n\n            if (board[coordinate[0]][coordinate[1]] === 'x') {\n                return false;\n            }\n\n            return true;\n        }\n        console.log('Error: Out of bounds attack');\n        return false;\n    }\n\n    const recieveAttack = (coordinate) => {\n\n            const boardItem = board[coordinate[0]][coordinate[1]];\n\n            if (boardItem === '') {\n                missedShots[coordinate[0]].push(coordinate[1]);\n                lastHit = null;\n            }\n\n            if (typeof boardItem === 'object') {\n                boardItem.hit();\n                lastHit = 'ship';\n            }\n\n            board[coordinate[0]][coordinate[1]] = 'x';\n        \n        return coordinate;\n    }\n\n    const missedShots = [\n        [],[],[],[],[],[],[],[],[],[]\n    ]\n\n    const getMisses = () => {\n        return missedShots;\n    }\n\n    const getShips = () => {\n        return ships;\n    }\n\n    const allShipsSunk = () => {\n\n        return ships.every((ship) => ship.isSunk());\n    }\n\n    fillBoard(board);\n    \n    return { getBoard, placeShip, recieveAttack, getMisses, getShips, allShipsSunk, getValidAttacks, getValidShipPlacements, getLastHit, allShipsPlaced, placeComputerShip, canPlaceShip, isValidAttack }\n}\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameState\": () => (/* binding */ GameState),\n/* harmony export */   \"gameInitHelper\": () => (/* binding */ gameInitHelper)\n/* harmony export */ });\n/* harmony import */ var _shipModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipModule */ \"./src/shipModule.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\nconst gameInitHelper = () => {\n\n    // const placeTestShips = (playerBoard, computerBoard) => {\n    //     computerBoard.placeShip(Ship(5), [4,1]);\n    //     computerBoard.placeShip(Ship(4), [7,4]);\n    //     computerBoard.placeShip(Ship(3), [2,2]);\n    //     computerBoard.placeShip(Ship(2), [8,7]);\n\n    //     playerBoard.placeShip(Ship(5), [2,3]);\n    //     playerBoard.placeShip(Ship(4), [1,1]);\n    //     playerBoard.placeShip(Ship(3), [9,5]);\n    //     playerBoard.placeShip(Ship(2), [3,7]);\n    // }\n\n    const makeShip = (length) => {\n        const ship = (0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(length);\n        return ship;\n    }\n\n    return { makeShip }\n}\n\nconst GameState = () => {\n\n    let currentPlayer;\n\n    // const gameInit = gameInitHelper();\n    \n    let playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\n    let computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\n    \n    let player = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('Ryan', computerBoard, false);\n    let computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer', playerBoard, true)\n\n    const placeAllComputerShips = () => {\n        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(5));\n        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(4));\n        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(3));\n        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(2));\n    }\n\n    const checkForWinner = () => {\n        if (playerBoard.allShipsSunk()) {\n            return computer.getName();\n        }\n        if (computerBoard.allShipsSunk()) {\n            return player.getName();\n        }\n\n        return null;\n    }\n\n    return { playerBoard, computerBoard, player, computer, checkForWinner, placeAllComputerShips, currentPlayer }\n}\n\n//# sourceURL=webpack://battleship/./src/gameState.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameState */ \"./src/gameState.js\");\n\n\n\n\nconst gameController = () => {\n\n    const view = (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.View)();\n    let game = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState)();\n    const gameHelper = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.gameInitHelper)();\n\n    let gameStarted = false;\n\n    const gameLoop = () => {\n        if (!gameStarted) {\n            view.DOMHelper.generateGrids();\n            view.DOMHelper.setInGameStyles();\n            view.DOMHelper.generateShipElements();\n            view.DOMHelper.generateShipRotationControls((shipElement) => {\n                view.DOMHelper.applyRotation(shipElement);\n            });\n            view.setPlayerAndComputerCells();\n\n            game.placeAllComputerShips();\n\n            view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());\n\n            view.dragAndDropShips((ship, coordinate) => {\n                checkShipPlacement(ship, coordinate);\n                view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());\n\n                if (game.playerBoard.allShipsPlaced()) {\n                    view.DOMHelper.currentPlayerOutline(false);\n                    view.DOMHelper.setUserInstruction('Its your turn!');\n                    view.onCellClick(playRound);\n                }\n            });\n\n            gameStarted = true;\n        }\n    }\n\n    const playRound = async (coordinate) => {\n        if (coordinate) {\n            if (game.computerBoard.isValidAttack(coordinate)) {    \n                executePlayerTurn(coordinate);\n                if (game.computerBoard.getLastHit() === 'ship') {\n                    view.DOMHelper.setUserInstruction('Its your turn!');\n                    view.setHit(coordinate, true);\n                    view.computerViewUpdate();\n                    return;\n                } else {\n                    await delay(2000);\n\n                    executeComputerTurn();\n                }\n            }\n        } else {\n            console.log('Error: Attack already placed');\n        }\n\n    }\n\n    const checkShipPlacement = async (ship, coordinate) => {\n\n        const arrayCoordinate = [+coordinate[0], +coordinate[1]];\n        const shipLength = +ship.dataset.length;\n        const newShip = gameHelper.makeShip(shipLength);\n        \n        if (ship.dataset.orientation === 'horizontal') {\n            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, false)) {\n                game.playerBoard.placeShip(newShip, arrayCoordinate, false);\n                // ship.remove();\n                ship.parentNode.classList.add('invisible');\n\n                ship.parentNode.addEventListener('transitionend', () => {\n                    ship.parentNode.remove();\n                });\n                // await delay(500);\n                // ship.parentNode.remove();\n            } else {\n                console.log('Error: Cannot place ship there');\n                //handle a missplaced ship, user tooltip or error pop up\n            }\n        } else {\n            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, true)) {\n                game.playerBoard.placeShip(newShip, arrayCoordinate, true);\n                // ship.remove();\n                ship.parentNode.classList.add('invisible');\n\n                ship.parentNode.addEventListener('transitionend', () => {\n                    ship.parentNode.remove();\n                });\n                // await delay(500);\n                // ship.parentNode.remove();\n            } else {\n                console.log('Error: Cannot place ship there');\n                //handle a missplaced ship, user tooltip or error pop up\n            }\n        }\n    }\n\n    const executePlayerTurn = (coordinate) => {\n\n        if (game.checkForWinner()) return;\n\n        game.currentPlayer = game.player.getName();\n        view.DOMHelper.setUserInstruction('Computer is attacking!');\n        view.playerViewUpdate();\n\n        game.player.attack([coordinate[0], coordinate[1]]);\n        updateGameStateAndView();\n        game.currentPlayer = game.computer.getName();\n         \n    }\n    \n    const executeComputerTurn = async () => {\n\n        if (game.checkForWinner()) return;\n        view.DOMHelper.currentPlayerOutline(false);\n        view.DOMHelper.setUserInstruction('Its your turn!');\n        const position = game.computer.attack();\n        updateGameStateAndView();\n\n        while (game.playerBoard.getLastHit() === 'ship') {\n            view.setHit(position, false);\n            view.DOMHelper.setUserInstruction('Computer is attacking!');\n            view.DOMHelper.currentPlayerOutline(true);\n            await delay(2000);\n\n            game.computer.attack();\n            updateGameStateAndView();\n            view.computerViewUpdate();\n        }\n        view.DOMHelper.setUserInstruction('Its your turn!');\n        view.DOMHelper.enableCells();\n    }\n\n    const delay = (ms) => {\n        return new Promise((resolve) => {\n            setTimeout(resolve, ms);\n        });\n\n    }\n    const updateGameStateAndView = () => {\n        view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());\n\n        const winner = game.checkForWinner();\n        if (winner) {\n            view.alertWinner(winner);\n            resetGame();\n            return;\n        }\n    }\n\n    const resetGame = () => {\n        gameStarted = false;\n        game = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState)();\n        view.DOMHelper.removeGridsAndHeading();\n        view.DOMHelper.resetGameStyles();\n    }\n\n    view.startButton.addEventListener('click', gameLoop);\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    gameController();\n});\n\n//# sourceURL=webpack://battleship/./src/main.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n\nconst Player = (name, opponentBoard, isCPU = false) => {\n//factory for our different players (in the case of this game it would be the player and the computer) would take a name, and the opposing players board. So if we make a player it would take in the computers board.\n\n    const caculationRandomPosition = () => {\n\n        const validPositions = opponentBoard.getValidAttacks();\n        const position = validPositions[Math.floor(Math.random() * validPositions.length)];\n\n        return position;\n    }\n\n    const attack = (coordinate) => {\n        if (isCPU) {\n\n            const randomPosition = caculationRandomPosition();\n            opponentBoard.recieveAttack(randomPosition);\n\n            return randomPosition;\n        }\n        return opponentBoard.recieveAttack(coordinate)\n\n    }\n\n    const getName = () => {\n        return name;\n    }\n\n    return { attack, getName }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/shipModule.js":
/*!***************************!*\
  !*** ./src/shipModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n//ship factory should include a type, which we can define later from the ship that the user clicks on. \n\nconst Ship = (length) => {\n\n    const shipLookup = {\n        5: 'Carrier',\n        4: 'Battleship',\n        3: 'Cruiser',\n        2: 'Destroyer'\n    }\n\n    const type = shipLookup[length];\n    \n    let damageRecieved = 0;\n\n    const hit = () => {\n        damageRecieved++;\n    }\n    const isSunk = () => damageRecieved >= length;\n    \n\n    const getDamageRecieved = () => damageRecieved;\n\n    return { type, length, getDamageRecieved, hit, isSunk }\n}\n\n//# sourceURL=webpack://battleship/./src/shipModule.js?");

/***/ }),

/***/ "./src/assets/rotate.svg":
/*!*******************************!*\
  !*** ./src/assets/rotate.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/rotate.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/rotate.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;