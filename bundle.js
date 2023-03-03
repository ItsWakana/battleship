/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    /* height: 100vh; */\n    background-color: var(--main-background-clr);\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 150ms;\n    font-weight: bold;\n}\n\n.start-game:hover {\n    transform: scale(1.07);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n}\n\n/* .captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 40rem;\n    height: 12rem;\n    transition: 700ms ease; \n} */\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -43.5%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 90%;\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent var(--secondary-clr) transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    border: solid 3px var(--secondary-clr);\n    border-bottom: solid 10px var(--secondary-clr);\n    border-radius: 4px;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 200ms ease;\n    max-width: 85%;\n    border-radius: 4px;\n    border: solid 4px transparent;\n}\n\n.captain-wheel-picker-image:hover {\n    border: solid 4px var(--secondary-clr);\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    /* transform: scale(1.04); */\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n.box.placed::after {\n    content: '';\n    width: 0.5rem;\n    height: 0.5rem;\n    background: black;\n    border-radius: 50%;\n}\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 25px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.detail {\n    background: black;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n}\n\n.ship-element {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 94%;\n}\n\n.hidden {\n    opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,sBAAsB;IACtB,yCAAyC;AAC7C;;AAEA;IACI,qCAAqC;IACrC,kCAAkC;IAClC,0BAA0B;IAC1B,gCAAgC;IAChC,2BAA2B;IAC3B,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,4CAA4C;IAC5C,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,UAAU;AACd;;AAEA;;;;;;;;;;;;;;;;GAgBG;;AAEH;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,kCAAkC;IAClC,2BAA2B;IAC3B,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,sBAAsB;EACxB;;;;AAIF;;;;;;;GAOG;;AAEH;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,SAAS;IACT,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,kCAAkC;IAClC,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;;;;GAKG;;AAEH;IACI,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,sCAAsC;IACtC,YAAY;IACZ,kBAAkB;IAClB,YAAY;EACd;;AAEF;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,wCAAwC;IACxC,kBAAkB;IAClB,mBAAmB;IACnB,sEAAsE;AAC1E;;;AAGA;IACI;oCACgC;IAChC,WAAW;IACX,WAAW;IACX,sCAAsC;IACtC,8CAA8C;IAC9C,kBAAkB;IAClB,gBAAgB;;AAEpB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uCAAuC;IACvC,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;;;;;;GAOG;;AAEH;;GAEG;;AAEH;IACI,yBAAyB;IACzB,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;AAChC;AACA;IACI,UAAU;IACV,SAAS;AACb;AACA;;;;;;;;;;;;;;GAcG;;AAEH;;IAEI,aAAa;IACb,sCAAsC;IACtC,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;IACV,eAAe;IACf,sCAAsC;IACtC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;;IAEI,UAAU;IACV,gBAAgB;IAChB,iBAAiB;AACrB;AACA;;;;;;;GAOG;;AAEH;;IAEI,UAAU;IACV,kCAAkC;AACtC;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;IAEI,mBAAmB;AACvB;AACA;;;;GAIG;;AAEH;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uCAAuC;IACvC,wCAAwC;IACxC,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;;GAEG;;AAEH;IACI,mBAAmB;IACnB,oBAAoB;AACxB;AACA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,wCAAwC;;AAE5C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;AACA;IACI,4CAA4C;IAC5C,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,MAAM;EACN,SAAS;EACT,yCAAyC;AAC3C;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;;EAEE,0CAA0C;AAC5C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,MAAM;IACN,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,SAAS;IACT,kCAAkC;IAClC,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,gCAAgC;IAChC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,4CAA4C;AAChD;;;AAGA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;;AAEf;;AAEA;IACI,WAAW;;AAEf;;AAEA;IACI,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gCAAgC;IAChC,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,8CAA8C;IAC9C,6FAA6F;IAC7F,sCAAsC;IACtC,+BAA+B;AACnC;;AAEA;IACI,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;;;;;;;;;;;;;;;GAeG;;AAEH;IACI,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,UAAU;AACd;;AAEA;IACI,UAAU;AACd","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    /* height: 100vh; */\n    background-color: var(--main-background-clr);\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 150ms;\n    font-weight: bold;\n}\n\n.start-game:hover {\n    transform: scale(1.07);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n}\n\n/* .captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 40rem;\n    height: 12rem;\n    transition: 700ms ease; \n} */\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -43.5%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 90%;\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent var(--secondary-clr) transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    border: solid 3px var(--secondary-clr);\n    border-bottom: solid 10px var(--secondary-clr);\n    border-radius: 4px;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 200ms ease;\n    max-width: 85%;\n    border-radius: 4px;\n    border: solid 4px transparent;\n}\n\n.captain-wheel-picker-image:hover {\n    border: solid 4px var(--secondary-clr);\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    /* transform: scale(1.04); */\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n.box.placed::after {\n    content: '';\n    width: 0.5rem;\n    height: 0.5rem;\n    background: black;\n    border-radius: 50%;\n}\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 25px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.detail {\n    background: black;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n}\n\n.ship-element {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 94%;\n}\n\n.hidden {\n    opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM Helper Modules/DOMCreation.js":
/*!***********************************************!*\
  !*** ./src/DOM Helper Modules/DOMCreation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomElementCreator": () => (/* binding */ CustomElementCreator)
/* harmony export */ });

const CustomElementCreator = () => {

    const oneElement = (classTitle, element) => {
        const newElement = document.createElement(element);
        newElement.className = classTitle;
    
        return newElement;
    }

    const multipleElements = (element, qty) => {
        const arr = [];
        for (let i=0; i<qty; i++) {
            const newElement = document.createElement(element);
            arr.push(newElement);
        }

        return arr;
    }

    return { oneElement, multipleElements }
}


/***/ }),

/***/ "./src/DOM Helper Modules/DOMHelper.js":
/*!*********************************************!*\
  !*** ./src/DOM Helper Modules/DOMHelper.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMHelperCreation": () => (/* binding */ DOMHelperCreation)
/* harmony export */ });
/* harmony import */ var _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/rotate.svg */ "./src/assets/rotate.svg");
/* harmony import */ var _assets_captains_captain1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/captains/captain1.png */ "./src/assets/captains/captain1.png");
/* harmony import */ var _assets_captains_captain2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/captains/captain2.png */ "./src/assets/captains/captain2.png");
/* harmony import */ var _assets_captains_captain3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/captains/captain3.png */ "./src/assets/captains/captain3.png");
/* harmony import */ var _DOMCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMCreation */ "./src/DOM Helper Modules/DOMCreation.js");







