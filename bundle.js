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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    /* height: 100vh; */\n    background-color: var(--main-background-clr);\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 150ms;\n    font-weight: bold;\n}\n\n.start-game:hover {\n    transform: scale(1.07);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n}\n\n/* .captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 40rem;\n    height: 12rem;\n    transition: 700ms ease; \n} */\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -43.5%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 90%;\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent var(--secondary-clr) transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    border: solid 3px var(--secondary-clr);\n    border-bottom: solid 10px var(--secondary-clr);\n    border-radius: 4px;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 200ms ease;\n    max-width: 85%;\n    border-radius: 4px;\n    border: solid 4px transparent;\n}\n\n.captain-wheel-picker-image:hover {\n    border: solid 4px var(--secondary-clr);\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    /* transform: scale(1.04); */\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n.box.placed::after {\n    content: '';\n    width: 0.5rem;\n    height: 0.5rem;\n    background: black;\n    border-radius: 50%;\n}\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 25px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.detail {\n    background: black;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n}\n\n.ship-element {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 94%;\n}\n\n.hidden {\n    opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    /* height: 100vh; */\n    background-color: var(--main-background-clr);\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 150ms;\n    font-weight: bold;\n}\n\n.start-game:hover {\n    transform: scale(1.07);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n}\n\n/* .captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 40rem;\n    height: 12rem;\n    transition: 700ms ease; \n} */\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -43.5%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 90%;\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent var(--secondary-clr) transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    border: solid 3px var(--secondary-clr);\n    border-bottom: solid 10px var(--secondary-clr);\n    border-radius: 4px;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 200ms ease;\n    max-width: 85%;\n    border-radius: 4px;\n    border: solid 4px transparent;\n}\n\n.captain-wheel-picker-image:hover {\n    border: solid 4px var(--secondary-clr);\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    /* transform: scale(1.04); */\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n.box.placed::after {\n    content: '';\n    width: 0.5rem;\n    height: 0.5rem;\n    background: black;\n    border-radius: 50%;\n}\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 25px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.detail {\n    background: black;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n}\n\n.ship-element {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 94%;\n}\n\n.hidden {\n    opacity: 0;\n}"],"sourceRoot":""}]);
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

/***/ "./src/Audio Modules/audioCreation.js":
/*!********************************************!*\
  !*** ./src/Audio Modules/audioCreation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioSetup": () => (/* binding */ AudioSetup)
/* harmony export */ });
/* harmony import */ var _assets_sounds_shot_miss_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sounds/shot-miss.mp3 */ "./src/assets/sounds/shot-miss.mp3");
/* harmony import */ var _assets_sounds_shot_miss2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sounds/shot-miss2.mp3 */ "./src/assets/sounds/shot-miss2.mp3");
/* harmony import */ var _assets_sounds_shot_hit_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sounds/shot-hit.mp3 */ "./src/assets/sounds/shot-hit.mp3");
/* harmony import */ var _assets_sounds_shot_hit2_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sounds/shot-hit2.mp3 */ "./src/assets/sounds/shot-hit2.mp3");






const AudioSetup = () => {

    let shipHits = [];
    let shipMisses = [];

    const generateAudioFiles = () => {
        shipMisses.push(new Audio(_assets_sounds_shot_miss_mp3__WEBPACK_IMPORTED_MODULE_0__));
        shipMisses.push(new Audio(_assets_sounds_shot_miss2_mp3__WEBPACK_IMPORTED_MODULE_1__));

        shipHits.push(new Audio(_assets_sounds_shot_hit_mp3__WEBPACK_IMPORTED_MODULE_2__));
        shipHits.push(new Audio(_assets_sounds_shot_hit2_mp3__WEBPACK_IMPORTED_MODULE_3__));

    }

    const playRandomHitSound = () => {
        if (shipHits.length === 0) {
            console.log('No hit sounds available');
            return;
        }
        shipHits[Math.floor(Math.random() * shipHits.length)].play();
    }

    const playRandomMissSound = () => {
        if (shipHits.length === 0) {
            console.log('No miss sounds available');
            return;
        }
        shipMisses[Math.floor(Math.random() * shipMisses.length)].play();
    }

    return { generateAudioFiles, playRandomHitSound, playRandomMissSound }
}

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
/* harmony import */ var _Audio_Modules_audioCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Audio Modules/audioCreation */ "./src/Audio Modules/audioCreation.js");






const gameController = () => {

    const view = (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.View)();
    let game = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState)();
    const audioSetup = (0,_Audio_Modules_audioCreation__WEBPACK_IMPORTED_MODULE_3__.AudioSetup)();
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
        audioSetup.generateAudioFiles();

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

        // view.updateBoard(game.computerBoard.getBoard(), true);  

        if (game.computerBoard.getLastHit() === 'ship') {
            audioSetup.playRandomHitSound();
            await delay(2500);
            view.updateBoard(game.computerBoard.getBoard(), true);  
            //if the user clicks another attack directly after the first one, we want to wipe the current execution of the setUserInstruction and iniate a new instruction.
            view.DOMHelper.setUserInstruction(view.DOMHelper.playerHitResponse());
            view.setHit(coordinate, true);
            view.computerViewUpdate();
            return;
        }
        audioSetup.playRandomMissSound()
        await delay(2500);
        view.updateBoard(game.computerBoard.getBoard(), true);  
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

        // await delay(3000);

        // view.updateBoard(game.playerBoard.getBoard(), false);
        if (game.playerBoard.getLastHit() === 'ship') {
            audioSetup.playRandomHitSound();
            await delay(2500);
            view.updateBoard(game.playerBoard.getBoard(), false);
            view.setHit(position,false);
            view.DOMHelper.setUserInstruction(view.DOMHelper.computerTurnResponse());
            await delay(3000);
            view.DOMHelper.currentPlayerOutline(true);
            executeComputerTurn();
            return;
        }
        audioSetup.playRandomMissSound();
        await delay(2500);
        view.updateBoard(game.playerBoard.getBoard(), false);
        view.DOMHelper.setUserInstruction(view.DOMHelper.enemyMissResponse());
        await delay(3000)
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

/***/ }),

/***/ "./src/assets/sounds/shot-hit.mp3":
/*!****************************************!*\
  !*** ./src/assets/sounds/shot-hit.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/shot-hit.mp3";

/***/ }),

/***/ "./src/assets/sounds/shot-hit2.mp3":
/*!*****************************************!*\
  !*** ./src/assets/sounds/shot-hit2.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/shot-hit2.mp3";

/***/ }),

/***/ "./src/assets/sounds/shot-miss.mp3":
/*!*****************************************!*\
  !*** ./src/assets/sounds/shot-miss.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/shot-miss.mp3";

/***/ }),

