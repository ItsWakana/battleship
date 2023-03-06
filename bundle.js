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
/* harmony import */ var _assets_sounds_hit_ogg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sounds/hit.ogg */ "./src/assets/sounds/hit.ogg");
/* harmony import */ var _assets_sounds_miss_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sounds/miss.ogg */ "./src/assets/sounds/miss.ogg");
/* harmony import */ var _assets_sounds_background_waves_ogg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sounds/background-waves.ogg */ "./src/assets/sounds/background-waves.ogg");
// import miss1 from '../assets/sounds/shot-miss.mp3';
// import miss2 from '../assets/sounds/shot-miss2.mp3';
// import hit1 from '../assets/sounds/shot-hit.mp3';
// import hit2 from '../assets/sounds/shot-hit2.mp3';





const AudioSetup = () => {

    let shipHits = [];
    let shipMisses = [];

    let waves = new Audio(_assets_sounds_background_waves_ogg__WEBPACK_IMPORTED_MODULE_2__);
    const generateAudioFiles = () => {
        // shipMisses.push(new Audio(miss1));
        // shipMisses.push(new Audio(miss2));

        // shipHits.push(new Audio(hit1));
        // shipHits.push(new Audio(hit2));

        shipMisses.push(new Audio(_assets_sounds_miss_ogg__WEBPACK_IMPORTED_MODULE_1__));
        shipHits.push(new Audio(_assets_sounds_hit_ogg__WEBPACK_IMPORTED_MODULE_0__));

    }

    const playRandomHitSound = () => {
        if (shipHits.length === 0) {
            console.log('No hit sounds available');
            return;
        }
        const randomHit = shipHits[Math.floor(Math.random() * shipHits.length)];
        randomHit.volume = 0.4;
        randomHit.play();
    }

    const playRandomMissSound = () => {
        if (shipHits.length === 0) {
            console.log('No miss sounds available');
            return;
        }
        const randomMiss = shipMisses[Math.floor(Math.random() * shipMisses.length)];
        randomMiss.volume = 0.4;
        randomMiss.play();
    }

    const loopBackgroundSound = () => {
        waves.volume = 0.2;
        waves.play();

        waves.addEventListener('ended', () => {
            waves.currentTime = 0;
            waves.play();
        }, false);
    }

    return { generateAudioFiles, playRandomHitSound, playRandomMissSound, loopBackgroundSound }
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

    const speechBubbleText = (message) => {
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

    // const playerHitResponse = () => {

    //     const responses = [
    //         `"Bullseye! We've hit the enemy's vessel. Go again!"`,
    //         `"Nice shot! Enemy ship hit! This is fun, go!"`,
    //         `"Enemy ship, meet our firepower! Direct hit! Next shot!"`
    //     ]

    //     return responses[Math.floor(Math.random() * responses.length)]
    // }

    // const playerTurnResponse = () => {
    //     const responses = [
    //         `"It's your turn, captain! Fire at will!"`,
    //         `"All systems are go! Take your shot, captain."`,
    //         `"The enemy ship is in sight. You have the green light to attack."`,
    //         `"The sea is yours, captain. Show the enemy what we're made of!"`,
    //         `"We're counting on you, captain. Time to make your move."`
    //     ]

    //     return responses[Math.floor(Math.random() * responses.length)]
    // }

    // const computerTurnResponse = () => {
    //     const responses = [
    //         `"Brace for impact! The enemy is taking their shot."`,
    //         `"All hands on deck! Enemy turn to fire."`,
    //         `"Eyes on the horizon, captain. The enemy is attacking."`,
    //     ]

    //     return responses[Math.floor(Math.random() * responses.length)]
    // }

    // const userShipPlacementResponse = () => {
    //     const responses = [
    //         `"Place the ships, Cap'n!"`,
    //         `"Captain, lets place our fleet!"`,
    //         `"Let's begin placing our ships!"`,
    //     ]

    //     return responses[Math.floor(Math.random() * responses.length)]
    // }

    // const enemyMissResponse = () => {
    //     const responses = [
    //         `"They suck! How could they miss!"`,
    //         `"Damn, they missed it"`
    //     ]

    //     return responses[Math.floor(Math.random() * responses.length)]
    // }

    // const playerMissResponse = () => {
    //     const responses = [
    //         `"Ah, too bad. We go again."`,
    //         `"A miss for us, bad luck.."`
    //     ]

    //     return responses[Math.floor(Math.random() * responses.length)]
    // }


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

    return { removeGridsAndHeading, currentPlayerOutline, enableCells, disableCells, speechBubbleText, resetGameStyles, generateShipRotationControls,applyRotation, transitionElementRemoval, initializeMainDisplay, initializeCaptainPicker, removeCaptainPicker, setMainGridToPlayer, setMainGridToComputer, setNewShipContainerHeight, removeShipContainerHeight, getCaptainImages }
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
/* harmony import */ var _responses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responses */ "./src/responses.js");
// import captain1 from './assets/captains/captain1.png';
// import captain2 from './assets/captains/captain2.png';
// import captain3 from './assets/captains/captain3.png';




const View = () => {

    let playerCells;
    let computerCells;

    const DOMHelper = (0,_DOM_Helper_Modules_DOMHelper__WEBPACK_IMPORTED_MODULE_0__.DOMHelperCreation)();
    const response = (0,_responses__WEBPACK_IMPORTED_MODULE_1__.AvatarResponses)();

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

    const handlePlayerHitState = (coordinate) => {
        DOMHelper.speechBubbleText(response.playerHitResponse());
        setHit(coordinate, true);
        computerViewUpdate();
    }

    const handlePlayerMissState = () => {
        playerViewUpdate();
        DOMHelper.speechBubbleText(response.computerTurnResponse());
        DOMHelper.setMainGridToPlayer();
        hideCaptainAvatar();
    }

    const setHit = (coordinate, isPlayer) => {

        if (isPlayer) {
            const element = document.querySelector(
                `[data-player="computer"][data-xy-pos="${coordinate}"]`);
            const child = element.querySelector('.attack-marker');
            child.classList.add('computer-ship-hit');
        } else {
            coordinate = coordinate.join('');
            const element = document.querySelector(
                `[data-player="player"][data-xy-pos="${coordinate}"]`);
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
                    cell.style.backgroundColor = 'red';
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

    return { DOMHelper, response, startButton, onCellClick, updateBoard, alertWinner, playerViewUpdate, computerViewUpdate, dragAndDropShips, setPlayerAndComputerCells, setHit, displayCaptainAvatar, hideCaptainAvatar, showCaptainAvatar, handlePlayerHitState, handlePlayerMissState }
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

    // let lastHit = null;
    let lastHit = {
        ship: null,
    }

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
                // lastHit = null;
                lastHit['ship'] = null; 
            }

            if (typeof boardItem === 'object') {
                boardItem.hit();
                lastHit['ship'] = coordinate;
                // lastHit = 'ship';
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

    const playGame = () => {
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
        audioSetup.loopBackgroundSound();
        view.DOMHelper.setMainGridToPlayer();
        view.DOMHelper.generateShipRotationControls((shipElement) => {
            view.DOMHelper.applyRotation(shipElement);
        });
        view.displayCaptainAvatar(captainChoice);
        view.DOMHelper.speechBubbleText(view.response.shipPlacementResponse());
        view.hideCaptainAvatar();
        view.setPlayerAndComputerCells();

        game.placeAllComputerShips();

        await shipPlacementHandler();
        view.onCellClick(gameLoop);
        // view.dragAndDropShips((ship, coordinate) => {
        //     checkShipPlacement(ship, coordinate);

        //     view.updateBoard(game.playerBoard.getBoard(), false);
            
        //     if (game.playerBoard.allShipsPlaced()) {
        //         view.DOMHelper.removeShipContainerHeight();

        //         view.DOMHelper.setMainGridToComputer();
        //         view.showCaptainAvatar();
        //         view.DOMHelper.currentPlayerOutline(false);
        //         view.DOMHelper.speechBubbleText(view.DOMHelper.playerTurnResponse());
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
                    view.DOMHelper.speechBubbleText(view.response.playerTurnResponse());
                    view.updateBoard(game.computerBoard.getBoard(), true);
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
    }

    const gameLoop = async (coordinate) => {
        if (!coordinate) {
            console.log(`Error: Attack already placed`);
            return;
        }

        if (!game.computerBoard.isValidAttack(coordinate)) return;

        view.DOMHelper.disableCells();  
        game.player.attack([coordinate[0], coordinate[1]]);


        const isaWinner = game.checkForWinner();
        if (isaWinner) {
            view.alertWinner(isaWinner);
            resetGame();
            return;
        }

        if (game.computerBoard.getLastHit()['ship']) {
            audioSetup.playRandomHitSound();
            await delay(delayTime.waitForSound);
            view.updateBoard(game.computerBoard.getBoard(), true);  
            view.handlePlayerHitState(coordinate);
            return;
        }
        audioSetup.playRandomMissSound()
        await delay(delayTime.waitForSound);
        view.updateBoard(game.computerBoard.getBoard(), true);  
        view.DOMHelper.speechBubbleText(view.response.playerMissResponse());
        await delay(delayTime.waitForSpeech);
        view.handlePlayerMissState();
        await delay(3000);
        handleComputerTurn();
    }
    
    const handleComputerTurn = async () => {

        //first check if the last hit the computer made was a ship, if it was. We want to make a new attack that picks a random attack adjacent to the previous coordinate. So above it, below it or next to it.
        let attackPosition;
        if (game.playerBoard.getLastHit()['ship']) {
            attackPosition = game.computer.attackAdjacentCell(game.playerBoard.getLastHit()['ship']);   
        } else {
            attackPosition = game.computer.attack();
        }

        const winner = game.checkForWinner();
        if (winner) {
            view.alertWinner(winner);
            resetGame();
            return;
        }

        if (game.playerBoard.getLastHit()['ship']) {
            audioSetup.playRandomHitSound();
            await delay(delayTime.waitForSound);
            view.updateBoard(game.playerBoard.getBoard(), false);
            view.setHit(attackPosition,false);
            view.DOMHelper.speechBubbleText(view.response.computerTurnResponse());
            await delay(delayTime.waitForSpeech); // wait for message prompt to finish before switching turns
            view.DOMHelper.currentPlayerOutline(true);
            handleComputerTurn();
            return;
        }

        audioSetup.playRandomMissSound();
        await delay(delayTime.waitForSound);
        view.updateBoard(game.playerBoard.getBoard(), false);
        view.DOMHelper.speechBubbleText(view.response.computerMissResponse());
        await delay(delayTime.waitForSpeech); // wait for message prompt to finish before switching turns
        view.DOMHelper.currentPlayerOutline(false);
        view.DOMHelper.enableCells();
        view.DOMHelper.speechBubbleText(view.response.playerTurnResponse());
        view.DOMHelper.setMainGridToComputer();
        view.showCaptainAvatar();
    }

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

    const delayTime = {
        waitForSpeech: 2500,
        waitForSound: 2500
    }

    const resetGame = () => {
        gameStarted = false;
        game = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState)();
        view.DOMHelper.removeGridsAndHeading();
        view.DOMHelper.resetGameStyles();
    }

    view.startButton.addEventListener('click', playGame);
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

    const calculateAdjacentPosition = (coordinate) => {
        //y coordinate first, then x
        const validPositions = opponentBoard.getValidAttacks();
        // const adjacentPositions = [
        //     [coordinate[0] - 1, coordinate[1]],
        //     [coordinate[0] + 1, coordinate[1]],
        //     [coordinate[0], coordinate[1] - 1],
        //     [coordinate[0], coordinate[1] + 1],
        // ]
        const adjacentPositions = [
            [Number(coordinate[0]) - 1, Number(coordinate[1])],
            [Number(coordinate[0]) + 1, Number(coordinate[1])],
            [Number(coordinate[0]), Number(coordinate[1]) - 1],
            [Number(coordinate[0]), Number(coordinate[1]) + 1],
        ]
        // console.log(adjacentPositions)
        let randomPosition = adjacentPositions[Math.floor(Math.random() * adjacentPositions.length)];

        let randomPositionString = JSON.stringify(randomPosition);


        while (!validPositions.some((validPosition) => JSON.stringify(validPosition) === randomPositionString)) {
            randomPosition = adjacentPositions[Math.floor(Math.random() * adjacentPositions.length)];

            randomPositionString = JSON.stringify(randomPosition);
        }
        // while (!validPositions.includes(randomPosition)) {
        //     randomPosition = adjacentPositions[Math.floor(Math.random() * adjacentPositions.length)];
        // }

        return randomPosition;
        //1 above
        //1 below
        //1 to the left
        //1 to the right
    }

    const attack = (coordinate) => {
        if (isCPU) {

            const randomPosition = caculationRandomPosition();
            opponentBoard.recieveAttack(randomPosition);

            return randomPosition;
        }
        return opponentBoard.recieveAttack(coordinate)

    }

    const attackAdjacentCell = (coordinate) => {
        console.log(coordinate);
        const randomAdjacentCell = calculateAdjacentPosition(coordinate);

        opponentBoard.recieveAttack(randomAdjacentCell);
        console.log(randomAdjacentCell);
        return randomAdjacentCell;
    }

    const getName = () => {
        return name;
    }

    return { attack, getName, attackAdjacentCell }
}

/***/ }),