const DOMHelperCreation = () => {

    const creator = (0,_DOMCreation__WEBPACK_IMPORTED_MODULE_4__.CustomElementCreator)();

    let playerBoard;
    let computerBoard;

    //module for querySelector references

    const mainTopContainer = document.querySelector('.gameboards');
    // const transitionContainer = document.querySelector('.transition-container');

    
    const initializeMainDisplay = () => {

        generateGrids();
        setInGameStyles();
        generateShipElements();
    }

    const setNewShipContainerHeight = () => {
        return new Promise((resolve) => {
            const shipMainContainer = document.querySelector('.ship-main-container')
            shipMainContainer.classList.add('expand');
            shipMainContainer.addEventListener('transitionend', () => {
                resolve();
            });
        });
    }

    const removeShipContainerHeight = () => {
        const shipMainContainer = document.querySelector('.ship-main-container')
        shipMainContainer.classList.remove('expand')
    }

    const setMainGridToPlayer = () => {
        playerBoard.classList.add('current');
        computerBoard.classList.remove('current');
    }

    const setMainGridToComputer = () => {
        playerBoard.classList.remove('current');
        computerBoard.classList.add('current');

    }
    const initializeCaptainPicker = async (callback) => {
        const captainContainer = creator.oneElement('captain-container', 'div');

        const title = document.createElement('h3');
        title.textContent = 'Pick your lieutenant!'
        captainContainer.appendChild(title);
        mainTopContainer.append(captainContainer);

        const transitionContainer = document.querySelector('.transition-container');

        setInGameStyles();
        
        transitionContainer.classList.add('shift-down');
        
        setTimeout(() => {
            captainContainer.classList.add('visible');
            setTransitionContainerTop();
        }, 500);
        
        createCaptains(captainContainer, callback);
        
        window.addEventListener('resize', setTransitionContainerTop);

    }

    const removeCaptainPicker = () => {
        const captainContainer = document.querySelector('.captain-container');

        captainContainer.classList.remove('visible');
        setDefaultContainerSize();

        captainContainer.addEventListener('transitionend', () => {
            captainContainer.remove();
        });

    }

    const getCaptainImages = () => {
        return [ _assets_captains_captain1_png__WEBPACK_IMPORTED_MODULE_1__, _assets_captains_captain2_png__WEBPACK_IMPORTED_MODULE_2__, _assets_captains_captain3_png__WEBPACK_IMPORTED_MODULE_3__ ]
    }

    const createCaptains = (container, callback) => {

        const captainAvatars = creator.oneElement('captain-avatars', 'div');

        const captains = creator.multipleElements('div', 3);
        const captainNames = ['Ted', 'Donald', 'Burt']
        let counter = 0;
        for (const captain of captains) {
                captain.className = 'captain';
                // captain.textContent = `captain${counter}`;
                captain.dataset.captain = counter;
                captainAvatars.appendChild(captain);

                captain.addEventListener('click', () => {
                    callback(captain.dataset.captain);
                });

                const avatarImage = document.createElement('img');
                avatarImage.src = getCaptainImages()[counter];
                avatarImage.className = 'captain-wheel-picker-image';

                const nameElement = document.createElement('div');
                nameElement.className = 'captain-name';
                nameElement.textContent = captainNames[counter++];
                // avatarImage.appendChild(nameElement);


                avatarImage.classList.add('appear');
                
                captain.append(avatarImage, nameElement);
        }
        
        container.append(captainAvatars);
    }

    const makeGridSquares = (container, isCompGrid) => {
            for (let i=0; i<11; i++) {

                const row = creator.oneElement('row', 'div');
                container.appendChild(row);
    
                for (let j=0; j<11; j++) {

                        const box = creator.oneElement('box', 'div');
                        row.appendChild(box)
                        box.dataset.xyPos = `${j-1}${i-1}`;
                        if (isCompGrid) {
                            box.dataset.player = 'computer';
                        } else {
                            box.dataset.player = 'player';
                        }
                    
                    if (i === 0) {
                        box.className = 'outer-box';
                        box.dataset.player = null;
                        box.textContent = j;
                    }
                    if (j === 0) {
                        box.className = 'outer-box';
                        box.dataset.player = null;
                        box.textContent = setAlphabet[i];
                    }
                }
            }
    }

    const setDefaultContainerSize = () => {
        const transitionContainer = document.querySelector('.transition-container');

        transitionContainer.style.top = '0vh';
    }

    const setTransitionContainerTop = () => {

        // const mainBoardsContainer = document.querySelector('.gameboards');
        const transitionContainer = document.querySelector('.transition-container');

        const gameboardsHeight = mainTopContainer.offsetHeight;
        transitionContainer.style.top = `${gameboardsHeight + 35}px`;
    }

    const setAlphabet = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I',
        10: 'J'
    }

    const generateGrids = () => {

        // const mainBoardsContainer = document.querySelector('.gameboards');

        const transitionContainer = document.querySelector('.transition-container');

        
        playerBoard = document.createElement('div');
        computerBoard = document.createElement('div');
        
        playerBoard.className = 'grid left';
        
        computerBoard.className = 'grid right';
        
        playerBoard.dataset.grid = false;
        
        makeGridSquares(playerBoard, false);
        makeGridSquares(computerBoard, true);

        mainTopContainer.append(playerBoard, computerBoard);

        // setTransitionContainerTop();

        // transitionContainer.classList.add('shift-down');
        setTimeout(() => {
            setTransitionContainerTop();
            transitionContainer.classList.add('shift-down');
        },30);
        
        setTimeout(() => {
            playerBoard.classList.add('visible');
            computerBoard.classList.add('visible');
        }, 500);

        window.addEventListener('resize', setTransitionContainerTop);
    }

    const generateShipElements = () => {
        const shipElementArea = document.querySelector('.ship-main-container');

        // const title = creator.oneElement('user-instruction', 'h2');
        // title.textContent = 'Drag your fleet onto the battlefield, captain!'
        // shipElementArea.appendChild(title);
        
        const ships = creator.multipleElements('div', 4);
        const shipLengths = [5,4,3,2];

        ships.forEach((ship, i) => {
            ship.dataset.length = shipLengths[i];
        });
        
        for (const ship of ships) {
            ship.className = 'ship-element';
            
            ship.classList.add(`length-${ship.dataset.length}`);
            shipElementArea.appendChild(ship);
            ship.draggable = true;
            ship.dataset.orientation = 'horizontal';

            //generate details to place on the ship
            for (let i=0; i<ship.dataset.length; i++) {
                const detail = document.createElement('div');
                detail.className = 'detail';
                ship.appendChild(detail);
            }
        }
    }

    const generateShipRotationControls = (callback) => {
        const shipMainContainer = document.querySelector('.ship-main-container');

        const shipSubContainer = creator.oneElement('ship-sub-container', 'div');

        const ships = shipMainContainer.querySelectorAll('.ship-element');

        ships.forEach((ship) => {
            shipMainContainer.removeChild(ship);

            const shipContainer = creator.oneElement('ship-element-container', 'div');
            shipContainer.appendChild(ship);

            shipSubContainer.appendChild(shipContainer);

            const rotateButton = creator.oneElement('rotate-button', 'img');
            rotateButton.src = _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_0__;
            rotateButton.draggable = false;
            rotateButton.addEventListener('click', () => {
                // rotateButton.classList.toggle('active');
                callback(ship);
                changeOrientation(ship);
                // applyRotation(ship);
            });

            shipContainer.appendChild(rotateButton);
        });

        shipMainContainer.appendChild(shipSubContainer);
    
    }


    const applyRotation = (shipElement) => {

        if (shipElement.dataset.orientation === 'horizontal') {
            shipElement.classList.add('vertical');
        } else {
            shipElement.classList.remove('vertical');
        }
    }

    const changeOrientation = (ship) => {
        if (ship.dataset.orientation === 'horizontal') {
            ship.dataset.orientation = 'vertical';
        } else {
            ship.dataset.orientation = 'horizontal';
        }
    }

    const removeGridsAndHeading = () => {
        
        playerBoard.classList.add('invisible');
        computerBoard.classList.add('invisible');
        setDefaultContainerSize();
        playerBoard.addEventListener('transitionend', () => {

            playerBoard.remove();
            computerBoard.remove();

            playerBoard.classList.remove('invisible');
            computerBoard.classList.remove('invisible');
        });

        const shipContainer = document.querySelector('.ship-container');
        if (shipContainer) {
            while (shipContainer.hasChildNodes()) {
                shipContainer.removeChild(shipContainer.lastChild);
            }
        }

        // const heading = document.querySelector('.user-instruction');
        // heading.remove();


    }

    const disableCells = () => {

        computerBoard.classList.add('disabled');
        playerBoard.classList.add('disabled');

        const enabledCells = document.querySelectorAll('.box');
        enabledCells.forEach((cell) => {
            cell.classList.add('disabled');
        });
    }

    const enableCells = () => {

        computerBoard.classList.remove('disabled');
        playerBoard.classList.remove('disabled');

        const disabledCells = document.querySelectorAll('.box');

        disabledCells.forEach((cell) => {
            cell.classList.remove('disabled');
        });
    }

    const currentPlayerOutline = (isPlayersTurn) => {
        if (isPlayersTurn) {
            playerBoard.style.border = 'solid 3px red';
            computerBoard.style.border = '3px transparent';
        } else {
            computerBoard.style.border = 'solid 3px green';
            playerBoard.style.border = '3px transparent';
        }
    }

    const setUserInstruction = (message) => {
        // const heading = document.querySelector('.user-instruction');
        const captainSpeech = document.querySelector('.captain-message');
        captainSpeech.textContent = '';
        let i = 0;
        let speed = 50;
        const typeWriter = () => {
            if (i < message.length) {
                captainSpeech.textContent += message.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // let timeoutID;
    // const setUserInstruction = (message) => {
    //     const captainSpeech = document.querySelector('.captain-message');
    //     captainSpeech.textContent = '';
    //     // let timeoutID;
    //     let i; // declare the i variable outside of the if statement
    //     if (timeoutID) {
    //         // if the typeWriter function is currently running, clear the timer and reset the counter
    //         clearTimeout(timeoutID);
    //         i = 0;
    //     } else {
    //         captainSpeech.textContent = ''; // otherwise, clear the speech bubble
    //         i = 0; // assign a value to i here
    //     }
    //     let speed = 50;
    //     const typeWriter = () => {
    //         if (i < message.length) {
    //             captainSpeech.textContent += message.charAt(i);
    //             i++;
    //             timeoutID = setTimeout(typeWriter, speed);
    //         }
    //     }
    //     typeWriter();
    // }

    const playerHitResponse = () => {

        const responses = [
            `"Bullseye! We've hit the enemy's vessel. Go again!"`,
            `"Nice shot! Enemy ship hit! This is fun, go!"`,
            `"Enemy ship, meet our firepower! Direct hit! Next shot!"`
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }

    const playerTurnResponse = () => {
        const responses = [
            `"It's your turn, captain! Fire at will!"`,
            `"All systems are go! Take your shot, captain."`,
            `"The enemy ship is in sight. You have the green light to attack."`,
            `"The sea is yours, captain. Show the enemy what we're made of!"`,
            `"We're counting on you, captain. Time to make your move."`
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }

    const computerTurnResponse = () => {
        const responses = [
            `"Brace for impact! The enemy is taking their shot."`,
            `"All hands on deck! Enemy turn to fire."`,
            `"Eyes on the horizon, captain. The enemy is attacking."`,
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }

    const userShipPlacementResponse = () => {
        const responses = [
            `"Place the ships, Cap'n!"`,
            `"Captain, lets place our fleet!"`,
            `"Let's begin placing our ships!"`,
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }

    const enemyMissResponse = () => {
        const responses = [
            `"They suck! How could they miss!"`,
            `"Damn, they missed it"`
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }

    const playerMissResponse = () => {
        const responses = [
            `"Ah, too bad. We go again."`,
            `"A miss for us, bad luck.."`
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }


    const setInGameStyles = () => {
        const button = document.querySelector('.start-game');

        button.classList.add('in-progress');
    }

    const resetGameStyles = () => {
        const button = document.querySelector('.start-game');
        button.classList.remove('in-progress');

        playerBoard.style.border = 'none';
        computerBoard.style.border = 'none';

        enableCells();


    }

    const transitionElementRemoval = (element) => {
        element.classList.add('invisible');

        element.addEventListener('transitionend', () => {
            element.remove();
        });
    }

    return { removeGridsAndHeading, currentPlayerOutline, enableCells, disableCells, setUserInstruction, resetGameStyles, generateShipRotationControls,applyRotation, transitionElementRemoval, initializeMainDisplay, initializeCaptainPicker, removeCaptainPicker, setMainGridToPlayer, setMainGridToComputer, setNewShipContainerHeight, removeShipContainerHeight, playerHitResponse, playerTurnResponse, computerTurnResponse, userShipPlacementResponse, enemyMissResponse, playerMissResponse, getCaptainImages }
}

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _DOM_Helper_Modules_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM Helper Modules/DOMHelper */ "./src/DOM Helper Modules/DOMHelper.js");
// import captain1 from './assets/captains/captain1.png';
// import captain2 from './assets/captains/captain2.png';
// import captain3 from './assets/captains/captain3.png';



const View = () => {

    let playerCells;
    let computerCells;

    const DOMHelper = (0,_DOM_Helper_Modules_DOMHelper__WEBPACK_IMPORTED_MODULE_0__.DOMHelperCreation)();

    const startButton = document.querySelector('.start-game');

    const setPlayerAndComputerCells = () => {
        playerCells = document.querySelectorAll('[data-player="player"]');
        computerCells = document.querySelectorAll('[data-player="computer"]');
    }

    const onCellClick = (callback) => {
            computerCells.forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    callback(e.target.dataset.xyPos);
                });
            });
    }

    const setHit = (coordinate, isPlayer) => {

        if (isPlayer) {
            const element = document.querySelector(`[data-player="computer"][data-xy-pos="${coordinate}"]`);
            const child = element.querySelector('.attack-marker');
            child.classList.add('computer-ship-hit');
        } else {
            coordinate = coordinate.join('');
            const element = document.querySelector(`[data-player="player"][data-xy-pos="${coordinate}"]`);
            const child = element.querySelector('.attack-marker');
            child.classList.add('player-ship-hit');
        }
    }

    const displayCaptainAvatar = (captain) => {

        const computerBoard = document.querySelector('.grid.right')

        const captainAvatar = document.createElement('div');

        const captainMessage = document.createElement('div');
        captainMessage.className = 'captain-message';
        const captainImage = new Image();

        captainImage.src = DOMHelper.getCaptainImages()[captain];
        console.log(captainImage);
        captainImage.draggable = false;
        captainImage.className = 'captain-image';

        captainAvatar.append(captainImage, captainMessage);
        captainAvatar.className = 'captain-board-avatar';
        computerBoard.appendChild(captainAvatar);
    }

    const hideCaptainAvatar = () => {
        const captainAvatar = document.querySelector('.captain-board-avatar');

        captainAvatar.classList.add('move-position');
        // captainAvatar.classList.add('invisible');
    }

    const showCaptainAvatar = () => {
        const captainAvatar = document.querySelector('.captain-board-avatar');
        captainAvatar.classList.remove('move-position');
        // captainAvatar.classList.remove('invisible');
    }

    const setHorizontalShipHover = (draggedShip, currentCell, toRemoveHover) => {
        for (let i=0; i<draggedShip.dataset.length; i++) {
            const YboardPosition = Number(currentCell.dataset.xyPos[0]);
            const XboardPosition = Number(currentCell.dataset.xyPos[1]) + i;
            const tile = document.querySelector(`.box[data-player="player"][data-xy-pos="${YboardPosition}${XboardPosition}"]`);
            if (tile) {
                toRemoveHover ? tile.classList.remove('hover')
                : tile.classList.add('hover');
            }
        }
    }

    const setVerticalShipHover = (draggedShip, currentCell, toRemoveHover) => {
        for (let i=0; i<draggedShip.dataset.length; i++) {
            const YboardPosition = Number(currentCell.dataset.xyPos[0]) + i;
            const XboardPosition = Number(currentCell.dataset.xyPos[1]);
            const tile = document.querySelector(`.box[data-player="player"][data-xy-pos="${YboardPosition}${XboardPosition}"]`);
            if (tile) {
                toRemoveHover ? tile.classList.remove('hover')
                : tile.classList.add('hover');
            }
        }
    }


    const dragAndDropShips = (callback) => {
        const shipElements = document.querySelectorAll('.ship-element');
        let draggedShip;

        for (const ship of shipElements) {
            ship.addEventListener('dragstart', () => {
                draggedShip = ship;
                // draggedShip.parentNode.classList.add('hidden');
            });


            // ship.addEventListener('dragend', () => {
            //     draggedShip.parentNode.classList.remove('hidden');
            // });
        }

        for (const cell of playerCells) {
            cell.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            cell.addEventListener('dragenter', () => {
                if (draggedShip.dataset.orientation === 'horizontal') {
                    setHorizontalShipHover(draggedShip, cell, false)
                } else {
                    setVerticalShipHover(draggedShip, cell, false)
                }
            });

            cell.addEventListener('dragleave', () => {
                
                if (draggedShip.dataset.orientation === 'horizontal') {

                    setHorizontalShipHover(draggedShip, cell, true)
                } else {
                    setVerticalShipHover(draggedShip, cell, true)
                }
            });
        }        

        for (const cell of playerCells) {
            cell.addEventListener('drop', (e) => {

                // draggedShip.addEventListener('dragend', (e) => {
                //     draggedShip.parentNode.classList.add('hidden');
                // });

                callback(draggedShip, e.target.dataset.xyPos);
                playerCells.forEach((cell) => cell.classList.remove('hover'))
            });
        }
    }
    //we want to update one board at a time, just pass in the board we want to update at that point. No point in updating both. We can have a bool value that checks if its a computer board or not.
    const updateBoard = (board, isComputerBoard) => {

        setPlayerAndComputerCells();
        let boardCells;

        if (isComputerBoard) {
            boardCells = computerCells;
        } else {
            boardCells = playerCells;
        }

        for (const cell of boardCells) {
            const xy = cell.dataset.xyPos;
            if (board[xy[0]][xy[1]] === 'x') {
                if (!cell.hasChildNodes()) {
                    const marker = document.createElement('div');
                    marker.className = 'attack-marker';
                    cell.appendChild(marker);
                }
            }

            if (typeof board[xy[0]][xy[1]] === 'object') {
                if (!isComputerBoard) {
                    cell.classList.add('placed');
                } else {
                    // cell.style.backgroundColor = 'red';
                }
            }
        }
    }
    // const updateBoard = (computerBoard, playerBoard) => {

    //     for (const cell of computerCells) {
    //         const xy = cell.dataset.xyPos;
    //         if (computerBoard[xy[0]][xy[1]] === 'x') {
    //             if (!cell.hasChildNodes()) {
    //                 const marker = document.createElement('div');
    //                 marker.className = 'attack-marker';
    //                 cell.appendChild(marker);
    //             }
    //         }

    //         if (typeof computerBoard[xy[0]][xy[1]] === 'object') {
    //             // cell.style.backgroundColor = 'red';
    //         }
    //     }

    //     for (const cell of playerCells) {
    //         const xy = cell.dataset.xyPos;
    //         if (playerBoard[xy[0]][xy[1]] === 'x') {
    //             if (!cell.hasChildNodes()) {
    //                 const marker = document.createElement('div');
    //                 marker.className = 'attack-marker';
    //                 cell.appendChild(marker);
    //             }  
    //         }

    //         if (typeof playerBoard[xy[0]][xy[1]] === 'object') {
    //             // const ship = playerBoard[xy[0]][xy[1]];
    //             // const shipSquare = document.createElement('div');

    //             // if (ship.getShipDirection() === 'Horizontal') {
    //             //     shipSquare.className = 'ship-square-horizontal';
    //             // } else if (ship.getShipDirection() === 'Vertical') {
    //             //     shipSquare.className = 'ship-square-vertical';
    //             // }
    //             // cell.appendChild(shipSquare);
    //             cell.classList.add('placed');
    //         }
    //     }
    // }

    const playerViewUpdate = () => {
        DOMHelper.disableCells();
        DOMHelper.currentPlayerOutline(true);
        
    }

    const computerViewUpdate = () => {
        DOMHelper.enableCells();
        DOMHelper.currentPlayerOutline(false);
    }

    const alertWinner = (winner) => {
        alert(`Player ${winner} has won the match!`);
    }

    return { DOMHelper, startButton, onCellClick, updateBoard, alertWinner, playerViewUpdate, computerViewUpdate, dragAndDropShips, setPlayerAndComputerCells, setHit, displayCaptainAvatar, hideCaptainAvatar, showCaptainAvatar }
}


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
const Gameboard = () => {
    const board = [];

    const ships = [];

    const placeComputerShip = (ship) => {
        const validShipPositions = getValidShipPlacements();

        const randomPlacement = Math.floor(Math.random() * validShipPositions.length);
        const position = validShipPositions[randomPlacement];

        const randomOrientation = Math.floor(Math.random() * 2)
        if (canPlaceShip(ship, position, randomOrientation)) {
            placeShip(ship, position, randomOrientation);
            return;
        }

        placeComputerShip(ship);
    }

    const canPlaceShip = (ship, position, isVertical) => {

        if (isVertical) {
            if ((position[0] - 1) + ship.length > 9) {
                console.log('Error: Ship does not fit on the board');
                return false;
            }

            for (let i=0; i<ship.length; i++) {
                if (typeof board[position[0] + i][position[1]] === 'object') {
                    console.log('Error: Ship exists in this position');
                    return false;
                }
            }

            if (board[position[0]][position[1]] !== '') {
                return false;
            }

            return true;
        }

        if ((position[1] - 1) + ship.length > 9) {
            console.log('Error: Ship does not fit on the board');
            return false;
        }

        for (let i=0; i<ship.length; i++) {
            if (typeof board[position[0]][position[1] + i] === 'object') {
                console.log('Error: Ship exists in this position');
                return false;
            }
        }

        if (board[position[0]][position[1]] !== '') {
            return false;
        }

        return true;
    }

    const allShipsPlaced = () => {
        return ships.length >= 4;
    }

    const fillBoard = (board) => {
        for (let i=0; i<10; i++) {
            const arr = new Array(10);
            arr.fill('');
            board.push(arr);
        }
    }

    const getBoard = () => board;

    const getValidAttacks = () => {
        const arr = [];

        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[i].length; j++) {
                if (board[i][j] !== 'x') {
                    arr.push([i,j]);
                }
            }
        }
        return arr;
    }

    const getValidShipPlacements = () => {
        const arr = [];

        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[i].length; j++) {
                if (typeof board[i][j] !== 'object') {
                    arr.push([i,j]);
                }
            }
        }
        return arr;
    }

    const placeShip = (ship, coordinate, isVertical) => {
        if (isVertical) {
            ship.setShipDirection('Vertical');
            for (let i=0; i<ship.length; i++) {
                board[coordinate[0] + i][coordinate[1]] = ship;
            }
        } else {
            ship.setShipDirection('Horizontal');
            for (let i=0; i<ship.length; i++) {
                board[coordinate[0]][coordinate[1] + i] = ship;
            }
        }

        ships.push(ship);
    }

    let lastHit = null;

    const getLastHit = () => {
        return lastHit;
    }

    const isValidAttack = (coordinate) => {
        if (coordinate[0] <= 9 && coordinate[1] <= 9) {

            if (board[coordinate[0]][coordinate[1]] === 'x') {
                return false;
            }

            return true;
        }
        console.log('Error: Out of bounds attack');
        return false;
    }

    const recieveAttack = (coordinate) => {

            const boardItem = board[coordinate[0]][coordinate[1]];

            if (boardItem === '') {
                missedShots[coordinate[0]].push(coordinate[1]);
                lastHit = null;
            }

            if (typeof boardItem === 'object') {
                boardItem.hit();
                lastHit = 'ship';
            }

            board[coordinate[0]][coordinate[1]] = 'x';
        
        return coordinate;
    }

    const missedShots = [
        [],[],[],[],[],[],[],[],[],[]
    ]

    const getMisses = () => {
        return missedShots;
    }

    const getShips = () => {
        return ships;
    }

    const allShipsSunk = () => {

        return ships.every((ship) => ship.isSunk());
    }

    fillBoard(board);
    
    return { getBoard, placeShip, recieveAttack, getMisses, getShips, allShipsSunk, getValidAttacks, getValidShipPlacements, getLastHit, allShipsPlaced, placeComputerShip, canPlaceShip, isValidAttack }
}

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameController": () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameState */ "./src/gameState.js");





