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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    /* height: 100vh; */\n    background-color: var(--main-background-clr);\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 150ms;\n    font-weight: bold;\n}\n\n.start-game:hover {\n    transform: scale(1.07);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n}\n\n/* .captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 40rem;\n    height: 12rem;\n    transition: 700ms ease; \n} */\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -45%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 60%;\n    background-color: yellow;\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent yellow transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 1s ease;\n    max-width: 85%;\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    transform: scale(1.04);\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 25px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.ship-element {\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 100%;\n}\n\n.hidden {\n    opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    /* height: 100vh; */\n    background-color: var(--main-background-clr);\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 150ms;\n    font-weight: bold;\n}\n\n.start-game:hover {\n    transform: scale(1.07);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n}\n\n/* .captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 40rem;\n    height: 12rem;\n    transition: 700ms ease; \n} */\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -45%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 60%;\n    background-color: yellow;\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent yellow transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 1s ease;\n    max-width: 85%;\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    transform: scale(1.04);\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 25px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.ship-element {\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 100%;\n}\n\n.hidden {\n    opacity: 0;\n}"],"sourceRoot":""}]);
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

/***/ "./src/DOMCreation.js":
/*!****************************!*\
  !*** ./src/DOMCreation.js ***!
  \****************************/
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

/***/ "./src/DOMHelper.js":
/*!**************************!*\
  !*** ./src/DOMHelper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMHelperCreation": () => (/* binding */ DOMHelperCreation)