/***/ "./src/responses.js":
/*!**************************!*\
  !*** ./src/responses.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarResponses": () => (/* binding */ AvatarResponses)
/* harmony export */ });
const AvatarResponses = () => {

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
    
    const shipPlacementResponse = () => {
        const responses = [
            `"Place the ships, Cap'n!"`,
            `"Captain, lets place our fleet!"`,
            `"Let's begin placing our ships!"`,
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const computerMissResponse = () => {
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

    return {
        playerHitResponse,
        playerMissResponse,
        playerTurnResponse,
        computerMissResponse,
        computerTurnResponse,
        shipPlacementResponse
    }
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

/***/ "./src/assets/sounds/background-waves.ogg":
/*!************************************************!*\
  !*** ./src/assets/sounds/background-waves.ogg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/background-waves.ogg";

/***/ }),

/***/ "./src/assets/sounds/hit.ogg":
/*!***********************************!*\
  !*** ./src/assets/sounds/hit.ogg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hit.ogg";

/***/ }),

/***/ "./src/assets/sounds/miss.ogg":
/*!************************************!*\
  !*** ./src/assets/sounds/miss.ogg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/miss.ogg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssa0JBQWtCLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFP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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDcEVPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7QUMzRU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBa0Q7O0FBRWxELCtEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQXVkaW8gTW9kdWxlcy9hdWRpb0NyZWF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NIEhlbHBlciBNb2R1bGVzL0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NIEhlbHBlciBNb2R1bGVzL0RPTUhlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lU3RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZXNwb25zZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwTW9kdWxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNscjogcmdiKDYsIDE4LCAzMSk7XFxuICAgIC0tZ3JpZC1ib3JkZXItY2xyOiByZ2IoMjIsIDQ3LCA3Myk7XFxuICAgIC0tc2hpcC1ib3JkZXItY2xyOiAjYzRjZTM1O1xcbiAgICAtLWJveC1ob3Zlci1jbHI6IHJnYigzMiwgNTcsIDgzKTtcXG4gICAgLS1zaGlwLWNscjogcmdiKDM2LCA2MCwgODUpO1xcbiAgICAtLXNlY29uZGFyeS1jbHI6ICNjZWU2MWM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxufVxcblxcbi5pbi1wcm9ncmVzcyB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNDByZW07XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7IFxcbn0gKi9cXG5cXG4uY2FwdGFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRvcDogLTEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTtcXG4gIH1cXG5cXG5cXG5cXG4vKiAuY2FwdGFpbi1hdmF0YXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAyMHB4O1xcbn0gKi9cXG5cXG4uY2FwdGFpbi1hdmF0YXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2FwdGFpbi1ib2FyZC1hdmF0YXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00My41JTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNoaXAtYm9yZGVyLWNscik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyA7XFxufVxcblxcbi8qIC5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufSAqL1xcblxcbi5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMyU7XFxuICAgIC8qIGJvdHRvbTogNyU7ICovXFxuICAgIGJvdHRvbTogMzAlO1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICB9XFxuXFxuLmNhcHRhaW4tbWVzc2FnZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2tldygtNjBkZWcpO1xcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tc2Vjb25kYXJ5LWNscikgdHJhbnNwYXJlbnQ7XFxufVxcbiAgXFxuXFxuLmNhcHRhaW4taW1hZ2Uge1xcbiAgICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcblxcbn1cXG5cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIC8qIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTsgKi9cXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW4ge1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zaGlwLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gKi9cXG5cXG4vKiAuY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufSAqL1xcblxcbi5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMCk7ICovXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XFxuICAgIG1heC13aWR0aDogODUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2U6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuXFxuLmNhcHRhaW4tbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcGVhciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbjpob3ZlciB7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7ICovXFxufVxcbi5jYXB0YWluLWNvbnRhaW5lci52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwcmVtO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0LFxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTtcXG5cXG5cXG59ICovXFxuXFxuLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1pbi13aWR0aDogOTVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICBmb250LXNpemU6IDAuNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTtcXG59XFxuXFxuLmdyaWQubGVmdC5jdXJyZW50LFxcbi5ncmlkLnJpZ2h0LmN1cnJlbnQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuLyogLmdyaWQubGVmdCB7XFxuICAgIG1pbi13aWR0aDogOTVweDtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmdyaWQucmlnaHQge1xcbiAgICB3aWR0aDogNzAlO1xcbn0gKi9cXG5cXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0LFxcbi5ncmlkLmxlZnQuZmFkZS1vdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDcwMG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0LmhpZGUsXFxuLmdyaWQucmlnaHQuZmFkZS1vdXQuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ncmlkLmxlZnQudmlzaWJsZSxcXG4uZ3JpZC5yaWdodC52aXNpYmxlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLyogLmdyaWQubGVmdC5kaXNhYmxlZCxcXG4uZ3JpZC5yaWdodC5kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn0gKi9cXG5cXG4ucm93IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLmJveCxcXG4ub3V0ZXItYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJnYig1NiwgNTgsIDcwKTsgKi9cXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyBlYXNlO1xcbn1cXG5cXG4vKiAuYm94IC5kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn0gKi9cXG5cXG4uZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmJveC5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1ob3Zlci1jbHIpO1xcbn1cXG5cXG4uYm94LnBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXNoaXAtYm9yZGVyLWNscik7XFxuXFxufVxcblxcbi5ib3gucGxhY2VkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtc3F1YXJlLWhvcml6b250YWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnNoaXAtc3F1YXJlLXZlcnRpY2FsIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi5vdXRlci1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hdHRhY2stbWFya2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1oaXQtbWFya2VyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQsXFxuLmNvbXB1dGVyLXNoaXAtaGl0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxufVxcblxcbi5jb21wdXRlci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi50cmFuc2l0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgLyogcGFkZGluZy10b3A6IDEwcHg7ICovXFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDcwMG1zIGVhc2U7XFxufVxcblxcbi5zaGlwLW1haW4tY29udGFpbmVyLmV4cGFuZCB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4uc2hpcC1zdWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5kZXRhaWwge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50OmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxufVxcblxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTIge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMyB7XFxuICAgIHdpZHRoOiA3MHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00IHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQudmVydGljYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTIudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygxMDAlICsgLTU1cHgpKTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoODMlKSBzZXBpYSg4MiUpIHNhdHVyYXRlKDQ2MCUpIGh1ZS1yb3RhdGUoN2RlZykgYnJpZ2h0bmVzcyg4NyUpIGNvbnRyYXN0KDEwOCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24uYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG59XFxuXFxuLyogLnNoaXAtZWxlbWVudC5sZW5ndGgtMi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufSAqL1xcblxcbi5pbnZpc2libGUge1xcbiAgICBzY2FsZTogMDtcXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG59XFxuXFxuLm1vdmUtcG9zaXRpb24ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTUlKTtcXG4gICAgd2lkdGg6IDk0JTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7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Q2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWJhY2tncm91bmQtY2xyOiByZ2IoNiwgMTgsIDMxKTtcXG4gICAgLS1ncmlkLWJvcmRlci1jbHI6IHJnYigyMiwgNDcsIDczKTtcXG4gICAgLS1zaGlwLWJvcmRlci1jbHI6ICNjNGNlMzU7XFxuICAgIC0tYm94LWhvdmVyLWNscjogcmdiKDMyLCA1NywgODMpO1xcbiAgICAtLXNoaXAtY2xyOiByZ2IoMzYsIDYwLCA4NSk7XFxuICAgIC0tc2Vjb25kYXJ5LWNscjogI2NlZTYxYztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5zdGFydC1nYW1lIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zdGFydC1nYW1lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG59XFxuXFxuLmluLXByb2dyZXNzIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTsgXFxufSAqL1xcblxcbi5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbiAgfVxcblxcblxcblxcbi8qIC5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxufSAqL1xcblxcbi5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXB0YWluLWJvYXJkLWF2YXRhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQzLjUlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIDtcXG59XFxuXFxuLyogLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59ICovXFxuXFxuLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDEzJTtcXG4gICAgLyogYm90dG9tOiA3JTsgKi9cXG4gICAgYm90dG9tOiAzMCU7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gIH1cXG5cXG4uY2FwdGFpbi1tZXNzYWdlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBza2V3KC02MGRlZyk7XFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1zZWNvbmRhcnktY2xyKSB0cmFuc3BhcmVudDtcXG59XFxuICBcXG5cXG4uY2FwdGFpbi1pbWFnZSB7XFxuICAgIC8qIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxMHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuXFxufVxcblxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAqL1xcblxcbi8qIC5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59ICovXFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcXG4gICAgbWF4LXdpZHRoOiA4NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uY2FwdGFpbi1uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluOmhvdmVyIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTsgKi9cXG59XFxuLmNhcHRhaW4tY29udGFpbmVyLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDByZW07XFxufVxcbi8qIC5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcblxcblxcbn0gKi9cXG5cXG4uZ3JpZC5sZWZ0LFxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC40cmVtO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LmN1cnJlbnQsXFxuLmdyaWQucmlnaHQuY3VycmVudCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0IHtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uZ3JpZC5yaWdodCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufSAqL1xcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQsXFxuLmdyaWQubGVmdC5mYWRlLW91dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNzAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQuaGlkZSxcXG4uZ3JpZC5yaWdodC5mYWRlLW91dC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdyaWQubGVmdC52aXNpYmxlLFxcbi5ncmlkLnJpZ2h0LnZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0LmRpc2FibGVkLFxcbi5ncmlkLnJpZ2h0LmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufSAqL1xcblxcbi5yb3cge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uYm94LFxcbi5vdXRlci1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDU2LCA1OCwgNzApOyAqL1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2U7XFxufVxcblxcbi8qIC5ib3ggLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufSAqL1xcblxcbi5kaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uYm94LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWhvdmVyLWNscik7XFxufVxcblxcbi5ib3gucGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG5cXG59XFxuXFxuLmJveC5wbGFjZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAwLjVyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtdmVydGljYWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm91dGVyLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmF0dGFjay1tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWhpdC1tYXJrZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdCxcXG4uY29tcHV0ZXItc2hpcC1oaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnRyYW5zaXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNzAwbXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIuZXhwYW5kIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaGlwLXN1Yi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQge1xcbiAgICB3aWR0aDogOTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNSB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC52ZXJ0aWNhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKDEwMCUgKyAtNTVweCkpO1xcbiAgICBmaWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDgyJSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSg3ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoMTA4JSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4vKiAuc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59ICovXFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHNjYWxlOiAwO1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcbn1cXG5cXG4ubW92ZS1wb3NpdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NSUpO1xcbiAgICB3aWR0aDogOTQlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IG1pc3MxIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvc2hvdC1taXNzLm1wMyc7XG4vLyBpbXBvcnQgbWlzczIgZnJvbSAnLi4vYXNzZXRzL3NvdW5kcy9zaG90LW1pc3MyLm1wMyc7XG4vLyBpbXBvcnQgaGl0MSBmcm9tICcuLi9hc3NldHMvc291bmRzL3Nob3QtaGl0Lm1wMyc7XG4vLyBpbXBvcnQgaGl0MiBmcm9tICcuLi9hc3NldHMvc291bmRzL3Nob3QtaGl0Mi5tcDMnO1xuXG5pbXBvcnQgbmV3SGl0MSBmcm9tICcuLi9hc3NldHMvc291bmRzL2hpdC5vZ2cnO1xuaW1wb3J0IG5ld01pc3MxIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvbWlzcy5vZ2cnO1xuaW1wb3J0IGJhY2tncm91bmRXYXZlcyBmcm9tICcuLi9hc3NldHMvc291bmRzL2JhY2tncm91bmQtd2F2ZXMub2dnJztcblxuZXhwb3J0IGNvbnN0IEF1ZGlvU2V0dXAgPSAoKSA9PiB7XG5cbiAgICBsZXQgc2hpcEhpdHMgPSBbXTtcbiAgICBsZXQgc2hpcE1pc3NlcyA9IFtdO1xuXG4gICAgbGV0IHdhdmVzID0gbmV3IEF1ZGlvKGJhY2tncm91bmRXYXZlcyk7XG4gICAgY29uc3QgZ2VuZXJhdGVBdWRpb0ZpbGVzID0gKCkgPT4ge1xuICAgICAgICAvLyBzaGlwTWlzc2VzLnB1c2gobmV3IEF1ZGlvKG1pc3MxKSk7XG4gICAgICAgIC8vIHNoaXBNaXNzZXMucHVzaChuZXcgQXVkaW8obWlzczIpKTtcblxuICAgICAgICAvLyBzaGlwSGl0cy5wdXNoKG5ldyBBdWRpbyhoaXQxKSk7XG4gICAgICAgIC8vIHNoaXBIaXRzLnB1c2gobmV3IEF1ZGlvKGhpdDIpKTtcblxuICAgICAgICBzaGlwTWlzc2VzLnB1c2gobmV3IEF1ZGlvKG5ld01pc3MxKSk7XG4gICAgICAgIHNoaXBIaXRzLnB1c2gobmV3IEF1ZGlvKG5ld0hpdDEpKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHBsYXlSYW5kb21IaXRTb3VuZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhpdCBzb3VuZHMgYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZG9tSGl0ID0gc2hpcEhpdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcEhpdHMubGVuZ3RoKV07XG4gICAgICAgIHJhbmRvbUhpdC52b2x1bWUgPSAwLjQ7XG4gICAgICAgIHJhbmRvbUhpdC5wbGF5KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheVJhbmRvbU1pc3NTb3VuZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1pc3Mgc291bmRzIGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmRvbU1pc3MgPSBzaGlwTWlzc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoaXBNaXNzZXMubGVuZ3RoKV07XG4gICAgICAgIHJhbmRvbU1pc3Mudm9sdW1lID0gMC40O1xuICAgICAgICByYW5kb21NaXNzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb29wQmFja2dyb3VuZFNvdW5kID0gKCkgPT4ge1xuICAgICAgICB3YXZlcy52b2x1bWUgPSAwLjI7XG4gICAgICAgIHdhdmVzLnBsYXkoKTtcblxuICAgICAgICB3YXZlcy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHdhdmVzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHdhdmVzLnBsYXkoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdlbmVyYXRlQXVkaW9GaWxlcywgcGxheVJhbmRvbUhpdFNvdW5kLCBwbGF5UmFuZG9tTWlzc1NvdW5kLCBsb29wQmFja2dyb3VuZFNvdW5kIH1cbn0iLCJcbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50Q3JlYXRvciA9ICgpID0+IHtcblxuICAgIGNvbnN0IG9uZUVsZW1lbnQgPSAoY2xhc3NUaXRsZSwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc1RpdGxlO1xuICAgIFxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBtdWx0aXBsZUVsZW1lbnRzID0gKGVsZW1lbnQsIHF0eSkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHF0eTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGFyci5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBvbmVFbGVtZW50LCBtdWx0aXBsZUVsZW1lbnRzIH1cbn1cbiIsImltcG9ydCByb3RhdGUgZnJvbSAnLi4vYXNzZXRzL3JvdGF0ZS5zdmcnO1xuaW1wb3J0IGNhcHRhaW4xIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMS5wbmcnO1xuaW1wb3J0IGNhcHRhaW4yIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMi5wbmcnO1xuaW1wb3J0IGNhcHRhaW4zIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMy5wbmcnO1xuXG5pbXBvcnQgeyBDdXN0b21FbGVtZW50Q3JlYXRvciB9IGZyb20gJy4vRE9NQ3JlYXRpb24nO1xuXG5leHBvcnQgY29uc3QgRE9NSGVscGVyQ3JlYXRpb24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjcmVhdG9yID0gQ3VzdG9tRWxlbWVudENyZWF0b3IoKTtcblxuICAgIGxldCBwbGF5ZXJCb2FyZDtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZDtcblxuICAgIC8vbW9kdWxlIGZvciBxdWVyeVNlbGVjdG9yIHJlZmVyZW5jZXNcblxuICAgIGNvbnN0IG1haW5Ub3BDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuICAgIC8vIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgIFxuICAgIGNvbnN0IGluaXRpYWxpemVNYWluRGlzcGxheSA9ICgpID0+IHtcblxuICAgICAgICBnZW5lcmF0ZUdyaWRzKCk7XG4gICAgICAgIHNldEluR2FtZVN0eWxlcygpO1xuICAgICAgICBnZW5lcmF0ZVNoaXBFbGVtZW50cygpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5ld1NoaXBDb250YWluZXJIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpXG4gICAgICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgIHNoaXBNYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBNYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtbWFpbi1jb250YWluZXInKVxuICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQnKVxuICAgIH1cblxuICAgIGNvbnN0IHNldE1haW5HcmlkVG9QbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWFpbkdyaWRUb0NvbXB1dGVyID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemVDYXB0YWluUGlja2VyID0gYXN5bmMgKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5Db250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2NhcHRhaW4tY29udGFpbmVyJywgJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUGljayB5b3VyIGxpZXV0ZW5hbnQhJ1xuICAgICAgICBjYXB0YWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbWFpblRvcENvbnRhaW5lci5hcHBlbmQoY2FwdGFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHNldEluR2FtZVN0eWxlcygpO1xuICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlmdC1kb3duJyk7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNhcHRhaW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICBcbiAgICAgICAgY3JlYXRlQ2FwdGFpbnMoY2FwdGFpbkNvbnRhaW5lciwgY2FsbGJhY2spO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFRyYW5zaXRpb25Db250YWluZXJUb3ApO1xuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2FwdGFpblBpY2tlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNhcHRhaW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBzZXREZWZhdWx0Q29udGFpbmVyU2l6ZSgpO1xuXG4gICAgICAgIGNhcHRhaW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNhcHRhaW5Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2FwdGFpbkltYWdlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFsgY2FwdGFpbjEsIGNhcHRhaW4yLCBjYXB0YWluMyBdXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ2FwdGFpbnMgPSAoY29udGFpbmVyLCBjYWxsYmFjaykgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXJzID0gY3JlYXRvci5vbmVFbGVtZW50KCdjYXB0YWluLWF2YXRhcnMnLCAnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgY2FwdGFpbnMgPSBjcmVhdG9yLm11bHRpcGxlRWxlbWVudHMoJ2RpdicsIDMpO1xuICAgICAgICBjb25zdCBjYXB0YWluTmFtZXMgPSBbJ1RlZCcsICdEb25hbGQnLCAnQnVydCddXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjYXB0YWluIG9mIGNhcHRhaW5zKSB7XG4gICAgICAgICAgICAgICAgY2FwdGFpbi5jbGFzc05hbWUgPSAnY2FwdGFpbic7XG4gICAgICAgICAgICAgICAgLy8gY2FwdGFpbi50ZXh0Q29udGVudCA9IGBjYXB0YWluJHtjb3VudGVyfWA7XG4gICAgICAgICAgICAgICAgY2FwdGFpbi5kYXRhc2V0LmNhcHRhaW4gPSBjb3VudGVyO1xuICAgICAgICAgICAgICAgIGNhcHRhaW5BdmF0YXJzLmFwcGVuZENoaWxkKGNhcHRhaW4pO1xuXG4gICAgICAgICAgICAgICAgY2FwdGFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soY2FwdGFpbi5kYXRhc2V0LmNhcHRhaW4pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXZhdGFySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBhdmF0YXJJbWFnZS5zcmMgPSBnZXRDYXB0YWluSW1hZ2VzKClbY291bnRlcl07XG4gICAgICAgICAgICAgICAgYXZhdGFySW1hZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhcHRhaW4tbmFtZSc7XG4gICAgICAgICAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXB0YWluTmFtZXNbY291bnRlcisrXTtcbiAgICAgICAgICAgICAgICAvLyBhdmF0YXJJbWFnZS5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBhdmF0YXJJbWFnZS5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXB0YWluLmFwcGVuZChhdmF0YXJJbWFnZSwgbmFtZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNhcHRhaW5BdmF0YXJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlR3JpZFNxdWFyZXMgPSAoY29udGFpbmVyLCBpc0NvbXBHcmlkKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTE7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRvci5vbmVFbGVtZW50KCdyb3cnLCAnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDExOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm94ID0gY3JlYXRvci5vbmVFbGVtZW50KCdib3gnLCAnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYm94KVxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmRhdGFzZXQueHlQb3MgPSBgJHtqLTF9JHtpLTF9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBHcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LmRhdGFzZXQucGxheWVyID0gJ2NvbXB1dGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LmRhdGFzZXQucGxheWVyID0gJ3BsYXllcic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdvdXRlci1ib3gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmRhdGFzZXQucGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnb3V0ZXItYm94JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0LnBsYXllciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBzZXRBbHBoYWJldFtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXREZWZhdWx0Q29udGFpbmVyU2l6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHRyYW5zaXRpb25Db250YWluZXIuc3R5bGUudG9wID0gJzB2aCc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCA9ICgpID0+IHtcblxuICAgICAgICAvLyBjb25zdCBtYWluQm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZHNIZWlnaHQgPSBtYWluVG9wQ29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtnYW1lYm9hcmRzSGVpZ2h0ICsgMzV9cHhgO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEFscGhhYmV0ID0ge1xuICAgICAgICAxOiAnQScsXG4gICAgICAgIDI6ICdCJyxcbiAgICAgICAgMzogJ0MnLFxuICAgICAgICA0OiAnRCcsXG4gICAgICAgIDU6ICdFJyxcbiAgICAgICAgNjogJ0YnLFxuICAgICAgICA3OiAnRycsXG4gICAgICAgIDg6ICdIJyxcbiAgICAgICAgOTogJ0knLFxuICAgICAgICAxMDogJ0onXG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVHcmlkcyA9ICgpID0+IHtcblxuICAgICAgICAvLyBjb25zdCBtYWluQm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgXG4gICAgICAgIHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTmFtZSA9ICdncmlkIGxlZnQnO1xuICAgICAgICBcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc05hbWUgPSAnZ3JpZCByaWdodCc7XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJCb2FyZC5kYXRhc2V0LmdyaWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIG1ha2VHcmlkU3F1YXJlcyhwbGF5ZXJCb2FyZCwgZmFsc2UpO1xuICAgICAgICBtYWtlR3JpZFNxdWFyZXMoY29tcHV0ZXJCb2FyZCwgdHJ1ZSk7XG5cbiAgICAgICAgbWFpblRvcENvbnRhaW5lci5hcHBlbmQocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpO1xuXG4gICAgICAgIC8vIHNldFRyYW5zaXRpb25Db250YWluZXJUb3AoKTtcblxuICAgICAgICAvLyB0cmFuc2l0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWRvd24nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWRvd24nKTtcbiAgICAgICAgfSwzMCk7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVNoaXBFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtbWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAvLyBjb25zdCB0aXRsZSA9IGNyZWF0b3Iub25lRWxlbWVudCgndXNlci1pbnN0cnVjdGlvbicsICdoMicpO1xuICAgICAgICAvLyB0aXRsZS50ZXh0Q29udGVudCA9ICdEcmFnIHlvdXIgZmxlZXQgb250byB0aGUgYmF0dGxlZmllbGQsIGNhcHRhaW4hJ1xuICAgICAgICAvLyBzaGlwRWxlbWVudEFyZWEuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBjcmVhdG9yLm11bHRpcGxlRWxlbWVudHMoJ2RpdicsIDQpO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LDQsMywyXTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwLCBpKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQubGVuZ3RoID0gc2hpcExlbmd0aHNbaV07XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTmFtZSA9ICdzaGlwLWVsZW1lbnQnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoYGxlbmd0aC0ke3NoaXAuZGF0YXNldC5sZW5ndGh9YCk7XG4gICAgICAgICAgICBzaGlwRWxlbWVudEFyZWEuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgZGV0YWlscyB0byBwbGFjZSBvbiB0aGUgc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAuZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRldGFpbC5jbGFzc05hbWUgPSAnZGV0YWlsJztcbiAgICAgICAgICAgICAgICBzaGlwLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBNYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtbWFpbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBzaGlwU3ViQ29udGFpbmVyID0gY3JlYXRvci5vbmVFbGVtZW50KCdzaGlwLXN1Yi1jb250YWluZXInLCAnZGl2Jyk7XG5cbiAgICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1lbGVtZW50Jyk7XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcE1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3NoaXAtZWxlbWVudC1jb250YWluZXInLCAnZGl2Jyk7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgICAgICAgICBzaGlwU3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3JvdGF0ZS1idXR0b24nLCAnaW1nJyk7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uc3JjID0gcm90YXRlO1xuICAgICAgICAgICAgcm90YXRlQnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzaGlwKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VPcmllbnRhdGlvbihzaGlwKTtcbiAgICAgICAgICAgICAgICAvLyBhcHBseVJvdGF0aW9uKHNoaXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFN1YkNvbnRhaW5lcik7XG4gICAgXG4gICAgfVxuXG5cbiAgICBjb25zdCBhcHBseVJvdGF0aW9uID0gKHNoaXBFbGVtZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKHNoaXBFbGVtZW50LmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUdyaWRzQW5kSGVhZGluZyA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICBzZXREZWZhdWx0Q29udGFpbmVyU2l6ZSgpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoc2hpcENvbnRhaW5lcikge1xuICAgICAgICAgICAgd2hpbGUgKHNoaXBDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgc2hpcENvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItaW5zdHJ1Y3Rpb24nKTtcbiAgICAgICAgLy8gaGVhZGluZy5yZW1vdmUoKTtcblxuXG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZUNlbGxzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcblxuICAgICAgICBjb25zdCBlbmFibGVkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG4gICAgICAgIGVuYWJsZWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVuYWJsZUNlbGxzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcblxuICAgICAgICBjb25zdCBkaXNhYmxlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpO1xuXG4gICAgICAgIGRpc2FibGVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UGxheWVyT3V0bGluZSA9IChpc1BsYXllcnNUdXJuKSA9PiB7XG4gICAgICAgIGlmIChpc1BsYXllcnNUdXJuKSB7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnc29saWQgM3B4IHJlZCc7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnN0eWxlLmJvcmRlciA9ICczcHggdHJhbnNwYXJlbnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnc29saWQgM3B4IGdyZWVuJztcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnN0eWxlLmJvcmRlciA9ICczcHggdHJhbnNwYXJlbnQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlZWNoQnViYmxlVGV4dCA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnN0cnVjdGlvbicpO1xuICAgICAgICBjb25zdCBjYXB0YWluU3BlZWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tbWVzc2FnZScpO1xuICAgICAgICBjYXB0YWluU3BlZWNoLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHNwZWVkID0gNTA7XG4gICAgICAgIGNvbnN0IHR5cGVXcml0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA8IG1lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCArPSBtZXNzYWdlLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCA1MDApO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHBsYXllckhpdFJlc3BvbnNlID0gKCkgPT4ge1xuXG4gICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAvLyAgICAgICAgIGBcIkJ1bGxzZXllISBXZSd2ZSBoaXQgdGhlIGVuZW15J3MgdmVzc2VsLiBHbyBhZ2FpbiFcImAsXG4gICAgLy8gICAgICAgICBgXCJOaWNlIHNob3QhIEVuZW15IHNoaXAgaGl0ISBUaGlzIGlzIGZ1biwgZ28hXCJgLFxuICAgIC8vICAgICAgICAgYFwiRW5lbXkgc2hpcCwgbWVldCBvdXIgZmlyZXBvd2VyISBEaXJlY3QgaGl0ISBOZXh0IHNob3QhXCJgXG4gICAgLy8gICAgIF1cblxuICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHBsYXllclR1cm5SZXNwb25zZSA9ICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgIC8vICAgICAgICAgYFwiSXQncyB5b3VyIHR1cm4sIGNhcHRhaW4hIEZpcmUgYXQgd2lsbCFcImAsXG4gICAgLy8gICAgICAgICBgXCJBbGwgc3lzdGVtcyBhcmUgZ28hIFRha2UgeW91ciBzaG90LCBjYXB0YWluLlwiYCxcbiAgICAvLyAgICAgICAgIGBcIlRoZSBlbmVteSBzaGlwIGlzIGluIHNpZ2h0LiBZb3UgaGF2ZSB0aGUgZ3JlZW4gbGlnaHQgdG8gYXR0YWNrLlwiYCxcbiAgICAvLyAgICAgICAgIGBcIlRoZSBzZWEgaXMgeW91cnMsIGNhcHRhaW4uIFNob3cgdGhlIGVuZW15IHdoYXQgd2UncmUgbWFkZSBvZiFcImAsXG4gICAgLy8gICAgICAgICBgXCJXZSdyZSBjb3VudGluZyBvbiB5b3UsIGNhcHRhaW4uIFRpbWUgdG8gbWFrZSB5b3VyIG1vdmUuXCJgXG4gICAgLy8gICAgIF1cblxuICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGNvbXB1dGVyVHVyblJlc3BvbnNlID0gKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgLy8gICAgICAgICBgXCJCcmFjZSBmb3IgaW1wYWN0ISBUaGUgZW5lbXkgaXMgdGFraW5nIHRoZWlyIHNob3QuXCJgLFxuICAgIC8vICAgICAgICAgYFwiQWxsIGhhbmRzIG9uIGRlY2shIEVuZW15IHR1cm4gdG8gZmlyZS5cImAsXG4gICAgLy8gICAgICAgICBgXCJFeWVzIG9uIHRoZSBob3Jpem9uLCBjYXB0YWluLiBUaGUgZW5lbXkgaXMgYXR0YWNraW5nLlwiYCxcbiAgICAvLyAgICAgXVxuXG4gICAgLy8gICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgdXNlclNoaXBQbGFjZW1lbnRSZXNwb25zZSA9ICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgIC8vICAgICAgICAgYFwiUGxhY2UgdGhlIHNoaXBzLCBDYXAnbiFcImAsXG4gICAgLy8gICAgICAgICBgXCJDYXB0YWluLCBsZXRzIHBsYWNlIG91ciBmbGVldCFcImAsXG4gICAgLy8gICAgICAgICBgXCJMZXQncyBiZWdpbiBwbGFjaW5nIG91ciBzaGlwcyFcImAsXG4gICAgLy8gICAgIF1cblxuICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGVuZW15TWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgLy8gICAgICAgICBgXCJUaGV5IHN1Y2shIEhvdyBjb3VsZCB0aGV5IG1pc3MhXCJgLFxuICAgIC8vICAgICAgICAgYFwiRGFtbiwgdGhleSBtaXNzZWQgaXRcImBcbiAgICAvLyAgICAgXVxuXG4gICAgLy8gICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgcGxheWVyTWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgLy8gICAgICAgICBgXCJBaCwgdG9vIGJhZC4gV2UgZ28gYWdhaW4uXCJgLFxuICAgIC8vICAgICAgICAgYFwiQSBtaXNzIGZvciB1cywgYmFkIGx1Y2suLlwiYFxuICAgIC8vICAgICBdXG5cbiAgICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICAvLyB9XG5cblxuICAgIGNvbnN0IHNldEluR2FtZVN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaW4tcHJvZ3Jlc3MnKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEdhbWVTdHlsZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi1wcm9ncmVzcycpO1xuXG4gICAgICAgIHBsYXllckJvYXJkLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG5cbiAgICAgICAgZW5hYmxlQ2VsbHMoKTtcblxuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW1vdmVHcmlkc0FuZEhlYWRpbmcsIGN1cnJlbnRQbGF5ZXJPdXRsaW5lLCBlbmFibGVDZWxscywgZGlzYWJsZUNlbGxzLCBzcGVlY2hCdWJibGVUZXh0LCByZXNldEdhbWVTdHlsZXMsIGdlbmVyYXRlU2hpcFJvdGF0aW9uQ29udHJvbHMsYXBwbHlSb3RhdGlvbiwgdHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsLCBpbml0aWFsaXplTWFpbkRpc3BsYXksIGluaXRpYWxpemVDYXB0YWluUGlja2VyLCByZW1vdmVDYXB0YWluUGlja2VyLCBzZXRNYWluR3JpZFRvUGxheWVyLCBzZXRNYWluR3JpZFRvQ29tcHV0ZXIsIHNldE5ld1NoaXBDb250YWluZXJIZWlnaHQsIHJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQsIGdldENhcHRhaW5JbWFnZXMgfVxufSIsIi8vIGltcG9ydCBjYXB0YWluMSBmcm9tICcuL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMS5wbmcnO1xuLy8gaW1wb3J0IGNhcHRhaW4yIGZyb20gJy4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4yLnBuZyc7XG4vLyBpbXBvcnQgY2FwdGFpbjMgZnJvbSAnLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjMucG5nJztcblxuaW1wb3J0IHsgRE9NSGVscGVyQ3JlYXRpb24gfSBmcm9tIFwiLi9ET00gSGVscGVyIE1vZHVsZXMvRE9NSGVscGVyXCI7XG5pbXBvcnQgeyBBdmF0YXJSZXNwb25zZXMgfSBmcm9tIFwiLi9yZXNwb25zZXNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXcgPSAoKSA9PiB7XG5cbiAgICBsZXQgcGxheWVyQ2VsbHM7XG4gICAgbGV0IGNvbXB1dGVyQ2VsbHM7XG5cbiAgICBjb25zdCBET01IZWxwZXIgPSBET01IZWxwZXJDcmVhdGlvbigpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gQXZhdGFyUmVzcG9uc2VzKCk7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBsYXllcj1cInBsYXllclwiXScpO1xuICAgICAgICBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGxheWVyPVwiY29tcHV0ZXJcIl0nKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkNlbGxDbGljayA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUudGFyZ2V0LmRhdGFzZXQueHlQb3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGxheWVySGl0U3RhdGUgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBET01IZWxwZXIuc3BlZWNoQnViYmxlVGV4dChyZXNwb25zZS5wbGF5ZXJIaXRSZXNwb25zZSgpKTtcbiAgICAgICAgc2V0SGl0KGNvb3JkaW5hdGUsIHRydWUpO1xuICAgICAgICBjb21wdXRlclZpZXdVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQbGF5ZXJNaXNzU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllclZpZXdVcGRhdGUoKTtcbiAgICAgICAgRE9NSGVscGVyLnNwZWVjaEJ1YmJsZVRleHQocmVzcG9uc2UuY29tcHV0ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgIERPTUhlbHBlci5zZXRNYWluR3JpZFRvUGxheWVyKCk7XG4gICAgICAgIGhpZGVDYXB0YWluQXZhdGFyKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGl0ID0gKGNvb3JkaW5hdGUsIGlzUGxheWVyKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzUGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtcGxheWVyPVwiY29tcHV0ZXJcIl1bZGF0YS14eS1wb3M9XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjay1tYXJrZXInKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtaGl0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb29yZGluYXRlID0gY29vcmRpbmF0ZS5qb2luKCcnKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl1bZGF0YS14eS1wb3M9XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjay1tYXJrZXInKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwLWhpdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUNhcHRhaW5BdmF0YXIgPSAoY2FwdGFpbikgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC5yaWdodCcpXG5cbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcHRhaW5NZXNzYWdlLmNsYXNzTmFtZSA9ICdjYXB0YWluLW1lc3NhZ2UnO1xuICAgICAgICBjb25zdCBjYXB0YWluSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBjYXB0YWluSW1hZ2Uuc3JjID0gRE9NSGVscGVyLmdldENhcHRhaW5JbWFnZXMoKVtjYXB0YWluXTtcbiAgICAgICAgY29uc29sZS5sb2coY2FwdGFpbkltYWdlKTtcbiAgICAgICAgY2FwdGFpbkltYWdlLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBjYXB0YWluSW1hZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4taW1hZ2UnO1xuXG4gICAgICAgIGNhcHRhaW5BdmF0YXIuYXBwZW5kKGNhcHRhaW5JbWFnZSwgY2FwdGFpbk1lc3NhZ2UpO1xuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTmFtZSA9ICdjYXB0YWluLWJvYXJkLWF2YXRhcic7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2FwdGFpbkF2YXRhcik7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUNhcHRhaW5BdmF0YXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1ib2FyZC1hdmF0YXInKTtcblxuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5hZGQoJ21vdmUtcG9zaXRpb24nKTtcbiAgICAgICAgLy8gY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93Q2FwdGFpbkF2YXRhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLWJvYXJkLWF2YXRhcicpO1xuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUtcG9zaXRpb24nKTtcbiAgICAgICAgLy8gY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRIb3Jpem9udGFsU2hpcEhvdmVyID0gKGRyYWdnZWRTaGlwLCBjdXJyZW50Q2VsbCwgdG9SZW1vdmVIb3ZlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZHJhZ2dlZFNoaXAuZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgWWJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1swXSk7XG4gICAgICAgICAgICBjb25zdCBYYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzFdKSArIGk7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJveFtkYXRhLXBsYXllcj1cInBsYXllclwiXVtkYXRhLXh5LXBvcz1cIiR7WWJvYXJkUG9zaXRpb259JHtYYm9hcmRQb3NpdGlvbn1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgICAgICAgdG9SZW1vdmVIb3ZlciA/IHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKVxuICAgICAgICAgICAgICAgIDogdGlsZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VmVydGljYWxTaGlwSG92ZXIgPSAoZHJhZ2dlZFNoaXAsIGN1cnJlbnRDZWxsLCB0b1JlbW92ZUhvdmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxkcmFnZ2VkU2hpcC5kYXRhc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBZYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzBdKSArIGk7XG4gICAgICAgICAgICBjb25zdCBYYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm94W2RhdGEtcGxheWVyPVwicGxheWVyXCJdW2RhdGEteHktcG9zPVwiJHtZYm9hcmRQb3NpdGlvbn0ke1hib2FyZFBvc2l0aW9ufVwiXWApO1xuICAgICAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgICAgICB0b1JlbW92ZUhvdmVyID8gdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpXG4gICAgICAgICAgICAgICAgOiB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGRyYWdBbmREcm9wU2hpcHMgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtZWxlbWVudCcpO1xuICAgICAgICBsZXQgZHJhZ2dlZFNoaXA7XG5cbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBFbGVtZW50cykge1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIC8vIGRyYWdnZWRTaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZHJhZ2dlZFNoaXAucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRTaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcblxuICAgICAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCB0cnVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZlcnRpY2FsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBkcmFnZ2VkU2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZHJhZ2dlZFNoaXAucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRyYWdnZWRTaGlwLCBlLnRhcmdldC5kYXRhc2V0Lnh5UG9zKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJykpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3dlIHdhbnQgdG8gdXBkYXRlIG9uZSBib2FyZCBhdCBhIHRpbWUsIGp1c3QgcGFzcyBpbiB0aGUgYm9hcmQgd2Ugd2FudCB0byB1cGRhdGUgYXQgdGhhdCBwb2ludC4gTm8gcG9pbnQgaW4gdXBkYXRpbmcgYm90aC4gV2UgY2FuIGhhdmUgYSBib29sIHZhbHVlIHRoYXQgY2hlY2tzIGlmIGl0cyBhIGNvbXB1dGVyIGJvYXJkIG9yIG5vdC5cbiAgICBjb25zdCB1cGRhdGVCb2FyZCA9IChib2FyZCwgaXNDb21wdXRlckJvYXJkKSA9PiB7XG5cbiAgICAgICAgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscygpO1xuICAgICAgICBsZXQgYm9hcmRDZWxscztcblxuICAgICAgICBpZiAoaXNDb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgICBib2FyZENlbGxzID0gY29tcHV0ZXJDZWxscztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkQ2VsbHMgPSBwbGF5ZXJDZWxscztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBib2FyZENlbGxzKSB7XG4gICAgICAgICAgICBjb25zdCB4eSA9IGNlbGwuZGF0YXNldC54eVBvcztcbiAgICAgICAgICAgIGlmIChib2FyZFt4eVswXV1beHlbMV1dID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuY2xhc3NOYW1lID0gJ2F0dGFjay1tYXJrZXInO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zdCB1cGRhdGVCb2FyZCA9IChjb21wdXRlckJvYXJkLCBwbGF5ZXJCb2FyZCkgPT4ge1xuXG4gICAgLy8gICAgIGZvciAoY29uc3QgY2VsbCBvZiBjb21wdXRlckNlbGxzKSB7XG4gICAgLy8gICAgICAgICBjb25zdCB4eSA9IGNlbGwuZGF0YXNldC54eVBvcztcbiAgICAvLyAgICAgICAgIGlmIChjb21wdXRlckJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICd4Jykge1xuICAgIC8vICAgICAgICAgICAgIGlmICghY2VsbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1hcmtlci5jbGFzc05hbWUgPSAnYXR0YWNrLW1hcmtlcic7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgY29tcHV0ZXJCb2FyZFt4eVswXV1beHlbMV1dID09PSAnb2JqZWN0Jykge1xuICAgIC8vICAgICAgICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHh5ID0gY2VsbC5kYXRhc2V0Lnh5UG9zO1xuICAgIC8vICAgICAgICAgaWYgKHBsYXllckJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICd4Jykge1xuICAgIC8vICAgICAgICAgICAgIGlmICghY2VsbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1hcmtlci5jbGFzc05hbWUgPSAnYXR0YWNrLW1hcmtlcic7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAvLyAgICAgICAgICAgICB9ICBcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXJCb2FyZFt4eVswXV1beHlbMV1dID09PSAnb2JqZWN0Jykge1xuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnN0IHNoaXAgPSBwbGF5ZXJCb2FyZFt4eVswXV1beHlbMV1dO1xuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vICAgICAgICAgICAgIC8vIGlmIChzaGlwLmdldFNoaXBEaXJlY3Rpb24oKSA9PT0gJ0hvcml6b250YWwnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIHNoaXBTcXVhcmUuY2xhc3NOYW1lID0gJ3NoaXAtc3F1YXJlLWhvcml6b250YWwnO1xuICAgIC8vICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoc2hpcC5nZXRTaGlwRGlyZWN0aW9uKCkgPT09ICdWZXJ0aWNhbCcpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcC1zcXVhcmUtdmVydGljYWwnO1xuICAgIC8vICAgICAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgICAgICAvLyBjZWxsLmFwcGVuZENoaWxkKHNoaXBTcXVhcmUpO1xuICAgIC8vICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCBwbGF5ZXJWaWV3VXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBET01IZWxwZXIuZGlzYWJsZUNlbGxzKCk7XG4gICAgICAgIERPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZSh0cnVlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJWaWV3VXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBET01IZWxwZXIuZW5hYmxlQ2VsbHMoKTtcbiAgICAgICAgRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGVydFdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgICAgICAgYWxlcnQoYFBsYXllciAke3dpbm5lcn0gaGFzIHdvbiB0aGUgbWF0Y2ghYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgRE9NSGVscGVyLCByZXNwb25zZSwgc3RhcnRCdXR0b24sIG9uQ2VsbENsaWNrLCB1cGRhdGVCb2FyZCwgYWxlcnRXaW5uZXIsIHBsYXllclZpZXdVcGRhdGUsIGNvbXB1dGVyVmlld1VwZGF0ZSwgZHJhZ0FuZERyb3BTaGlwcywgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscywgc2V0SGl0LCBkaXNwbGF5Q2FwdGFpbkF2YXRhciwgaGlkZUNhcHRhaW5BdmF0YXIsIHNob3dDYXB0YWluQXZhdGFyLCBoYW5kbGVQbGF5ZXJIaXRTdGF0ZSwgaGFuZGxlUGxheWVyTWlzc1N0YXRlIH1cbn1cbiIsImV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcblxuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBwbGFjZUNvbXB1dGVyU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBvc2l0aW9ucyA9IGdldFZhbGlkU2hpcFBsYWNlbWVudHMoKTtcblxuICAgICAgICBjb25zdCByYW5kb21QbGFjZW1lbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFNoaXBQb3NpdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB2YWxpZFNoaXBQb3NpdGlvbnNbcmFuZG9tUGxhY2VtZW50XTtcblxuICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgICAgIGlmIChjYW5QbGFjZVNoaXAoc2hpcCwgcG9zaXRpb24sIHJhbmRvbU9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgcGxhY2VTaGlwKHNoaXAsIHBvc2l0aW9uLCByYW5kb21PcmllbnRhdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcChzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW5QbGFjZVNoaXAgPSAoc2hpcCwgcG9zaXRpb24sIGlzVmVydGljYWwpID0+IHtcblxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgaWYgKChwb3NpdGlvblswXSAtIDEpICsgc2hpcC5sZW5ndGggPiA5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGRvZXMgbm90IGZpdCBvbiB0aGUgYm9hcmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtwb3NpdGlvblswXSArIGldW3Bvc2l0aW9uWzFdXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGV4aXN0cyBpbiB0aGlzIHBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHBvc2l0aW9uWzFdIC0gMSkgKyBzaGlwLmxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBkb2VzIG5vdCBmaXQgb24gdGhlIGJvYXJkJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV0gKyBpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZXhpc3RzIGluIHRoaXMgcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHMubGVuZ3RoID49IDQ7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsbEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoMTApO1xuICAgICAgICAgICAgYXJyLmZpbGwoJycpO1xuICAgICAgICAgICAgYm9hcmQucHVzaChhcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICAgIGNvbnN0IGdldFZhbGlkQXR0YWNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gIT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChbaSxqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChbaSxqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkaW5hdGUsIGlzVmVydGljYWwpID0+IHtcbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIHNoaXAuc2V0U2hpcERpcmVjdGlvbignVmVydGljYWwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXSArIGldW2Nvb3JkaW5hdGVbMV1dID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuc2V0U2hpcERpcmVjdGlvbignSG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICB9XG5cbiAgICAvLyBsZXQgbGFzdEhpdCA9IG51bGw7XG4gICAgbGV0IGxhc3RIaXQgPSB7XG4gICAgICAgIHNoaXA6IG51bGwsXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGFzdEhpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxhc3RIaXQ7XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZEF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChjb29yZGluYXRlWzBdIDw9IDkgJiYgY29vcmRpbmF0ZVsxXSA8PSA5KSB7XG5cbiAgICAgICAgICAgIGlmIChib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IE91dCBvZiBib3VuZHMgYXR0YWNrJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRJdGVtID0gYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV07XG5cbiAgICAgICAgICAgIGlmIChib2FyZEl0ZW0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbWlzc2VkU2hvdHNbY29vcmRpbmF0ZVswXV0ucHVzaChjb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgICAgICAvLyBsYXN0SGl0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0SGl0WydzaGlwJ10gPSBudWxsOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZEl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRJdGVtLmhpdCgpO1xuICAgICAgICAgICAgICAgIGxhc3RIaXRbJ3NoaXAnXSA9IGNvb3JkaW5hdGU7XG4gICAgICAgICAgICAgICAgLy8gbGFzdEhpdCA9ICdzaGlwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPSAneCc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtaXNzZWRTaG90cyA9IFtcbiAgICAgICAgW10sW10sW10sW10sW10sW10sW10sW10sW10sW11cbiAgICBdXG5cbiAgICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtaXNzZWRTaG90cztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGZpbGxCb2FyZChib2FyZCk7XG4gICAgXG4gICAgcmV0dXJuIHsgZ2V0Qm9hcmQsIHBsYWNlU2hpcCwgcmVjaWV2ZUF0dGFjaywgZ2V0TWlzc2VzLCBnZXRTaGlwcywgYWxsU2hpcHNTdW5rLCBnZXRWYWxpZEF0dGFja3MsIGdldFZhbGlkU2hpcFBsYWNlbWVudHMsIGdldExhc3RIaXQsIGFsbFNoaXBzUGxhY2VkLCBwbGFjZUNvbXB1dGVyU2hpcCwgY2FuUGxhY2VTaGlwLCBpc1ZhbGlkQXR0YWNrIH1cbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9nYW1lU3RhdGUnO1xuaW1wb3J0IHsgZ2FtZUluaXRIZWxwZXIgfSBmcm9tICcuL2dhbWVTdGF0ZSc7XG5pbXBvcnQgeyBBdWRpb1NldHVwIH0gZnJvbSAnLi9BdWRpbyBNb2R1bGVzL2F1ZGlvQ3JlYXRpb24nO1xuXG5leHBvcnQgY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB2aWV3ID0gVmlldygpO1xuICAgIGxldCBnYW1lID0gR2FtZVN0YXRlKCk7XG4gICAgY29uc3QgYXVkaW9TZXR1cCA9IEF1ZGlvU2V0dXAoKTtcbiAgICBjb25zdCBnYW1lSGVscGVyID0gZ2FtZUluaXRIZWxwZXIoKTtcblxuICAgIGxldCBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQ2hvaWNlID0gYXdhaXQgaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIoKTtcbiAgICAgICAgYXdhaXQgdmlldy5ET01IZWxwZXIuc2V0TmV3U2hpcENvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICAvLyBhd2FpdCBkZWxheSg3MDApO1xuICAgICAgICBcbiAgICAgICAgdmlldy5ET01IZWxwZXIuaW5pdGlhbGl6ZU1haW5EaXNwbGF5KCk7XG4gICAgICAgIGF1ZGlvU2V0dXAuZ2VuZXJhdGVBdWRpb0ZpbGVzKCk7XG4gICAgICAgIGF1ZGlvU2V0dXAubG9vcEJhY2tncm91bmRTb3VuZCgpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvUGxheWVyKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmdlbmVyYXRlU2hpcFJvdGF0aW9uQ29udHJvbHMoKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5hcHBseVJvdGF0aW9uKHNoaXBFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuZGlzcGxheUNhcHRhaW5BdmF0YXIoY2FwdGFpbkNob2ljZSk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5zaGlwUGxhY2VtZW50UmVzcG9uc2UoKSk7XG4gICAgICAgIHZpZXcuaGlkZUNhcHRhaW5BdmF0YXIoKTtcbiAgICAgICAgdmlldy5zZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzKCk7XG5cbiAgICAgICAgZ2FtZS5wbGFjZUFsbENvbXB1dGVyU2hpcHMoKTtcblxuICAgICAgICBhd2FpdCBzaGlwUGxhY2VtZW50SGFuZGxlcigpO1xuICAgICAgICB2aWV3Lm9uQ2VsbENsaWNrKGdhbWVMb29wKTtcbiAgICAgICAgLy8gdmlldy5kcmFnQW5kRHJvcFNoaXBzKChzaGlwLCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIC8vICAgICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgLy8gICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG5cbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvQ29tcHV0ZXIoKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNwZWVjaEJ1YmJsZVRleHQodmlldy5ET01IZWxwZXIucGxheWVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIHRydWUpXG5cbiAgICAgICAgLy8gICAgICAgICB2aWV3Lm9uQ2VsbENsaWNrKHBsYXlSb3VuZCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHZpZXcuZHJhZ0FuZERyb3BTaGlwcygoc2hpcCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCBjb29yZGluYXRlKTtcblxuICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zcGVlY2hCdWJibGVUZXh0KHZpZXcucmVzcG9uc2UucGxheWVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsaXplQ2FwdGFpblBpY2tlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmluaXRpYWxpemVDYXB0YWluUGlja2VyKGFzeW5jIGNhcHRhaW5DaG9pY2UgPT4ge1xuICAgICAgICAgICAgZ2FtZS5zZXRQbGF5ZXJDYXB0YWluKGNhcHRhaW5DaG9pY2UpO1xuICAgICAgICAgICAgdmlldy5ET01IZWxwZXIucmVtb3ZlQ2FwdGFpblBpY2tlcigpO1xuICAgICAgICAgICAgcmVzb2x2ZShjYXB0YWluQ2hvaWNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZUxvb3AgPSBhc3luYyAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoIWNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogQXR0YWNrIGFscmVhZHkgcGxhY2VkYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWdhbWUuY29tcHV0ZXJCb2FyZC5pc1ZhbGlkQXR0YWNrKGNvb3JkaW5hdGUpKSByZXR1cm47XG5cbiAgICAgICAgdmlldy5ET01IZWxwZXIuZGlzYWJsZUNlbGxzKCk7ICBcbiAgICAgICAgZ2FtZS5wbGF5ZXIuYXR0YWNrKFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXSk7XG5cblxuICAgICAgICBjb25zdCBpc2FXaW5uZXIgPSBnYW1lLmNoZWNrRm9yV2lubmVyKCk7XG4gICAgICAgIGlmIChpc2FXaW5uZXIpIHtcbiAgICAgICAgICAgIHZpZXcuYWxlcnRXaW5uZXIoaXNhV2lubmVyKTtcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRMYXN0SGl0KClbJ3NoaXAnXSkge1xuICAgICAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tSGl0U291bmQoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU291bmQpO1xuICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSk7ICBcbiAgICAgICAgICAgIHZpZXcuaGFuZGxlUGxheWVySGl0U3RhdGUoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tTWlzc1NvdW5kKClcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTb3VuZCk7XG4gICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIHRydWUpOyAgXG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5wbGF5ZXJNaXNzUmVzcG9uc2UoKSk7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU3BlZWNoKTtcbiAgICAgICAgdmlldy5oYW5kbGVQbGF5ZXJNaXNzU3RhdGUoKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoMzAwMCk7XG4gICAgICAgIGhhbmRsZUNvbXB1dGVyVHVybigpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVDb21wdXRlclR1cm4gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgLy9maXJzdCBjaGVjayBpZiB0aGUgbGFzdCBoaXQgdGhlIGNvbXB1dGVyIG1hZGUgd2FzIGEgc2hpcCwgaWYgaXQgd2FzLiBXZSB3YW50IHRvIG1ha2UgYSBuZXcgYXR0YWNrIHRoYXQgcGlja3MgYSByYW5kb20gYXR0YWNrIGFkamFjZW50IHRvIHRoZSBwcmV2aW91cyBjb29yZGluYXRlLiBTbyBhYm92ZSBpdCwgYmVsb3cgaXQgb3IgbmV4dCB0byBpdC5cbiAgICAgICAgbGV0IGF0dGFja1Bvc2l0aW9uO1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRMYXN0SGl0KClbJ3NoaXAnXSkge1xuICAgICAgICAgICAgYXR0YWNrUG9zaXRpb24gPSBnYW1lLmNvbXB1dGVyLmF0dGFja0FkamFjZW50Q2VsbChnYW1lLnBsYXllckJvYXJkLmdldExhc3RIaXQoKVsnc2hpcCddKTsgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dGFja1Bvc2l0aW9uID0gZ2FtZS5jb21wdXRlci5hdHRhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGdhbWUuY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgICAgaWYgKHdpbm5lcikge1xuICAgICAgICAgICAgdmlldy5hbGVydFdpbm5lcih3aW5uZXIpO1xuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRMYXN0SGl0KClbJ3NoaXAnXSkge1xuICAgICAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tSGl0U291bmQoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU291bmQpO1xuICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuc2V0SGl0KGF0dGFja1Bvc2l0aW9uLGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5jb21wdXRlclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU3BlZWNoKTsgLy8gd2FpdCBmb3IgbWVzc2FnZSBwcm9tcHQgdG8gZmluaXNoIGJlZm9yZSBzd2l0Y2hpbmcgdHVybnNcbiAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKHRydWUpO1xuICAgICAgICAgICAgaGFuZGxlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhdWRpb1NldHVwLnBsYXlSYW5kb21NaXNzU291bmQoKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTb3VuZCk7XG4gICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCBmYWxzZSk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5jb21wdXRlck1pc3NSZXNwb25zZSgpKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTcGVlY2gpOyAvLyB3YWl0IGZvciBtZXNzYWdlIHByb21wdCB0byBmaW5pc2ggYmVmb3JlIHN3aXRjaGluZyB0dXJuc1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmVuYWJsZUNlbGxzKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tTaGlwUGxhY2VtZW50ID0gKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlDb29yZGluYXRlID0gWytjb29yZGluYXRlWzBdLCArY29vcmRpbmF0ZVsxXV07XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSArc2hpcC5kYXRhc2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IGdhbWVIZWxwZXIubWFrZVNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmNhblBsYWNlU2hpcChuZXdTaGlwLCBhcnJheUNvb3JkaW5hdGUsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIudHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsKHNoaXAucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBDYW5ub3QgcGxhY2Ugc2hpcCB0aGVyZScpO1xuICAgICAgICAgICAgICAgIC8vaGFuZGxlIGEgbWlzc3BsYWNlZCBzaGlwLCB1c2VyIHRvb2x0aXAgb3IgZXJyb3IgcG9wIHVwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5jYW5QbGFjZVNoaXAobmV3U2hpcCwgYXJyYXlDb29yZGluYXRlLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci50cmFuc2l0aW9uRWxlbWVudFJlbW92YWwoc2hpcC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IENhbm5vdCBwbGFjZSBzaGlwIHRoZXJlJyk7XG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgYSBtaXNzcGxhY2VkIHNoaXAsIHVzZXIgdG9vbHRpcCBvciBlcnJvciBwb3AgdXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGF5VGltZSA9IHtcbiAgICAgICAgd2FpdEZvclNwZWVjaDogMjUwMCxcbiAgICAgICAgd2FpdEZvclNvdW5kOiAyNTAwXG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBnYW1lID0gR2FtZVN0YXRlKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZUdyaWRzQW5kSGVhZGluZygpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5yZXNldEdhbWVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICB2aWV3LnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUdhbWUpO1xufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwTW9kdWxlXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZUluaXRIZWxwZXIgPSAoKSA9PiB7XG5cbiAgICAvLyBjb25zdCBwbGFjZVRlc3RTaGlwcyA9IChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDUpLCBbNCwxXSk7XG4gICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFs3LDRdKTtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgzKSwgWzIsMl0pO1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDIpLCBbOCw3XSk7XG5cbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNSksIFsyLDNdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFsxLDFdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMyksIFs5LDVdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMiksIFszLDddKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZVNoaXAgfVxufVxuXG5leHBvcnQgY29uc3QgR2FtZVN0YXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICBsZXQgcGxheWVyQ2FwdGFpbiA9IG51bGw7XG5cbiAgICBjb25zdCBwbGF5ZXJIYXNDYXB0YWluID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyQ2FwdGFpbiA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJDYXB0YWluID0gKGNhcHRhaW4pID0+IHtcbiAgICAgICAgcGxheWVyQ2FwdGFpbiA9IGNhcHRhaW47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGxheWVyQ2FwdGFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllckNhcHRhaW47XG4gICAgfVxuICAgIFxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUnlhbicsIGNvbXB1dGVyQm9hcmQsIGZhbHNlKTtcbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgcGxheWVyQm9hcmQsIHRydWUpXG5cbiAgICBjb25zdCBwbGFjZUFsbENvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg1KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg0KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgzKSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyLmdldE5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5nZXROYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgcGxheWVyLCBjb21wdXRlciwgY2hlY2tGb3JXaW5uZXIsIHBsYWNlQWxsQ29tcHV0ZXJTaGlwcywgY3VycmVudFBsYXllciwgcGxheWVySGFzQ2FwdGFpbiwgc2V0UGxheWVyQ2FwdGFpbiwgZ2V0UGxheWVyQ2FwdGFpbiB9XG59IiwiXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIG9wcG9uZW50Qm9hcmQsIGlzQ1BVID0gZmFsc2UpID0+IHtcbi8vZmFjdG9yeSBmb3Igb3VyIGRpZmZlcmVudCBwbGF5ZXJzIChpbiB0aGUgY2FzZSBvZiB0aGlzIGdhbWUgaXQgd291bGQgYmUgdGhlIHBsYXllciBhbmQgdGhlIGNvbXB1dGVyKSB3b3VsZCB0YWtlIGEgbmFtZSwgYW5kIHRoZSBvcHBvc2luZyBwbGF5ZXJzIGJvYXJkLiBTbyBpZiB3ZSBtYWtlIGEgcGxheWVyIGl0IHdvdWxkIHRha2UgaW4gdGhlIGNvbXB1dGVycyBib2FyZC5cblxuICAgIGNvbnN0IGNhY3VsYXRpb25SYW5kb21Qb3NpdGlvbiA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB2YWxpZFBvc2l0aW9ucyA9IG9wcG9uZW50Qm9hcmQuZ2V0VmFsaWRBdHRhY2tzKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmFsaWRQb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRQb3NpdGlvbnMubGVuZ3RoKV07XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZUFkamFjZW50UG9zaXRpb24gPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAvL3kgY29vcmRpbmF0ZSBmaXJzdCwgdGhlbiB4XG4gICAgICAgIGNvbnN0IHZhbGlkUG9zaXRpb25zID0gb3Bwb25lbnRCb2FyZC5nZXRWYWxpZEF0dGFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgYWRqYWNlbnRQb3NpdGlvbnMgPSBbXG4gICAgICAgIC8vICAgICBbY29vcmRpbmF0ZVswXSAtIDEsIGNvb3JkaW5hdGVbMV1dLFxuICAgICAgICAvLyAgICAgW2Nvb3JkaW5hdGVbMF0gKyAxLCBjb29yZGluYXRlWzFdXSxcbiAgICAgICAgLy8gICAgIFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdIC0gMV0sXG4gICAgICAgIC8vICAgICBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSArIDFdLFxuICAgICAgICAvLyBdXG4gICAgICAgIGNvbnN0IGFkamFjZW50UG9zaXRpb25zID0gW1xuICAgICAgICAgICAgW051bWJlcihjb29yZGluYXRlWzBdKSAtIDEsIE51bWJlcihjb29yZGluYXRlWzFdKV0sXG4gICAgICAgICAgICBbTnVtYmVyKGNvb3JkaW5hdGVbMF0pICsgMSwgTnVtYmVyKGNvb3JkaW5hdGVbMV0pXSxcbiAgICAgICAgICAgIFtOdW1iZXIoY29vcmRpbmF0ZVswXSksIE51bWJlcihjb29yZGluYXRlWzFdKSAtIDFdLFxuICAgICAgICAgICAgW051bWJlcihjb29yZGluYXRlWzBdKSwgTnVtYmVyKGNvb3JkaW5hdGVbMV0pICsgMV0sXG4gICAgICAgIF1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYWRqYWNlbnRQb3NpdGlvbnMpXG4gICAgICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IGFkamFjZW50UG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50UG9zaXRpb25zLmxlbmd0aCldO1xuXG4gICAgICAgIGxldCByYW5kb21Qb3NpdGlvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJhbmRvbVBvc2l0aW9uKTtcblxuXG4gICAgICAgIHdoaWxlICghdmFsaWRQb3NpdGlvbnMuc29tZSgodmFsaWRQb3NpdGlvbikgPT4gSlNPTi5zdHJpbmdpZnkodmFsaWRQb3NpdGlvbikgPT09IHJhbmRvbVBvc2l0aW9uU3RyaW5nKSkge1xuICAgICAgICAgICAgcmFuZG9tUG9zaXRpb24gPSBhZGphY2VudFBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGphY2VudFBvc2l0aW9ucy5sZW5ndGgpXTtcblxuICAgICAgICAgICAgcmFuZG9tUG9zaXRpb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyYW5kb21Qb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hpbGUgKCF2YWxpZFBvc2l0aW9ucy5pbmNsdWRlcyhyYW5kb21Qb3NpdGlvbikpIHtcbiAgICAgICAgLy8gICAgIHJhbmRvbVBvc2l0aW9uID0gYWRqYWNlbnRQb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqYWNlbnRQb3NpdGlvbnMubGVuZ3RoKV07XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gICAgICAgIC8vMSBhYm92ZVxuICAgICAgICAvLzEgYmVsb3dcbiAgICAgICAgLy8xIHRvIHRoZSBsZWZ0XG4gICAgICAgIC8vMSB0byB0aGUgcmlnaHRcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoaXNDUFUpIHtcblxuICAgICAgICAgICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjYWN1bGF0aW9uUmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgIG9wcG9uZW50Qm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkaW5hdGUpXG5cbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2tBZGphY2VudENlbGwgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgcmFuZG9tQWRqYWNlbnRDZWxsID0gY2FsY3VsYXRlQWRqYWNlbnRQb3NpdGlvbihjb29yZGluYXRlKTtcblxuICAgICAgICBvcHBvbmVudEJvYXJkLnJlY2lldmVBdHRhY2socmFuZG9tQWRqYWNlbnRDZWxsKTtcbiAgICAgICAgY29uc29sZS5sb2cocmFuZG9tQWRqYWNlbnRDZWxsKTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUFkamFjZW50Q2VsbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhdHRhY2ssIGdldE5hbWUsIGF0dGFja0FkamFjZW50Q2VsbCB9XG59IiwiZXhwb3J0IGNvbnN0IEF2YXRhclJlc3BvbnNlcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHBsYXllckhpdFJlc3BvbnNlID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkJ1bGxzZXllISBXZSd2ZSBoaXQgdGhlIGVuZW15J3MgdmVzc2VsLiBHbyBhZ2FpbiFcImAsXG4gICAgICAgICAgICBgXCJOaWNlIHNob3QhIEVuZW15IHNoaXAgaGl0ISBUaGlzIGlzIGZ1biwgZ28hXCJgLFxuICAgICAgICAgICAgYFwiRW5lbXkgc2hpcCwgbWVldCBvdXIgZmlyZXBvd2VyISBEaXJlY3QgaGl0ISBOZXh0IHNob3QhXCJgXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGxheWVyVHVyblJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJJdCdzIHlvdXIgdHVybiwgY2FwdGFpbiEgRmlyZSBhdCB3aWxsIVwiYCxcbiAgICAgICAgICAgIGBcIkFsbCBzeXN0ZW1zIGFyZSBnbyEgVGFrZSB5b3VyIHNob3QsIGNhcHRhaW4uXCJgLFxuICAgICAgICAgICAgYFwiVGhlIGVuZW15IHNoaXAgaXMgaW4gc2lnaHQuIFlvdSBoYXZlIHRoZSBncmVlbiBsaWdodCB0byBhdHRhY2suXCJgLFxuICAgICAgICAgICAgYFwiVGhlIHNlYSBpcyB5b3VycywgY2FwdGFpbi4gU2hvdyB0aGUgZW5lbXkgd2hhdCB3ZSdyZSBtYWRlIG9mIVwiYCxcbiAgICAgICAgICAgIGBcIldlJ3JlIGNvdW50aW5nIG9uIHlvdSwgY2FwdGFpbi4gVGltZSB0byBtYWtlIHlvdXIgbW92ZS5cImBcbiAgICAgICAgXVxuICAgIFxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjb21wdXRlclR1cm5SZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiQnJhY2UgZm9yIGltcGFjdCEgVGhlIGVuZW15IGlzIHRha2luZyB0aGVpciBzaG90LlwiYCxcbiAgICAgICAgICAgIGBcIkFsbCBoYW5kcyBvbiBkZWNrISBFbmVteSB0dXJuIHRvIGZpcmUuXCJgLFxuICAgICAgICAgICAgYFwiRXllcyBvbiB0aGUgaG9yaXpvbiwgY2FwdGFpbi4gVGhlIGVuZW15IGlzIGF0dGFja2luZy5cImAsXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudFJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJQbGFjZSB0aGUgc2hpcHMsIENhcCduIVwiYCxcbiAgICAgICAgICAgIGBcIkNhcHRhaW4sIGxldHMgcGxhY2Ugb3VyIGZsZWV0IVwiYCxcbiAgICAgICAgICAgIGBcIkxldCdzIGJlZ2luIHBsYWNpbmcgb3VyIHNoaXBzIVwiYCxcbiAgICAgICAgXVxuICAgIFxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjb21wdXRlck1pc3NSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiVGhleSBzdWNrISBIb3cgY291bGQgdGhleSBtaXNzIVwiYCxcbiAgICAgICAgICAgIGBcIkRhbW4sIHRoZXkgbWlzc2VkIGl0XCJgXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGxheWVyTWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJBaCwgdG9vIGJhZC4gV2UgZ28gYWdhaW4uXCJgLFxuICAgICAgICAgICAgYFwiQSBtaXNzIGZvciB1cywgYmFkIGx1Y2suLlwiYFxuICAgICAgICBdXG4gICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVySGl0UmVzcG9uc2UsXG4gICAgICAgIHBsYXllck1pc3NSZXNwb25zZSxcbiAgICAgICAgcGxheWVyVHVyblJlc3BvbnNlLFxuICAgICAgICBjb21wdXRlck1pc3NSZXNwb25zZSxcbiAgICAgICAgY29tcHV0ZXJUdXJuUmVzcG9uc2UsXG4gICAgICAgIHNoaXBQbGFjZW1lbnRSZXNwb25zZVxuICAgIH1cbn1cbiIsIi8vc2hpcCBmYWN0b3J5IHNob3VsZCBpbmNsdWRlIGEgdHlwZSwgd2hpY2ggd2UgY2FuIGRlZmluZSBsYXRlciBmcm9tIHRoZSBzaGlwIHRoYXQgdGhlIHVzZXIgY2xpY2tzIG9uLiBcblxuZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBjb25zdCBzaGlwTG9va3VwID0ge1xuICAgICAgICA1OiAnQ2FycmllcicsXG4gICAgICAgIDQ6ICdCYXR0bGVzaGlwJyxcbiAgICAgICAgMzogJ0NydWlzZXInLFxuICAgICAgICAyOiAnRGVzdHJveWVyJ1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSBzaGlwTG9va3VwW2xlbmd0aF07XG4gICAgXG4gICAgbGV0IHNoaXBEaXJlY3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2V0U2hpcERpcmVjdGlvbiA9IChkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgc2hpcERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcERpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgZGFtYWdlUmVjaWV2ZWQgPSAwO1xuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBkYW1hZ2VSZWNpZXZlZCsrO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBkYW1hZ2VSZWNpZXZlZCA+PSBsZW5ndGg7XG4gICAgXG5cbiAgICBjb25zdCBnZXREYW1hZ2VSZWNpZXZlZCA9ICgpID0+IGRhbWFnZVJlY2lldmVkO1xuXG4gICAgcmV0dXJuIHsgdHlwZSwgbGVuZ3RoLCBnZXREYW1hZ2VSZWNpZXZlZCwgaGl0LCBpc1N1bmssIHNldFNoaXBEaXJlY3Rpb24sIGdldFNoaXBEaXJlY3Rpb24gfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL2dhbWVDb250cm9sbGVyXCI7XG5cbmdhbWVDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9