const gameController = () => {

    const view = (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.View)();
    let game = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState)();
    const gameHelper = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.gameInitHelper)();

    let gameStarted = false;

    const gameLoop = () => {
        if (!gameStarted) {
            gameStarted = true;
            startGame();
        }
    }

    const startGame = async () => {
        const captainChoice = await initializeCaptainPicker();
        await view.DOMHelper.setNewShipContainerHeight();
        // await delay(700);
        
        view.DOMHelper.initializeMainDisplay();

        view.DOMHelper.setMainGridToPlayer();
        view.DOMHelper.generateShipRotationControls((shipElement) => {
            view.DOMHelper.applyRotation(shipElement);
        });
        view.displayCaptainAvatar(captainChoice);
        view.DOMHelper.setUserInstruction(view.DOMHelper.userShipPlacementResponse());
        view.hideCaptainAvatar();
        view.setPlayerAndComputerCells();

        game.placeAllComputerShips();

        await shipPlacementHandler();
        view.onCellClick(playRound);
        // view.dragAndDropShips((ship, coordinate) => {
        //     checkShipPlacement(ship, coordinate);

        //     view.updateBoard(game.playerBoard.getBoard(), false);
            
        //     if (game.playerBoard.allShipsPlaced()) {
        //         view.DOMHelper.removeShipContainerHeight();

        //         view.DOMHelper.setMainGridToComputer();
        //         view.showCaptainAvatar();
        //         view.DOMHelper.currentPlayerOutline(false);
        //         view.DOMHelper.setUserInstruction(view.DOMHelper.playerTurnResponse());
        //         view.updateBoard(game.computerBoard.getBoard(), true)

        //         view.onCellClick(playRound);
        //     }
        // });
        }
    

    const shipPlacementHandler = async () => {
        return new Promise((resolve) => {
            view.dragAndDropShips((ship, coordinate) => {
                checkShipPlacement(ship, coordinate);

                view.updateBoard(game.playerBoard.getBoard(), false);
                
                if (game.playerBoard.allShipsPlaced()) {
                    view.DOMHelper.removeShipContainerHeight();

                    view.DOMHelper.setMainGridToComputer();
                    view.showCaptainAvatar();
                    view.DOMHelper.currentPlayerOutline(false);
                    view.DOMHelper.setUserInstruction(view.DOMHelper.playerTurnResponse());
                    view.updateBoard(game.computerBoard.getBoard(), true)
                    resolve();
                }
            });
        });
    }

    const initializeCaptainPicker = async () => {
        return new Promise(resolve => {
          view.DOMHelper.initializeCaptainPicker(async captainChoice => {
            game.setPlayerCaptain(captainChoice);
            view.DOMHelper.removeCaptainPicker();
            resolve(captainChoice);
          });
        });
      };
    // const gameLoop = async () => {
    //     if (!gameStarted) {
    //             gameStarted = true;
    //             view.DOMHelper.initializeCaptainPicker( async (captainChoice) => {
    //                 game.setPlayerCaptain(captainChoice);
    //                 view.DOMHelper.removeCaptainPicker();

    //                 view.DOMHelper.setNewShipContainerHeight();
    //                 await delay(700);
                    
    //                 view.DOMHelper.initializeMainDisplay();

    //                 view.DOMHelper.setMainGridToPlayer();
    //                 view.DOMHelper.generateShipRotationControls((shipElement) => {
    //                     view.DOMHelper.applyRotation(shipElement);
    //                 });

    //                 view.displayCaptainAvatar(captainChoice);
    //                 view.DOMHelper.setUserInstruction(view.DOMHelper.userShipPlacementResponse());
    //                 view.hideCaptainAvatar();
    //                 view.setPlayerAndComputerCells();
        
    //                 game.placeAllComputerShips();
        
    //                 view.dragAndDropShips((ship, coordinate) => {
    //                     checkShipPlacement(ship, coordinate);

    //                     view.updateBoard(game.playerBoard.getBoard(), false);
                        
    //                     if (game.playerBoard.allShipsPlaced()) {
    //                         view.DOMHelper.removeShipContainerHeight();

    //                         view.DOMHelper.setMainGridToComputer();
    //                         view.showCaptainAvatar();
    //                         view.DOMHelper.currentPlayerOutline(false);
    //                         view.DOMHelper.setUserInstruction(view.DOMHelper.playerTurnResponse());
    //                         view.updateBoard(game.computerBoard.getBoard(), true)

    //                         view.onCellClick(playRound);
    //                     }
    //                 });
    //             });
    //     }
    // }

    const playRound = async (coordinate) => {
        if (!coordinate) {
            console.log(`Error: Attack already placed`);
            return;
        }

        if (!game.computerBoard.isValidAttack(coordinate)) return;

        view.DOMHelper.disableCells();  
        executePlayerTurn(coordinate);

        const isaWinner = game.checkForWinner();
        if (isaWinner) {
            view.alertWinner(isaWinner);
            resetGame();
            return;
        }
        //delay displaying players attack by 3 seconds, for sound effects purposes later

        // await delay(3000);

        view.updateBoard(game.computerBoard.getBoard(), true);  

        if (game.computerBoard.getLastHit() === 'ship') {

            //if the user clicks another attack directly after the first one, we want to wipe the current execution of the setUserInstruction and iniate a new instruction.
            view.DOMHelper.setUserInstruction(view.DOMHelper.playerHitResponse());
            view.setHit(coordinate, true);
            view.computerViewUpdate();
            return;
        }
        view.DOMHelper.setUserInstruction(view.DOMHelper.playerMissResponse());
        await delay(3000);
        view.playerViewUpdate();
        view.DOMHelper.setUserInstruction(view.DOMHelper.computerTurnResponse());
        view.DOMHelper.setMainGridToPlayer();
        view.hideCaptainAvatar();
        await delay(3000);
        executeComputerTurn();
    }

    const executePlayerTurn = (coordinate) => {

        game.currentPlayer = game.player.getName();
        game.player.attack([coordinate[0], coordinate[1]]);
        game.currentPlayer = game.computer.getName();
    }
    
    const executeComputerTurn = async () => {

        const position = game.computer.attack();
        const winner = game.checkForWinner();
        if (winner) {
            view.alertWinner(winner);
            resetGame();
            return;
        }
        //to delay computers attacks, for adding in sound effects later on

        await delay(2000);

        view.updateBoard(game.playerBoard.getBoard(), false);
        if (game.playerBoard.getLastHit() === 'ship') {
            view.setHit(position,false);
            view.DOMHelper.setUserInstruction(view.DOMHelper.computerTurnResponse());
            await delay(3000);
            view.DOMHelper.currentPlayerOutline(true);
            executeComputerTurn();
            return;
        }
        view.DOMHelper.setUserInstruction(view.DOMHelper.enemyMissResponse());
        await delay(3000);
        view.DOMHelper.currentPlayerOutline(false);
        view.DOMHelper.enableCells();
        view.DOMHelper.setUserInstruction(view.DOMHelper.playerTurnResponse());
        view.DOMHelper.setMainGridToComputer();
        view.showCaptainAvatar();
    }

    // const executeComputerTurn = async () => {

    //     const position = game.computer.attack();
    //     const winner = game.checkForWinner();
    //     if (winner) {
    //         view.alertWinner(winner);
    //         resetGame();
    //         return;
    //     }
    //     //to delay computers attacks, for adding in sound effects later on

    //     // await delay(3000);


    //     view.updateBoard(game.playerBoard.getBoard(), false);
    //     if (game.playerBoard.getLastHit() === 'ship') {
    //         view.setHit(position,false);
    //         view.DOMHelper.setUserInstruction(view.DOMHelper.computerTurnResponse());
    //         await delay(3000);
    //         view.DOMHelper.currentPlayerOutline(true);
    //         executeComputerTurn();
    //     } else {
    //         view.DOMHelper.setUserInstruction(view.DOMHelper.enemyMissResponse());
    //         await delay(3000);
    //         view.DOMHelper.currentPlayerOutline(false);
    //         view.DOMHelper.enableCells();
    //         view.DOMHelper.setUserInstruction(view.DOMHelper.playerTurnResponse());
    //         view.DOMHelper.setMainGridToComputer();
    //         view.showCaptainAvatar();
    //     }
    // }

    const checkShipPlacement = (ship, coordinate) => {
        const arrayCoordinate = [+coordinate[0], +coordinate[1]];
        const shipLength = +ship.dataset.length;
        const newShip = gameHelper.makeShip(shipLength);
        
        if (ship.dataset.orientation === 'horizontal') {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, false)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, false);

                view.DOMHelper.transitionElementRemoval(ship.parentNode);

            } else {
                console.log('Error: Cannot place ship there');
                //handle a missplaced ship, user tooltip or error pop up
            }
        } else {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, true)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, true);

                view.DOMHelper.transitionElementRemoval(ship.parentNode);

            } else {
                console.log('Error: Cannot place ship there');
                //handle a missplaced ship, user tooltip or error pop up
            }
        }
    }

    const delay = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });

    }

    const resetGame = () => {
        gameStarted = false;
        game = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState)();
        view.DOMHelper.removeGridsAndHeading();
        view.DOMHelper.resetGameStyles();
    }

    view.startButton.addEventListener('click', gameLoop);
}

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameState": () => (/* binding */ GameState),
/* harmony export */   "gameInitHelper": () => (/* binding */ gameInitHelper)
/* harmony export */ });
/* harmony import */ var _shipModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipModule */ "./src/shipModule.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");




const gameInitHelper = () => {

    // const placeTestShips = (playerBoard, computerBoard) => {
    //     computerBoard.placeShip(Ship(5), [4,1]);
    //     computerBoard.placeShip(Ship(4), [7,4]);
    //     computerBoard.placeShip(Ship(3), [2,2]);
    //     computerBoard.placeShip(Ship(2), [8,7]);

    //     playerBoard.placeShip(Ship(5), [2,3]);
    //     playerBoard.placeShip(Ship(4), [1,1]);
    //     playerBoard.placeShip(Ship(3), [9,5]);
    //     playerBoard.placeShip(Ship(2), [3,7]);
    // }

    const makeShip = (length) => {
        const ship = (0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(length);
        return ship;
    }

    return { makeShip }
}

const GameState = () => {

    let currentPlayer;

    let playerCaptain = null;

    const playerHasCaptain = () => {
        return playerCaptain === true;
    }

    const setPlayerCaptain = (captain) => {
        playerCaptain = captain;
    }

    const getPlayerCaptain = () => {
        return playerCaptain;
    }
    
    let playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
    let computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
    
    let player = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('Ryan', computerBoard, false);
    let computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer', playerBoard, true)

    const placeAllComputerShips = () => {
        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(5));
        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(4));
        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(3));
        computerBoard.placeComputerShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(2));
    }

    const checkForWinner = () => {
        if (playerBoard.allShipsSunk()) {
            return computer.getName();
        }
        if (computerBoard.allShipsSunk()) {
            return player.getName();
        }

        return null;
    }

    return { playerBoard, computerBoard, player, computer, checkForWinner, placeAllComputerShips, currentPlayer, playerHasCaptain, setPlayerCaptain, getPlayerCaptain }
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });

const Player = (name, opponentBoard, isCPU = false) => {
//factory for our different players (in the case of this game it would be the player and the computer) would take a name, and the opposing players board. So if we make a player it would take in the computers board.

    const caculationRandomPosition = () => {

        const validPositions = opponentBoard.getValidAttacks();
        const position = validPositions[Math.floor(Math.random() * validPositions.length)];

        return position;
    }

    const attack = (coordinate) => {
        if (isCPU) {

            const randomPosition = caculationRandomPosition();
            opponentBoard.recieveAttack(randomPosition);

            return randomPosition;
        }
        return opponentBoard.recieveAttack(coordinate)

    }

    const getName = () => {
        return name;
    }

    return { attack, getName }
}

/***/ }),