/***/ "./src/assets/sounds/shot-miss2.mp3":
/*!******************************************!*\
  !*** ./src/assets/sounds/shot-miss2.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/shot-miss2.mp3";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxrRUFBa0UsZ0JBQWdCLDZCQUE2QixnREFBZ0QsR0FBRyxXQUFXLDRDQUE0Qyx5Q0FBeUMsaUNBQWlDLHVDQUF1QyxrQ0FBa0MsK0JBQStCLHNCQUFzQixHQUFHLFVBQVUsd0JBQXdCLHFEQUFxRCx1QkFBdUIsb0JBQW9CLDBCQUEwQiw2QkFBNkIsZ0JBQWdCLEdBQUcsUUFBUSxrQ0FBa0MsR0FBRyxpQkFBaUIsdUNBQXVDLG9CQUFvQixtQkFBbUIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLHdCQUF3QixHQUFHLHVCQUF1Qiw2QkFBNkIsR0FBRyxrQkFBa0IsMEJBQTBCLDZCQUE2QixtQkFBbUIsR0FBRyxpQkFBaUIsb0JBQW9CLDhCQUE4QixnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixrQkFBa0IseUNBQXlDLGtDQUFrQywwQkFBMEIscUJBQXFCLG1CQUFtQixvQkFBb0IsOEJBQThCLElBQUksMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixvQkFBb0Isa0JBQWtCLHlDQUF5QyxrQ0FBa0MsMEJBQTBCLHFCQUFxQixrQkFBa0IsNkJBQTZCLEtBQUssNkJBQTZCLG9CQUFvQix3QkFBd0Isd0JBQXdCLHNCQUFzQixtQkFBbUIsZ0JBQWdCLElBQUksd0JBQXdCLG9CQUFvQix3QkFBd0Isd0JBQXdCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDhCQUE4QixHQUFHLDJCQUEyQix5QkFBeUIsbUJBQW1CLGdCQUFnQixpQkFBaUIsa0JBQWtCLDhCQUE4QiwyQ0FBMkMsb0NBQW9DLG1CQUFtQixzQkFBc0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIsR0FBRyx5QkFBeUIseUJBQXlCLHdCQUF3QixhQUFhLGNBQWMsSUFBSSx3QkFBd0IseUJBQXlCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHFCQUFxQixvQkFBb0IscUJBQXFCLDZDQUE2QyxtQkFBbUIseUJBQXlCLG1CQUFtQixLQUFLLDhCQUE4QixrQkFBa0IseUJBQXlCLGlCQUFpQixnQkFBZ0IsK0NBQStDLHlCQUF5QiwwQkFBMEIsNkVBQTZFLEdBQUcsd0JBQXdCLHNDQUFzQyxxQ0FBcUMsb0JBQW9CLGtCQUFrQiw2Q0FBNkMscURBQXFELHlCQUF5QixxQkFBcUIsT0FBTyxtQ0FBbUMsb0JBQW9CLDZCQUE2QixnQkFBZ0IsNENBQTRDLG9DQUFvQywwQkFBMEIsR0FBRyxvQ0FBb0Msd0NBQXdDLGtDQUFrQyxrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsSUFBSSxzQ0FBc0MsbUJBQW1CLElBQUksbUNBQW1DLDhCQUE4QiwrQkFBK0IscUJBQXFCLHlCQUF5QixvQ0FBb0MsR0FBRyx1Q0FBdUMsNkNBQTZDLEdBQUcsbUJBQW1CLHlCQUF5QixHQUFHLGFBQWEsMEJBQTBCLEdBQUcsdUNBQXVDLGlDQUFpQyxLQUFLLDhCQUE4QixpQkFBaUIsZ0JBQWdCLEdBQUcsK0JBQStCLG9CQUFvQiwwQkFBMEIsNkNBQTZDLHlCQUF5QixxQkFBcUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsbUJBQW1CLDZCQUE2QixRQUFRLGdDQUFnQyxvQkFBb0IsNkNBQTZDLHlCQUF5QiwwQkFBMEIsaUJBQWlCLHNCQUFzQiw2Q0FBNkMseUJBQXlCLG1CQUFtQix3QkFBd0IsNkJBQTZCLEdBQUcsOENBQThDLGlCQUFpQix1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLHNCQUFzQixpQkFBaUIsR0FBRyxpQkFBaUIsaUJBQWlCLElBQUksaURBQWlELGlCQUFpQix5Q0FBeUMsR0FBRywwREFBMEQsb0JBQW9CLEdBQUcsOENBQThDLDBCQUEwQixHQUFHLGlEQUFpRCwyQkFBMkIsMEJBQTBCLElBQUksWUFBWSxtQkFBbUIsb0JBQW9CLDZCQUE2Qix3QkFBd0IsR0FBRyx1QkFBdUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsNENBQTRDLGlEQUFpRCxtQkFBbUIsMEJBQTBCLDBCQUEwQixtQkFBbUIsa0JBQWtCLHlCQUF5Qix3QkFBd0IsNkJBQTZCLEdBQUcsdUJBQXVCLDJCQUEyQixJQUFJLGlCQUFpQiwwQkFBMEIsMkJBQTJCLEdBQUcsY0FBYyw2Q0FBNkMsR0FBRyxpQkFBaUIsNkNBQTZDLHlCQUF5QiwrQ0FBK0MsS0FBSyx3QkFBd0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLDZCQUE2QixrQkFBa0Isa0JBQWtCLHNCQUFzQixHQUFHLDJCQUEyQixpQkFBaUIsbUJBQW1CLHNCQUFzQixHQUFHLGNBQWMsbURBQW1ELGtDQUFrQyxtQkFBbUIsR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsaUJBQWlCLGtCQUFrQiw2Q0FBNkMseUJBQXlCLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0IsOEJBQThCLHlCQUF5QixHQUFHLDJDQUEyQyx5QkFBeUIsd0JBQXdCLG1CQUFtQixHQUFHLGlIQUFpSCxrQkFBa0IsdUJBQXVCLGVBQWUsaUJBQWlCLFdBQVcsY0FBYyw4Q0FBOEMsR0FBRyx3REFBd0QsbURBQW1ELEdBQUcsNERBQTRELDZDQUE2QyxHQUFHLHlEQUF5RCwrQ0FBK0MsR0FBRywyQkFBMkIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix5QkFBeUIsYUFBYSxnQ0FBZ0MsR0FBRywwQkFBMEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0NBQWtDLDhCQUE4QixrQkFBa0Isa0JBQWtCLHdCQUF3QixrQkFBa0IseUNBQXlDLG9DQUFvQyxHQUFHLGlDQUFpQyx3QkFBd0Isb0JBQW9CLEdBQUcseUJBQXlCLG9CQUFvQixnQkFBZ0IsR0FBRyw2QkFBNkIseUJBQXlCLGlDQUFpQyxHQUFHLGFBQWEsd0JBQXdCLGlCQUFpQixrQkFBa0IseUJBQXlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsb0NBQW9DLDBCQUEwQix1Q0FBdUMseUJBQXlCLG1CQUFtQix3QkFBd0IsR0FBRyx5QkFBeUIsbURBQW1ELEdBQUcsOEJBQThCLGtCQUFrQixHQUFHLDRCQUE0QixrQkFBa0IsS0FBSyw0QkFBNEIsa0JBQWtCLEtBQUssNEJBQTRCLG1CQUFtQixLQUFLLDRCQUE0QixvQkFBb0IsNkJBQTZCLDBCQUEwQix1Q0FBdUMsa0JBQWtCLEdBQUcscUNBQXFDLG1CQUFtQixHQUFHLHFDQUFxQyxtQkFBbUIsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcscUNBQXFDLG9CQUFvQixHQUFHLG9CQUFvQix5QkFBeUIsa0JBQWtCLGdCQUFnQixxREFBcUQsb0dBQW9HLDZDQUE2QyxzQ0FBc0MsR0FBRywyQkFBMkIsK0JBQStCLGlDQUFpQyxHQUFHLHNDQUFzQywrQkFBK0IsR0FBRyxtQ0FBbUMsK0JBQStCLEdBQUcsbUNBQW1DLCtCQUErQixLQUFLLG1DQUFtQywrQkFBK0IsSUFBSSxrQkFBa0IsZUFBZSxxQkFBcUIsS0FBSyxvQkFBb0IsaUNBQWlDLGlCQUFpQixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxvQkFBb0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFNBQVMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssa0JBQWtCLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFP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QUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0FrRDs7QUFFbEQsK0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9BdWRpbyBNb2R1bGVzL2F1ZGlvQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00gSGVscGVyIE1vZHVsZXMvRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00gSGVscGVyIE1vZHVsZXMvRE9NSGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWJhY2tncm91bmQtY2xyOiByZ2IoNiwgMTgsIDMxKTtcXG4gICAgLS1ncmlkLWJvcmRlci1jbHI6IHJnYigyMiwgNDcsIDczKTtcXG4gICAgLS1zaGlwLWJvcmRlci1jbHI6ICNjNGNlMzU7XFxuICAgIC0tYm94LWhvdmVyLWNscjogcmdiKDMyLCA1NywgODMpO1xcbiAgICAtLXNoaXAtY2xyOiByZ2IoMzYsIDYwLCA4NSk7XFxuICAgIC0tc2Vjb25kYXJ5LWNscjogI2NlZTYxYztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5zdGFydC1nYW1lIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zdGFydC1nYW1lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG59XFxuXFxuLmluLXByb2dyZXNzIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTsgXFxufSAqL1xcblxcbi5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbiAgfVxcblxcblxcblxcbi8qIC5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxufSAqL1xcblxcbi5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXB0YWluLWJvYXJkLWF2YXRhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQzLjUlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIDtcXG59XFxuXFxuLyogLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59ICovXFxuXFxuLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDEzJTtcXG4gICAgLyogYm90dG9tOiA3JTsgKi9cXG4gICAgYm90dG9tOiAzMCU7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gIH1cXG5cXG4uY2FwdGFpbi1tZXNzYWdlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBza2V3KC02MGRlZyk7XFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1zZWNvbmRhcnktY2xyKSB0cmFuc3BhcmVudDtcXG59XFxuICBcXG5cXG4uY2FwdGFpbi1pbWFnZSB7XFxuICAgIC8qIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxMHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuXFxufVxcblxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAqL1xcblxcbi8qIC5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59ICovXFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcXG4gICAgbWF4LXdpZHRoOiA4NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uY2FwdGFpbi1uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluOmhvdmVyIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTsgKi9cXG59XFxuLmNhcHRhaW4tY29udGFpbmVyLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDByZW07XFxufVxcbi8qIC5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcblxcblxcbn0gKi9cXG5cXG4uZ3JpZC5sZWZ0LFxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC40cmVtO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LmN1cnJlbnQsXFxuLmdyaWQucmlnaHQuY3VycmVudCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0IHtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uZ3JpZC5yaWdodCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufSAqL1xcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQsXFxuLmdyaWQubGVmdC5mYWRlLW91dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNzAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQuaGlkZSxcXG4uZ3JpZC5yaWdodC5mYWRlLW91dC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdyaWQubGVmdC52aXNpYmxlLFxcbi5ncmlkLnJpZ2h0LnZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0LmRpc2FibGVkLFxcbi5ncmlkLnJpZ2h0LmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufSAqL1xcblxcbi5yb3cge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uYm94LFxcbi5vdXRlci1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDU2LCA1OCwgNzApOyAqL1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2U7XFxufVxcblxcbi8qIC5ib3ggLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufSAqL1xcblxcbi5kaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uYm94LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWhvdmVyLWNscik7XFxufVxcblxcbi5ib3gucGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG5cXG59XFxuXFxuLmJveC5wbGFjZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAwLjVyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtdmVydGljYWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm91dGVyLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmF0dGFjay1tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWhpdC1tYXJrZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdCxcXG4uY29tcHV0ZXItc2hpcC1oaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnRyYW5zaXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNzAwbXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIuZXhwYW5kIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaGlwLXN1Yi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQge1xcbiAgICB3aWR0aDogOTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNSB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC52ZXJ0aWNhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKDEwMCUgKyAtNTVweCkpO1xcbiAgICBmaWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDgyJSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSg3ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoMTA4JSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4vKiAuc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59ICovXFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHNjYWxlOiAwO1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcbn1cXG5cXG4ubW92ZS1wb3NpdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NSUpO1xcbiAgICB3aWR0aDogOTQlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7O0FBRUg7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFD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LGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7OztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsOENBQThDO0lBQzlDLDZGQUE2RjtJQUM3RixzQ0FBc0M7SUFDdEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7O0FBRUg7SUFDSSxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jbHI6IHJnYig2LCAxOCwgMzEpO1xcbiAgICAtLWdyaWQtYm9yZGVyLWNscjogcmdiKDIyLCA0NywgNzMpO1xcbiAgICAtLXNoaXAtYm9yZGVyLWNscjogI2M0Y2UzNTtcXG4gICAgLS1ib3gtaG92ZXItY2xyOiByZ2IoMzIsIDU3LCA4Myk7XFxuICAgIC0tc2hpcC1jbHI6IHJnYigzNiwgNjAsIDg1KTtcXG4gICAgLS1zZWNvbmRhcnktY2xyOiAjY2VlNjFjO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnN0YXJ0LWdhbWU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcbn1cXG5cXG4uaW4tcHJvZ3Jlc3Mge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogLmNhcHRhaW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlOyBcXG59ICovXFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0b3A6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuICB9XFxuXFxuXFxuXFxuLyogLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG59ICovXFxuXFxuLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcHRhaW4tYm9hcmQtYXZhdGFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNDMuNSU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSk7ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMTMlO1xcbiAgICAvKiBib3R0b206IDclOyAqL1xcbiAgICBib3R0b206IDMwJTtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbi5jYXB0YWluLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNrZXcoLTYwZGVnKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLXNlY29uZGFyeS1jbHIpIHRyYW5zcGFyZW50O1xcbn1cXG4gIFxcblxcbi5jYXB0YWluLWltYWdlIHtcXG4gICAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG5cXG59XFxuXFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zaGlwLWNscik7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLyogLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2Uge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDApOyAqL1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xcbiAgICBtYXgtd2lkdGg6IDg1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5jYXB0YWluLW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW46aG92ZXIge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyAqL1xcbn1cXG4uY2FwdGFpbi1jb250YWluZXIudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMHJlbTtcXG59XFxuLyogLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuXFxuXFxufSAqL1xcblxcbi5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjRyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxufVxcblxcbi5ncmlkLmxlZnQuY3VycmVudCxcXG4uZ3JpZC5yaWdodC5jdXJyZW50IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbi8qIC5ncmlkLmxlZnQge1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG59ICovXFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dCxcXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3MDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dC5oaWRlLFxcbi5ncmlkLnJpZ2h0LmZhZGUtb3V0LmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LnZpc2libGUsXFxuLmdyaWQucmlnaHQudmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIC5ncmlkLmxlZnQuZGlzYWJsZWQsXFxuLmdyaWQucmlnaHQuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59ICovXFxuXFxuLnJvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5ib3gsXFxuLm91dGVyLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoNTYsIDU4LCA3MCk7ICovXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLyogLmJveCAuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5ib3guaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtaG92ZXItY2xyKTtcXG59XFxuXFxuLmJveC5wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcblxcbn1cXG5cXG4uYm94LnBsYWNlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLXNxdWFyZS1ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZS12ZXJ0aWNhbCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ub3V0ZXItYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYXR0YWNrLW1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtaGl0LW1hcmtlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0LFxcbi5jb21wdXRlci1zaGlwLWhpdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5zaGlwLW1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIC8qIHBhZGRpbmctdG9wOiAxMHB4OyAqL1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lci5leHBhbmQge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG59XFxuXFxuLnNoaXAtc3ViLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG59XFxuXFxuLnNoaXAtZWxlbWVudDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMge1xcbiAgICB3aWR0aDogNzBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNCB7XFxuICAgIHdpZHRoOiA5MHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01IHtcXG4gICAgd2lkdGg6IDExMHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50LnZlcnRpY2FsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoMTAwJSArIC01NXB4KSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoODIlKSBzYXR1cmF0ZSg0NjAlKSBodWUtcm90YXRlKDdkZWcpIGJyaWdodG5lc3MoODclKSBjb250cmFzdCgxMDglKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi8qIC5zaGlwLWVsZW1lbnQubGVuZ3RoLTIucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn0gKi9cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgc2NhbGU6IDA7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxufVxcblxcbi5tb3ZlLXBvc2l0aW9uIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1JSk7XFxuICAgIHdpZHRoOiA5NCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWlzczEgZnJvbSAnLi4vYXNzZXRzL3NvdW5kcy9zaG90LW1pc3MubXAzJztcbmltcG9ydCBtaXNzMiBmcm9tICcuLi9hc3NldHMvc291bmRzL3Nob3QtbWlzczIubXAzJztcbmltcG9ydCBoaXQxIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvc2hvdC1oaXQubXAzJztcbmltcG9ydCBoaXQyIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvc2hvdC1oaXQyLm1wMyc7XG5cblxuZXhwb3J0IGNvbnN0IEF1ZGlvU2V0dXAgPSAoKSA9PiB7XG5cbiAgICBsZXQgc2hpcEhpdHMgPSBbXTtcbiAgICBsZXQgc2hpcE1pc3NlcyA9IFtdO1xuXG4gICAgY29uc3QgZ2VuZXJhdGVBdWRpb0ZpbGVzID0gKCkgPT4ge1xuICAgICAgICBzaGlwTWlzc2VzLnB1c2gobmV3IEF1ZGlvKG1pc3MxKSk7XG4gICAgICAgIHNoaXBNaXNzZXMucHVzaChuZXcgQXVkaW8obWlzczIpKTtcblxuICAgICAgICBzaGlwSGl0cy5wdXNoKG5ldyBBdWRpbyhoaXQxKSk7XG4gICAgICAgIHNoaXBIaXRzLnB1c2gobmV3IEF1ZGlvKGhpdDIpKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHBsYXlSYW5kb21IaXRTb3VuZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhpdCBzb3VuZHMgYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEhpdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcEhpdHMubGVuZ3RoKV0ucGxheSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXlSYW5kb21NaXNzU291bmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaGlwSGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtaXNzIHNvdW5kcyBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzaGlwTWlzc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoaXBNaXNzZXMubGVuZ3RoKV0ucGxheSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdlbmVyYXRlQXVkaW9GaWxlcywgcGxheVJhbmRvbUhpdFNvdW5kLCBwbGF5UmFuZG9tTWlzc1NvdW5kIH1cbn0iLCJcbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50Q3JlYXRvciA9ICgpID0+IHtcblxuICAgIGNvbnN0IG9uZUVsZW1lbnQgPSAoY2xhc3NUaXRsZSwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc1RpdGxlO1xuICAgIFxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBtdWx0aXBsZUVsZW1lbnRzID0gKGVsZW1lbnQsIHF0eSkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHF0eTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGFyci5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBvbmVFbGVtZW50LCBtdWx0aXBsZUVsZW1lbnRzIH1cbn1cbiIsImltcG9ydCByb3RhdGUgZnJvbSAnLi4vYXNzZXRzL3JvdGF0ZS5zdmcnO1xuaW1wb3J0IGNhcHRhaW4xIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMS5wbmcnO1xuaW1wb3J0IGNhcHRhaW4yIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMi5wbmcnO1xuaW1wb3J0IGNhcHRhaW4zIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMy5wbmcnO1xuXG5pbXBvcnQgeyBDdXN0b21FbGVtZW50Q3JlYXRvciB9IGZyb20gJy4vRE9NQ3JlYXRpb24nO1xuXG5leHBvcnQgY29uc3QgRE9NSGVscGVyQ3JlYXRpb24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjcmVhdG9yID0gQ3VzdG9tRWxlbWVudENyZWF0b3IoKTtcblxuICAgIGxldCBwbGF5ZXJCb2FyZDtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZDtcblxuICAgIC8vbW9kdWxlIGZvciBxdWVyeVNlbGVjdG9yIHJlZmVyZW5jZXNcblxuICAgIGNvbnN0IG1haW5Ub3BDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuICAgIC8vIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgIFxuICAgIGNvbnN0IGluaXRpYWxpemVNYWluRGlzcGxheSA9ICgpID0+IHtcblxuICAgICAgICBnZW5lcmF0ZUdyaWRzKCk7XG4gICAgICAgIHNldEluR2FtZVN0eWxlcygpO1xuICAgICAgICBnZW5lcmF0ZVNoaXBFbGVtZW50cygpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5ld1NoaXBDb250YWluZXJIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpXG4gICAgICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgIHNoaXBNYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBNYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtbWFpbi1jb250YWluZXInKVxuICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQnKVxuICAgIH1cblxuICAgIGNvbnN0IHNldE1haW5HcmlkVG9QbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWFpbkdyaWRUb0NvbXB1dGVyID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemVDYXB0YWluUGlja2VyID0gYXN5bmMgKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5Db250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2NhcHRhaW4tY29udGFpbmVyJywgJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUGljayB5b3VyIGxpZXV0ZW5hbnQhJ1xuICAgICAgICBjYXB0YWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbWFpblRvcENvbnRhaW5lci5hcHBlbmQoY2FwdGFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHNldEluR2FtZVN0eWxlcygpO1xuICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlmdC1kb3duJyk7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNhcHRhaW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICBcbiAgICAgICAgY3JlYXRlQ2FwdGFpbnMoY2FwdGFpbkNvbnRhaW5lciwgY2FsbGJhY2spO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFRyYW5zaXRpb25Db250YWluZXJUb3ApO1xuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2FwdGFpblBpY2tlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNhcHRhaW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBzZXREZWZhdWx0Q29udGFpbmVyU2l6ZSgpO1xuXG4gICAgICAgIGNhcHRhaW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNhcHRhaW5Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2FwdGFpbkltYWdlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFsgY2FwdGFpbjEsIGNhcHRhaW4yLCBjYXB0YWluMyBdXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ2FwdGFpbnMgPSAoY29udGFpbmVyLCBjYWxsYmFjaykgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXJzID0gY3JlYXRvci5vbmVFbGVtZW50KCdjYXB0YWluLWF2YXRhcnMnLCAnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgY2FwdGFpbnMgPSBjcmVhdG9yLm11bHRpcGxlRWxlbWVudHMoJ2RpdicsIDMpO1xuICAgICAgICBjb25zdCBjYXB0YWluTmFtZXMgPSBbJ1RlZCcsICdEb25hbGQnLCAnQnVydCddXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjYXB0YWluIG9mIGNhcHRhaW5zKSB7XG4gICAgICAgICAgICAgICAgY2FwdGFpbi5jbGFzc05hbWUgPSAnY2FwdGFpbic7XG4gICAgICAgICAgICAgICAgLy8gY2FwdGFpbi50ZXh0Q29udGVudCA9IGBjYXB0YWluJHtjb3VudGVyfWA7XG4gICAgICAgICAgICAgICAgY2FwdGFpbi5kYXRhc2V0LmNhcHRhaW4gPSBjb3VudGVyO1xuICAgICAgICAgICAgICAgIGNhcHRhaW5BdmF0YXJzLmFwcGVuZENoaWxkKGNhcHRhaW4pO1xuXG4gICAgICAgICAgICAgICAgY2FwdGFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soY2FwdGFpbi5kYXRhc2V0LmNhcHRhaW4pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXZhdGFySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBhdmF0YXJJbWFnZS5zcmMgPSBnZXRDYXB0YWluSW1hZ2VzKClbY291bnRlcl07XG4gICAgICAgICAgICAgICAgYXZhdGFySW1hZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhcHRhaW4tbmFtZSc7XG4gICAgICAgICAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXB0YWluTmFtZXNbY291bnRlcisrXTtcbiAgICAgICAgICAgICAgICAvLyBhdmF0YXJJbWFnZS5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG5cblxuICAgICAgICAgICAgICAgIGF2YXRhckltYWdlLmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhcHRhaW4uYXBwZW5kKGF2YXRhckltYWdlLCBuYW1lRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY2FwdGFpbkF2YXRhcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VHcmlkU3F1YXJlcyA9IChjb250YWluZXIsIGlzQ29tcEdyaWQpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwxMTsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3JvdycsICdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTE7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2JveCcsICdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChib3gpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC54eVBvcyA9IGAke2otMX0ke2ktMX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcEdyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSAnY29tcHV0ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSAncGxheWVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ291dGVyLWJveCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnRleHRDb250ZW50ID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdvdXRlci1ib3gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmRhdGFzZXQucGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IHNldEFscGhhYmV0W2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldERlZmF1bHRDb250YWluZXJTaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS50b3AgPSAnMHZoJztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnN0IG1haW5Cb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkc0hlaWdodCA9IG1haW5Ub3BDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0cmFuc2l0aW9uQ29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2dhbWVib2FyZHNIZWlnaHQgKyAzNX1weGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QWxwaGFiZXQgPSB7XG4gICAgICAgIDE6ICdBJyxcbiAgICAgICAgMjogJ0InLFxuICAgICAgICAzOiAnQycsXG4gICAgICAgIDQ6ICdEJyxcbiAgICAgICAgNTogJ0UnLFxuICAgICAgICA2OiAnRicsXG4gICAgICAgIDc6ICdHJyxcbiAgICAgICAgODogJ0gnLFxuICAgICAgICA5OiAnSScsXG4gICAgICAgIDEwOiAnSidcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZUdyaWRzID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnN0IG1haW5Cb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NOYW1lID0gJ2dyaWQgbGVmdCc7XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTmFtZSA9ICdncmlkIHJpZ2h0JztcbiAgICAgICAgXG4gICAgICAgIHBsYXllckJvYXJkLmRhdGFzZXQuZ3JpZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgbWFrZUdyaWRTcXVhcmVzKHBsYXllckJvYXJkLCBmYWxzZSk7XG4gICAgICAgIG1ha2VHcmlkU3F1YXJlcyhjb21wdXRlckJvYXJkLCB0cnVlKTtcblxuICAgICAgICBtYWluVG9wQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCk7XG5cbiAgICAgICAgLy8gc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCgpO1xuXG4gICAgICAgIC8vIHRyYW5zaXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpZnQtZG93bicpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb25Db250YWluZXJUb3AoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpZnQtZG93bicpO1xuICAgICAgICB9LDMwKTtcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFRyYW5zaXRpb25Db250YWluZXJUb3ApO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlU2hpcEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIGNvbnN0IHRpdGxlID0gY3JlYXRvci5vbmVFbGVtZW50KCd1c2VyLWluc3RydWN0aW9uJywgJ2gyJyk7XG4gICAgICAgIC8vIHRpdGxlLnRleHRDb250ZW50ID0gJ0RyYWcgeW91ciBmbGVldCBvbnRvIHRoZSBiYXR0bGVmaWVsZCwgY2FwdGFpbiEnXG4gICAgICAgIC8vIHNoaXBFbGVtZW50QXJlYS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwcyA9IGNyZWF0b3IubXVsdGlwbGVFbGVtZW50cygnZGl2JywgNCk7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsNCwzLDJdO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXAsIGkpID0+IHtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5sZW5ndGggPSBzaGlwTGVuZ3Roc1tpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NOYW1lID0gJ3NoaXAtZWxlbWVudCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChgbGVuZ3RoLSR7c2hpcC5kYXRhc2V0Lmxlbmd0aH1gKTtcbiAgICAgICAgICAgIHNoaXBFbGVtZW50QXJlYS5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICAgICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcblxuICAgICAgICAgICAgLy9nZW5lcmF0ZSBkZXRhaWxzIHRvIHBsYWNlIG9uIHRoZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5kYXRhc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGV0YWlsLmNsYXNzTmFtZSA9ICdkZXRhaWwnO1xuICAgICAgICAgICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlU2hpcFJvdGF0aW9uQ29udHJvbHMgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHNoaXBTdWJDb250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3NoaXAtc3ViLWNvbnRhaW5lcicsICdkaXYnKTtcblxuICAgICAgICBjb25zdCBzaGlwcyA9IHNoaXBNYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWVsZW1lbnQnKTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwKTtcblxuICAgICAgICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGNyZWF0b3Iub25lRWxlbWVudCgnc2hpcC1lbGVtZW50LWNvbnRhaW5lcicsICdkaXYnKTtcbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgICAgIHNoaXBTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGNyZWF0b3Iub25lRWxlbWVudCgncm90YXRlLWJ1dHRvbicsICdpbWcnKTtcbiAgICAgICAgICAgIHJvdGF0ZUJ1dHRvbi5zcmMgPSByb3RhdGU7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcm90YXRlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNoaXApO1xuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWVudGF0aW9uKHNoaXApO1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5Um90YXRpb24oc2hpcCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwU3ViQ29udGFpbmVyKTtcbiAgICBcbiAgICB9XG5cblxuICAgIGNvbnN0IGFwcGx5Um90YXRpb24gPSAoc2hpcEVsZW1lbnQpID0+IHtcblxuICAgICAgICBpZiAoc2hpcEVsZW1lbnQuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlR3JpZHNBbmRIZWFkaW5nID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIHNldERlZmF1bHRDb250YWluZXJTaXplKCk7XG4gICAgICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChzaGlwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2hpcENvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNoaXBDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnN0cnVjdGlvbicpO1xuICAgICAgICAvLyBoZWFkaW5nLnJlbW92ZSgpO1xuXG5cbiAgICB9XG5cbiAgICBjb25zdCBkaXNhYmxlQ2VsbHMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGNvbnN0IGVuYWJsZWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcbiAgICAgICAgZW5hYmxlZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5hYmxlQ2VsbHMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGNvbnN0IGRpc2FibGVkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG5cbiAgICAgICAgZGlzYWJsZWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJPdXRsaW5lID0gKGlzUGxheWVyc1R1cm4pID0+IHtcbiAgICAgICAgaWYgKGlzUGxheWVyc1R1cm4pIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnN0eWxlLmJvcmRlciA9ICdzb2xpZCAzcHggcmVkJztcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJzNweCB0cmFuc3BhcmVudCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnN0eWxlLmJvcmRlciA9ICdzb2xpZCAzcHggZ3JlZW4nO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJzNweCB0cmFuc3BhcmVudCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVc2VySW5zdHJ1Y3Rpb24gPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAvLyBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItaW5zdHJ1Y3Rpb24nKTtcbiAgICAgICAgY29uc3QgY2FwdGFpblNwZWVjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLW1lc3NhZ2UnKTtcbiAgICAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBzcGVlZCA9IDUwO1xuICAgICAgICBjb25zdCB0eXBlV3JpdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPCBtZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhcHRhaW5TcGVlY2gudGV4dENvbnRlbnQgKz0gbWVzc2FnZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgNTAwKTtcbiAgICB9XG5cbiAgICAvLyBsZXQgdGltZW91dElEO1xuICAgIC8vIGNvbnN0IHNldFVzZXJJbnN0cnVjdGlvbiA9IChtZXNzYWdlKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGNhcHRhaW5TcGVlY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1tZXNzYWdlJyk7XG4gICAgLy8gICAgIGNhcHRhaW5TcGVlY2gudGV4dENvbnRlbnQgPSAnJztcbiAgICAvLyAgICAgLy8gbGV0IHRpbWVvdXRJRDtcbiAgICAvLyAgICAgbGV0IGk7IC8vIGRlY2xhcmUgdGhlIGkgdmFyaWFibGUgb3V0c2lkZSBvZiB0aGUgaWYgc3RhdGVtZW50XG4gICAgLy8gICAgIGlmICh0aW1lb3V0SUQpIHtcbiAgICAvLyAgICAgICAgIC8vIGlmIHRoZSB0eXBlV3JpdGVyIGZ1bmN0aW9uIGlzIGN1cnJlbnRseSBydW5uaW5nLCBjbGVhciB0aGUgdGltZXIgYW5kIHJlc2V0IHRoZSBjb3VudGVyXG4gICAgLy8gICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElEKTtcbiAgICAvLyAgICAgICAgIGkgPSAwO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCA9ICcnOyAvLyBvdGhlcndpc2UsIGNsZWFyIHRoZSBzcGVlY2ggYnViYmxlXG4gICAgLy8gICAgICAgICBpID0gMDsgLy8gYXNzaWduIGEgdmFsdWUgdG8gaSBoZXJlXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbGV0IHNwZWVkID0gNTA7XG4gICAgLy8gICAgIGNvbnN0IHR5cGVXcml0ZXIgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoaSA8IG1lc3NhZ2UubGVuZ3RoKSB7XG4gICAgLy8gICAgICAgICAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCArPSBtZXNzYWdlLmNoYXJBdChpKTtcbiAgICAvLyAgICAgICAgICAgICBpKys7XG4gICAgLy8gICAgICAgICAgICAgdGltZW91dElEID0gc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzcGVlZCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdHlwZVdyaXRlcigpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IHBsYXllckhpdFJlc3BvbnNlID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkJ1bGxzZXllISBXZSd2ZSBoaXQgdGhlIGVuZW15J3MgdmVzc2VsLiBHbyBhZ2FpbiFcImAsXG4gICAgICAgICAgICBgXCJOaWNlIHNob3QhIEVuZW15IHNoaXAgaGl0ISBUaGlzIGlzIGZ1biwgZ28hXCJgLFxuICAgICAgICAgICAgYFwiRW5lbXkgc2hpcCwgbWVldCBvdXIgZmlyZXBvd2VyISBEaXJlY3QgaGl0ISBOZXh0IHNob3QhXCJgXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllclR1cm5SZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiSXQncyB5b3VyIHR1cm4sIGNhcHRhaW4hIEZpcmUgYXQgd2lsbCFcImAsXG4gICAgICAgICAgICBgXCJBbGwgc3lzdGVtcyBhcmUgZ28hIFRha2UgeW91ciBzaG90LCBjYXB0YWluLlwiYCxcbiAgICAgICAgICAgIGBcIlRoZSBlbmVteSBzaGlwIGlzIGluIHNpZ2h0LiBZb3UgaGF2ZSB0aGUgZ3JlZW4gbGlnaHQgdG8gYXR0YWNrLlwiYCxcbiAgICAgICAgICAgIGBcIlRoZSBzZWEgaXMgeW91cnMsIGNhcHRhaW4uIFNob3cgdGhlIGVuZW15IHdoYXQgd2UncmUgbWFkZSBvZiFcImAsXG4gICAgICAgICAgICBgXCJXZSdyZSBjb3VudGluZyBvbiB5b3UsIGNhcHRhaW4uIFRpbWUgdG8gbWFrZSB5b3VyIG1vdmUuXCJgXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyVHVyblJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJCcmFjZSBmb3IgaW1wYWN0ISBUaGUgZW5lbXkgaXMgdGFraW5nIHRoZWlyIHNob3QuXCJgLFxuICAgICAgICAgICAgYFwiQWxsIGhhbmRzIG9uIGRlY2shIEVuZW15IHR1cm4gdG8gZmlyZS5cImAsXG4gICAgICAgICAgICBgXCJFeWVzIG9uIHRoZSBob3Jpem9uLCBjYXB0YWluLiBUaGUgZW5lbXkgaXMgYXR0YWNraW5nLlwiYCxcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuXG4gICAgY29uc3QgdXNlclNoaXBQbGFjZW1lbnRSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiUGxhY2UgdGhlIHNoaXBzLCBDYXAnbiFcImAsXG4gICAgICAgICAgICBgXCJDYXB0YWluLCBsZXRzIHBsYWNlIG91ciBmbGVldCFcImAsXG4gICAgICAgICAgICBgXCJMZXQncyBiZWdpbiBwbGFjaW5nIG91ciBzaGlwcyFcImAsXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IGVuZW15TWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJUaGV5IHN1Y2shIEhvdyBjb3VsZCB0aGV5IG1pc3MhXCJgLFxuICAgICAgICAgICAgYFwiRGFtbiwgdGhleSBtaXNzZWQgaXRcImBcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyTWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJBaCwgdG9vIGJhZC4gV2UgZ28gYWdhaW4uXCJgLFxuICAgICAgICAgICAgYFwiQSBtaXNzIGZvciB1cywgYmFkIGx1Y2suLlwiYFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG5cblxuICAgIGNvbnN0IHNldEluR2FtZVN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaW4tcHJvZ3Jlc3MnKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEdhbWVTdHlsZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi1wcm9ncmVzcycpO1xuXG4gICAgICAgIHBsYXllckJvYXJkLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG5cbiAgICAgICAgZW5hYmxlQ2VsbHMoKTtcblxuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW1vdmVHcmlkc0FuZEhlYWRpbmcsIGN1cnJlbnRQbGF5ZXJPdXRsaW5lLCBlbmFibGVDZWxscywgZGlzYWJsZUNlbGxzLCBzZXRVc2VySW5zdHJ1Y3Rpb24sIHJlc2V0R2FtZVN0eWxlcywgZ2VuZXJhdGVTaGlwUm90YXRpb25Db250cm9scyxhcHBseVJvdGF0aW9uLCB0cmFuc2l0aW9uRWxlbWVudFJlbW92YWwsIGluaXRpYWxpemVNYWluRGlzcGxheSwgaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIsIHJlbW92ZUNhcHRhaW5QaWNrZXIsIHNldE1haW5HcmlkVG9QbGF5ZXIsIHNldE1haW5HcmlkVG9Db21wdXRlciwgc2V0TmV3U2hpcENvbnRhaW5lckhlaWdodCwgcmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCwgcGxheWVySGl0UmVzcG9uc2UsIHBsYXllclR1cm5SZXNwb25zZSwgY29tcHV0ZXJUdXJuUmVzcG9uc2UsIHVzZXJTaGlwUGxhY2VtZW50UmVzcG9uc2UsIGVuZW15TWlzc1Jlc3BvbnNlLCBwbGF5ZXJNaXNzUmVzcG9uc2UsIGdldENhcHRhaW5JbWFnZXMgfVxufSIsIi8vIGltcG9ydCBjYXB0YWluMSBmcm9tICcuL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMS5wbmcnO1xuLy8gaW1wb3J0IGNhcHRhaW4yIGZyb20gJy4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4yLnBuZyc7XG4vLyBpbXBvcnQgY2FwdGFpbjMgZnJvbSAnLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjMucG5nJztcblxuaW1wb3J0IHsgRE9NSGVscGVyQ3JlYXRpb24gfSBmcm9tIFwiLi9ET00gSGVscGVyIE1vZHVsZXMvRE9NSGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBWaWV3ID0gKCkgPT4ge1xuXG4gICAgbGV0IHBsYXllckNlbGxzO1xuICAgIGxldCBjb21wdXRlckNlbGxzO1xuXG4gICAgY29uc3QgRE9NSGVscGVyID0gRE9NSGVscGVyQ3JlYXRpb24oKTtcblxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcblxuICAgIGNvbnN0IHNldFBsYXllckFuZENvbXB1dGVyQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGxheWVyPVwicGxheWVyXCJdJyk7XG4gICAgICAgIGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wbGF5ZXI9XCJjb21wdXRlclwiXScpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uQ2VsbENsaWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZS50YXJnZXQuZGF0YXNldC54eVBvcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRIaXQgPSAoY29vcmRpbmF0ZSwgaXNQbGF5ZXIpID0+IHtcblxuICAgICAgICBpZiAoaXNQbGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9XCJjb21wdXRlclwiXVtkYXRhLXh5LXBvcz1cIiR7Y29vcmRpbmF0ZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0YWNrLW1hcmtlcicpO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1oaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSBjb29yZGluYXRlLmpvaW4oJycpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj1cInBsYXllclwiXVtkYXRhLXh5LXBvcz1cIiR7Y29vcmRpbmF0ZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0YWNrLW1hcmtlcicpO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXAtaGl0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5Q2FwdGFpbkF2YXRhciA9IChjYXB0YWluKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLnJpZ2h0JylcblxuICAgICAgICBjb25zdCBjYXB0YWluQXZhdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgY2FwdGFpbk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FwdGFpbk1lc3NhZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4tbWVzc2FnZSc7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGNhcHRhaW5JbWFnZS5zcmMgPSBET01IZWxwZXIuZ2V0Q2FwdGFpbkltYWdlcygpW2NhcHRhaW5dO1xuICAgICAgICBjb25zb2xlLmxvZyhjYXB0YWluSW1hZ2UpO1xuICAgICAgICBjYXB0YWluSW1hZ2UuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIGNhcHRhaW5JbWFnZS5jbGFzc05hbWUgPSAnY2FwdGFpbi1pbWFnZSc7XG5cbiAgICAgICAgY2FwdGFpbkF2YXRhci5hcHBlbmQoY2FwdGFpbkltYWdlLCBjYXB0YWluTWVzc2FnZSk7XG4gICAgICAgIGNhcHRhaW5BdmF0YXIuY2xhc3NOYW1lID0gJ2NhcHRhaW4tYm9hcmQtYXZhdGFyJztcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjYXB0YWluQXZhdGFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlQ2FwdGFpbkF2YXRhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLWJvYXJkLWF2YXRhcicpO1xuXG4gICAgICAgIGNhcHRhaW5BdmF0YXIuY2xhc3NMaXN0LmFkZCgnbW92ZS1wb3NpdGlvbicpO1xuICAgICAgICAvLyBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dDYXB0YWluQXZhdGFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tYm9hcmQtYXZhdGFyJyk7XG4gICAgICAgIGNhcHRhaW5BdmF0YXIuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1wb3NpdGlvbicpO1xuICAgICAgICAvLyBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEhvcml6b250YWxTaGlwSG92ZXIgPSAoZHJhZ2dlZFNoaXAsIGN1cnJlbnRDZWxsLCB0b1JlbW92ZUhvdmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxkcmFnZ2VkU2hpcC5kYXRhc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBZYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IFhib2FyZFBvc2l0aW9uID0gTnVtYmVyKGN1cnJlbnRDZWxsLmRhdGFzZXQueHlQb3NbMV0pICsgaTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm94W2RhdGEtcGxheWVyPVwicGxheWVyXCJdW2RhdGEteHktcG9zPVwiJHtZYm9hcmRQb3NpdGlvbn0ke1hib2FyZFBvc2l0aW9ufVwiXWApO1xuICAgICAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgICAgICB0b1JlbW92ZUhvdmVyID8gdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpXG4gICAgICAgICAgICAgICAgOiB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRWZXJ0aWNhbFNoaXBIb3ZlciA9IChkcmFnZ2VkU2hpcCwgY3VycmVudENlbGwsIHRvUmVtb3ZlSG92ZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRyYWdnZWRTaGlwLmRhdGFzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFlib2FyZFBvc2l0aW9uID0gTnVtYmVyKGN1cnJlbnRDZWxsLmRhdGFzZXQueHlQb3NbMF0pICsgaTtcbiAgICAgICAgICAgIGNvbnN0IFhib2FyZFBvc2l0aW9uID0gTnVtYmVyKGN1cnJlbnRDZWxsLmRhdGFzZXQueHlQb3NbMV0pO1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3hbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl1bZGF0YS14eS1wb3M9XCIke1lib2FyZFBvc2l0aW9ufSR7WGJvYXJkUG9zaXRpb259XCJdYCk7XG4gICAgICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgICAgICAgIHRvUmVtb3ZlSG92ZXIgPyB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJylcbiAgICAgICAgICAgICAgICA6IHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgZHJhZ0FuZERyb3BTaGlwcyA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1lbGVtZW50Jyk7XG4gICAgICAgIGxldCBkcmFnZ2VkU2hpcDtcblxuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcEVsZW1lbnRzKSB7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgLy8gZHJhZ2dlZFNoaXAucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBkcmFnZ2VkU2hpcC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZFNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhvcml6b250YWxTaGlwSG92ZXIoZHJhZ2dlZFNoaXAsIGNlbGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZlcnRpY2FsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRTaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEhvcml6b250YWxTaGlwSG92ZXIoZHJhZ2dlZFNoaXAsIGNlbGwsIHRydWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmVydGljYWxTaGlwSG92ZXIoZHJhZ2dlZFNoaXAsIGNlbGwsIHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBwbGF5ZXJDZWxscykge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIGRyYWdnZWRTaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBkcmFnZ2VkU2hpcC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZHJhZ2dlZFNoaXAsIGUudGFyZ2V0LmRhdGFzZXQueHlQb3MpO1xuICAgICAgICAgICAgICAgIHBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vd2Ugd2FudCB0byB1cGRhdGUgb25lIGJvYXJkIGF0IGEgdGltZSwganVzdCBwYXNzIGluIHRoZSBib2FyZCB3ZSB3YW50IHRvIHVwZGF0ZSBhdCB0aGF0IHBvaW50LiBObyBwb2ludCBpbiB1cGRhdGluZyBib3RoLiBXZSBjYW4gaGF2ZSBhIGJvb2wgdmFsdWUgdGhhdCBjaGVja3MgaWYgaXRzIGEgY29tcHV0ZXIgYm9hcmQgb3Igbm90LlxuICAgIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkLCBpc0NvbXB1dGVyQm9hcmQpID0+IHtcblxuICAgICAgICBzZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzKCk7XG4gICAgICAgIGxldCBib2FyZENlbGxzO1xuXG4gICAgICAgIGlmIChpc0NvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgICAgIGJvYXJkQ2VsbHMgPSBjb21wdXRlckNlbGxzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRDZWxscyA9IHBsYXllckNlbGxzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGJvYXJkQ2VsbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHh5ID0gY2VsbC5kYXRhc2V0Lnh5UG9zO1xuICAgICAgICAgICAgaWYgKGJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5jbGFzc05hbWUgPSAnYXR0YWNrLW1hcmtlcic7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ29tcHV0ZXJCb2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGNvbXB1dGVyQm9hcmQsIHBsYXllckJvYXJkKSA9PiB7XG5cbiAgICAvLyAgICAgZm9yIChjb25zdCBjZWxsIG9mIGNvbXB1dGVyQ2VsbHMpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHh5ID0gY2VsbC5kYXRhc2V0Lnh5UG9zO1xuICAgIC8vICAgICAgICAgaWYgKGNvbXB1dGVyQm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ3gnKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCFjZWxsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbWFya2VyLmNsYXNzTmFtZSA9ICdhdHRhY2stbWFya2VyJztcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiBjb21wdXRlckJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZvciAoY29uc3QgY2VsbCBvZiBwbGF5ZXJDZWxscykge1xuICAgIC8vICAgICAgICAgY29uc3QgeHkgPSBjZWxsLmRhdGFzZXQueHlQb3M7XG4gICAgLy8gICAgICAgICBpZiAocGxheWVyQm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ3gnKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCFjZWxsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbWFya2VyLmNsYXNzTmFtZSA9ICdhdHRhY2stbWFya2VyJztcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgIC8vICAgICAgICAgICAgIH0gIFxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBpZiAodHlwZW9mIHBsYXllckJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc3Qgc2hpcCA9IHBsYXllckJvYXJkW3h5WzBdXVt4eVsxXV07XG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gICAgICAgICAgICAgLy8gaWYgKHNoaXAuZ2V0U2hpcERpcmVjdGlvbigpID09PSAnSG9yaXpvbnRhbCcpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcC1zcXVhcmUtaG9yaXpvbnRhbCc7XG4gICAgLy8gICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChzaGlwLmdldFNoaXBEaXJlY3Rpb24oKSA9PT0gJ1ZlcnRpY2FsJykge1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICBzaGlwU3F1YXJlLmNsYXNzTmFtZSA9ICdzaGlwLXNxdWFyZS12ZXJ0aWNhbCc7XG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgICAgIC8vIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcFNxdWFyZSk7XG4gICAgLy8gICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGNvbnN0IHBsYXllclZpZXdVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIERPTUhlbHBlci5kaXNhYmxlQ2VsbHMoKTtcbiAgICAgICAgRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKHRydWUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlclZpZXdVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIERPTUhlbHBlci5lbmFibGVDZWxscygpO1xuICAgICAgICBET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGFsZXJ0V2lubmVyID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBhbGVydChgUGxheWVyICR7d2lubmVyfSBoYXMgd29uIHRoZSBtYXRjaCFgKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBET01IZWxwZXIsIHN0YXJ0QnV0dG9uLCBvbkNlbGxDbGljaywgdXBkYXRlQm9hcmQsIGFsZXJ0V2lubmVyLCBwbGF5ZXJWaWV3VXBkYXRlLCBjb21wdXRlclZpZXdVcGRhdGUsIGRyYWdBbmREcm9wU2hpcHMsIHNldFBsYXllckFuZENvbXB1dGVyQ2VsbHMsIHNldEhpdCwgZGlzcGxheUNhcHRhaW5BdmF0YXIsIGhpZGVDYXB0YWluQXZhdGFyLCBzaG93Q2FwdGFpbkF2YXRhciB9XG59XG4iLCJleHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG5cbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgcGxhY2VDb21wdXRlclNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZFNoaXBQb3NpdGlvbnMgPSBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzKCk7XG5cbiAgICAgICAgY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRTaGlwUG9zaXRpb25zLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmFsaWRTaGlwUG9zaXRpb25zW3JhbmRvbVBsYWNlbWVudF07XG5cbiAgICAgICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgICAgICBpZiAoY2FuUGxhY2VTaGlwKHNoaXAsIHBvc2l0aW9uLCByYW5kb21PcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgIHBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgcmFuZG9tT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxhY2VDb21wdXRlclNoaXAoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FuUGxhY2VTaGlwID0gKHNoaXAsIHBvc2l0aW9uLCBpc1ZlcnRpY2FsKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICgocG9zaXRpb25bMF0gLSAxKSArIHNoaXAubGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBkb2VzIG5vdCBmaXQgb24gdGhlIGJvYXJkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbcG9zaXRpb25bMF0gKyBpXVtwb3NpdGlvblsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBleGlzdHMgaW4gdGhpcyBwb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChwb3NpdGlvblsxXSAtIDEpICsgc2hpcC5sZW5ndGggPiA5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZG9lcyBub3QgZml0IG9uIHRoZSBib2FyZCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdICsgaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGV4aXN0cyBpbiB0aGlzIHBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzLmxlbmd0aCA+PSA0O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGxCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gbmV3IEFycmF5KDEwKTtcbiAgICAgICAgICAgIGFyci5maWxsKCcnKTtcbiAgICAgICAgICAgIGJvYXJkLnB1c2goYXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgICBjb25zdCBnZXRWYWxpZEF0dGFja3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdICE9PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goW2ksal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbGlkU2hpcFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVtqXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goW2ksal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZGluYXRlLCBpc1ZlcnRpY2FsKSA9PiB7XG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICBzaGlwLnNldFNoaXBEaXJlY3Rpb24oJ1ZlcnRpY2FsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF0gKyBpXVtjb29yZGluYXRlWzFdXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwLnNldFNoaXBEaXJlY3Rpb24oJ0hvcml6b250YWwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXSArIGldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuXG4gICAgbGV0IGxhc3RIaXQgPSBudWxsO1xuXG4gICAgY29uc3QgZ2V0TGFzdEhpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxhc3RIaXQ7XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZEF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChjb29yZGluYXRlWzBdIDw9IDkgJiYgY29vcmRpbmF0ZVsxXSA8PSA5KSB7XG5cbiAgICAgICAgICAgIGlmIChib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IE91dCBvZiBib3VuZHMgYXR0YWNrJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRJdGVtID0gYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV07XG5cbiAgICAgICAgICAgIGlmIChib2FyZEl0ZW0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbWlzc2VkU2hvdHNbY29vcmRpbmF0ZVswXV0ucHVzaChjb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgICAgICBsYXN0SGl0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZEl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRJdGVtLmhpdCgpO1xuICAgICAgICAgICAgICAgIGxhc3RIaXQgPSAnc2hpcCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dID0gJ3gnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXG4gICAgICAgIFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXG4gICAgXVxuXG4gICAgY29uc3QgZ2V0TWlzc2VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWlzc2VkU2hvdHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG5cbiAgICBmaWxsQm9hcmQoYm9hcmQpO1xuICAgIFxuICAgIHJldHVybiB7IGdldEJvYXJkLCBwbGFjZVNoaXAsIHJlY2lldmVBdHRhY2ssIGdldE1pc3NlcywgZ2V0U2hpcHMsIGFsbFNoaXBzU3VuaywgZ2V0VmFsaWRBdHRhY2tzLCBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzLCBnZXRMYXN0SGl0LCBhbGxTaGlwc1BsYWNlZCwgcGxhY2VDb21wdXRlclNoaXAsIGNhblBsYWNlU2hpcCwgaXNWYWxpZEF0dGFjayB9XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZ2FtZVN0YXRlJztcbmltcG9ydCB7IGdhbWVJbml0SGVscGVyIH0gZnJvbSAnLi9nYW1lU3RhdGUnO1xuaW1wb3J0IHsgQXVkaW9TZXR1cCB9IGZyb20gJy4vQXVkaW8gTW9kdWxlcy9hdWRpb0NyZWF0aW9uJztcblxuZXhwb3J0IGNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdmlldyA9IFZpZXcoKTtcbiAgICBsZXQgZ2FtZSA9IEdhbWVTdGF0ZSgpO1xuICAgIGNvbnN0IGF1ZGlvU2V0dXAgPSBBdWRpb1NldHVwKCk7XG4gICAgY29uc3QgZ2FtZUhlbHBlciA9IGdhbWVJbml0SGVscGVyKCk7XG5cbiAgICBsZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVTdGFydGVkKSB7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkNob2ljZSA9IGF3YWl0IGluaXRpYWxpemVDYXB0YWluUGlja2VyKCk7XG4gICAgICAgIGF3YWl0IHZpZXcuRE9NSGVscGVyLnNldE5ld1NoaXBDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgLy8gYXdhaXQgZGVsYXkoNzAwKTtcbiAgICAgICAgXG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmluaXRpYWxpemVNYWluRGlzcGxheSgpO1xuICAgICAgICBhdWRpb1NldHVwLmdlbmVyYXRlQXVkaW9GaWxlcygpO1xuXG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9QbGF5ZXIoKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuZ2VuZXJhdGVTaGlwUm90YXRpb25Db250cm9scygoc2hpcEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmFwcGx5Um90YXRpb24oc2hpcEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5kaXNwbGF5Q2FwdGFpbkF2YXRhcihjYXB0YWluQ2hvaWNlKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnVzZXJTaGlwUGxhY2VtZW50UmVzcG9uc2UoKSk7XG4gICAgICAgIHZpZXcuaGlkZUNhcHRhaW5BdmF0YXIoKTtcbiAgICAgICAgdmlldy5zZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzKCk7XG5cbiAgICAgICAgZ2FtZS5wbGFjZUFsbENvbXB1dGVyU2hpcHMoKTtcblxuICAgICAgICBhd2FpdCBzaGlwUGxhY2VtZW50SGFuZGxlcigpO1xuICAgICAgICB2aWV3Lm9uQ2VsbENsaWNrKHBsYXlSb3VuZCk7XG4gICAgICAgIC8vIHZpZXcuZHJhZ0FuZERyb3BTaGlwcygoc2hpcCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAvLyAgICAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGUpO1xuXG4gICAgICAgIC8vICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIucmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIucGxheWVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIHRydWUpXG5cbiAgICAgICAgLy8gICAgICAgICB2aWV3Lm9uQ2VsbENsaWNrKHBsYXlSb3VuZCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgXG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB2aWV3LmRyYWdBbmREcm9wU2hpcHMoKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIucmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsaXplQ2FwdGFpblBpY2tlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmluaXRpYWxpemVDYXB0YWluUGlja2VyKGFzeW5jIGNhcHRhaW5DaG9pY2UgPT4ge1xuICAgICAgICAgICAgZ2FtZS5zZXRQbGF5ZXJDYXB0YWluKGNhcHRhaW5DaG9pY2UpO1xuICAgICAgICAgICAgdmlldy5ET01IZWxwZXIucmVtb3ZlQ2FwdGFpblBpY2tlcigpO1xuICAgICAgICAgICAgcmVzb2x2ZShjYXB0YWluQ2hvaWNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIC8vIGNvbnN0IGdhbWVMb29wID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBpZiAoIWdhbWVTdGFydGVkKSB7XG4gICAgLy8gICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmluaXRpYWxpemVDYXB0YWluUGlja2VyKCBhc3luYyAoY2FwdGFpbkNob2ljZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBnYW1lLnNldFBsYXllckNhcHRhaW4oY2FwdGFpbkNob2ljZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZUNhcHRhaW5QaWNrZXIoKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDcwMCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5pbml0aWFsaXplTWFpbkRpc3BsYXkoKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvUGxheWVyKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmdlbmVyYXRlU2hpcFJvdGF0aW9uQ29udHJvbHMoKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5hcHBseVJvdGF0aW9uKHNoaXBFbGVtZW50KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5kaXNwbGF5Q2FwdGFpbkF2YXRhcihjYXB0YWluQ2hvaWNlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnVzZXJTaGlwUGxhY2VtZW50UmVzcG9uc2UoKSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuaGlkZUNhcHRhaW5BdmF0YXIoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5zZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzKCk7XG4gICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBnYW1lLnBsYWNlQWxsQ29tcHV0ZXJTaGlwcygpO1xuICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5kcmFnQW5kRHJvcFNoaXBzKChzaGlwLCBjb29yZGluYXRlKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZSk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvQ29tcHV0ZXIoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSlcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcub25DZWxsQ2xpY2socGxheVJvdW5kKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCBwbGF5Um91bmQgPSBhc3luYyAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoIWNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogQXR0YWNrIGFscmVhZHkgcGxhY2VkYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWdhbWUuY29tcHV0ZXJCb2FyZC5pc1ZhbGlkQXR0YWNrKGNvb3JkaW5hdGUpKSByZXR1cm47XG5cbiAgICAgICAgdmlldy5ET01IZWxwZXIuZGlzYWJsZUNlbGxzKCk7ICBcbiAgICAgICAgZXhlY3V0ZVBsYXllclR1cm4oY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgY29uc3QgaXNhV2lubmVyID0gZ2FtZS5jaGVja0Zvcldpbm5lcigpO1xuICAgICAgICBpZiAoaXNhV2lubmVyKSB7XG4gICAgICAgICAgICB2aWV3LmFsZXJ0V2lubmVyKGlzYVdpbm5lcik7XG4gICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2RlbGF5IGRpc3BsYXlpbmcgcGxheWVycyBhdHRhY2sgYnkgMyBzZWNvbmRzLCBmb3Igc291bmQgZWZmZWN0cyBwdXJwb3NlcyBsYXRlclxuXG4gICAgICAgIC8vIGF3YWl0IGRlbGF5KDMwMDApO1xuXG4gICAgICAgIC8vIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIHRydWUpOyAgXG5cbiAgICAgICAgaWYgKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRMYXN0SGl0KCkgPT09ICdzaGlwJykge1xuICAgICAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tSGl0U291bmQoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDI1MDApO1xuICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSk7ICBcbiAgICAgICAgICAgIC8vaWYgdGhlIHVzZXIgY2xpY2tzIGFub3RoZXIgYXR0YWNrIGRpcmVjdGx5IGFmdGVyIHRoZSBmaXJzdCBvbmUsIHdlIHdhbnQgdG8gd2lwZSB0aGUgY3VycmVudCBleGVjdXRpb24gb2YgdGhlIHNldFVzZXJJbnN0cnVjdGlvbiBhbmQgaW5pYXRlIGEgbmV3IGluc3RydWN0aW9uLlxuICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllckhpdFJlc3BvbnNlKCkpO1xuICAgICAgICAgICAgdmlldy5zZXRIaXQoY29vcmRpbmF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3LmNvbXB1dGVyVmlld1VwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF1ZGlvU2V0dXAucGxheVJhbmRvbU1pc3NTb3VuZCgpXG4gICAgICAgIGF3YWl0IGRlbGF5KDI1MDApO1xuICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCB0cnVlKTsgIFxuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIucGxheWVyTWlzc1Jlc3BvbnNlKCkpO1xuICAgICAgICBhd2FpdCBkZWxheSgzMDAwKTtcbiAgICAgICAgdmlldy5wbGF5ZXJWaWV3VXBkYXRlKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5jb21wdXRlclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb1BsYXllcigpO1xuICAgICAgICB2aWV3LmhpZGVDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDMwMDApO1xuICAgICAgICBleGVjdXRlQ29tcHV0ZXJUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhlY3V0ZVBsYXllclR1cm4gPSAoY29vcmRpbmF0ZSkgPT4ge1xuXG4gICAgICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyLmdldE5hbWUoKTtcbiAgICAgICAgZ2FtZS5wbGF5ZXIuYXR0YWNrKFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXSk7XG4gICAgICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUuY29tcHV0ZXIuZ2V0TmFtZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBleGVjdXRlQ29tcHV0ZXJUdXJuID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2FtZS5jb21wdXRlci5hdHRhY2soKTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0Zvcldpbm5lcigpO1xuICAgICAgICBpZiAod2lubmVyKSB7XG4gICAgICAgICAgICB2aWV3LmFsZXJ0V2lubmVyKHdpbm5lcik7XG4gICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3RvIGRlbGF5IGNvbXB1dGVycyBhdHRhY2tzLCBmb3IgYWRkaW5nIGluIHNvdW5kIGVmZmVjdHMgbGF0ZXIgb25cblxuICAgICAgICAvLyBhd2FpdCBkZWxheSgzMDAwKTtcblxuICAgICAgICAvLyB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRMYXN0SGl0KCkgPT09ICdzaGlwJykge1xuICAgICAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tSGl0U291bmQoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDI1MDApO1xuICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuc2V0SGl0KHBvc2l0aW9uLGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5jb21wdXRlclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDMwMDApO1xuICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUodHJ1ZSk7XG4gICAgICAgICAgICBleGVjdXRlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tTWlzc1NvdW5kKCk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDI1MDApO1xuICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIuZW5lbXlNaXNzUmVzcG9uc2UoKSk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDMwMDApXG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuZW5hYmxlQ2VsbHMoKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBleGVjdXRlQ29tcHV0ZXJUdXJuID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgLy8gICAgIGNvbnN0IHBvc2l0aW9uID0gZ2FtZS5jb21wdXRlci5hdHRhY2soKTtcbiAgICAvLyAgICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0Zvcldpbm5lcigpO1xuICAgIC8vICAgICBpZiAod2lubmVyKSB7XG4gICAgLy8gICAgICAgICB2aWV3LmFsZXJ0V2lubmVyKHdpbm5lcik7XG4gICAgLy8gICAgICAgICByZXNldEdhbWUoKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAvL3RvIGRlbGF5IGNvbXB1dGVycyBhdHRhY2tzLCBmb3IgYWRkaW5nIGluIHNvdW5kIGVmZmVjdHMgbGF0ZXIgb25cblxuICAgIC8vICAgICAvLyBhd2FpdCBkZWxheSgzMDAwKTtcblxuXG4gICAgLy8gICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgLy8gICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmdldExhc3RIaXQoKSA9PT0gJ3NoaXAnKSB7XG4gICAgLy8gICAgICAgICB2aWV3LnNldEhpdChwb3NpdGlvbixmYWxzZSk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIuY29tcHV0ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgLy8gICAgICAgICBhd2FpdCBkZWxheSgzMDAwKTtcbiAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKHRydWUpO1xuICAgIC8vICAgICAgICAgZXhlY3V0ZUNvbXB1dGVyVHVybigpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLmVuZW15TWlzc1Jlc3BvbnNlKCkpO1xuICAgIC8vICAgICAgICAgYXdhaXQgZGVsYXkoMzAwMCk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5lbmFibGVDZWxscygpO1xuICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgIC8vICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3QgY2hlY2tTaGlwUGxhY2VtZW50ID0gKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlDb29yZGluYXRlID0gWytjb29yZGluYXRlWzBdLCArY29vcmRpbmF0ZVsxXV07XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSArc2hpcC5kYXRhc2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IGdhbWVIZWxwZXIubWFrZVNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmNhblBsYWNlU2hpcChuZXdTaGlwLCBhcnJheUNvb3JkaW5hdGUsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIudHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsKHNoaXAucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBDYW5ub3QgcGxhY2Ugc2hpcCB0aGVyZScpO1xuICAgICAgICAgICAgICAgIC8vaGFuZGxlIGEgbWlzc3BsYWNlZCBzaGlwLCB1c2VyIHRvb2x0aXAgb3IgZXJyb3IgcG9wIHVwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5jYW5QbGFjZVNoaXAobmV3U2hpcCwgYXJyYXlDb29yZGluYXRlLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci50cmFuc2l0aW9uRWxlbWVudFJlbW92YWwoc2hpcC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IENhbm5vdCBwbGFjZSBzaGlwIHRoZXJlJyk7XG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgYSBtaXNzcGxhY2VkIHNoaXAsIHVzZXIgdG9vbHRpcCBvciBlcnJvciBwb3AgdXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBnYW1lID0gR2FtZVN0YXRlKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZUdyaWRzQW5kSGVhZGluZygpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5yZXNldEdhbWVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICB2aWV3LnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZUxvb3ApO1xufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwTW9kdWxlXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZUluaXRIZWxwZXIgPSAoKSA9PiB7XG5cbiAgICAvLyBjb25zdCBwbGFjZVRlc3RTaGlwcyA9IChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDUpLCBbNCwxXSk7XG4gICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFs3LDRdKTtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgzKSwgWzIsMl0pO1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDIpLCBbOCw3XSk7XG5cbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNSksIFsyLDNdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFsxLDFdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMyksIFs5LDVdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMiksIFszLDddKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZVNoaXAgfVxufVxuXG5leHBvcnQgY29uc3QgR2FtZVN0YXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICBsZXQgcGxheWVyQ2FwdGFpbiA9IG51bGw7XG5cbiAgICBjb25zdCBwbGF5ZXJIYXNDYXB0YWluID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyQ2FwdGFpbiA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJDYXB0YWluID0gKGNhcHRhaW4pID0+IHtcbiAgICAgICAgcGxheWVyQ2FwdGFpbiA9IGNhcHRhaW47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGxheWVyQ2FwdGFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllckNhcHRhaW47XG4gICAgfVxuICAgIFxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUnlhbicsIGNvbXB1dGVyQm9hcmQsIGZhbHNlKTtcbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgcGxheWVyQm9hcmQsIHRydWUpXG5cbiAgICBjb25zdCBwbGFjZUFsbENvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg1KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg0KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgzKSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyLmdldE5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5nZXROYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgcGxheWVyLCBjb21wdXRlciwgY2hlY2tGb3JXaW5uZXIsIHBsYWNlQWxsQ29tcHV0ZXJTaGlwcywgY3VycmVudFBsYXllciwgcGxheWVySGFzQ2FwdGFpbiwgc2V0UGxheWVyQ2FwdGFpbiwgZ2V0UGxheWVyQ2FwdGFpbiB9XG59IiwiXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIG9wcG9uZW50Qm9hcmQsIGlzQ1BVID0gZmFsc2UpID0+IHtcbi8vZmFjdG9yeSBmb3Igb3VyIGRpZmZlcmVudCBwbGF5ZXJzIChpbiB0aGUgY2FzZSBvZiB0aGlzIGdhbWUgaXQgd291bGQgYmUgdGhlIHBsYXllciBhbmQgdGhlIGNvbXB1dGVyKSB3b3VsZCB0YWtlIGEgbmFtZSwgYW5kIHRoZSBvcHBvc2luZyBwbGF5ZXJzIGJvYXJkLiBTbyBpZiB3ZSBtYWtlIGEgcGxheWVyIGl0IHdvdWxkIHRha2UgaW4gdGhlIGNvbXB1dGVycyBib2FyZC5cblxuICAgIGNvbnN0IGNhY3VsYXRpb25SYW5kb21Qb3NpdGlvbiA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB2YWxpZFBvc2l0aW9ucyA9IG9wcG9uZW50Qm9hcmQuZ2V0VmFsaWRBdHRhY2tzKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmFsaWRQb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRQb3NpdGlvbnMubGVuZ3RoKV07XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChpc0NQVSkge1xuXG4gICAgICAgICAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNhY3VsYXRpb25SYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICAgICAgb3Bwb25lbnRCb2FyZC5yZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHBvbmVudEJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZSlcblxuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF0dGFjaywgZ2V0TmFtZSB9XG59IiwiLy9zaGlwIGZhY3Rvcnkgc2hvdWxkIGluY2x1ZGUgYSB0eXBlLCB3aGljaCB3ZSBjYW4gZGVmaW5lIGxhdGVyIGZyb20gdGhlIHNoaXAgdGhhdCB0aGUgdXNlciBjbGlja3Mgb24uIFxuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGNvbnN0IHNoaXBMb29rdXAgPSB7XG4gICAgICAgIDU6ICdDYXJyaWVyJyxcbiAgICAgICAgNDogJ0JhdHRsZXNoaXAnLFxuICAgICAgICAzOiAnQ3J1aXNlcicsXG4gICAgICAgIDI6ICdEZXN0cm95ZXInXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHNoaXBMb29rdXBbbGVuZ3RoXTtcbiAgICBcbiAgICBsZXQgc2hpcERpcmVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzZXRTaGlwRGlyZWN0aW9uID0gKGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBzaGlwRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBEaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwRGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGxldCBkYW1hZ2VSZWNpZXZlZCA9IDA7XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGRhbWFnZVJlY2lldmVkKys7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGRhbWFnZVJlY2lldmVkID49IGxlbmd0aDtcbiAgICBcblxuICAgIGNvbnN0IGdldERhbWFnZVJlY2lldmVkID0gKCkgPT4gZGFtYWdlUmVjaWV2ZWQ7XG5cbiAgICByZXR1cm4geyB0eXBlLCBsZW5ndGgsIGdldERhbWFnZVJlY2lldmVkLCBoaXQsIGlzU3Vuaywgc2V0U2hpcERpcmVjdGlvbiwgZ2V0U2hpcERpcmVjdGlvbiB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcblxuZ2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=