/* harmony export */ });
/* harmony import */ var _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/rotate.svg */ "./src/assets/rotate.svg");
/* harmony import */ var _assets_captains_captain1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/captains/captain1.png */ "./src/assets/captains/captain1.png");
/* harmony import */ var _assets_captains_captain2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/captains/captain2.png */ "./src/assets/captains/captain2.png");
/* harmony import */ var _assets_captains_captain3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/captains/captain3.png */ "./src/assets/captains/captain3.png");
/* harmony import */ var _DOMCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMCreation */ "./src/DOMCreation.js");







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
        title.textContent = 'Pick your captain!'
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
        const captainNames = ['Augustus', 'Donald', 'Burt']
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
        // typeWriter();
        // captainSpeech.textContent = message;
    }

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
            `"Hey captain, let's get our ships set up so we can get party started!."`,
            `"Captain, we need to place our ships before we can start sinkin' theirs. Ready when you are!"`,
            `"Hurry up and place the ships captain! I wanna start blowing stuff up!"`,
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }

    const enemyMissResponse = () => {
        const responses = [
            `"They suck! How could they miss!"`,
            `"Warra miss. Am i right captain?"`
        ]

        return responses[Math.floor(Math.random() * responses.length)]
    }

    const playerMissResponse = () => {
        const responses = [
            `"Ah, too bad. We go again."`,
            `"Well..shit"`
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
/* harmony import */ var _DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHelper */ "./src/DOMHelper.js");
// import captain1 from './assets/captains/captain1.png';
// import captain2 from './assets/captains/captain2.png';
// import captain3 from './assets/captains/captain3.png';



const View = () => {

    let playerCells;
    let computerCells;

    const DOMHelper = (0,_DOMHelper__WEBPACK_IMPORTED_MODULE_0__.DOMHelperCreation)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssS0FBSyxPQUFPLFdBQVcsVUFBVSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssa0JBQWtCLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sUUFBUSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVB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aUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7O0FDQWtEOztBQUVsRCwrREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NSGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWJhY2tncm91bmQtY2xyOiByZ2IoNiwgMTgsIDMxKTtcXG4gICAgLS1ncmlkLWJvcmRlci1jbHI6IHJnYigyMiwgNDcsIDczKTtcXG4gICAgLS1zaGlwLWJvcmRlci1jbHI6ICNjNGNlMzU7XFxuICAgIC0tYm94LWhvdmVyLWNscjogcmdiKDMyLCA1NywgODMpO1xcbiAgICAtLXNoaXAtY2xyOiByZ2IoMzYsIDYwLCA4NSk7XFxuICAgIC0tc2Vjb25kYXJ5LWNscjogI2NlZTYxYztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5zdGFydC1nYW1lIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zdGFydC1nYW1lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG59XFxuXFxuLmluLXByb2dyZXNzIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTsgXFxufSAqL1xcblxcbi5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbiAgfVxcblxcblxcblxcbi8qIC5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxufSAqL1xcblxcbi5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXB0YWluLWJvYXJkLWF2YXRhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQ1JTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNoaXAtYm9yZGVyLWNscik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyA7XFxufVxcblxcbi8qIC5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufSAqL1xcblxcbi5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMyU7XFxuICAgIC8qIGJvdHRvbTogNyU7ICovXFxuICAgIGJvdHRvbTogMzAlO1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbi5jYXB0YWluLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNrZXcoLTYwZGVnKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHllbGxvdyB0cmFuc3BhcmVudDtcXG59XFxuICBcXG5cXG4uY2FwdGFpbi1pbWFnZSB7XFxuICAgIC8qIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuXFxufVxcblxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAqL1xcblxcbi8qIC5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59ICovXFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcXG4gICAgbWF4LXdpZHRoOiA4NSU7XFxufVxcblxcbi5jYXB0YWluLW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbn1cXG4uY2FwdGFpbi1jb250YWluZXIudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMHJlbTtcXG59XFxuLyogLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuXFxuXFxufSAqL1xcblxcbi5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjRyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxufVxcblxcbi5ncmlkLmxlZnQuY3VycmVudCxcXG4uZ3JpZC5yaWdodC5jdXJyZW50IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbi8qIC5ncmlkLmxlZnQge1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG59ICovXFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dCxcXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3MDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dC5oaWRlLFxcbi5ncmlkLnJpZ2h0LmZhZGUtb3V0LmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LnZpc2libGUsXFxuLmdyaWQucmlnaHQudmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIC5ncmlkLmxlZnQuZGlzYWJsZWQsXFxuLmdyaWQucmlnaHQuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59ICovXFxuXFxuLnJvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5ib3gsXFxuLm91dGVyLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoNTYsIDU4LCA3MCk7ICovXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLyogLmJveCAuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5ib3guaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtaG92ZXItY2xyKTtcXG59XFxuXFxuLmJveC5wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcblxcbn1cXG5cXG4uc2hpcC1zcXVhcmUtaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtdmVydGljYWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm91dGVyLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmF0dGFjay1tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWhpdC1tYXJrZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdCxcXG4uY29tcHV0ZXItc2hpcC1oaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnRyYW5zaXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNzAwbXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIuZXhwYW5kIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaGlwLXN1Yi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQge1xcbiAgICB3aWR0aDogOTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNSB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC52ZXJ0aWNhbCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKDEwMCUgKyAtNTVweCkpO1xcbiAgICBmaWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDgyJSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSg3ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoMTA4JSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4vKiAuc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59ICovXFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHNjYWxlOiAwO1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcbn1cXG5cXG4ubW92ZS1wb3NpdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NSUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7Ozs7QUFJRjs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksYUFB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Q1gsU0FBUztJQUNULDhDQUE4QztJQUM5Qyw2RkFBNkY7SUFDN0Ysc0NBQXNDO0lBQ3RDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHOztBQUVIO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWJhY2tncm91bmQtY2xyOiByZ2IoNiwgMTgsIDMxKTtcXG4gICAgLS1ncmlkLWJvcmRlci1jbHI6IHJnYigyMiwgNDcsIDczKTtcXG4gICAgLS1zaGlwLWJvcmRlci1jbHI6ICNjNGNlMzU7XFxuICAgIC0tYm94LWhvdmVyLWNscjogcmdiKDMyLCA1NywgODMpO1xcbiAgICAtLXNoaXAtY2xyOiByZ2IoMzYsIDYwLCA4NSk7XFxuICAgIC0tc2Vjb25kYXJ5LWNscjogI2NlZTYxYztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5zdGFydC1nYW1lIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zdGFydC1nYW1lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG59XFxuXFxuLmluLXByb2dyZXNzIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogNzAwbXMgZWFzZTsgXFxufSAqL1xcblxcbi5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbiAgfVxcblxcblxcblxcbi8qIC5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxufSAqL1xcblxcbi5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXB0YWluLWJvYXJkLWF2YXRhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQ1JTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNoaXAtYm9yZGVyLWNscik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyA7XFxufVxcblxcbi8qIC5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufSAqL1xcblxcbi5jYXB0YWluLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMyU7XFxuICAgIC8qIGJvdHRvbTogNyU7ICovXFxuICAgIGJvdHRvbTogMzAlO1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbi5jYXB0YWluLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNrZXcoLTYwZGVnKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHllbGxvdyB0cmFuc3BhcmVudDtcXG59XFxuICBcXG5cXG4uY2FwdGFpbi1pbWFnZSB7XFxuICAgIC8qIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuXFxufVxcblxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAqL1xcblxcbi8qIC5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59ICovXFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcXG4gICAgbWF4LXdpZHRoOiA4NSU7XFxufVxcblxcbi5jYXB0YWluLW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbn1cXG4uY2FwdGFpbi1jb250YWluZXIudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMHJlbTtcXG59XFxuLyogLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuXFxuXFxufSAqL1xcblxcbi5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjRyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxufVxcblxcbi5ncmlkLmxlZnQuY3VycmVudCxcXG4uZ3JpZC5yaWdodC5jdXJyZW50IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbi8qIC5ncmlkLmxlZnQge1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG59ICovXFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dCxcXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3MDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dC5oaWRlLFxcbi5ncmlkLnJpZ2h0LmZhZGUtb3V0LmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LnZpc2libGUsXFxuLmdyaWQucmlnaHQudmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIC5ncmlkLmxlZnQuZGlzYWJsZWQsXFxuLmdyaWQucmlnaHQuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59ICovXFxuXFxuLnJvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5ib3gsXFxuLm91dGVyLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoNTYsIDU4LCA3MCk7ICovXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLyogLmJveCAuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5ib3guaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtaG92ZXItY2xyKTtcXG59XFxuXFxuLmJveC5wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcblxcbn1cXG5cXG4uc2hpcC1zcXVhcmUtaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtdmVydGljYWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm91dGVyLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmF0dGFjay1tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWhpdC1tYXJrZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdCxcXG4uY29tcHV0ZXItc2hpcC1oaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnRyYW5zaXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNzAwbXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIuZXhwYW5kIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaGlwLXN1Yi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQge1xcbiAgICB3aWR0aDogOTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNSB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC52ZXJ0aWNhbCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKDEwMCUgKyAtNTVweCkpO1xcbiAgICBmaWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDgyJSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSg3ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoMTA4JSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4vKiAuc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59ICovXFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHNjYWxlOiAwO1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcbn1cXG5cXG4ubW92ZS1wb3NpdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NSUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgb25lRWxlbWVudCA9IChjbGFzc1RpdGxlLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzVGl0bGU7XG4gICAgXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG11bHRpcGxlRWxlbWVudHMgPSAoZWxlbWVudCwgcXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cXR5OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgYXJyLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiB7IG9uZUVsZW1lbnQsIG11bHRpcGxlRWxlbWVudHMgfVxufVxuIiwiaW1wb3J0IHJvdGF0ZSBmcm9tICcuL2Fzc2V0cy9yb3RhdGUuc3ZnJztcbmltcG9ydCBjYXB0YWluMSBmcm9tICcuL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMS5wbmcnO1xuaW1wb3J0IGNhcHRhaW4yIGZyb20gJy4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4yLnBuZyc7XG5pbXBvcnQgY2FwdGFpbjMgZnJvbSAnLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjMucG5nJztcblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudENyZWF0b3IgfSBmcm9tICcuL0RPTUNyZWF0aW9uJztcblxuZXhwb3J0IGNvbnN0IERPTUhlbHBlckNyZWF0aW9uID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY3JlYXRvciA9IEN1c3RvbUVsZW1lbnRDcmVhdG9yKCk7XG5cbiAgICBsZXQgcGxheWVyQm9hcmQ7XG4gICAgbGV0IGNvbXB1dGVyQm9hcmQ7XG5cbiAgICAvL21vZHVsZSBmb3IgcXVlcnlTZWxlY3RvciByZWZlcmVuY2VzXG5cbiAgICBjb25zdCBtYWluVG9wQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcbiAgICAvLyBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICBjb25zdCBpbml0aWFsaXplTWFpbkRpc3BsYXkgPSAoKSA9PiB7XG5cbiAgICAgICAgZ2VuZXJhdGVHcmlkcygpO1xuICAgICAgICBzZXRJbkdhbWVTdHlsZXMoKTtcbiAgICAgICAgZ2VuZXJhdGVTaGlwRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBNYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtbWFpbi1jb250YWluZXInKVxuICAgICAgICAgICAgc2hpcE1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLW1haW4tY29udGFpbmVyJylcbiAgICAgICAgc2hpcE1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJylcbiAgICB9XG5cbiAgICBjb25zdCBzZXRNYWluR3JpZFRvUGxheWVyID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE1haW5HcmlkVG9Db21wdXRlciA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblxuICAgIH1cbiAgICBjb25zdCBpbml0aWFsaXplQ2FwdGFpblBpY2tlciA9IGFzeW5jIChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQ29udGFpbmVyID0gY3JlYXRvci5vbmVFbGVtZW50KCdjYXB0YWluLWNvbnRhaW5lcicsICdkaXYnKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1BpY2sgeW91ciBjYXB0YWluISdcbiAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIG1haW5Ub3BDb250YWluZXIuYXBwZW5kKGNhcHRhaW5Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICBzZXRJbkdhbWVTdHlsZXMoKTtcbiAgICAgICAgXG4gICAgICAgIHRyYW5zaXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpZnQtZG93bicpO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYXB0YWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb25Db250YWluZXJUb3AoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUNhcHRhaW5zKGNhcHRhaW5Db250YWluZXIsIGNhbGxiYWNrKTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNhcHRhaW5QaWNrZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1jb250YWluZXInKTtcblxuICAgICAgICBjYXB0YWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgc2V0RGVmYXVsdENvbnRhaW5lclNpemUoKTtcblxuICAgICAgICBjYXB0YWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjYXB0YWluQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbnN0IGdldENhcHRhaW5JbWFnZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbIGNhcHRhaW4xLCBjYXB0YWluMiwgY2FwdGFpbjMgXVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNhcHRhaW5zID0gKGNvbnRhaW5lciwgY2FsbGJhY2spID0+IHtcblxuICAgICAgICBjb25zdCBjYXB0YWluQXZhdGFycyA9IGNyZWF0b3Iub25lRWxlbWVudCgnY2FwdGFpbi1hdmF0YXJzJywgJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5zID0gY3JlYXRvci5tdWx0aXBsZUVsZW1lbnRzKCdkaXYnLCAzKTtcbiAgICAgICAgY29uc3QgY2FwdGFpbk5hbWVzID0gWydBdWd1c3R1cycsICdEb25hbGQnLCAnQnVydCddXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjYXB0YWluIG9mIGNhcHRhaW5zKSB7XG4gICAgICAgICAgICAgICAgY2FwdGFpbi5jbGFzc05hbWUgPSAnY2FwdGFpbic7XG4gICAgICAgICAgICAgICAgLy8gY2FwdGFpbi50ZXh0Q29udGVudCA9IGBjYXB0YWluJHtjb3VudGVyfWA7XG4gICAgICAgICAgICAgICAgY2FwdGFpbi5kYXRhc2V0LmNhcHRhaW4gPSBjb3VudGVyO1xuICAgICAgICAgICAgICAgIGNhcHRhaW5BdmF0YXJzLmFwcGVuZENoaWxkKGNhcHRhaW4pO1xuXG4gICAgICAgICAgICAgICAgY2FwdGFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soY2FwdGFpbi5kYXRhc2V0LmNhcHRhaW4pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXZhdGFySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBhdmF0YXJJbWFnZS5zcmMgPSBnZXRDYXB0YWluSW1hZ2VzKClbY291bnRlcl07XG4gICAgICAgICAgICAgICAgYXZhdGFySW1hZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhcHRhaW4tbmFtZSc7XG4gICAgICAgICAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXB0YWluTmFtZXNbY291bnRlcisrXTtcbiAgICAgICAgICAgICAgICAvLyBhdmF0YXJJbWFnZS5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG5cblxuICAgICAgICAgICAgICAgIGF2YXRhckltYWdlLmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhcHRhaW4uYXBwZW5kKGF2YXRhckltYWdlLCBuYW1lRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY2FwdGFpbkF2YXRhcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VHcmlkU3F1YXJlcyA9IChjb250YWluZXIsIGlzQ29tcEdyaWQpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwxMTsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3JvdycsICdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTE7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2JveCcsICdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChib3gpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC54eVBvcyA9IGAke2otMX0ke2ktMX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcEdyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSAnY29tcHV0ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSAncGxheWVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ291dGVyLWJveCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnRleHRDb250ZW50ID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdvdXRlci1ib3gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmRhdGFzZXQucGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IHNldEFscGhhYmV0W2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldERlZmF1bHRDb250YWluZXJTaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS50b3AgPSAnMHZoJztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnN0IG1haW5Cb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkc0hlaWdodCA9IG1haW5Ub3BDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0cmFuc2l0aW9uQ29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2dhbWVib2FyZHNIZWlnaHQgKyAzNX1weGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QWxwaGFiZXQgPSB7XG4gICAgICAgIDE6ICdBJyxcbiAgICAgICAgMjogJ0InLFxuICAgICAgICAzOiAnQycsXG4gICAgICAgIDQ6ICdEJyxcbiAgICAgICAgNTogJ0UnLFxuICAgICAgICA2OiAnRicsXG4gICAgICAgIDc6ICdHJyxcbiAgICAgICAgODogJ0gnLFxuICAgICAgICA5OiAnSScsXG4gICAgICAgIDEwOiAnSidcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZUdyaWRzID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnN0IG1haW5Cb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NOYW1lID0gJ2dyaWQgbGVmdCc7XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTmFtZSA9ICdncmlkIHJpZ2h0JztcbiAgICAgICAgXG4gICAgICAgIHBsYXllckJvYXJkLmRhdGFzZXQuZ3JpZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgbWFrZUdyaWRTcXVhcmVzKHBsYXllckJvYXJkLCBmYWxzZSk7XG4gICAgICAgIG1ha2VHcmlkU3F1YXJlcyhjb21wdXRlckJvYXJkLCB0cnVlKTtcblxuICAgICAgICBtYWluVG9wQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCk7XG5cbiAgICAgICAgLy8gc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCgpO1xuXG4gICAgICAgIC8vIHRyYW5zaXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpZnQtZG93bicpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb25Db250YWluZXJUb3AoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpZnQtZG93bicpO1xuICAgICAgICB9LDMwKTtcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFRyYW5zaXRpb25Db250YWluZXJUb3ApO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlU2hpcEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIGNvbnN0IHRpdGxlID0gY3JlYXRvci5vbmVFbGVtZW50KCd1c2VyLWluc3RydWN0aW9uJywgJ2gyJyk7XG4gICAgICAgIC8vIHRpdGxlLnRleHRDb250ZW50ID0gJ0RyYWcgeW91ciBmbGVldCBvbnRvIHRoZSBiYXR0bGVmaWVsZCwgY2FwdGFpbiEnXG4gICAgICAgIC8vIHNoaXBFbGVtZW50QXJlYS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwcyA9IGNyZWF0b3IubXVsdGlwbGVFbGVtZW50cygnZGl2JywgNCk7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsNCwzLDJdO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXAsIGkpID0+IHtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5sZW5ndGggPSBzaGlwTGVuZ3Roc1tpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NOYW1lID0gJ3NoaXAtZWxlbWVudCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChgbGVuZ3RoLSR7c2hpcC5kYXRhc2V0Lmxlbmd0aH1gKTtcbiAgICAgICAgICAgIHNoaXBFbGVtZW50QXJlYS5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICAgICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlU2hpcFJvdGF0aW9uQ29udHJvbHMgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHNoaXBTdWJDb250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3NoaXAtc3ViLWNvbnRhaW5lcicsICdkaXYnKTtcblxuICAgICAgICBjb25zdCBzaGlwcyA9IHNoaXBNYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWVsZW1lbnQnKTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwKTtcblxuICAgICAgICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGNyZWF0b3Iub25lRWxlbWVudCgnc2hpcC1lbGVtZW50LWNvbnRhaW5lcicsICdkaXYnKTtcbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgICAgIHNoaXBTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGNyZWF0b3Iub25lRWxlbWVudCgncm90YXRlLWJ1dHRvbicsICdpbWcnKTtcbiAgICAgICAgICAgIHJvdGF0ZUJ1dHRvbi5zcmMgPSByb3RhdGU7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcm90YXRlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNoaXApO1xuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWVudGF0aW9uKHNoaXApO1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5Um90YXRpb24oc2hpcCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwU3ViQ29udGFpbmVyKTtcbiAgICBcbiAgICB9XG5cblxuICAgIGNvbnN0IGFwcGx5Um90YXRpb24gPSAoc2hpcEVsZW1lbnQpID0+IHtcblxuICAgICAgICBpZiAoc2hpcEVsZW1lbnQuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlR3JpZHNBbmRIZWFkaW5nID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIHNldERlZmF1bHRDb250YWluZXJTaXplKCk7XG4gICAgICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChzaGlwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2hpcENvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNoaXBDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnN0cnVjdGlvbicpO1xuICAgICAgICAvLyBoZWFkaW5nLnJlbW92ZSgpO1xuXG5cbiAgICB9XG5cbiAgICBjb25zdCBkaXNhYmxlQ2VsbHMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGNvbnN0IGVuYWJsZWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcbiAgICAgICAgZW5hYmxlZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5hYmxlQ2VsbHMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGNvbnN0IGRpc2FibGVkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG5cbiAgICAgICAgZGlzYWJsZWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJPdXRsaW5lID0gKGlzUGxheWVyc1R1cm4pID0+IHtcbiAgICAgICAgaWYgKGlzUGxheWVyc1R1cm4pIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnN0eWxlLmJvcmRlciA9ICdzb2xpZCAzcHggcmVkJztcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJzNweCB0cmFuc3BhcmVudCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnN0eWxlLmJvcmRlciA9ICdzb2xpZCAzcHggZ3JlZW4nO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJzNweCB0cmFuc3BhcmVudCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVc2VySW5zdHJ1Y3Rpb24gPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAvLyBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItaW5zdHJ1Y3Rpb24nKTtcbiAgICAgICAgY29uc3QgY2FwdGFpblNwZWVjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLW1lc3NhZ2UnKTtcbiAgICAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBzcGVlZCA9IDUwO1xuICAgICAgICBjb25zdCB0eXBlV3JpdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPCBtZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhcHRhaW5TcGVlY2gudGV4dENvbnRlbnQgKz0gbWVzc2FnZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgNTAwKTtcbiAgICAgICAgLy8gdHlwZVdyaXRlcigpO1xuICAgICAgICAvLyBjYXB0YWluU3BlZWNoLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJIaXRSZXNwb25zZSA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJCdWxsc2V5ZSEgV2UndmUgaGl0IHRoZSBlbmVteSdzIHZlc3NlbC4gR28gYWdhaW4hXCJgLFxuICAgICAgICAgICAgYFwiTmljZSBzaG90ISBFbmVteSBzaGlwIGhpdCEgVGhpcyBpcyBmdW4sIGdvIVwiYCxcbiAgICAgICAgICAgIGBcIkVuZW15IHNoaXAsIG1lZXQgb3VyIGZpcmVwb3dlciEgRGlyZWN0IGhpdCEgTmV4dCBzaG90IVwiYFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJUdXJuUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkl0J3MgeW91ciB0dXJuLCBjYXB0YWluISBGaXJlIGF0IHdpbGwhXCJgLFxuICAgICAgICAgICAgYFwiQWxsIHN5c3RlbXMgYXJlIGdvISBUYWtlIHlvdXIgc2hvdCwgY2FwdGFpbi5cImAsXG4gICAgICAgICAgICBgXCJUaGUgZW5lbXkgc2hpcCBpcyBpbiBzaWdodC4gWW91IGhhdmUgdGhlIGdyZWVuIGxpZ2h0IHRvIGF0dGFjay5cImAsXG4gICAgICAgICAgICBgXCJUaGUgc2VhIGlzIHlvdXJzLCBjYXB0YWluLiBTaG93IHRoZSBlbmVteSB3aGF0IHdlJ3JlIG1hZGUgb2YhXCJgLFxuICAgICAgICAgICAgYFwiV2UncmUgY291bnRpbmcgb24geW91LCBjYXB0YWluLiBUaW1lIHRvIG1ha2UgeW91ciBtb3ZlLlwiYFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlclR1cm5SZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiQnJhY2UgZm9yIGltcGFjdCEgVGhlIGVuZW15IGlzIHRha2luZyB0aGVpciBzaG90LlwiYCxcbiAgICAgICAgICAgIGBcIkFsbCBoYW5kcyBvbiBkZWNrISBFbmVteSB0dXJuIHRvIGZpcmUuXCJgLFxuICAgICAgICAgICAgYFwiRXllcyBvbiB0aGUgaG9yaXpvbiwgY2FwdGFpbi4gVGhlIGVuZW15IGlzIGF0dGFja2luZy5cImAsXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IHVzZXJTaGlwUGxhY2VtZW50UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkhleSBjYXB0YWluLCBsZXQncyBnZXQgb3VyIHNoaXBzIHNldCB1cCBzbyB3ZSBjYW4gZ2V0IHBhcnR5IHN0YXJ0ZWQhLlwiYCxcbiAgICAgICAgICAgIGBcIkNhcHRhaW4sIHdlIG5lZWQgdG8gcGxhY2Ugb3VyIHNoaXBzIGJlZm9yZSB3ZSBjYW4gc3RhcnQgc2lua2luJyB0aGVpcnMuIFJlYWR5IHdoZW4geW91IGFyZSFcImAsXG4gICAgICAgICAgICBgXCJIdXJyeSB1cCBhbmQgcGxhY2UgdGhlIHNoaXBzIGNhcHRhaW4hIEkgd2FubmEgc3RhcnQgYmxvd2luZyBzdHVmZiB1cCFcImAsXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IGVuZW15TWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJUaGV5IHN1Y2shIEhvdyBjb3VsZCB0aGV5IG1pc3MhXCJgLFxuICAgICAgICAgICAgYFwiV2FycmEgbWlzcy4gQW0gaSByaWdodCBjYXB0YWluP1wiYFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJNaXNzUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkFoLCB0b28gYmFkLiBXZSBnbyBhZ2Fpbi5cImAsXG4gICAgICAgICAgICBgXCJXZWxsLi5zaGl0XCJgXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuXG4gICAgY29uc3Qgc2V0SW5HYW1lU3R5bGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbi1wcm9ncmVzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0R2FtZVN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2luLXByb2dyZXNzJyk7XG5cbiAgICAgICAgcGxheWVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgICBjb21wdXRlckJvYXJkLnN0eWxlLmJvcmRlciA9ICdub25lJztcblxuICAgICAgICBlbmFibGVDZWxscygpO1xuXG5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRWxlbWVudFJlbW92YWwgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbW92ZUdyaWRzQW5kSGVhZGluZywgY3VycmVudFBsYXllck91dGxpbmUsIGVuYWJsZUNlbGxzLCBkaXNhYmxlQ2VsbHMsIHNldFVzZXJJbnN0cnVjdGlvbiwgcmVzZXRHYW1lU3R5bGVzLCBnZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzLGFwcGx5Um90YXRpb24sIHRyYW5zaXRpb25FbGVtZW50UmVtb3ZhbCwgaW5pdGlhbGl6ZU1haW5EaXNwbGF5LCBpbml0aWFsaXplQ2FwdGFpblBpY2tlciwgcmVtb3ZlQ2FwdGFpblBpY2tlciwgc2V0TWFpbkdyaWRUb1BsYXllciwgc2V0TWFpbkdyaWRUb0NvbXB1dGVyLCBzZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0LCByZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0LCBwbGF5ZXJIaXRSZXNwb25zZSwgcGxheWVyVHVyblJlc3BvbnNlLCBjb21wdXRlclR1cm5SZXNwb25zZSwgdXNlclNoaXBQbGFjZW1lbnRSZXNwb25zZSwgZW5lbXlNaXNzUmVzcG9uc2UsIHBsYXllck1pc3NSZXNwb25zZSwgZ2V0Q2FwdGFpbkltYWdlcyB9XG59IiwiLy8gaW1wb3J0IGNhcHRhaW4xIGZyb20gJy4vYXNzZXRzL2NhcHRhaW5zL2NhcHRhaW4xLnBuZyc7XG4vLyBpbXBvcnQgY2FwdGFpbjIgZnJvbSAnLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjIucG5nJztcbi8vIGltcG9ydCBjYXB0YWluMyBmcm9tICcuL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMy5wbmcnO1xuXG5pbXBvcnQgeyBET01IZWxwZXJDcmVhdGlvbiB9IGZyb20gXCIuL0RPTUhlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgVmlldyA9ICgpID0+IHtcblxuICAgIGxldCBwbGF5ZXJDZWxscztcbiAgICBsZXQgY29tcHV0ZXJDZWxscztcblxuICAgIGNvbnN0IERPTUhlbHBlciA9IERPTUhlbHBlckNyZWF0aW9uKCk7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBsYXllcj1cInBsYXllclwiXScpO1xuICAgICAgICBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGxheWVyPVwiY29tcHV0ZXJcIl0nKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkNlbGxDbGljayA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUudGFyZ2V0LmRhdGFzZXQueHlQb3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGl0ID0gKGNvb3JkaW5hdGUsIGlzUGxheWVyKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzUGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiY29tcHV0ZXJcIl1bZGF0YS14eS1wb3M9XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjay1tYXJrZXInKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtaGl0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb29yZGluYXRlID0gY29vcmRpbmF0ZS5qb2luKCcnKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl1bZGF0YS14eS1wb3M9XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjay1tYXJrZXInKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwLWhpdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUNhcHRhaW5BdmF0YXIgPSAoY2FwdGFpbikgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC5yaWdodCcpXG5cbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcHRhaW5NZXNzYWdlLmNsYXNzTmFtZSA9ICdjYXB0YWluLW1lc3NhZ2UnO1xuICAgICAgICBjb25zdCBjYXB0YWluSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBjYXB0YWluSW1hZ2Uuc3JjID0gRE9NSGVscGVyLmdldENhcHRhaW5JbWFnZXMoKVtjYXB0YWluXTtcbiAgICAgICAgY29uc29sZS5sb2coY2FwdGFpbkltYWdlKTtcbiAgICAgICAgY2FwdGFpbkltYWdlLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBjYXB0YWluSW1hZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4taW1hZ2UnO1xuXG4gICAgICAgIGNhcHRhaW5BdmF0YXIuYXBwZW5kKGNhcHRhaW5JbWFnZSwgY2FwdGFpbk1lc3NhZ2UpO1xuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTmFtZSA9ICdjYXB0YWluLWJvYXJkLWF2YXRhcic7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2FwdGFpbkF2YXRhcik7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUNhcHRhaW5BdmF0YXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1ib2FyZC1hdmF0YXInKTtcblxuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5hZGQoJ21vdmUtcG9zaXRpb24nKTtcbiAgICAgICAgLy8gY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93Q2FwdGFpbkF2YXRhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLWJvYXJkLWF2YXRhcicpO1xuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUtcG9zaXRpb24nKTtcbiAgICAgICAgLy8gY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRIb3Jpem9udGFsU2hpcEhvdmVyID0gKGRyYWdnZWRTaGlwLCBjdXJyZW50Q2VsbCwgdG9SZW1vdmVIb3ZlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZHJhZ2dlZFNoaXAuZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgWWJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1swXSk7XG4gICAgICAgICAgICBjb25zdCBYYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzFdKSArIGk7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJveFtkYXRhLXBsYXllcj1cInBsYXllclwiXVtkYXRhLXh5LXBvcz1cIiR7WWJvYXJkUG9zaXRpb259JHtYYm9hcmRQb3NpdGlvbn1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgICAgICAgdG9SZW1vdmVIb3ZlciA/IHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKVxuICAgICAgICAgICAgICAgIDogdGlsZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VmVydGljYWxTaGlwSG92ZXIgPSAoZHJhZ2dlZFNoaXAsIGN1cnJlbnRDZWxsLCB0b1JlbW92ZUhvdmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxkcmFnZ2VkU2hpcC5kYXRhc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBZYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzBdKSArIGk7XG4gICAgICAgICAgICBjb25zdCBYYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm94W2RhdGEtcGxheWVyPVwicGxheWVyXCJdW2RhdGEteHktcG9zPVwiJHtZYm9hcmRQb3NpdGlvbn0ke1hib2FyZFBvc2l0aW9ufVwiXWApO1xuICAgICAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgICAgICB0b1JlbW92ZUhvdmVyID8gdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpXG4gICAgICAgICAgICAgICAgOiB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGRyYWdBbmREcm9wU2hpcHMgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtZWxlbWVudCcpO1xuICAgICAgICBsZXQgZHJhZ2dlZFNoaXA7XG5cbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBFbGVtZW50cykge1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIC8vIGRyYWdnZWRTaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZHJhZ2dlZFNoaXAucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRTaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcblxuICAgICAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCB0cnVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZlcnRpY2FsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBkcmFnZ2VkU2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZHJhZ2dlZFNoaXAucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRyYWdnZWRTaGlwLCBlLnRhcmdldC5kYXRhc2V0Lnh5UG9zKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJykpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3dlIHdhbnQgdG8gdXBkYXRlIG9uZSBib2FyZCBhdCBhIHRpbWUsIGp1c3QgcGFzcyBpbiB0aGUgYm9hcmQgd2Ugd2FudCB0byB1cGRhdGUgYXQgdGhhdCBwb2ludC4gTm8gcG9pbnQgaW4gdXBkYXRpbmcgYm90aC4gV2UgY2FuIGhhdmUgYSBib29sIHZhbHVlIHRoYXQgY2hlY2tzIGlmIGl0cyBhIGNvbXB1dGVyIGJvYXJkIG9yIG5vdC5cbiAgICBjb25zdCB1cGRhdGVCb2FyZCA9IChib2FyZCwgaXNDb21wdXRlckJvYXJkKSA9PiB7XG5cbiAgICAgICAgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscygpO1xuICAgICAgICBsZXQgYm9hcmRDZWxscztcblxuICAgICAgICBpZiAoaXNDb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgICBib2FyZENlbGxzID0gY29tcHV0ZXJDZWxscztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkQ2VsbHMgPSBwbGF5ZXJDZWxscztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBib2FyZENlbGxzKSB7XG4gICAgICAgICAgICBjb25zdCB4eSA9IGNlbGwuZGF0YXNldC54eVBvcztcbiAgICAgICAgICAgIGlmIChib2FyZFt4eVswXV1beHlbMV1dID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuY2xhc3NOYW1lID0gJ2F0dGFjay1tYXJrZXInO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zdCB1cGRhdGVCb2FyZCA9IChjb21wdXRlckJvYXJkLCBwbGF5ZXJCb2FyZCkgPT4ge1xuXG4gICAgLy8gICAgIGZvciAoY29uc3QgY2VsbCBvZiBjb21wdXRlckNlbGxzKSB7XG4gICAgLy8gICAgICAgICBjb25zdCB4eSA9IGNlbGwuZGF0YXNldC54eVBvcztcbiAgICAvLyAgICAgICAgIGlmIChjb21wdXRlckJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICd4Jykge1xuICAgIC8vICAgICAgICAgICAgIGlmICghY2VsbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1hcmtlci5jbGFzc05hbWUgPSAnYXR0YWNrLW1hcmtlcic7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgY29tcHV0ZXJCb2FyZFt4eVswXV1beHlbMV1dID09PSAnb2JqZWN0Jykge1xuICAgIC8vICAgICAgICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHh5ID0gY2VsbC5kYXRhc2V0Lnh5UG9zO1xuICAgIC8vICAgICAgICAgaWYgKHBsYXllckJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICd4Jykge1xuICAgIC8vICAgICAgICAgICAgIGlmICghY2VsbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1hcmtlci5jbGFzc05hbWUgPSAnYXR0YWNrLW1hcmtlcic7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAvLyAgICAgICAgICAgICB9ICBcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXJCb2FyZFt4eVswXV1beHlbMV1dID09PSAnb2JqZWN0Jykge1xuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnN0IHNoaXAgPSBwbGF5ZXJCb2FyZFt4eVswXV1beHlbMV1dO1xuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vICAgICAgICAgICAgIC8vIGlmIChzaGlwLmdldFNoaXBEaXJlY3Rpb24oKSA9PT0gJ0hvcml6b250YWwnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIHNoaXBTcXVhcmUuY2xhc3NOYW1lID0gJ3NoaXAtc3F1YXJlLWhvcml6b250YWwnO1xuICAgIC8vICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoc2hpcC5nZXRTaGlwRGlyZWN0aW9uKCkgPT09ICdWZXJ0aWNhbCcpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcC1zcXVhcmUtdmVydGljYWwnO1xuICAgIC8vICAgICAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgICAgICAvLyBjZWxsLmFwcGVuZENoaWxkKHNoaXBTcXVhcmUpO1xuICAgIC8vICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCBwbGF5ZXJWaWV3VXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBET01IZWxwZXIuZGlzYWJsZUNlbGxzKCk7XG4gICAgICAgIERPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZSh0cnVlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJWaWV3VXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBET01IZWxwZXIuZW5hYmxlQ2VsbHMoKTtcbiAgICAgICAgRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGVydFdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgICAgICAgYWxlcnQoYFBsYXllciAke3dpbm5lcn0gaGFzIHdvbiB0aGUgbWF0Y2ghYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgRE9NSGVscGVyLCBzdGFydEJ1dHRvbiwgb25DZWxsQ2xpY2ssIHVwZGF0ZUJvYXJkLCBhbGVydFdpbm5lciwgcGxheWVyVmlld1VwZGF0ZSwgY29tcHV0ZXJWaWV3VXBkYXRlLCBkcmFnQW5kRHJvcFNoaXBzLCBzZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzLCBzZXRIaXQsIGRpc3BsYXlDYXB0YWluQXZhdGFyLCBoaWRlQ2FwdGFpbkF2YXRhciwgc2hvd0NhcHRhaW5BdmF0YXIgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlQ29tcHV0ZXJTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRTaGlwUG9zaXRpb25zID0gZ2V0VmFsaWRTaGlwUGxhY2VtZW50cygpO1xuXG4gICAgICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkU2hpcFBvc2l0aW9ucy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZhbGlkU2hpcFBvc2l0aW9uc1tyYW5kb21QbGFjZW1lbnRdO1xuXG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICAgICAgaWYgKGNhblBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgcmFuZG9tT3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICBwbGFjZVNoaXAoc2hpcCwgcG9zaXRpb24sIHJhbmRvbU9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwKHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhblBsYWNlU2hpcCA9IChzaGlwLCBwb3NpdGlvbiwgaXNWZXJ0aWNhbCkgPT4ge1xuXG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICBpZiAoKHBvc2l0aW9uWzBdIC0gMSkgKyBzaGlwLmxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZG9lcyBub3QgZml0IG9uIHRoZSBib2FyZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3Bvc2l0aW9uWzBdICsgaV1bcG9zaXRpb25bMV1dID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZXhpc3RzIGluIHRoaXMgcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgocG9zaXRpb25bMV0gLSAxKSArIHNoaXAubGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGRvZXMgbm90IGZpdCBvbiB0aGUgYm9hcmQnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXSArIGldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBleGlzdHMgaW4gdGhpcyBwb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dICE9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcy5sZW5ndGggPj0gNDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgICAgICBhcnIuZmlsbCgnJyk7XG4gICAgICAgICAgICBib2FyZC5wdXNoKGFycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gICAgY29uc3QgZ2V0VmFsaWRBdHRhY2tzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSAhPT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKFtpLGpdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKFtpLGpdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmRpbmF0ZSwgaXNWZXJ0aWNhbCkgPT4ge1xuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgc2hpcC5zZXRTaGlwRGlyZWN0aW9uKCdWZXJ0aWNhbCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZGluYXRlWzBdICsgaV1bY29vcmRpbmF0ZVsxXV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zZXRTaGlwRGlyZWN0aW9uKCdIb3Jpem9udGFsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV0gKyBpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIGxldCBsYXN0SGl0ID0gbnVsbDtcblxuICAgIGNvbnN0IGdldExhc3RIaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsYXN0SGl0O1xuICAgIH1cblxuICAgIGNvbnN0IGlzVmFsaWRBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA8PSA5ICYmIGNvb3JkaW5hdGVbMV0gPD0gOSkge1xuXG4gICAgICAgICAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBPdXQgb2YgYm91bmRzIGF0dGFjaycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkSXRlbSA9IGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dO1xuXG4gICAgICAgICAgICBpZiAoYm9hcmRJdGVtID09PSAnJykge1xuICAgICAgICAgICAgICAgIG1pc3NlZFNob3RzW2Nvb3JkaW5hdGVbMF1dLnB1c2goY29vcmRpbmF0ZVsxXSk7XG4gICAgICAgICAgICAgICAgbGFzdEhpdCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRJdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGJvYXJkSXRlbS5oaXQoKTtcbiAgICAgICAgICAgICAgICBsYXN0SGl0ID0gJ3NoaXAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9ICd4JztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IG1pc3NlZFNob3RzID0gW1xuICAgICAgICBbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXVxuICAgIF1cblxuICAgIGNvbnN0IGdldE1pc3NlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1pc3NlZFNob3RzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuXG4gICAgZmlsbEJvYXJkKGJvYXJkKTtcbiAgICBcbiAgICByZXR1cm4geyBnZXRCb2FyZCwgcGxhY2VTaGlwLCByZWNpZXZlQXR0YWNrLCBnZXRNaXNzZXMsIGdldFNoaXBzLCBhbGxTaGlwc1N1bmssIGdldFZhbGlkQXR0YWNrcywgZ2V0VmFsaWRTaGlwUGxhY2VtZW50cywgZ2V0TGFzdEhpdCwgYWxsU2hpcHNQbGFjZWQsIHBsYWNlQ29tcHV0ZXJTaGlwLCBjYW5QbGFjZVNoaXAsIGlzVmFsaWRBdHRhY2sgfVxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL2dhbWVTdGF0ZSc7XG5pbXBvcnQgeyBnYW1lSW5pdEhlbHBlciB9IGZyb20gJy4vZ2FtZVN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdmlldyA9IFZpZXcoKTtcbiAgICBsZXQgZ2FtZSA9IEdhbWVTdGF0ZSgpO1xuICAgIGNvbnN0IGdhbWVIZWxwZXIgPSBnYW1lSW5pdEhlbHBlcigpO1xuXG4gICAgbGV0IGdhbWVTdGFydGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lU3RhcnRlZCkge1xuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5DaG9pY2UgPSBhd2FpdCBpbml0aWFsaXplQ2FwdGFpblBpY2tlcigpO1xuICAgICAgICBhd2FpdCB2aWV3LkRPTUhlbHBlci5zZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIC8vIGF3YWl0IGRlbGF5KDcwMCk7XG4gICAgICAgIFxuICAgICAgICB2aWV3LkRPTUhlbHBlci5pbml0aWFsaXplTWFpbkRpc3BsYXkoKTtcblxuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvUGxheWVyKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmdlbmVyYXRlU2hpcFJvdGF0aW9uQ29udHJvbHMoKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5hcHBseVJvdGF0aW9uKHNoaXBFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuZGlzcGxheUNhcHRhaW5BdmF0YXIoY2FwdGFpbkNob2ljZSk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci51c2VyU2hpcFBsYWNlbWVudFJlc3BvbnNlKCkpO1xuICAgICAgICB2aWV3LmhpZGVDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgIHZpZXcuc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscygpO1xuXG4gICAgICAgIGdhbWUucGxhY2VBbGxDb21wdXRlclNoaXBzKCk7XG5cbiAgICAgICAgYXdhaXQgc2hpcFBsYWNlbWVudEhhbmRsZXIoKTtcbiAgICAgICAgdmlldy5vbkNlbGxDbGljayhwbGF5Um91bmQpO1xuICAgICAgICAvLyB2aWV3LmRyYWdBbmREcm9wU2hpcHMoKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgLy8gICAgIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCBjb29yZGluYXRlKTtcblxuICAgICAgICAvLyAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQoKTtcblxuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCB0cnVlKVxuXG4gICAgICAgIC8vICAgICAgICAgdmlldy5vbkNlbGxDbGljayhwbGF5Um91bmQpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIFxuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdmlldy5kcmFnQW5kRHJvcFNoaXBzKChzaGlwLCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGUpO1xuXG4gICAgICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvQ29tcHV0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB2aWV3LkRPTUhlbHBlci5pbml0aWFsaXplQ2FwdGFpblBpY2tlcihhc3luYyBjYXB0YWluQ2hvaWNlID0+IHtcbiAgICAgICAgICAgIGdhbWUuc2V0UGxheWVyQ2FwdGFpbihjYXB0YWluQ2hvaWNlKTtcbiAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZUNhcHRhaW5QaWNrZXIoKTtcbiAgICAgICAgICAgIHJlc29sdmUoY2FwdGFpbkNob2ljZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAvLyBjb25zdCBnYW1lTG9vcCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgaWYgKCFnYW1lU3RhcnRlZCkge1xuICAgIC8vICAgICAgICAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5pbml0aWFsaXplQ2FwdGFpblBpY2tlciggYXN5bmMgKGNhcHRhaW5DaG9pY2UpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZ2FtZS5zZXRQbGF5ZXJDYXB0YWluKGNhcHRhaW5DaG9pY2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVDYXB0YWluUGlja2VyKCk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TmV3U2hpcENvbnRhaW5lckhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSg3MDApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuaW5pdGlhbGl6ZU1haW5EaXNwbGF5KCk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb1BsYXllcigpO1xuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5nZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzKChzaGlwRWxlbWVudCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuYXBwbHlSb3RhdGlvbihzaGlwRWxlbWVudCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuZGlzcGxheUNhcHRhaW5BdmF0YXIoY2FwdGFpbkNob2ljZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci51c2VyU2hpcFBsYWNlbWVudFJlc3BvbnNlKCkpO1xuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3LmhpZGVDYXB0YWluQXZhdGFyKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscygpO1xuICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgZ2FtZS5wbGFjZUFsbENvbXB1dGVyU2hpcHMoKTtcbiAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIHZpZXcuZHJhZ0FuZERyb3BTaGlwcygoc2hpcCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGUpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIucmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIucGxheWVyVHVyblJlc3BvbnNlKCkpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIHRydWUpXG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Lm9uQ2VsbENsaWNrKHBsYXlSb3VuZCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3QgcGxheVJvdW5kID0gYXN5bmMgKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKCFjb29yZGluYXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IEF0dGFjayBhbHJlYWR5IHBsYWNlZGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFnYW1lLmNvbXB1dGVyQm9hcmQuaXNWYWxpZEF0dGFjayhjb29yZGluYXRlKSkgcmV0dXJuO1xuXG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmRpc2FibGVDZWxscygpOyAgXG4gICAgICAgIGV4ZWN1dGVQbGF5ZXJUdXJuKGNvb3JkaW5hdGUpO1xuXG4gICAgICAgIGNvbnN0IGlzYVdpbm5lciA9IGdhbWUuY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgICAgaWYgKGlzYVdpbm5lcikge1xuICAgICAgICAgICAgdmlldy5hbGVydFdpbm5lcihpc2FXaW5uZXIpO1xuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9kZWxheSBkaXNwbGF5aW5nIHBsYXllcnMgYXR0YWNrIGJ5IDMgc2Vjb25kcywgZm9yIHNvdW5kIGVmZmVjdHMgcHVycG9zZXMgbGF0ZXJcblxuICAgICAgICAvLyBhd2FpdCBkZWxheSgzMDAwKTtcblxuICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCB0cnVlKTsgIFxuXG4gICAgICAgIGlmIChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0TGFzdEhpdCgpID09PSAnc2hpcCcpIHtcbiAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5wbGF5ZXJIaXRSZXNwb25zZSgpKTtcbiAgICAgICAgICAgIHZpZXcuc2V0SGl0KGNvb3JkaW5hdGUsIHRydWUpO1xuICAgICAgICAgICAgdmlldy5jb21wdXRlclZpZXdVcGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIucGxheWVyTWlzc1Jlc3BvbnNlKCkpO1xuICAgICAgICBhd2FpdCBkZWxheSgzMDAwKTtcbiAgICAgICAgdmlldy5wbGF5ZXJWaWV3VXBkYXRlKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5jb21wdXRlclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb1BsYXllcigpO1xuICAgICAgICB2aWV3LmhpZGVDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDMwMDApO1xuICAgICAgICBleGVjdXRlQ29tcHV0ZXJUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhlY3V0ZVBsYXllclR1cm4gPSAoY29vcmRpbmF0ZSkgPT4ge1xuXG4gICAgICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyLmdldE5hbWUoKTtcbiAgICAgICAgZ2FtZS5wbGF5ZXIuYXR0YWNrKFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXSk7XG4gICAgICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUuY29tcHV0ZXIuZ2V0TmFtZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBleGVjdXRlQ29tcHV0ZXJUdXJuID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2FtZS5jb21wdXRlci5hdHRhY2soKTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0Zvcldpbm5lcigpO1xuICAgICAgICBpZiAod2lubmVyKSB7XG4gICAgICAgICAgICB2aWV3LmFsZXJ0V2lubmVyKHdpbm5lcik7XG4gICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3RvIGRlbGF5IGNvbXB1dGVycyBhdHRhY2tzLCBmb3IgYWRkaW5nIGluIHNvdW5kIGVmZmVjdHMgbGF0ZXIgb25cblxuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcblxuICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRMYXN0SGl0KCkgPT09ICdzaGlwJykge1xuICAgICAgICAgICAgdmlldy5zZXRIaXQocG9zaXRpb24sZmFsc2UpO1xuICAgICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLmNvbXB1dGVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMzAwMCk7XG4gICAgICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZSh0cnVlKTtcbiAgICAgICAgICAgIGV4ZWN1dGVDb21wdXRlclR1cm4oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRVc2VySW5zdHJ1Y3Rpb24odmlldy5ET01IZWxwZXIuZW5lbXlNaXNzUmVzcG9uc2UoKSk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDMwMDApO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLmVuYWJsZUNlbGxzKCk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgZXhlY3V0ZUNvbXB1dGVyVHVybiA9IGFzeW5jICgpID0+IHtcblxuICAgIC8vICAgICBjb25zdCBwb3NpdGlvbiA9IGdhbWUuY29tcHV0ZXIuYXR0YWNrKCk7XG4gICAgLy8gICAgIGNvbnN0IHdpbm5lciA9IGdhbWUuY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAvLyAgICAgaWYgKHdpbm5lcikge1xuICAgIC8vICAgICAgICAgdmlldy5hbGVydFdpbm5lcih3aW5uZXIpO1xuICAgIC8vICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy90byBkZWxheSBjb21wdXRlcnMgYXR0YWNrcywgZm9yIGFkZGluZyBpbiBzb3VuZCBlZmZlY3RzIGxhdGVyIG9uXG5cbiAgICAvLyAgICAgLy8gYXdhaXQgZGVsYXkoMzAwMCk7XG5cblxuICAgIC8vICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgIC8vICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRMYXN0SGl0KCkgPT09ICdzaGlwJykge1xuICAgIC8vICAgICAgICAgdmlldy5zZXRIaXQocG9zaXRpb24sZmFsc2UpO1xuICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0VXNlckluc3RydWN0aW9uKHZpZXcuRE9NSGVscGVyLmNvbXB1dGVyVHVyblJlc3BvbnNlKCkpO1xuICAgIC8vICAgICAgICAgYXdhaXQgZGVsYXkoMzAwMCk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZSh0cnVlKTtcbiAgICAvLyAgICAgICAgIGV4ZWN1dGVDb21wdXRlclR1cm4oKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5lbmVteU1pc3NSZXNwb25zZSgpKTtcbiAgICAvLyAgICAgICAgIGF3YWl0IGRlbGF5KDMwMDApO1xuICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuZW5hYmxlQ2VsbHMoKTtcbiAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldFVzZXJJbnN0cnVjdGlvbih2aWV3LkRPTUhlbHBlci5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5zZXRNYWluR3JpZFRvQ29tcHV0ZXIoKTtcbiAgICAvLyAgICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGNvbnN0IGNoZWNrU2hpcFBsYWNlbWVudCA9IChzaGlwLCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5Q29vcmRpbmF0ZSA9IFsrY29vcmRpbmF0ZVswXSwgK2Nvb3JkaW5hdGVbMV1dO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gK3NoaXAuZGF0YXNldC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBnYW1lSGVscGVyLm1ha2VTaGlwKHNoaXBMZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5jYW5QbGFjZVNoaXAobmV3U2hpcCwgYXJyYXlDb29yZGluYXRlLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllckJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBhcnJheUNvb3JkaW5hdGUsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHZpZXcuRE9NSGVscGVyLnRyYW5zaXRpb25FbGVtZW50UmVtb3ZhbChzaGlwLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogQ2Fubm90IHBsYWNlIHNoaXAgdGhlcmUnKTtcbiAgICAgICAgICAgICAgICAvL2hhbmRsZSBhIG1pc3NwbGFjZWQgc2hpcCwgdXNlciB0b29sdGlwIG9yIGVycm9yIHBvcCB1cFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuY2FuUGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllckJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBhcnJheUNvb3JkaW5hdGUsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5ET01IZWxwZXIudHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsKHNoaXAucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBDYW5ub3QgcGxhY2Ugc2hpcCB0aGVyZScpO1xuICAgICAgICAgICAgICAgIC8vaGFuZGxlIGEgbWlzc3BsYWNlZCBzaGlwLCB1c2VyIHRvb2x0aXAgb3IgZXJyb3IgcG9wIHVwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgZ2FtZSA9IEdhbWVTdGF0ZSgpO1xuICAgICAgICB2aWV3LkRPTUhlbHBlci5yZW1vdmVHcmlkc0FuZEhlYWRpbmcoKTtcbiAgICAgICAgdmlldy5ET01IZWxwZXIucmVzZXRHYW1lU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgdmlldy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVMb29wKTtcbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcE1vZHVsZVwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWVJbml0SGVscGVyID0gKCkgPT4ge1xuXG4gICAgLy8gY29uc3QgcGxhY2VUZXN0U2hpcHMgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCg1KSwgWzQsMV0pO1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDQpLCBbNyw0XSk7XG4gICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMyksIFsyLDJdKTtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgyKSwgWzgsN10pO1xuXG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDUpLCBbMiwzXSk7XG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDQpLCBbMSwxXSk7XG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDMpLCBbOSw1XSk7XG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDIpLCBbMyw3XSk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgbWFrZVNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBzaGlwO1xuICAgIH1cblxuICAgIHJldHVybiB7IG1ha2VTaGlwIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdhbWVTdGF0ZSA9ICgpID0+IHtcblxuICAgIGxldCBjdXJyZW50UGxheWVyO1xuXG4gICAgbGV0IHBsYXllckNhcHRhaW4gPSBudWxsO1xuXG4gICAgY29uc3QgcGxheWVySGFzQ2FwdGFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllckNhcHRhaW4gPT09IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGxheWVyQ2FwdGFpbiA9IChjYXB0YWluKSA9PiB7XG4gICAgICAgIHBsYXllckNhcHRhaW4gPSBjYXB0YWluO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBsYXllckNhcHRhaW4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJDYXB0YWluO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIFxuICAgIGxldCBwbGF5ZXIgPSBQbGF5ZXIoJ1J5YW4nLCBjb21wdXRlckJvYXJkLCBmYWxzZSk7XG4gICAgbGV0IGNvbXB1dGVyID0gUGxheWVyKCdDb21wdXRlcicsIHBsYXllckJvYXJkLCB0cnVlKVxuXG4gICAgY29uc3QgcGxhY2VBbGxDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKFNoaXAoNSkpO1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKFNoaXAoNCkpO1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKFNoaXAoMykpO1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKFNoaXAoMikpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlci5nZXROYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXIuZ2V0TmFtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQsIHBsYXllciwgY29tcHV0ZXIsIGNoZWNrRm9yV2lubmVyLCBwbGFjZUFsbENvbXB1dGVyU2hpcHMsIGN1cnJlbnRQbGF5ZXIsIHBsYXllckhhc0NhcHRhaW4sIHNldFBsYXllckNhcHRhaW4sIGdldFBsYXllckNhcHRhaW4gfVxufSIsIlxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lLCBvcHBvbmVudEJvYXJkLCBpc0NQVSA9IGZhbHNlKSA9PiB7XG4vL2ZhY3RvcnkgZm9yIG91ciBkaWZmZXJlbnQgcGxheWVycyAoaW4gdGhlIGNhc2Ugb2YgdGhpcyBnYW1lIGl0IHdvdWxkIGJlIHRoZSBwbGF5ZXIgYW5kIHRoZSBjb21wdXRlcikgd291bGQgdGFrZSBhIG5hbWUsIGFuZCB0aGUgb3Bwb3NpbmcgcGxheWVycyBib2FyZC4gU28gaWYgd2UgbWFrZSBhIHBsYXllciBpdCB3b3VsZCB0YWtlIGluIHRoZSBjb21wdXRlcnMgYm9hcmQuXG5cbiAgICBjb25zdCBjYWN1bGF0aW9uUmFuZG9tUG9zaXRpb24gPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdmFsaWRQb3NpdGlvbnMgPSBvcHBvbmVudEJvYXJkLmdldFZhbGlkQXR0YWNrcygpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZhbGlkUG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkUG9zaXRpb25zLmxlbmd0aCldO1xuXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoaXNDUFUpIHtcblxuICAgICAgICAgICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjYWN1bGF0aW9uUmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgIG9wcG9uZW50Qm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkaW5hdGUpXG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhdHRhY2ssIGdldE5hbWUgfVxufSIsIi8vc2hpcCBmYWN0b3J5IHNob3VsZCBpbmNsdWRlIGEgdHlwZSwgd2hpY2ggd2UgY2FuIGRlZmluZSBsYXRlciBmcm9tIHRoZSBzaGlwIHRoYXQgdGhlIHVzZXIgY2xpY2tzIG9uLiBcblxuZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBjb25zdCBzaGlwTG9va3VwID0ge1xuICAgICAgICA1OiAnQ2FycmllcicsXG4gICAgICAgIDQ6ICdCYXR0bGVzaGlwJyxcbiAgICAgICAgMzogJ0NydWlzZXInLFxuICAgICAgICAyOiAnRGVzdHJveWVyJ1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSBzaGlwTG9va3VwW2xlbmd0aF07XG4gICAgXG4gICAgbGV0IHNoaXBEaXJlY3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2V0U2hpcERpcmVjdGlvbiA9IChkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgc2hpcERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcERpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgZGFtYWdlUmVjaWV2ZWQgPSAwO1xuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBkYW1hZ2VSZWNpZXZlZCsrO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBkYW1hZ2VSZWNpZXZlZCA+PSBsZW5ndGg7XG4gICAgXG5cbiAgICBjb25zdCBnZXREYW1hZ2VSZWNpZXZlZCA9ICgpID0+IGRhbWFnZVJlY2lldmVkO1xuXG4gICAgcmV0dXJuIHsgdHlwZSwgbGVuZ3RoLCBnZXREYW1hZ2VSZWNpZXZlZCwgaGl0LCBpc1N1bmssIHNldFNoaXBEaXJlY3Rpb24sIGdldFNoaXBEaXJlY3Rpb24gfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL2dhbWVDb250cm9sbGVyXCI7XG5cbmdhbWVDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9