/***/ "./src/shipModule.js":
/*!***************************!*\
  !*** ./src/shipModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
//ship factory should include a type, which we can define later from the ship that the user clicks on. 

const Ship = (length) => {

    const shipLookup = {
        5: 'Carrier',
        4: 'Battleship',
        3: 'Cruiser',
        2: 'Destroyer'
    }

    const type = shipLookup[length];
    
    let shipDirection = null;

    const setShipDirection = (direction) => {
        shipDirection = direction;
    }

    const getShipDirection = () => {
        return shipDirection;
    }

    let damageRecieved = 0;

    const hit = () => {
        damageRecieved++;
    }
    const isSunk = () => damageRecieved >= length;
    

    const getDamageRecieved = () => damageRecieved;

    return { type, length, getDamageRecieved, hit, isSunk, setShipDirection, getShipDirection }
}

/***/ }),

/***/ "./src/assets/captains/captain1.png":
/*!******************************************!*\
  !*** ./src/assets/captains/captain1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/captain1.png";

/***/ }),

/***/ "./src/assets/captains/captain2.png":
/*!******************************************!*\
  !*** ./src/assets/captains/captain2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/captain2.png";

/***/ }),

/***/ "./src/assets/captains/captain3.png":
/*!******************************************!*\
  !*** ./src/assets/captains/captain3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/captain3.png";

/***/ }),

/***/ "./src/assets/rotate.svg":
/*!*******************************!*\
  !*** ./src/assets/rotate.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rotate.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ "./src/gameController.js");


(0,_gameController__WEBPACK_IMPORTED_MODULE_0__.gameController)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssa0JBQWtCLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxRQUFRLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sbUJBQW1CLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxpREFBaUQsZ0JBQWdCLDZCQUE2QixnREFBZ0QsR0FBRyxXQUFXLDRDQUE0Qyx5Q0FBeUMsaUNBQWlDLHVDQUF1QyxrQ0FBa0MsK0JBQStCLHNCQUFzQixHQUFHLFVBQVUsd0JBQXdCLHFEQUFxRCx1QkFBdUIsb0JBQW9CLDBCQUEwQiw2QkFBNkIsZ0JBQWdCLEdBQUcsUUFBUSxrQ0FBa0MsR0FBRyxpQkFBaUIsdUNBQXVDLG9CQUFvQixtQkFBbUIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLHdCQUF3QixHQUFHLHVCQUF1Qiw2QkFBNkIsR0FBRyxrQkFBa0IsMEJBQTBCLDZCQUE2QixtQkFBbUIsR0FBRyxpQkFBaUIsb0JBQW9CLDhCQUE4QixnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixrQkFBa0IseUNBQXlDLGtDQUFrQywwQkFBMEIscUJBQXFCLG1CQUFtQixvQkFBb0IsOEJBQThCLElBQUksMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixvQkFBb0Isa0JBQWtCLHlDQUF5QyxrQ0FBa0MsMEJBQTBCLHFCQUFxQixrQkFBa0IsNkJBQTZCLEtBQUssNkJBQTZCLG9CQUFvQix3QkFBd0Isd0JBQXdCLHNCQUFzQixtQkFBbUIsZ0JBQWdCLElBQUksd0JBQXdCLG9CQUFvQix3QkFBd0Isd0JBQXdCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDhCQUE4QixHQUFHLDJCQUEyQix5QkFBeUIsbUJBQW1CLGdCQUFnQixpQkFBaUIsa0JBQWtCLDhCQUE4QiwyQ0FBMkMsb0NBQW9DLG1CQUFtQixzQkFBc0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIsR0FBRyx5QkFBeUIseUJBQXlCLHdCQUF3QixhQUFhLGNBQWMsSUFBSSx3QkFBd0IseUJBQXlCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHFCQUFxQixvQkFBb0IscUJBQXFCLDZDQUE2QyxtQkFBbUIseUJBQXlCLG1CQUFtQixLQUFLLDhCQUE4QixrQkFBa0IseUJBQXlCLGlCQUFpQixnQkFBZ0IsK0NBQStDLHlCQUF5QiwwQkFBMEIsNkVBQTZFLEdBQUcsd0JBQXdCLHNDQUFzQyxxQ0FBcUMsb0JBQW9CLGtCQUFrQiw2Q0FBNkMscURBQXFELHlCQUF5QixxQkFBcUIsT0FBTyxtQ0FBbUMsb0JBQW9CLDZCQUE2QixnQkFBZ0IsNENBQTRDLG9DQUFvQywwQkFBMEIsR0FBRyxvQ0FBb0Msd0NBQXdDLGtDQUFrQyxrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsSUFBSSxzQ0FBc0MsbUJBQW1CLElBQUksbUNBQW1DLDhCQUE4QiwrQkFBK0IscUJBQXFCLHlCQUF5QixvQ0FBb0MsR0FBRyx1Q0FBdUMsNkNBQTZDLEdBQUcsbUJBQW1CLHlCQUF5QixHQUFHLGFBQWEsMEJBQTBCLEdBQUcsdUNBQXVDLGlDQUFpQyxLQUFLLDhCQUE4QixpQkFBaUIsZ0JBQWdCLEdBQUcsK0JBQStCLG9CQUFvQiwwQkFBMEIsNkNBQTZDLHlCQUF5QixxQkFBcUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsbUJBQW1CLDZCQUE2QixRQUFRLGdDQUFnQyxvQkFBb0IsNkNBQTZDLHlCQUF5QiwwQkFBMEIsaUJBQWlCLHNCQUFzQiw2Q0FBNkMseUJBQXlCLG1CQUFtQix3QkFBd0IsNkJBQTZCLEdBQUcsOENBQThDLGlCQUFpQix1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLHNCQUFzQixpQkFBaUIsR0FBRyxpQkFBaUIsaUJBQWlCLElBQUksaURBQWlELGlCQUFpQix5Q0FBeUMsR0FBRywwREFBMEQsb0JBQW9CLEdBQUcsOENBQThDLDBCQUEwQixHQUFHLGlEQUFpRCwyQkFBMkIsMEJBQTBCLElBQUksWUFBWSxtQkFBbUIsb0JBQW9CLDZCQUE2Qix3QkFBd0IsR0FBRyx1QkFBdUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsNENBQTRDLGlEQUFpRCxtQkFBbUIsMEJBQTBCLDBCQUEwQixtQkFBbUIsa0JBQWtCLHlCQUF5Qix3QkFBd0IsNkJBQTZCLEdBQUcsdUJBQXVCLDJCQUEyQixJQUFJLGlCQUFpQiwwQkFBMEIsMkJBQTJCLEdBQUcsY0FBYyw2Q0FBNkMsR0FBRyxpQkFBaUIsNkNBQTZDLHlCQUF5QiwrQ0FBK0MsS0FBSyx3QkFBd0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLDZCQUE2QixrQkFBa0Isa0JBQWtCLHNCQUFzQixHQUFHLDJCQUEyQixpQkFBaUIsbUJBQW1CLHNCQUFzQixHQUFHLGNBQWMsbURBQW1ELGtDQUFrQyxtQkFBbUIsR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsaUJBQWlCLGtCQUFrQiw2Q0FBNkMseUJBQXlCLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0IsOEJBQThCLHlCQUF5QixHQUFHLDJDQUEyQyx5QkFBeUIsd0JBQXdCLG1CQUFtQixHQUFHLGlIQUFpSCxrQkFBa0IsdUJBQXVCLGVBQWUsaUJBQWlCLFdBQVcsY0FBYyw4Q0FBOEMsR0FBRyx3REFBd0QsbURBQW1ELEdBQUcsNERBQTRELDZDQUE2QyxHQUFHLHlEQUF5RCwrQ0FBK0MsR0FBRywyQkFBMkIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix5QkFBeUIsYUFBYSxnQ0FBZ0MsR0FBRywwQkFBMEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0NBQWtDLDhCQUE4QixrQkFBa0Isa0JBQWtCLHdCQUF3QixrQkFBa0IseUNBQXlDLG9DQUFvQyxHQUFHLGlDQUFpQyx3QkFBd0Isb0JBQW9CLEdBQUcseUJBQXlCLG9CQUFvQixnQkFBZ0IsR0FBRyw2QkFBNkIseUJBQXlCLGlDQUFpQyxHQUFHLGFBQWEsd0JBQXdCLGlCQUFpQixrQkFBa0IseUJBQXlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsb0NBQW9DLDBCQUEwQix1Q0FBdUMseUJBQXlCLG1CQUFtQix3QkFBd0IsR0FBRyx5QkFBeUIsbURBQW1ELEdBQUcsOEJBQThCLGtCQUFrQixHQUFHLDRCQUE0QixrQkFBa0IsS0FBSyw0QkFBNEIsa0JBQWtCLEtBQUssNEJBQTRCLG1CQUFtQixLQUFLLDRCQUE0QixvQkFBb0IsNkJBQTZCLDBCQUEwQix1Q0FBdUMsa0JBQWtCLEdBQUcscUNBQXFDLG1CQUFtQixHQUFHLHFDQUFxQyxtQkFBbUIsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcscUNBQXFDLG9CQUFvQixHQUFHLG9CQUFvQix5QkFBeUIsa0JBQWtCLGdCQUFnQixxREFBcUQsb0dBQW9HLDZDQUE2QyxzQ0FBc0MsR0FBRywyQkFBMkIsK0JBQStCLGlDQUFpQyxHQUFHLHNDQUFzQywrQkFBK0IsR0FBRyxtQ0FBbUMsK0JBQStCLEdBQUcsbUNBQW1DLCtCQUErQixLQUFLLG1DQUFtQywrQkFBK0IsSUFBSSxrQkFBa0IsZUFBZSxxQkFBcUIsS0FBSyxvQkFBb0IsaUNBQWlDLGlCQUFpQixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ3I5eEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNkTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjBDO0FBQ2E7QUFDQTtBQUNBOztBQUVGOztBQUU5Qzs7QUFFUCxvQkFBb0Isa0VBQW9COztBQUV4QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0EsaUJBQWlCLDBEQUFRLEVBQUUsMERBQVEsRUFBRSwwREFBUTtBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLE1BQU07O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNOztBQUVwQztBQUNBO0FBQ0EsK0NBQStDLElBQUksRUFBRSxJQUFJO0FBQ3pEO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxvQkFBb0I7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHVCQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwrQkFBK0IsK0NBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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L3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTSBIZWxwZXIgTW9kdWxlcy9ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTSBIZWxwZXIgTW9kdWxlcy9ET01IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jbHI6IHJnYig2LCAxOCwgMzEpO1xcbiAgICAtLWdyaWQtYm9yZGVyLWNscjogcmdiKDIyLCA0NywgNzMpO1xcbiAgICAtLXNoaXAtYm9yZGVyLWNscjogI2M0Y2UzNTtcXG4gICAgLS1ib3gtaG92ZXItY2xyOiByZ2IoMzIsIDU3LCA4Myk7XFxuICAgIC0tc2hpcC1jbHI6IHJnYigzNiwgNjAsIDg1KTtcXG4gICAgLS1zZWNvbmRhcnktY2xyOiAjY2VlNjFjO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnN0YXJ0LWdhbWU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcbn1cXG5cXG4uaW4tcHJvZ3Jlc3Mge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogLmNhcHRhaW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlOyBcXG59ICovXFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0b3A6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuICB9XFxuXFxuXFxuXFxuLyogLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG59ICovXFxuXFxuLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcHRhaW4tYm9hcmQtYXZhdGFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNDMuNSU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSk7ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMTMlO1xcbiAgICAvKiBib3R0b206IDclOyAqL1xcbiAgICBib3R0b206IDMwJTtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbi5jYXB0YWluLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNrZXcoLTYwZGVnKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLXNlY29uZGFyeS1jbHIpIHRyYW5zcGFyZW50O1xcbn1cXG4gIFxcblxcbi5jYXB0YWluLWltYWdlIHtcXG4gICAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG5cXG59XFxuXFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zaGlwLWNscik7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLyogLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2Uge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDApOyAqL1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xcbiAgICBtYXgtd2lkdGg6IDg1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5jYXB0YWluLW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW46aG92ZXIge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyAqL1xcbn1cXG4uY2FwdGFpbi1jb250YWluZXIudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMHJlbTtcXG59XFxuLyogLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuXFxuXFxufSAqL1xcblxcbi5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjRyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxufVxcblxcbi5ncmlkLmxlZnQuY3VycmVudCxcXG4uZ3JpZC5yaWdodC5jdXJyZW50IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbi8qIC5ncmlkLmxlZnQge1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG59ICovXFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dCxcXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3MDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dC5oaWRlLFxcbi5ncmlkLnJpZ2h0LmZhZGUtb3V0LmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LnZpc2libGUsXFxuLmdyaWQucmlnaHQudmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIC5ncmlkLmxlZnQuZGlzYWJsZWQsXFxuLmdyaWQucmlnaHQuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59ICovXFxuXFxuLnJvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5ib3gsXFxuLm91dGVyLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoNTYsIDU4LCA3MCk7ICovXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLyogLmJveCAuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5ib3guaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtaG92ZXItY2xyKTtcXG59XFxuXFxuLmJveC5wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcblxcbn1cXG5cXG4uYm94LnBsYWNlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLXNxdWFyZS1ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZS12ZXJ0aWNhbCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ub3V0ZXItYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYXR0YWNrLW1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtaGl0LW1hcmtlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0LFxcbi5jb21wdXRlci1zaGlwLWhpdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5zaGlwLW1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIC8qIHBhZGRpbmctdG9wOiAxMHB4OyAqL1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lci5leHBhbmQge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG59XFxuXFxuLnNoaXAtc3ViLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG59XFxuXFxuLnNoaXAtZWxlbWVudDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMge1xcbiAgICB3aWR0aDogNzBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNCB7XFxuICAgIHdpZHRoOiA5MHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01IHtcXG4gICAgd2lkdGg6IDExMHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50LnZlcnRpY2FsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoMTAwJSArIC01NXB4KSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoODIlKSBzYXR1cmF0ZSg0NjAlKSBodWUtcm90YXRlKDdkZWcpIGJyaWdodG5lc3MoODclKSBjb250cmFzdCgxMDglKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi8qIC5zaGlwLWVsZW1lbnQubGVuZ3RoLTIucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn0gKi9cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgc2NhbGU6IDA7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxufVxcblxcbi5tb3ZlLXBvc2l0aW9uIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1JSk7XFxuICAgIHdpZHRoOiA5NCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixlQUFl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QUNYLFNBQVM7SUFDVCw4Q0FBOEM7SUFDOUMsNkZBQTZGO0lBQzdGLHNDQUFzQztJQUN0QywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRzs7QUFFSDtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNscjogcmdiKDYsIDE4LCAzMSk7XFxuICAgIC0tZ3JpZC1ib3JkZXItY2xyOiByZ2IoMjIsIDQ3LCA3Myk7XFxuICAgIC0tc2hpcC1ib3JkZXItY2xyOiAjYzRjZTM1O1xcbiAgICAtLWJveC1ob3Zlci1jbHI6IHJnYigzMiwgNTcsIDgzKTtcXG4gICAgLS1zaGlwLWNscjogcmdiKDM2LCA2MCwgODUpO1xcbiAgICAtLXNlY29uZGFyeS1jbHI6ICNjZWU2MWM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxufVxcblxcbi5pbi1wcm9ncmVzcyB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNDByZW07XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7IFxcbn0gKi9cXG5cXG4uY2FwdGFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRvcDogLTEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTtcXG4gIH1cXG5cXG5cXG5cXG4vKiAuY2FwdGFpbi1hdmF0YXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAyMHB4O1xcbn0gKi9cXG5cXG4uY2FwdGFpbi1hdmF0YXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2FwdGFpbi1ib2FyZC1hdmF0YXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00My41JTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNoaXAtYm9yZGVyLWNscik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyA7XFxufVxcblxcbi8qIC5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufSAqL1xcblxcbi5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMyU7XFxuICAgIC8qIGJvdHRvbTogNyU7ICovXFxuICAgIGJvdHRvbTogMzAlO1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICB9XFxuXFxuLmNhcHRhaW4tbWVzc2FnZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2tldygtNjBkZWcpO1xcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tc2Vjb25kYXJ5LWNscikgdHJhbnNwYXJlbnQ7XFxufVxcbiAgXFxuXFxuLmNhcHRhaW4taW1hZ2Uge1xcbiAgICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcblxcbn1cXG5cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIC8qIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTsgKi9cXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW4ge1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zaGlwLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gKi9cXG5cXG4vKiAuY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufSAqL1xcblxcbi5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMCk7ICovXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XFxuICAgIG1heC13aWR0aDogODUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2U6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuXFxuLmNhcHRhaW4tbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcGVhciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbjpob3ZlciB7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7ICovXFxufVxcbi5jYXB0YWluLWNvbnRhaW5lci52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwcmVtO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0LFxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTtcXG5cXG5cXG59ICovXFxuXFxuLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1pbi13aWR0aDogOTVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICBmb250LXNpemU6IDAuNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTtcXG59XFxuXFxuLmdyaWQubGVmdC5jdXJyZW50LFxcbi5ncmlkLnJpZ2h0LmN1cnJlbnQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuLyogLmdyaWQubGVmdCB7XFxuICAgIG1pbi13aWR0aDogOTVweDtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmdyaWQucmlnaHQge1xcbiAgICB3aWR0aDogNzAlO1xcbn0gKi9cXG5cXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0LFxcbi5ncmlkLmxlZnQuZmFkZS1vdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDcwMG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0LmhpZGUsXFxuLmdyaWQucmlnaHQuZmFkZS1vdXQuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ncmlkLmxlZnQudmlzaWJsZSxcXG4uZ3JpZC5yaWdodC52aXNpYmxlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLyogLmdyaWQubGVmdC5kaXNhYmxlZCxcXG4uZ3JpZC5yaWdodC5kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn0gKi9cXG5cXG4ucm93IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLmJveCxcXG4ub3V0ZXItYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJnYig1NiwgNTgsIDcwKTsgKi9cXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyBlYXNlO1xcbn1cXG5cXG4vKiAuYm94IC5kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn0gKi9cXG5cXG4uZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmJveC5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1ob3Zlci1jbHIpO1xcbn1cXG5cXG4uYm94LnBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXNoaXAtYm9yZGVyLWNscik7XFxuXFxufVxcblxcbi5ib3gucGxhY2VkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtc3F1YXJlLWhvcml6b250YWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnNoaXAtc3F1YXJlLXZlcnRpY2FsIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi5vdXRlci1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hdHRhY2stbWFya2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1oaXQtbWFya2VyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQsXFxuLmNvbXB1dGVyLXNoaXAtaGl0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxufVxcblxcbi5jb21wdXRlci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi50cmFuc2l0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgLyogcGFkZGluZy10b3A6IDEwcHg7ICovXFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDcwMG1zIGVhc2U7XFxufVxcblxcbi5zaGlwLW1haW4tY29udGFpbmVyLmV4cGFuZCB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4uc2hpcC1zdWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5kZXRhaWwge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50OmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxufVxcblxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTIge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMyB7XFxuICAgIHdpZHRoOiA3MHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00IHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQudmVydGljYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTIudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygxMDAlICsgLTU1cHgpKTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoODMlKSBzZXBpYSg4MiUpIHNhdHVyYXRlKDQ2MCUpIGh1ZS1yb3RhdGUoN2RlZykgYnJpZ2h0bmVzcyg4NyUpIGNvbnRyYXN0KDEwOCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24uYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG59XFxuXFxuLyogLnNoaXAtZWxlbWVudC5sZW5ndGgtMi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufSAqL1xcblxcbi5pbnZpc2libGUge1xcbiAgICBzY2FsZTogMDtcXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG59XFxuXFxuLm1vdmUtcG9zaXRpb24ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTUlKTtcXG4gICAgd2lkdGg6IDk0JTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgb25lRWxlbWVudCA9IChjbGFzc1RpdGxlLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzVGl0bGU7XG4gICAgXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG11bHRpcGxlRWxlbWVudHMgPSAoZWxlbWVudCwgcXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cXR5OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgYXJyLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiB7IG9uZUVsZW1lbnQsIG11bHRpcGxlRWxlbWVudHMgfVxufVxuIiwiaW1wb3J0IHJvdGF0ZSBmcm9tICcuLi9hc3NldHMvcm90YXRlLnN2Zyc7XG5pbXBvcnQgY2FwdGFpbjEgZnJvbSAnLi4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4xLnBuZyc7XG5pbXBvcnQgY2FwdGFpbjIgZnJvbSAnLi4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4yLnBuZyc7XG5pbXBvcnQgY2FwdGFpbjMgZnJvbSAnLi4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4zLnBuZyc7XG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRDcmVhdG9yIH0gZnJvbSAnLi9ET01DcmVhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBET01IZWxwZXJDcmVhdGlvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNyZWF0b3IgPSBDdXN0b21FbGVtZW50Q3JlYXRvcigpO1xuXG4gICAgbGV0IHBsYXllckJvYXJkO1xuICAgIGxldCBjb21wdXRlckJvYXJkO1xuXG4gICAgLy9tb2R1bGUgZm9yIHF1ZXJ5U2VsZWN0b3IgcmVmZXJlbmNlc1xuXG4gICAgY29uc3QgbWFpblRvcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzJyk7XG4gICAgLy8gY29uc3QgdHJhbnNpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgXG4gICAgY29uc3QgaW5pdGlhbGl6ZU1haW5EaXNwbGF5ID0gKCkgPT4ge1xuXG4gICAgICAgIGdlbmVyYXRlR3JpZHMoKTtcbiAgICAgICAgc2V0SW5HYW1lU3R5bGVzKCk7XG4gICAgICAgIGdlbmVyYXRlU2hpcEVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmV3U2hpcENvbnRhaW5lckhlaWdodCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaGlwTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLW1haW4tY29udGFpbmVyJylcbiAgICAgICAgICAgIHNoaXBNYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgc2hpcE1haW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpXG4gICAgICAgIHNoaXBNYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZCcpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWFpbkdyaWRUb1BsYXllciA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRNYWluR3JpZFRvQ29tcHV0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIgPSBhc3luYyAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkNvbnRhaW5lciA9IGNyZWF0b3Iub25lRWxlbWVudCgnY2FwdGFpbi1jb250YWluZXInLCAnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQaWNrIHlvdXIgbGlldXRlbmFudCEnXG4gICAgICAgIGNhcHRhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBtYWluVG9wQ29udGFpbmVyLmFwcGVuZChjYXB0YWluQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgc2V0SW5HYW1lU3R5bGVzKCk7XG4gICAgICAgIFxuICAgICAgICB0cmFuc2l0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWRvd24nKTtcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVDYXB0YWlucyhjYXB0YWluQ29udGFpbmVyLCBjYWxsYmFjayk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDYXB0YWluUGlja2VyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHNldERlZmF1bHRDb250YWluZXJTaXplKCk7XG5cbiAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDYXB0YWluSW1hZ2VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gWyBjYXB0YWluMSwgY2FwdGFpbjIsIGNhcHRhaW4zIF1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDYXB0YWlucyA9IChjb250YWluZXIsIGNhbGxiYWNrKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhcnMgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2NhcHRhaW4tYXZhdGFycycsICdkaXYnKTtcblxuICAgICAgICBjb25zdCBjYXB0YWlucyA9IGNyZWF0b3IubXVsdGlwbGVFbGVtZW50cygnZGl2JywgMyk7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5OYW1lcyA9IFsnVGVkJywgJ0RvbmFsZCcsICdCdXJ0J11cbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGNhcHRhaW4gb2YgY2FwdGFpbnMpIHtcbiAgICAgICAgICAgICAgICBjYXB0YWluLmNsYXNzTmFtZSA9ICdjYXB0YWluJztcbiAgICAgICAgICAgICAgICAvLyBjYXB0YWluLnRleHRDb250ZW50ID0gYGNhcHRhaW4ke2NvdW50ZXJ9YDtcbiAgICAgICAgICAgICAgICBjYXB0YWluLmRhdGFzZXQuY2FwdGFpbiA9IGNvdW50ZXI7XG4gICAgICAgICAgICAgICAgY2FwdGFpbkF2YXRhcnMuYXBwZW5kQ2hpbGQoY2FwdGFpbik7XG5cbiAgICAgICAgICAgICAgICBjYXB0YWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjYXB0YWluLmRhdGFzZXQuY2FwdGFpbik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdmF0YXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGF2YXRhckltYWdlLnNyYyA9IGdldENhcHRhaW5JbWFnZXMoKVtjb3VudGVyXTtcbiAgICAgICAgICAgICAgICBhdmF0YXJJbWFnZS5jbGFzc05hbWUgPSAnY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2UnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuYW1lRWxlbWVudC5jbGFzc05hbWUgPSAnY2FwdGFpbi1uYW1lJztcbiAgICAgICAgICAgICAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGNhcHRhaW5OYW1lc1tjb3VudGVyKytdO1xuICAgICAgICAgICAgICAgIC8vIGF2YXRhckltYWdlLmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcblxuXG4gICAgICAgICAgICAgICAgYXZhdGFySW1hZ2UuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FwdGFpbi5hcHBlbmQoYXZhdGFySW1hZ2UsIG5hbWVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChjYXB0YWluQXZhdGFycyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUdyaWRTcXVhcmVzID0gKGNvbnRhaW5lciwgaXNDb21wR3JpZCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPDExOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNyZWF0b3Iub25lRWxlbWVudCgncm93JywgJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMTsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGNyZWF0b3Iub25lRWxlbWVudCgnYm94JywgJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJveClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0Lnh5UG9zID0gYCR7ai0xfSR7aS0xfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wR3JpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0LnBsYXllciA9ICdjb21wdXRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0LnBsYXllciA9ICdwbGF5ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnb3V0ZXItYm94JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0LnBsYXllciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBqO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ291dGVyLWJveCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnRleHRDb250ZW50ID0gc2V0QWxwaGFiZXRbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVmYXVsdENvbnRhaW5lclNpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICB0cmFuc2l0aW9uQ29udGFpbmVyLnN0eWxlLnRvcCA9ICcwdmgnO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRyYW5zaXRpb25Db250YWluZXJUb3AgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gY29uc3QgbWFpbkJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzJyk7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmRzSGVpZ2h0ID0gbWFpblRvcENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRyYW5zaXRpb25Db250YWluZXIuc3R5bGUudG9wID0gYCR7Z2FtZWJvYXJkc0hlaWdodCArIDM1fXB4YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBbHBoYWJldCA9IHtcbiAgICAgICAgMTogJ0EnLFxuICAgICAgICAyOiAnQicsXG4gICAgICAgIDM6ICdDJyxcbiAgICAgICAgNDogJ0QnLFxuICAgICAgICA1OiAnRScsXG4gICAgICAgIDY6ICdGJyxcbiAgICAgICAgNzogJ0cnLFxuICAgICAgICA4OiAnSCcsXG4gICAgICAgIDk6ICdJJyxcbiAgICAgICAgMTA6ICdKJ1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlR3JpZHMgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gY29uc3QgbWFpbkJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzJyk7XG5cbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc05hbWUgPSAnZ3JpZCBsZWZ0JztcbiAgICAgICAgXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NOYW1lID0gJ2dyaWQgcmlnaHQnO1xuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQuZGF0YXNldC5ncmlkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBtYWtlR3JpZFNxdWFyZXMocGxheWVyQm9hcmQsIGZhbHNlKTtcbiAgICAgICAgbWFrZUdyaWRTcXVhcmVzKGNvbXB1dGVyQm9hcmQsIHRydWUpO1xuXG4gICAgICAgIG1haW5Ub3BDb250YWluZXIuYXBwZW5kKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcblxuICAgICAgICAvLyBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wKCk7XG5cbiAgICAgICAgLy8gdHJhbnNpdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlmdC1kb3duJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlmdC1kb3duJyk7XG4gICAgICAgIH0sMzApO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVTaGlwRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLW1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gY29uc3QgdGl0bGUgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3VzZXItaW5zdHJ1Y3Rpb24nLCAnaDInKTtcbiAgICAgICAgLy8gdGl0bGUudGV4dENvbnRlbnQgPSAnRHJhZyB5b3VyIGZsZWV0IG9udG8gdGhlIGJhdHRsZWZpZWxkLCBjYXB0YWluISdcbiAgICAgICAgLy8gc2hpcEVsZW1lbnRBcmVhLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNoaXBzID0gY3JlYXRvci5tdWx0aXBsZUVsZW1lbnRzKCdkaXYnLCA0KTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSw0LDMsMl07XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCwgaSkgPT4ge1xuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lmxlbmd0aCA9IHNoaXBMZW5ndGhzW2ldO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICAgICAgc2hpcC5jbGFzc05hbWUgPSAnc2hpcC1lbGVtZW50JztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKGBsZW5ndGgtJHtzaGlwLmRhdGFzZXQubGVuZ3RofWApO1xuICAgICAgICAgICAgc2hpcEVsZW1lbnRBcmVhLmFwcGVuZENoaWxkKHNoaXApO1xuICAgICAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gICAgICAgICAgICAvL2dlbmVyYXRlIGRldGFpbHMgdG8gcGxhY2Ugb24gdGhlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmRhdGFzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZXRhaWwuY2xhc3NOYW1lID0gJ2RldGFpbCc7XG4gICAgICAgICAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChkZXRhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVTaGlwUm90YXRpb25Db250cm9scyA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLW1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3Qgc2hpcFN1YkNvbnRhaW5lciA9IGNyZWF0b3Iub25lRWxlbWVudCgnc2hpcC1zdWItY29udGFpbmVyJywgJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHNoaXBzID0gc2hpcE1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtZWxlbWVudCcpO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXBNYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNoaXApO1xuXG4gICAgICAgICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gY3JlYXRvci5vbmVFbGVtZW50KCdzaGlwLWVsZW1lbnQtY29udGFpbmVyJywgJ2RpdicpO1xuICAgICAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwKTtcblxuICAgICAgICAgICAgc2hpcFN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3Qgcm90YXRlQnV0dG9uID0gY3JlYXRvci5vbmVFbGVtZW50KCdyb3RhdGUtYnV0dG9uJywgJ2ltZycpO1xuICAgICAgICAgICAgcm90YXRlQnV0dG9uLnNyYyA9IHJvdGF0ZTtcbiAgICAgICAgICAgIHJvdGF0ZUJ1dHRvbi5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByb3RhdGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc2hpcCk7XG4gICAgICAgICAgICAgICAgY2hhbmdlT3JpZW50YXRpb24oc2hpcCk7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlSb3RhdGlvbihzaGlwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXBNYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBTdWJDb250YWluZXIpO1xuICAgIFxuICAgIH1cblxuXG4gICAgY29uc3QgYXBwbHlSb3RhdGlvbiA9IChzaGlwRWxlbWVudCkgPT4ge1xuXG4gICAgICAgIGlmIChzaGlwRWxlbWVudC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSAoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVHcmlkc0FuZEhlYWRpbmcgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgc2V0RGVmYXVsdENvbnRhaW5lclNpemUoKTtcbiAgICAgICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgICAgICAgaWYgKHNoaXBDb250YWluZXIpIHtcbiAgICAgICAgICAgIHdoaWxlIChzaGlwQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgIHNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWluc3RydWN0aW9uJyk7XG4gICAgICAgIC8vIGhlYWRpbmcucmVtb3ZlKCk7XG5cblxuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVDZWxscyA9ICgpID0+IHtcblxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgY29uc3QgZW5hYmxlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpO1xuICAgICAgICBlbmFibGVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmFibGVDZWxscyA9ICgpID0+IHtcblxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgY29uc3QgZGlzYWJsZWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcblxuICAgICAgICBkaXNhYmxlZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFBsYXllck91dGxpbmUgPSAoaXNQbGF5ZXJzVHVybikgPT4ge1xuICAgICAgICBpZiAoaXNQbGF5ZXJzVHVybikge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDNweCByZWQnO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnM3B4IHRyYW5zcGFyZW50JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDNweCBncmVlbic7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnM3B4IHRyYW5zcGFyZW50JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFVzZXJJbnN0cnVjdGlvbiA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnN0cnVjdGlvbicpO1xuICAgICAgICBjb25zdCBjYXB0YWluU3BlZWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tbWVzc2FnZScpO1xuICAgICAgICBjYXB0YWluU3BlZWNoLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHNwZWVkID0gNTA7XG4gICAgICAgIGNvbnN0IHR5cGVXcml0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA8IG1lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCArPSBtZXNzYWdlLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCA1MDApO1xuICAgIH1cblxuICAgIC8vIGxldCB0aW1lb3V0SUQ7XG4gICAgLy8gY29uc3Qgc2V0VXNlckluc3RydWN0aW9uID0gKG1lc3NhZ2UpID0+IHtcbiAgICAvLyAgICAgY29uc3QgY2FwdGFpblNwZWVjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLW1lc3NhZ2UnKTtcbiAgICAvLyAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCA9ICcnO1xuICAgIC8vICAgICAvLyBsZXQgdGltZW91dElEO1xuICAgIC8vICAgICBsZXQgaTsgLy8gZGVjbGFyZSB0aGUgaSB2YXJpYWJsZSBvdXRzaWRlIG9mIHRoZSBpZiBzdGF0ZW1lbnRcbiAgICAvLyAgICAgaWYgKHRpbWVvdXRJRCkge1xuICAgIC8vICAgICAgICAgLy8gaWYgdGhlIHR5cGVXcml0ZXIgZnVuY3Rpb24gaXMgY3VycmVudGx5IHJ1bm5pbmcsIGNsZWFyIHRoZSB0aW1lciBhbmQgcmVzZXQgdGhlIGNvdW50ZXJcbiAgICAvLyAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIC8vICAgICAgICAgaSA9IDA7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBjYXB0YWluU3BlZWNoLnRleHRDb250ZW50ID0gJyc7IC8vIG90aGVyd2lzZSwgY2xlYXIgdGhlIHNwZWVjaCBidWJibGVcbiAgICAvLyAgICAgICAgIGkgPSAwOyAvLyBhc3NpZ24gYSB2YWx1ZSB0byBpIGhlcmVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgc3BlZWQgPSA1MDtcbiAgICAvLyAgICAgY29uc3QgdHlwZVdyaXRlciA9ICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChpIDwgbWVzc2FnZS5sZW5ndGgpIHtcbiAgICAvLyAgICAgICAgICAgICBjYXB0YWluU3BlZWNoLnRleHRDb250ZW50ICs9IG1lc3NhZ2UuY2hhckF0KGkpO1xuICAgIC8vICAgICAgICAgICAgIGkrKztcbiAgICAvLyAgICAgICAgICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNwZWVkKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0eXBlV3JpdGVyKCk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgcGxheWVySGl0UmVzcG9uc2UgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiQnVsbHNleWUhIFdlJ3ZlIGhpdCB0aGUgZW5lbXkncyB2ZXNzZWwuIEdvIGFnYWluIVwiYCxcbiAgICAgICAgICAgIGBcIk5pY2Ugc2hvdCEgRW5lbXkgc2hpcCBoaXQhIFRoaXMgaXMgZnVuLCBnbyFcImAsXG4gICAgICAgICAgICBgXCJFbmVteSBzaGlwLCBtZWV0IG91ciBmaXJlcG93ZXIhIERpcmVjdCBoaXQhIE5leHQgc2hvdCFcImBcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyVHVyblJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJJdCdzIHlvdXIgdHVybiwgY2FwdGFpbiEgRmlyZSBhdCB3aWxsIVwiYCxcbiAgICAgICAgICAgIGBcIkFsbCBzeXN0ZW1zIGFyZSBnbyEgVGFrZSB5b3VyIHNob3QsIGNhcHRhaW4uXCJgLFxuICAgICAgICAgICAgYFwiVGhlIGVuZW15IHNoaXAgaXMgaW4gc2lnaHQuIFlvdSBoYXZlIHRoZSBncmVlbiBsaWdodCB0byBhdHRhY2suXCJgLFxuICAgICAgICAgICAgYFwiVGhlIHNlYSBpcyB5b3VycywgY2FwdGFpbi4gU2hvdyB0aGUgZW5lbXkgd2hhdCB3ZSdyZSBtYWRlIG9mIVwiYCxcbiAgICAgICAgICAgIGBcIldlJ3JlIGNvdW50aW5nIG9uIHlvdSwgY2FwdGFpbi4gVGltZSB0byBtYWtlIHlvdXIgbW92ZS5cImBcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJUdXJuUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkJyYWNlIGZvciBpbXBhY3QhIFRoZSBlbmVteSBpcyB0YWtpbmcgdGhlaXIgc2hvdC5cImAsXG4gICAgICAgICAgICBgXCJBbGwgaGFuZHMgb24gZGVjayEgRW5lbXkgdHVybiB0byBmaXJlLlwiYCxcbiAgICAgICAgICAgIGBcIkV5ZXMgb24gdGhlIGhvcml6b24sIGNhcHRhaW4uIFRoZSBlbmVteSBpcyBhdHRhY2tpbmcuXCJgLFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICBjb25zdCB1c2VyU2hpcFBsYWNlbWVudFJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJQbGFjZSB0aGUgc2hpcHMsIENhcCduIVwiYCxcbiAgICAgICAgICAgIGBcIkNhcHRhaW4sIGxldHMgcGxhY2Ugb3VyIGZsZWV0IVwiYCxcbiAgICAgICAgICAgIGBcIkxldCdzIGJlZ2luIHBsYWNpbmcgb3VyIHNoaXBzIVwiYCxcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuXG4gICAgY29uc3QgZW5lbXlNaXNzUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIlRoZXkgc3VjayEgSG93IGNvdWxkIHRoZXkgbWlzcyFcImAsXG4gICAgICAgICAgICBgXCJEYW1uLCB0aGV5IG1pc3NlZCBpdFwiYFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJNaXNzUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkFoLCB0b28gYmFkLiBXZSBnbyBhZ2Fpbi5cImAsXG4gICAgICAgICAgICBgXCJBIG1pc3MgZm9yIHVzLCBiYWQgbHVjay4uXCJgXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuXG4gICAgY29uc3Qgc2V0SW5HYW1lU3R5bGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbi1wcm9ncmVzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0R2FtZVN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2luLXByb2dyZXNzJyk7XG5cbiAgICAgICAgcGxheWVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgICBjb21wdXRlckJvYXJkLnN0eWxlLmJvcmRlciA9ICdub25lJztcblxuICAgICAgICBlbmFibGVDZWxscygpO1xuXG5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRWxlbWVudFJlbW92YWwgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbW92ZUdyaWRzQW5kSGVhZGluZywgY3VycmVudFBsYXllck91dGxpbmUsIGVuYWJsZUNlbGxzLCBkaXNhYmxlQ2VsbHMsIHNldFVzZXJJbnN0cnVjdGlvbiwgcmVzZXRHYW1lU3R5bGVzLCBnZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzLGFwcGx5Um90YXRpb24sIHRyYW5zaXRpb25FbGVtZW50UmVtb3ZhbCwgaW5pdGlhbGl6ZU1haW5EaXNwbGF5LCBpbml0aWFsaXplQ2FwdGFpblBpY2tlciwgcmVtb3ZlQ2FwdGFpblBpY2tlciwgc2V0TWFpbkdyaWRUb1BsYXllciwgc2V0TWFpbkdyaWRUb0NvbXB1dGVyLCBzZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0LCByZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0LCBwbGF5ZXJIaXRSZXNwb25zZSwgcGxheWVyVHVyblJlc3BvbnNlLCBjb21wdXRlclR1cm5SZXNwb25zZSwgdXNlclNoaXBQbGFjZW1lbnRSZXNwb25zZSwgZW5lbXlNaXNzUmVzcG9uc2UsIHBsYXllck1pc3NSZXNwb25zZSwgZ2V0Q2FwdGFpbkltYWdlcyB9XG59IiwiLy8gaW1wb3J0IGNhcHRhaW4xIGZyb20gJy4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4xLnBuZyc7XG4vLyBpbXBvcnQgY2FwdGFpbjIgZnJvbSAnLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjIucG5nJztcbi8vIGltcG9ydCBjYXB0YWluMyBmcm9tICcuL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMy5wbmcnO1xuXG5pbXBvcnQgeyBET01IZWxwZXJDcmVhdGlvbiB9IGZyb20gXCIuL0RPTSBIZWxwZXIgTW9kdWxlcy9ET01IZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXcgPSAoKSA9PiB7XG5cbiAgICBsZXQgcGxheWVyQ2VsbHM7XG4gICAgbGV0IGNvbXB1dGVyQ2VsbHM7XG5cbiAgICBjb25zdCBET01IZWxwZXIgPSBET01IZWxwZXJDcmVhdGlvbigpO1xuXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuXG4gICAgY29uc3Qgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl0nKTtcbiAgICAgICAgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBsYXllcj1cImNvbXB1dGVyXCJdJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25DZWxsQ2xpY2sgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlLnRhcmdldC5kYXRhc2V0Lnh5UG9zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEhpdCA9IChjb29yZGluYXRlLCBpc1BsYXllcikgPT4ge1xuXG4gICAgICAgIGlmIChpc1BsYXllcikge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj1cImNvbXB1dGVyXCJdW2RhdGEteHktcG9zPVwiJHtjb29yZGluYXRlfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2stbWFya2VyJyk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLWhpdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGUuam9pbignJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwicGxheWVyXCJdW2RhdGEteHktcG9zPVwiJHtjb29yZGluYXRlfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2stbWFya2VyJyk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2hpcC1oaXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlDYXB0YWluQXZhdGFyID0gKGNhcHRhaW4pID0+IHtcblxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQucmlnaHQnKVxuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBjYXB0YWluTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXB0YWluTWVzc2FnZS5jbGFzc05hbWUgPSAnY2FwdGFpbi1tZXNzYWdlJztcbiAgICAgICAgY29uc3QgY2FwdGFpbkltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgY2FwdGFpbkltYWdlLnNyYyA9IERPTUhlbHBlci5nZXRDYXB0YWluSW1hZ2VzKClbY2FwdGFpbl07XG4gICAgICAgIGNvbnNvbGUubG9nKGNhcHRhaW5JbWFnZSk7XG4gICAgICAgIGNhcHRhaW5JbWFnZS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgY2FwdGFpbkltYWdlLmNsYXNzTmFtZSA9ICdjYXB0YWluLWltYWdlJztcblxuICAgICAgICBjYXB0YWluQXZhdGFyLmFwcGVuZChjYXB0YWluSW1hZ2UsIGNhcHRhaW5NZXNzYWdlKTtcbiAgICAgICAgY2FwdGFpbkF2YXRhci5jbGFzc05hbWUgPSAnY2FwdGFpbi1ib2FyZC1hdmF0YXInO1xuICAgICAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNhcHRhaW5BdmF0YXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVDYXB0YWluQXZhdGFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tYm9hcmQtYXZhdGFyJyk7XG5cbiAgICAgICAgY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QuYWRkKCdtb3ZlLXBvc2l0aW9uJyk7XG4gICAgICAgIC8vIGNhcHRhaW5BdmF0YXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0NhcHRhaW5BdmF0YXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1ib2FyZC1hdmF0YXInKTtcbiAgICAgICAgY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlLXBvc2l0aW9uJyk7XG4gICAgICAgIC8vIGNhcHRhaW5BdmF0YXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlciA9IChkcmFnZ2VkU2hpcCwgY3VycmVudENlbGwsIHRvUmVtb3ZlSG92ZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRyYWdnZWRTaGlwLmRhdGFzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFlib2FyZFBvc2l0aW9uID0gTnVtYmVyKGN1cnJlbnRDZWxsLmRhdGFzZXQueHlQb3NbMF0pO1xuICAgICAgICAgICAgY29uc3QgWGJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1sxXSkgKyBpO1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3hbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl1bZGF0YS14eS1wb3M9XCIke1lib2FyZFBvc2l0aW9ufSR7WGJvYXJkUG9zaXRpb259XCJdYCk7XG4gICAgICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgICAgICAgIHRvUmVtb3ZlSG92ZXIgPyB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJylcbiAgICAgICAgICAgICAgICA6IHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFZlcnRpY2FsU2hpcEhvdmVyID0gKGRyYWdnZWRTaGlwLCBjdXJyZW50Q2VsbCwgdG9SZW1vdmVIb3ZlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZHJhZ2dlZFNoaXAuZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgWWJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1swXSkgKyBpO1xuICAgICAgICAgICAgY29uc3QgWGJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1sxXSk7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJveFtkYXRhLXBsYXllcj1cInBsYXllclwiXVtkYXRhLXh5LXBvcz1cIiR7WWJvYXJkUG9zaXRpb259JHtYYm9hcmRQb3NpdGlvbn1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgICAgICAgdG9SZW1vdmVIb3ZlciA/IHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKVxuICAgICAgICAgICAgICAgIDogdGlsZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBkcmFnQW5kRHJvcFNoaXBzID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWVsZW1lbnQnKTtcbiAgICAgICAgbGV0IGRyYWdnZWRTaGlwO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwRWxlbWVudHMpIHtcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYWdnZWRTaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICAvLyBkcmFnZ2VkU2hpcC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGRyYWdnZWRTaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBwbGF5ZXJDZWxscykge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmVydGljYWxTaGlwSG92ZXIoZHJhZ2dlZFNoaXAsIGNlbGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZFNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gZHJhZ2dlZFNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRyYWdnZWRTaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkcmFnZ2VkU2hpcCwgZS50YXJnZXQuZGF0YXNldC54eVBvcyk7XG4gICAgICAgICAgICAgICAgcGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy93ZSB3YW50IHRvIHVwZGF0ZSBvbmUgYm9hcmQgYXQgYSB0aW1lLCBqdXN0IHBhc3MgaW4gdGhlIGJvYXJkIHdlIHdhbnQgdG8gdXBkYXRlIGF0IHRoYXQgcG9pbnQuIE5vIHBvaW50IGluIHVwZGF0aW5nIGJvdGguIFdlIGNhbiBoYXZlIGEgYm9vbCB2YWx1ZSB0aGF0IGNoZWNrcyBpZiBpdHMgYSBjb21wdXRlciBib2FyZCBvciBub3QuXG4gICAgY29uc3QgdXBkYXRlQm9hcmQgPSAoYm9hcmQsIGlzQ29tcHV0ZXJCb2FyZCkgPT4ge1xuXG4gICAgICAgIHNldFBsYXllckFuZENvbXB1dGVyQ2VsbHMoKTtcbiAgICAgICAgbGV0IGJvYXJkQ2VsbHM7XG5cbiAgICAgICAgaWYgKGlzQ29tcHV0ZXJCb2FyZCkge1xuICAgICAgICAgICAgYm9hcmRDZWxscyA9IGNvbXB1dGVyQ2VsbHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZENlbGxzID0gcGxheWVyQ2VsbHM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgYm9hcmRDZWxscykge1xuICAgICAgICAgICAgY29uc3QgeHkgPSBjZWxsLmRhdGFzZXQueHlQb3M7XG4gICAgICAgICAgICBpZiAoYm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmNsYXNzTmFtZSA9ICdhdHRhY2stbWFya2VyJztcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4eVswXV1beHlbMV1dID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICghaXNDb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc3QgdXBkYXRlQm9hcmQgPSAoY29tcHV0ZXJCb2FyZCwgcGxheWVyQm9hcmQpID0+IHtcblxuICAgIC8vICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY29tcHV0ZXJDZWxscykge1xuICAgIC8vICAgICAgICAgY29uc3QgeHkgPSBjZWxsLmRhdGFzZXQueHlQb3M7XG4gICAgLy8gICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZFt4eVswXV1beHlbMV1dID09PSAneCcpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoIWNlbGwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICAgICAgICAgICAgICBtYXJrZXIuY2xhc3NOYW1lID0gJ2F0dGFjay1tYXJrZXInO1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBpZiAodHlwZW9mIGNvbXB1dGVyQm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSB7XG4gICAgLy8gICAgICAgICBjb25zdCB4eSA9IGNlbGwuZGF0YXNldC54eVBvcztcbiAgICAvLyAgICAgICAgIGlmIChwbGF5ZXJCb2FyZFt4eVswXV1beHlbMV1dID09PSAneCcpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoIWNlbGwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICAgICAgICAgICAgICBtYXJrZXIuY2xhc3NOYW1lID0gJ2F0dGFjay1tYXJrZXInO1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgLy8gICAgICAgICAgICAgfSAgXG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgcGxheWVyQm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCBzaGlwID0gcGxheWVyQm9hcmRbeHlbMF1dW3h5WzFdXTtcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCBzaGlwU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBpZiAoc2hpcC5nZXRTaGlwRGlyZWN0aW9uKCkgPT09ICdIb3Jpem9udGFsJykge1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICBzaGlwU3F1YXJlLmNsYXNzTmFtZSA9ICdzaGlwLXNxdWFyZS1ob3Jpem9udGFsJztcbiAgICAvLyAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHNoaXAuZ2V0U2hpcERpcmVjdGlvbigpID09PSAnVmVydGljYWwnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIHNoaXBTcXVhcmUuY2xhc3NOYW1lID0gJ3NoaXAtc3F1YXJlLXZlcnRpY2FsJztcbiAgICAvLyAgICAgICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICAgICAgLy8gY2VsbC5hcHBlbmRDaGlsZChzaGlwU3F1YXJlKTtcbiAgICAvLyAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3QgcGxheWVyVmlld1VwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgRE9NSGVscGVyLmRpc2FibGVDZWxscygpO1xuICAgICAgICBET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUodHJ1ZSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyVmlld1VwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgRE9NSGVscGVyLmVuYWJsZUNlbGxzKCk7XG4gICAgICAgIERPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWxlcnRXaW5uZXIgPSAod2lubmVyKSA9PiB7XG4gICAgICAgIGFsZXJ0KGBQbGF5ZXIgJHt3aW5uZXJ9IGhhcyB3b24gdGhlIG1hdGNoIWApO1xuICAgIH1cblxuICAgIHJldHVybiB7IERPTUhlbHBlciwgc3RhcnRCdXR0b24sIG9uQ2VsbENsaWNrLCB1cGRhdGVCb2FyZCwgYWxlcnRXaW5uZXIsIHBsYXllclZpZXdVcGRhdGUsIGNvbXB1dGVyVmlld1VwZGF0ZSwgZHJhZ0FuZERyb3BTaGlwcywgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscywgc2V0SGl0LCBkaXNwbGF5Q2FwdGFpbkF2YXRhciwgaGlkZUNhcHRhaW5BdmF0YXIsIHNob3dDYXB0YWluQXZhdGFyIH1cbn1cbiIsImV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcblxuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBwbGFjZUNvbXB1dGVyU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBvc2l0aW9ucyA9IGdldFZhbGlkU2hpcFBsYWNlbWVudHMoKTtcblxuICAgICAgICBjb25zdCByYW5kb21QbGFjZW1lbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFNoaXBQb3NpdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB2YWxpZFNoaXBQb3NpdGlvbnNbcmFuZG9tUGxhY2VtZW50XTtcblxuICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgICAgIGlmIChjYW5QbGFjZVNoaXAoc2hpcCwgcG9zaXRpb24sIHJhbmRvbU9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgcGxhY2VTaGlwKHNoaXAsIHBvc2l0aW9uLCByYW5kb21PcmllbnRhdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcChzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW5QbGFjZVNoaXAgPSAoc2hpcCwgcG9zaXRpb24sIGlzVmVydGljYWwpID0+IHtcblxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgaWYgKChwb3NpdGlvblswXSAtIDEpICsgc2hpcC5sZW5ndGggPiA5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGRvZXMgbm90IGZpdCBvbiB0aGUgYm9hcmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtwb3NpdGlvblswXSArIGldW3Bvc2l0aW9uWzFdXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGV4aXN0cyBpbiB0aGlzIHBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHBvc2l0aW9uWzFdIC0gMSkgKyBzaGlwLmxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBkb2VzIG5vdCBmaXQgb24gdGhlIGJvYXJkJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV0gKyBpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZXhpc3RzIGluIHRoaXMgcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHMubGVuZ3RoID49IDQ7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsbEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoMTApO1xuICAgICAgICAgICAgYXJyLmZpbGwoJycpO1xuICAgICAgICAgICAgYm9hcmQucHVzaChhcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICAgIGNvbnN0IGdldFZhbGlkQXR0YWNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gIT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChbaSxqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChbaSxqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkaW5hdGUsIGlzVmVydGljYWwpID0+IHtcbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIHNoaXAuc2V0U2hpcERpcmVjdGlvbignVmVydGljYWwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXSArIGldW2Nvb3JkaW5hdGVbMV1dID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuc2V0U2hpcERpcmVjdGlvbignSG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICB9XG5cbiAgICBsZXQgbGFzdEhpdCA9IG51bGw7XG5cbiAgICBjb25zdCBnZXRMYXN0SGl0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGFzdEhpdDtcbiAgICB9XG5cbiAgICBjb25zdCBpc1ZhbGlkQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVbMF0gPD0gOSAmJiBjb29yZGluYXRlWzFdIDw9IDkpIHtcblxuICAgICAgICAgICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogT3V0IG9mIGJvdW5kcyBhdHRhY2snKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZEl0ZW0gPSBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXTtcblxuICAgICAgICAgICAgaWYgKGJvYXJkSXRlbSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBtaXNzZWRTaG90c1tjb29yZGluYXRlWzBdXS5wdXNoKGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgICAgIGxhc3RIaXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkSXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBib2FyZEl0ZW0uaGl0KCk7XG4gICAgICAgICAgICAgICAgbGFzdEhpdCA9ICdzaGlwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPSAneCc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtaXNzZWRTaG90cyA9IFtcbiAgICAgICAgW10sW10sW10sW10sW10sW10sW10sW10sW10sW11cbiAgICBdXG5cbiAgICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtaXNzZWRTaG90cztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGZpbGxCb2FyZChib2FyZCk7XG4gICAgXG4gICAgcmV0dXJuIHsgZ2V0Qm9hcmQsIHBsYWNlU2hpcCwgcmVjaWV2ZUF0dGFjaywgZ2V0TWlzc2VzLCBnZXRTaGlwcywgYWxsU2hpcHNTdW5rLCBnZXRWYWxpZEF0dGFja3MsIGdldFZhbGlkU2hpcFBsYWNlbWVudHMsIGdldExhc3RIaXQsIGFsbFNoaXBzUGxhY2VkLCBwbGFjZUNvbXB1dGVyU2hpcCwgY2FuUGxhY2VTaGlwLCBpc1ZhbGlkQXR0YWNrIH1cbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9nYW1lU3RhdGUnO1xuaW1wb3J0IHsgZ2FtZUluaXRIZWxwZXIgfSBmcm9tICcuL2dhbWVTdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBnYW1lQ29udHJvbGxlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IHZpZXcgPSBWaWV3KCk7XG4gICAgbGV0IGdhbWUgPSBHYW1lU3RhdGUoKTtcbiAgICBjb25zdCBnYW1lSGVscGVyID0gZ2FtZUluaXRIZWxwZXIoKTtcblxuICAgIGxldCBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQ2hvaWNlID0gYXdhaXQgaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIoKTtcbiAgICAgICAgYXdhaXQgdmlldy5ET01IZWxwZXIuc2V0TmV3U2hpcENvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICAvLyBhd2FpdCBkZWxheSg3MDApO1xuICAgICAgICBcbiAgICAgICAgdmlldy5ET01IZWxwZXIuaW5pdGlhbGl6ZU1haW5EaXNwbGF5KCk7XG5cbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb1BsYXllcigpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5nZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzKChzaGlwRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuYXBwbHlSb3RhdGlvbihzaGlwRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmRpc3BsYXlDYXB0YWluQXZhdGFyKGNhcHRhaW5DaG9pY2UpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIudXNlclNoaXBQbGFjZW1lbnRSZXNwb25zZSgpKTtcbiAgICAgICAgdmlldy5oaWRlQ2FwdGFpbkF2YXRhcigpO1xuICAgICAgICB2aWV3LnNldFBsYXllckFuZENvbXB1dGVyQ2VsbHMoKTtcblxuICAgICAgICBnYW1lLnBsYWNlQWxsQ29tcHV0ZXJTaGlwcygpO1xuXG4gICAgICAgIGF3YWl0IHNoaXBQbGFjZW1lbnRIYW5kbGVyKCk7XG4gICAgICAgIHZpZXcub25DZWxsQ2xpY2socGxheVJvdW5kKTtcbiAgICAgICAgLy8gdmlldy5kcmFnQW5kRHJvcFNoaXBzKChzaGlwLCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIC8vICAgICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgLy8gICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG5cbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvQ29tcHV0ZXIoKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSlcblxuICAgICAgICAvLyAgICAgICAgIHZpZXcub25DZWxsQ2xpY2socGxheVJvdW5kKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICBcblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHZpZXcuZHJhZ0FuZERyb3BTaGlwcygoc2hpcCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCBjb29yZGluYXRlKTtcblxuICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIucGxheWVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpemVDYXB0YWluUGlja2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgdmlldy5ET01IZWxwZXIuaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIoYXN5bmMgY2FwdGFpbkNob2ljZSA9PiB7XG4gICAgICAgICAgICBnYW1lLnNldFBsYXllckNhcHRhaW4oY2FwdGFpbkNob2ljZSk7XG4gICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVDYXB0YWluUGlja2VyKCk7XG4gICAgICAgICAgICByZXNvbHZlKGNhcHRhaW5DaG9pY2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgLy8gY29uc3QgZ2FtZUxvb3AgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgIGlmICghZ2FtZVN0YXJ0ZWQpIHtcbiAgICAvLyAgICAgICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIoIGFzeW5jIChjYXB0YWluQ2hvaWNlKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGdhbWUuc2V0UGxheWVyQ2FwdGFpbihjYXB0YWluQ2hvaWNlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIucmVtb3ZlQ2FwdGFpblBpY2tlcigpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE5ld1NoaXBDb250YWluZXJIZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoNzAwKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmluaXRpYWxpemVNYWluRGlzcGxheSgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9QbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuZ2VuZXJhdGVTaGlwUm90YXRpb25Db250cm9scygoc2hpcEVsZW1lbnQpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmFwcGx5Um90YXRpb24oc2hpcEVsZW1lbnQpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LmRpc3BsYXlDYXB0YWluQXZhdGFyKGNhcHRhaW5DaG9pY2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIudXNlclNoaXBQbGFjZW1lbnRSZXNwb25zZSgpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5oaWRlQ2FwdGFpbkF2YXRhcigpO1xuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LnNldFBsYXllckFuZENvbXB1dGVyQ2VsbHMoKTtcbiAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGdhbWUucGxhY2VBbGxDb21wdXRlclNoaXBzKCk7XG4gICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LmRyYWdBbmREcm9wU2hpcHMoKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCBjb29yZGluYXRlKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQoKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCB0cnVlKVxuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5vbkNlbGxDbGljayhwbGF5Um91bmQpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGNvbnN0IHBsYXlSb3VuZCA9IGFzeW5jIChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmICghY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBBdHRhY2sgYWxyZWFkeSBwbGFjZWRgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZ2FtZS5jb21wdXRlckJvYXJkLmlzVmFsaWRBdHRhY2soY29vcmRpbmF0ZSkpIHJldHVybjtcblxuICAgICAgICB2aWV3LkRPTUhlbHBlci5kaXNhYmxlQ2VsbHMoKTsgIFxuICAgICAgICBleGVjdXRlUGxheWVyVHVybihjb29yZGluYXRlKTtcblxuICAgICAgICBjb25zdCBpc2FXaW5uZXIgPSBnYW1lLmNoZWNrRm9yV2lubmVyKCk7XG4gICAgICAgIGlmIChpc2FXaW5uZXIpIHtcbiAgICAgICAgICAgIHZpZXcuYWxlcnRXaW5uZXIoaXNhV2lubmVyKTtcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vZGVsYXkgZGlzcGxheWluZyBwbGF5ZXJzIGF0dGFjayBieSAzIHNlY29uZHMsIGZvciBzb3VuZCBlZmZlY3RzIHB1cnBvc2VzIGxhdGVyXG5cbiAgICAgICAgLy8gYXdhaXQgZGVsYXkoMzAwMCk7XG5cbiAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSk7ICBcblxuICAgICAgICBpZiAoZ2FtZS5jb21wdXRlckJvYXJkLmdldExhc3RIaXQoKSA9PT0gJ3NoaXAnKSB7XG5cbiAgICAgICAgICAgIC8vaWYgdGhlIHVzZXIgY2xpY2tzIGFub3RoZXIgYXR0YWNrIGRpcmVjdGx5IGFmdGVyIHRoZSBmaXJzdCBvbmUsIHdlIHdhbnQgdG8gd2lwZSB0aGUgY3VycmVudCBleGVjdXRpb24gb2YgdGhlIHNldFVzZXJJbnN0cnVjdGlvbiBhbmQgaW5pYXRlIGEgbmV3IGluc3RydWN0aW9uLlxuICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllckhpdFJlc3BvbnNlKCkpO1xuICAgICAgICAgICAgdmlldy5zZXRIaXQoY29vcmRpbmF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3LmNvbXB1dGVyVmlld1VwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5wbGF5ZXJNaXNzUmVzcG9uc2UoKSk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDMwMDApO1xuICAgICAgICB2aWV3LnBsYXllclZpZXdVcGRhdGUoKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLmNvbXB1dGVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvUGxheWVyKCk7XG4gICAgICAgIHZpZXcuaGlkZUNhcHRhaW5BdmF0YXIoKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoMzAwMCk7XG4gICAgICAgIGV4ZWN1dGVDb21wdXRlclR1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGVjdXRlUGxheWVyVHVybiA9IChjb29yZGluYXRlKSA9PiB7XG5cbiAgICAgICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXIuZ2V0TmFtZSgpO1xuICAgICAgICBnYW1lLnBsYXllci5hdHRhY2soW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dKTtcbiAgICAgICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5jb21wdXRlci5nZXROYW1lKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGV4ZWN1dGVDb21wdXRlclR1cm4gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBnYW1lLmNvbXB1dGVyLmF0dGFjaygpO1xuICAgICAgICBjb25zdCB3aW5uZXIgPSBnYW1lLmNoZWNrRm9yV2lubmVyKCk7XG4gICAgICAgIGlmICh3aW5uZXIpIHtcbiAgICAgICAgICAgIHZpZXcuYWxlcnRXaW5uZXIod2lubmVyKTtcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vdG8gZGVsYXkgY29tcHV0ZXJzIGF0dGFja3MsIGZvciBhZGRpbmcgaW4gc291bmQgZWZmZWN0cyBsYXRlciBvblxuXG4gICAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuXG4gICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmdldExhc3RIaXQoKSA9PT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICB2aWV3LnNldEhpdChwb3NpdGlvbixmYWxzZSk7XG4gICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIuY29tcHV0ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgICAgICBhd2FpdCBkZWxheSgzMDAwKTtcbiAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKHRydWUpO1xuICAgICAgICAgICAgZXhlY3V0ZUNvbXB1dGVyVHVybigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5lbmVteU1pc3NSZXNwb25zZSgpKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoMzAwMCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuZW5hYmxlQ2VsbHMoKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBleGVjdXRlQ29tcHV0ZXJUdXJuID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgLy8gICAgIGNvbnN0IHBvc2l0aW9uID0gZ2FtZS5jb21wdXRlci5hdHRhY2soKTtcbiAgICAvLyAgICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0Zvcldpbm5lcigpO1xuICAgIC8vICAgICBpZiAod2lubmVyKSB7XG4gICAgLy8gICAgICAgICB2aWV3LmFsZXJ0V2lubmVyKHdpbm5lcik7XG4gICAgLy8gICAgICAgICByZXNldEdhbWUoKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAvL3RvIGRlbGF5IGNvbXB1dGVycyBhdHRhY2tzLCBmb3IgYWRkaW5nIGluIHNvdW5kIGVmZmVjdHMgbGF0ZXIgb25cblxuICAgIC8vICAgICAvLyBhd2FpdCBkZWxheSgzMDAwKTtcblxuXG4gICAgLy8gICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgLy8gICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmdldExhc3RIaXQoKSA9PT0gJ3NoaXAnKSB7XG4gICAgLy8gICAgICAgICB2aWV3LnNldEhpdChwb3NpdGlvbixmYWxzZSk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIuY29tcHV0ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgLy8gICAgICAgICBhd2FpdCBkZWxheSgzMDAwKTtcbiAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKHRydWUpO1xuICAgIC8vICAgICAgICAgZXhlY3V0ZUNvbXB1dGVyVHVybigpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLmVuZW15TWlzc1Jlc3BvbnNlKCkpO1xuICAgIC8vICAgICAgICAgYXdhaXQgZGVsYXkoMzAwMCk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5lbmFibGVDZWxscygpO1xuICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgIC8vICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3QgY2hlY2tTaGlwUGxhY2VtZW50ID0gKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlDb29yZGluYXRlID0gWytjb29yZGluYXRlWzBdLCArY29vcmRpbmF0ZVsxXV07XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSArc2hpcC5kYXRhc2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IGdhbWVIZWxwZXIubWFrZVNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmNhblBsYWNlU2hpcChuZXdTaGlwLCBhcnJheUNvb3JkaW5hdGUsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIudHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsKHNoaXAucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBDYW5ub3QgcGxhY2Ugc2hpcCB0aGVyZScpO1xuICAgICAgICAgICAgICAgIC8vaGFuZGxlIGEgbWlzc3BsYWNlZCBzaGlwLCB1c2VyIHRvb2x0aXAgb3IgZXJyb3IgcG9wIHVwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5jYW5QbGFjZVNoaXAobmV3U2hpcCwgYXJyYXlDb29yZGluYXRlLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci50cmFuc2l0aW9uRWxlbWVudFJlbW92YWwoc2hpcC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IENhbm5vdCBwbGFjZSBzaGlwIHRoZXJlJyk7XG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgYSBtaXNzcGxhY2VkIHNoaXAsIHVzZXIgdG9vbHRpcCBvciBlcnJvciBwb3AgdXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBnYW1lID0gR2FtZVN0YXRlKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZUdyaWRzQW5kSGVhZGluZygpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5yZXNldEdhbWVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICB2aWV3LnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZUxvb3ApO1xufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwTW9kdWxlXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZUluaXRIZWxwZXIgPSAoKSA9PiB7XG5cbiAgICAvLyBjb25zdCBwbGFjZVRlc3RTaGlwcyA9IChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDUpLCBbNCwxXSk7XG4gICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFs3LDRdKTtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgzKSwgWzIsMl0pO1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDIpLCBbOCw3XSk7XG5cbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNSksIFsyLDNdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFsxLDFdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMyksIFs5LDVdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMiksIFszLDddKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZVNoaXAgfVxufVxuXG5leHBvcnQgY29uc3QgR2FtZVN0YXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICBsZXQgcGxheWVyQ2FwdGFpbiA9IG51bGw7XG5cbiAgICBjb25zdCBwbGF5ZXJIYXNDYXB0YWluID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyQ2FwdGFpbiA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJDYXB0YWluID0gKGNhcHRhaW4pID0+IHtcbiAgICAgICAgcGxheWVyQ2FwdGFpbiA9IGNhcHRhaW47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGxheWVyQ2FwdGFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllckNhcHRhaW47XG4gICAgfVxuICAgIFxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUnlhbicsIGNvbXB1dGVyQm9hcmQsIGZhbHNlKTtcbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgcGxheWVyQm9hcmQsIHRydWUpXG5cbiAgICBjb25zdCBwbGFjZUFsbENvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg1KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg0KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgzKSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyLmdldE5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5nZXROYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgcGxheWVyLCBjb21wdXRlciwgY2hlY2tGb3JXaW5uZXIsIHBsYWNlQWxsQ29tcHV0ZXJTaGlwcywgY3VycmVudFBsYXllciwgcGxheWVySGFzQ2FwdGFpbiwgc2V0UGxheWVyQ2FwdGFpbiwgZ2V0UGxheWVyQ2FwdGFpbiB9XG59IiwiXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIG9wcG9uZW50Qm9hcmQsIGlzQ1BVID0gZmFsc2UpID0+IHtcbi8vZmFjdG9yeSBmb3Igb3VyIGRpZmZlcmVudCBwbGF5ZXJzIChpbiB0aGUgY2FzZSBvZiB0aGlzIGdhbWUgaXQgd291bGQgYmUgdGhlIHBsYXllciBhbmQgdGhlIGNvbXB1dGVyKSB3b3VsZCB0YWtlIGEgbmFtZSwgYW5kIHRoZSBvcHBvc2luZyBwbGF5ZXJzIGJvYXJkLiBTbyBpZiB3ZSBtYWtlIGEgcGxheWVyIGl0IHdvdWxkIHRha2UgaW4gdGhlIGNvbXB1dGVycyBib2FyZC5cblxuICAgIGNvbnN0IGNhY3VsYXRpb25SYW5kb21Qb3NpdGlvbiA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB2YWxpZFBvc2l0aW9ucyA9IG9wcG9uZW50Qm9hcmQuZ2V0VmFsaWRBdHRhY2tzKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmFsaWRQb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRQb3NpdGlvbnMubGVuZ3RoKV07XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChpc0NQVSkge1xuXG4gICAgICAgICAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNhY3VsYXRpb25SYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICAgICAgb3Bwb25lbnRCb2FyZC5yZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHBvbmVudEJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZSlcblxuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF0dGFjaywgZ2V0TmFtZSB9XG59IiwiLy9zaGlwIGZhY3Rvcnkgc2hvdWxkIGluY2x1ZGUgYSB0eXBlLCB3aGljaCB3ZSBjYW4gZGVmaW5lIGxhdGVyIGZyb20gdGhlIHNoaXAgdGhhdCB0aGUgdXNlciBjbGlja3Mgb24uIFxuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGNvbnN0IHNoaXBMb29rdXAgPSB7XG4gICAgICAgIDU6ICdDYXJyaWVyJyxcbiAgICAgICAgNDogJ0JhdHRsZXNoaXAnLFxuICAgICAgICAzOiAnQ3J1aXNlcicsXG4gICAgICAgIDI6ICdEZXN0cm95ZXInXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHNoaXBMb29rdXBbbGVuZ3RoXTtcbiAgICBcbiAgICBsZXQgc2hpcERpcmVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzZXRTaGlwRGlyZWN0aW9uID0gKGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBzaGlwRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBEaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwRGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGxldCBkYW1hZ2VSZWNpZXZlZCA9IDA7XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGRhbWFnZVJlY2lldmVkKys7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGRhbWFnZVJlY2lldmVkID49IGxlbmd0aDtcbiAgICBcblxuICAgIGNvbnN0IGdldERhbWFnZVJlY2lldmVkID0gKCkgPT4gZGFtYWdlUmVjaWV2ZWQ7XG5cbiAgICByZXR1cm4geyB0eXBlLCBsZW5ndGgsIGdldERhbWFnZVJlY2lldmVkLCBoaXQsIGlzU3Vuaywgc2V0U2hpcERpcmVjdGlvbiwgZ2V0U2hpcERpcmVjdGlvbiB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcblxuZ2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=