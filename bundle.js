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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    background-color: var(--main-background-clr);\n}\n\n.wrapper {\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.button-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 50ms;\n    font-weight: bold;\n}\n\n.play-again {\n    background: var(--main-background-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    width: 60px;\n    padding: 8px;\n    color: var(--secondary-clr);\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.rules-icon {\n    width: 20px;\n    cursor: pointer;\n    filter: invert(71%) sepia(40%) saturate(712%) hue-rotate(25deg) brightness(102%) contrast(117%);\n}\n\n.rules-icon:hover {\n    transform: scale(1.11);\n}\n\n.start-game:hover {\n    transform: scale(1.03);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    position: relative;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n    max-width: 700px;\n}\n\n.modal {\n    position: absolute;\n    top: 134%;\n    left: 55%;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 8px;\n    padding: 15px;\n    font-size: 0.7rem;\n    font-weight: bold;\n    /* min-width: 285px; */\n    overflow: scroll;\n    /* height: min(100%, 200px); */\n    transition: 350ms ease;\n}\n\n.modal.rules {\n    min-width: 285px;\n    height: min(100%, 200px);\n}\n\n.modal.game-over {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n    justify-content: center;\n    min-width: 200px;\n}\n\n.modal.active {\n    /* transform: scale(1); */\n    top: 56%;\n    left: 55%;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.modal ol {\n    padding-left: 15px;\n}\n\n.modal ol li,\n.modal ol h3 {\n    margin-bottom: 10px;\n}\n\n.modal ol h3 {\n    font-size: 1rem;\n}\n\n.close-icon {\n    position: absolute;\n    width: 25px;\n    top: 0;\n    right: 0;\n    margin: 11px 11px 0px 0px;\n    cursor: pointer;\n    filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(13deg) brightness(98%) contrast(105%);\n}\n.overlay {\n    position: fixed;\n    background-color: rgba(0,0,0, .7);\n    opacity: 0;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 150ms ease;\n}\n\n.overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -43.5%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 90%;\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent var(--secondary-clr) transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    border: solid 3px var(--secondary-clr);\n    border-bottom: solid 10px var(--secondary-clr);\n    border-radius: 4px;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 200ms ease;\n    max-width: 85%;\n    border-radius: 4px;\n    border: solid 4px transparent;\n}\n\n.captain-wheel-picker-image:hover {\n    border: solid 4px var(--secondary-clr);\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    /* transform: scale(1.04); */\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n/* .box.placed::after {\n    content: '';\n    width: 0.5rem;\n    height: 0.5rem;\n    background: black;\n    border-radius: 50%;\n} */\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 12px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.detail {\n    background: black;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n}\n\n.ship-element {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 94%;\n}\n\n.hidden {\n    opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --main-background-clr: rgb(6, 18, 31);\n    --grid-border-clr: rgb(22, 47, 73);\n    --ship-border-clr: #c4ce35;\n    --box-hover-clr: rgb(32, 57, 83);\n    --ship-clr: rgb(36, 60, 85);\n    --secondary-clr: #cee61c;\n    font-size: 16px;\n}\n\nbody {\n    background-color: var(--main-background-clr);\n}\n\n.wrapper {\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\nh2 {\n    color: var(--secondary-clr);\n}\n\n.button-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.start-game {\n    background: var(--secondary-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 15px;\n    cursor: pointer;\n    transition: 50ms;\n    font-weight: bold;\n}\n\n.play-again {\n    background: var(--main-background-clr);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    width: 60px;\n    padding: 8px;\n    color: var(--secondary-clr);\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.rules-icon {\n    width: 20px;\n    cursor: pointer;\n    filter: invert(71%) sepia(40%) saturate(712%) hue-rotate(25deg) brightness(102%) contrast(117%);\n}\n\n.rules-icon:hover {\n    transform: scale(1.11);\n}\n\n.start-game:hover {\n    transform: scale(1.03);\n}\n\n.in-progress {\n    cursor: not-allowed;\n    background-color: gray;\n    opacity: 0.5;\n}\n\n.gameboards {\n    display: flex;\n    position: relative;\n    justify-content: center;\n    gap: 20px;\n    width: 80%;\n    max-width: 700px;\n}\n\n.modal {\n    position: absolute;\n    top: 134%;\n    left: 55%;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 8px;\n    padding: 15px;\n    font-size: 0.7rem;\n    font-weight: bold;\n    /* min-width: 285px; */\n    overflow: scroll;\n    /* height: min(100%, 200px); */\n    transition: 350ms ease;\n}\n\n.modal.rules {\n    min-width: 285px;\n    height: min(100%, 200px);\n}\n\n.modal.game-over {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n    justify-content: center;\n    min-width: 200px;\n}\n\n.modal.active {\n    /* transform: scale(1); */\n    top: 56%;\n    left: 55%;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.modal ol {\n    padding-left: 15px;\n}\n\n.modal ol li,\n.modal ol h3 {\n    margin-bottom: 10px;\n}\n\n.modal ol h3 {\n    font-size: 1rem;\n}\n\n.close-icon {\n    position: absolute;\n    width: 25px;\n    top: 0;\n    right: 0;\n    margin: 11px 11px 0px 0px;\n    cursor: pointer;\n    filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(13deg) brightness(98%) contrast(105%);\n}\n.overlay {\n    position: fixed;\n    background-color: rgba(0,0,0, .7);\n    opacity: 0;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 150ms ease;\n}\n\n.overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.captain-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    opacity: 0;\n    position: relative;\n    padding: 10px;\n    top: -10rem;\n    background: var(--grid-border-clr);\n    color: var(--secondary-clr);\n    border-radius: 15px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 700ms ease;\n  }\n\n\n\n/* .captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    height: 100%;\n    gap: 20px;\n} */\n\n.captain-avatars {\n    display: flex;\n    font-weight: bold;\n    font-size: 0.8rem;\n    cursor: pointer;\n    gap: 20px;\n    width: 100%;\n    justify-content: center;\n}\n\n.captain-board-avatar {\n    position: absolute;\n    left: -43.5%;\n    bottom: 0;\n    width: 40%;\n    height: 50%;\n    /* transform: scale(1); */\n    background: var(--grid-border-clr);\n    color: var(--ship-border-clr);\n    padding: 5px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 8px;\n    transition: 150ms ;\n}\n\n/* .captain-message {\n    position: absolute;\n    font-size: 0.8rem;\n    top: 0;\n    left: 0;\n} */\n\n.captain-message {\n    position: relative;\n    font-size: 0.7rem;\n    bottom: 0;\n    right: 13%;\n    /* bottom: 7%; */\n    bottom: 30%;\n    max-width: 90%;\n    background-color: var(--secondary-clr);\n    color: black;\n    border-radius: 5px;\n    padding: 6px;\n  }\n\n.captain-message::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    transform: translateX(-50%) skew(-60deg);\n    border-width: 10px;\n    border-style: solid;\n    border-color: transparent transparent var(--secondary-clr) transparent;\n}\n  \n\n.captain-image {\n    /* border-top-left-radius: 30px;\n    border-top-right-radius: 30px; */\n    width: 100%;\n    height: 80%;\n    border: solid 3px var(--secondary-clr);\n    border-bottom: solid 10px var(--secondary-clr);\n    border-radius: 4px;\n    /* opacity: 0; */\n\n}\n\n\n.captain-container .captain {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    /* border: solid 4px var(--ship-clr); */\n    color: var(--secondary-clr);\n    align-items: center;\n}\n\n/* .captain-container .captain {\n    border: solid 4px var(--ship-clr);\n    color: var(--secondary-clr);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n/* .captain-wheel-picker-image {\n    height: 100%;\n} */\n\n.captain-wheel-picker-image {\n    /* transform: scale(0); */\n    transition: 200ms ease;\n    max-width: 85%;\n    border-radius: 4px;\n    border: solid 4px transparent;\n}\n\n.captain-wheel-picker-image:hover {\n    border: solid 4px var(--secondary-clr);\n}\n\n.captain-name {\n    text-align: center;\n}\n\n.appear {\n    transform: scale(1);\n}\n\n.captain-container .captain:hover {\n    /* transform: scale(1.04); */\n}\n.captain-container.visible {\n    opacity: 1;\n    top: 0rem;\n}\n/* .grid.left,\n.grid.right {\n    display: flex;\n    transform: scale(0);\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    flex-shrink: 0;\n    width: 50%;\n    height: 100%;\n    aspect-ratio: 1/1;\n    opacity: 100;\n    transition: 700ms ease;\n\n\n} */\n\n.grid.left,\n.grid.right {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    position: relative;\n    transform: scale(0);\n    width: 30%;\n    min-width: 95px;\n    background: var(--main-background-clr);\n    border-radius: 5px;\n    opacity: 100;\n    font-size: 0.4rem;\n    transition: 700ms ease;\n}\n\n.grid.left.current,\n.grid.right.current {\n    width: 70%;\n    min-width: 200px;\n    font-size: 0.6rem;\n}\n/* .grid.left {\n    min-width: 95px;\n    width: 30%;\n}\n\n.grid.right {\n    width: 70%;\n} */\n\n.grid.left.fade-out,\n.grid.left.fade-out {\n    opacity: 0;\n    transition: opacity 700ms ease-out;\n}\n\n.grid.left.fade-out.hide,\n.grid.right.fade-out.hide {\n    display: none;\n}\n\n.grid.left.visible,\n.grid.right.visible {\n    transform: scale(1);\n}\n/* .grid.left.disabled,\n.grid.right.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n} */\n\n.row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n}\n\n.box,\n.outer-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: solid 1px rgb(56, 58, 70); */\n    border: solid 1px var(--grid-border-clr);\n    flex-grow: 1;\n    /* cursor: pointer; */\n    aspect-ratio: 1/1;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    transition: 150ms ease;\n}\n\n/* .box .disabled {\n    pointer-events: none;\n} */\n\n.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.box.hover {\n    background-color: var(--box-hover-clr);\n}\n\n.box.placed {\n    background-color: var(--secondary-clr);\n    border-radius: 8px;\n    border: solid 1px var(--ship-border-clr);\n\n}\n\n/* .box.placed::after {\n    content: '';\n    width: 0.5rem;\n    height: 0.5rem;\n    background: black;\n    border-radius: 50%;\n} */\n\n.ship-square-horizontal {\n    width: 100%;\n    height: 60%;\n    background: red;\n}\n\n.ship-square-vertical {\n    width: 60%;\n    height: 100%;\n    background: red;\n}\n.outer-box {\n    background-color: var(--main-background-clr);\n    color: var(--secondary-clr);\n    border: none;\n}\n\n.attack-marker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    border: solid 3px var(--secondary-clr);\n    border-radius: 50%;\n}\n\n.ship-hit-marker {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.player-ship-hit,\n.computer-ship-hit {\n    position: relative;\n    border-radius: 0%;\n    border: none;\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after,\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.player-ship-hit::before,\n.player-ship-hit::after {\n    background-color: var(--main-background-clr);\n}\n\n.computer-ship-hit::before,\n.computer-ship-hit::after {\n    background-color: var(--secondary-clr);\n}\n\n.player-ship-hit::after,\n.computer-ship-hit::after {\n  transform: translateX(-50%) rotate(-45deg);\n}\n\n.transition-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: min-content;\n    position: absolute;\n    top: 0;\n    transition: all 0.5s ease;\n}\n\n.ship-main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    /* padding-top: 10px; */\n    gap: 20px;\n    width: 100%;\n    /* height: 200px; */\n    height: 0;\n    background: var(--grid-border-clr);\n    transition: height 700ms ease;\n}\n\n.ship-main-container.expand {\n    padding-top: 10px;\n    height: 160px;\n}\n\n.ship-sub-container {\n    display: flex;\n    gap: 12px;\n}\n\n.ship-element-container {\n    position: relative;\n    transition: 250ms ease-out;\n}\n\n.detail {\n    background: black;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n}\n\n.ship-element {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background: var(--secondary-clr);\n    border-radius: 8px;\n    height: 30px;\n    transition: 150ms;\n}\n\n.ship-element:hover {\n    border: solid 1px var(--main-background-clr);\n}\n\n\n.ship-element.length-2 {\n    width: 50px;\n}\n\n.ship-element.length-3 {\n    width: 70px;\n\n}\n\n.ship-element.length-4 {\n    width: 90px;\n\n}\n\n.ship-element.length-5 {\n    width: 110px;\n\n}\n\n.ship-element.vertical {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--secondary-clr);\n    width: 30px;\n}\n\n.ship-element.length-2.vertical {\n    height: 50px;\n}\n\n.ship-element.length-3.vertical {\n    height: 70px;\n}\n\n.ship-element.length-4.vertical {\n    height: 90px;\n}\n\n.ship-element.length-5.vertical {\n    height: 110px;\n}\n\n.rotate-button {\n    position: absolute;\n    width: 50px;\n    left: 50%;\n    transform: translate(-50%, calc(100% + -55px));\n    filter: invert(83%) sepia(82%) saturate(460%) hue-rotate(7deg) brightness(87%) contrast(108%);\n    transition: transform 0.3s ease-in-out;\n    transform-origin: center center;\n}\n\n.rotate-button.active {\n    transform: rotate(90deg);\n    transform-origin: top left;\n}\n\n/* .ship-element.length-2.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-3.rotate {\n    transform: rotate(90deg);\n}\n\n.ship-element.length-4.rotate {\n    transform: rotate(90deg);\n\n}\n\n.ship-element.length-5.rotate {\n    transform: rotate(90deg);\n} */\n\n.invisible {\n    scale: 0;\n    /* opacity: 0; */\n}\n\n.move-position {\n    transform: translateX(55%);\n    width: 94%;\n}\n\n.hidden {\n    opacity: 0;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "DOMInterface": () => (/* binding */ DOMInterface)
/* harmony export */ });
/* harmony import */ var _DOMCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMCreation */ "./src/DOM Helper Modules/DOMCreation.js");
/* harmony import */ var _ElementSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementSelector */ "./src/DOM Helper Modules/ElementSelector.js");



const DOMInterface = () => {

    const creator = (0,_DOMCreation__WEBPACK_IMPORTED_MODULE_0__.CustomElementCreator)();
    const elements = (0,_ElementSelector__WEBPACK_IMPORTED_MODULE_1__.MyElements)();

    const initializeMainDisplay = () => {

        generateGrids();
        setInGameStyles();
        generateShipElements();
    }

    const setNewShipContainerHeight = () => {
        return new Promise((resolve) => {
            elements.shipMainContainer.classList.add('expand');
            elements.shipMainContainer.addEventListener('transitionend', () => {
                resolve();
            });
        });
    }

    const removeShipContainerHeight = () => {
        elements.shipMainContainer.classList.remove('expand')
    }

    const setMainGridToPlayer = () => {
        elements.playerBoard.classList.add('current');
        elements.computerBoard.classList.remove('current');
    }

    const setMainGridToComputer = () => {
        elements.playerBoard.classList.remove('current');
        elements.computerBoard.classList.add('current');

    }
    const initializeCaptainPicker = async (callback) => {
        const captainContainer = creator.oneElement('captain-container', 'div');

        const title = document.createElement('h3');
        title.textContent = 'Pick your lieutenant!'
        captainContainer.appendChild(title);
        elements.gameboardContainer.append(captainContainer);

        setInGameStyles();
        
        elements.transitionContainer.classList.add('shift-down');
        
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
        return [ elements.captain1, elements.captain2, elements.captain3 ]
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
        // const transitionContainer = document.querySelector('.transition-container');

        elements.transitionContainer.style.top = '0vh';
    }

    const setTransitionContainerTop = () => {

        // const mainBoardsContainer = document.querySelector('.gameboards');
        // const transitionContainer = document.querySelector('.transition-container');

        const gameboardsHeight = elements.gameboardContainer.offsetHeight;
        elements.transitionContainer.style.top = `${gameboardsHeight + 35}px`;
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

        const playerBoard = document.createElement('div');
        const computerBoard = document.createElement('div');
        
        playerBoard.className = 'grid left';
        
        computerBoard.className = 'grid right';

        elements.playerBoard = playerBoard;
        elements.computerBoard = computerBoard;
        
        playerBoard.dataset.grid = false;
        
        makeGridSquares(playerBoard, false);
        makeGridSquares(computerBoard, true);

        elements.gameboardContainer.append(playerBoard, computerBoard);

        setTimeout(() => {
            setTransitionContainerTop();
            elements.transitionContainer.classList.add('shift-down');
        },30);
        
        setTimeout(() => {
            playerBoard.classList.add('visible');
            computerBoard.classList.add('visible');
        }, 500);

        window.addEventListener('resize', setTransitionContainerTop);
    }

    const generateShipElements = () => {
        const shipElementArea = document.querySelector('.ship-main-container');
        
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
            rotateButton.src = elements.rotate;
            rotateButton.draggable = false;
            rotateButton.addEventListener('click', () => {
                callback(ship);
                changeOrientation(ship);
            });

            shipContainer.appendChild(rotateButton);
        });

        shipMainContainer.appendChild(shipSubContainer);
    
    }
    
    const createModal = (options, contentArray) => {
        const modal = creator.oneElement('modal', 'div');
        elements.modal = modal;
        const overlay = creator.oneElement('overlay', 'div');

        if (options.type === 'Rules') {

            modal.classList.add('rules');

            const ruleList = createList('ol', contentArray, options.type);

            const closeIcon = new Image();
            closeIcon.src = elements.close;
            closeIcon.className = 'close-icon';
    
            closeIcon.addEventListener('click', () => {
                closeModal(modal);
            });
            modal.append(ruleList, closeIcon);

            return { modal, overlay }
        }

        if (options.type === 'gameOver') {
            modal.classList.add('game-over');
            const resultHeading = document.createElement('h3');

            if (options.winner === 'Player') {
                resultHeading.textContent = 'You won!';
            } else {
                resultHeading.textContent = 'The computer won!';
            }
            const resultPara = document.createElement('p');
            resultPara.textContent = contentArray[0];


            const playAgainButton = creator.oneElement('play-again', 'button');
            playAgainButton.textContent = 'Close';

            modal.append(resultHeading, resultPara, playAgainButton);

            return { modal, overlay, playAgainButton }
        }
    }

    const createList = (listType, listItems, listHeading) => {
        const myList = document.createElement(listType);

        if (listHeading) {
            const heading = document.createElement('h3');
            heading.textContent = listHeading;
            myList.appendChild(heading);
        }
        for (const listItemText of listItems) {
            const item = document.createElement('li');

            item.textContent = listItemText;
            myList.appendChild(item);
        }

        return myList;
    }
    
    const openModal = (modal) => {
        const overlay = document.querySelector('.overlay');

        modal.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    const closeModal = (modal) => {
        const overlay = document.querySelector('.overlay');

        modal.classList.remove('active');
        overlay.classList.remove('active');
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

    const removeRulesButton = () => {
        elements.buttonContainer.removeChild(elements.buttonContainer.lastChild);
    }
    const removeGridsAndHeading = () => {
        
        elements.playerBoard.classList.add('invisible');
        elements.computerBoard.classList.add('invisible');
        setDefaultContainerSize();
        elements.playerBoard.addEventListener('transitionend', () => {

            elements.playerBoard.remove();
            elements.computerBoard.remove();

            elements.playerBoard.classList.remove('invisible');
            elements.computerBoard.classList.remove('invisible');
        });

        removeRulesButton();
        // elements.buttonContainer.removeChild(elements.buttonContainer.lastChild);
    }

    const disableCells = () => {

        elements.computerBoard.classList.add('disabled');
        elements.playerBoard.classList.add('disabled');

        const enabledCells = document.querySelectorAll('.box');
        enabledCells.forEach((cell) => {
            cell.classList.add('disabled');
        });
    }

    const enableCells = () => {

        elements.computerBoard.classList.remove('disabled');
        elements.playerBoard.classList.remove('disabled');

        const disabledCells = document.querySelectorAll('.box');

        disabledCells.forEach((cell) => {
            cell.classList.remove('disabled');
        });
    }

    const currentPlayerOutline = (isPlayersTurn) => {
        if (isPlayersTurn) {
            elements.playerBoard.style.border = 'solid 3px red';
            elements.computerBoard.style.border = '3px transparent';
        } else {
            elements.computerBoard.style.border = 'solid 3px green';
            elements.playerBoard.style.border = '3px transparent';
        }
    }

    const speechBubbleText = (message) => {
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

    const setInGameStyles = () => {
        const button = document.querySelector('.start-game');

        button.classList.add('in-progress');
    }

    const resetGameStyles = () => {
        elements.startButton.classList.remove('in-progress');

        elements.playerBoard.style.border = 'none';
        elements.computerBoard.style.border = 'none';

        enableCells();


    }

    const transitionElementRemoval = (element) => {
        element.classList.add('invisible');

        element.addEventListener('transitionend', () => {
            element.remove();
        });
    }

    return { removeGridsAndHeading, currentPlayerOutline, enableCells, disableCells, speechBubbleText, resetGameStyles, generateShipRotationControls,applyRotation, transitionElementRemoval, initializeMainDisplay, initializeCaptainPicker, removeCaptainPicker, setMainGridToPlayer, setMainGridToComputer, setNewShipContainerHeight, removeShipContainerHeight, getCaptainImages, openModal, closeModal, createModal, elements, removeRulesButton }
}

/***/ }),

/***/ "./src/DOM Helper Modules/ElementSelector.js":
/*!***************************************************!*\
  !*** ./src/DOM Helper Modules/ElementSelector.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyElements": () => (/* binding */ MyElements)
/* harmony export */ });
/* harmony import */ var _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/rotate.svg */ "./src/assets/rotate.svg");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _assets_information_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/information.svg */ "./src/assets/information.svg");
/* harmony import */ var _assets_captains_captain1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/captains/captain1.png */ "./src/assets/captains/captain1.png");
/* harmony import */ var _assets_captains_captain2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/captains/captain2.png */ "./src/assets/captains/captain2.png");
/* harmony import */ var _assets_captains_captain3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/captains/captain3.png */ "./src/assets/captains/captain3.png");







const MyElements = () => {
    
    let playerCells;
    let computerCells;

    let playerBoard;
    let computerBoard;

    let captainAvatar;

    let modal;

    const startButton = document.querySelector('.start-game');
    const gameboardContainer = document.querySelector('.gameboards');
    const transitionContainer = document.querySelector('.transition-container');
    const shipMainContainer = document.querySelector('.ship-main-container');
    const buttonContainer = document.querySelector('.button-container');

    return {
        playerCells,
        computerCells,
        playerBoard,
        computerBoard,
        startButton,
        gameboardContainer,
        transitionContainer,
        shipMainContainer,
        buttonContainer,
        rotate: _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_0__,
        close: _assets_close_svg__WEBPACK_IMPORTED_MODULE_1__,
        information: _assets_information_svg__WEBPACK_IMPORTED_MODULE_2__,
        captain1: _assets_captains_captain1_png__WEBPACK_IMPORTED_MODULE_3__,
        captain2: _assets_captains_captain2_png__WEBPACK_IMPORTED_MODULE_4__,
        captain3: _assets_captains_captain3_png__WEBPACK_IMPORTED_MODULE_5__,
        captainAvatar,
        modal
    }
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



const View = () => {

    const DOM = (0,_DOM_Helper_Modules_DOMHelper__WEBPACK_IMPORTED_MODULE_0__.DOMInterface)();
    const response = (0,_responses__WEBPACK_IMPORTED_MODULE_1__.AvatarResponses)();

    const setPlayerAndComputerCells = () => {
        DOM.elements.playerCells = document.querySelectorAll('[data-player="player"]');
        DOM.elements.computerCells = document.querySelectorAll('[data-player="computer"]');
    }

    const onCellClick = (callback) => {
            DOM.elements.computerCells.forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    callback(e.target.dataset.xyPos);
                });
            });
    }

    const handlePlayerHitState = (coordinate) => {
        DOM.speechBubbleText(response.playerHitResponse());
        setHit(coordinate, true);
        computerViewUpdate();
    }

    const handlePlayerMissState = () => {
        playerViewUpdate();
        DOM.speechBubbleText(response.computerTurnResponse());
        DOM.setMainGridToPlayer();
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

    const appendRuleModal = () => {

        const infoButton = new Image();
        infoButton.src = DOM.elements.information;
        infoButton.className = 'rules-icon';
        DOM.elements.buttonContainer.appendChild(infoButton);

        const modalObj = DOM.createModal({
            type: 'Rules'
        }, [
            'Place your ships by clicking and dragging them onto your grid, you can use the rotation icon to switch between vertical and horizontal',
            'You can attack by clicking any square on the opponents grid, your goal is to hit their ships!',
            'After you make your attack it will be the computers turn',
            'If either you or the computer hit a ship, that spot will be marked accordingly and will generate an extra turn for the player who hit a ship. Make that move count!',
            'Your goal is to sink all of their ships, good luck!'
        ]);

        DOM.elements.gameboardContainer.appendChild(modalObj.overlay);
        DOM.elements.gameboardContainer.appendChild(modalObj.modal);

        infoButton.addEventListener('click', () => {
            DOM.openModal(modalObj.modal);
        });
    }

    const appendGameOverModal = (gameWinner, callback) => {

        const modalObj = DOM.createModal({
            type: 'gameOver',
            winner: gameWinner
        }, [
            'Thanks for playing! You can click the button below and try your luck against the computer one more time!'
        ]);

        modalObj.playAgainButton.addEventListener('click', callback);
        DOM.elements.gameboardContainer.appendChild(modalObj.overlay);
        DOM.elements.gameboardContainer.appendChild(modalObj.modal);

        DOM.openModal(modalObj.modal);
    }

    const displayCaptainAvatar = (captain) => {

        const captainAvatar = document.createElement('div');

        const captainMessage = document.createElement('div');
        captainMessage.className = 'captain-message';
        const captainImage = new Image();

        captainImage.src = DOM.getCaptainImages()[captain];
        captainImage.draggable = false;
        captainImage.className = 'captain-image';

        captainAvatar.append(captainImage, captainMessage);
        captainAvatar.className = 'captain-board-avatar';
        DOM.elements.computerBoard.appendChild(captainAvatar);
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

            ship.addEventListener('touchstart', () => {
                draggedShip = ship;
            });

            // ship.addEventListener('dragend', () => {
            //     draggedShip.parentNode.classList.remove('hidden');
            // });
        }

        for (const cell of DOM.elements.playerCells) {
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

            cell.addEventListener('touchenter', () => {
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

            cell.addEventListener('touchleave', () => {
                
                if (draggedShip.dataset.orientation === 'horizontal') {

                    setHorizontalShipHover(draggedShip, cell, true)
                } else {
                    setVerticalShipHover(draggedShip, cell, true)
                }
            });
        }        

        for (const cell of DOM.elements.playerCells) {
            cell.addEventListener('drop', (e) => {

                // draggedShip.addEventListener('dragend', (e) => {
                //     draggedShip.parentNode.classList.add('hidden');
                // });

                callback(draggedShip, e.target.dataset.xyPos);
                DOM.elements.playerCells.forEach((cell) => cell.classList.remove('hover'))
            });
        }
    }
    //we want to update one board at a time, just pass in the board we want to update at that point. No point in updating both. We can have a bool value that checks if its a computer board or not.
    const updateBoard = (board, isComputerBoard) => {

        setPlayerAndComputerCells();
        let boardCells;

        if (isComputerBoard) {
            boardCells = DOM.elements.computerCells;
        } else {
            boardCells = DOM.elements.playerCells;
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

    const updatePositionOnBoard = (board, xy, isComputerBoard) => {
        let cell;
        if (isComputerBoard) {
            cell = document.querySelector(`[data-player="computer"][data-xy-pos="${xy}"]`);

        } else {
            cell = document.querySelector(`[data-player="player"][data-xy-pos="${xy}"]`);

        }
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

    const playerViewUpdate = () => {
        DOM.disableCells();
        DOM.currentPlayerOutline(true);
        
    }

    const computerViewUpdate = () => {
        DOM.enableCells();
        DOM.currentPlayerOutline(false);
    }

    const alertWinner = (winner) => {
        alert(`Player ${winner} has won the match!`);
    }

    return { DOM, response, onCellClick, updateBoard, alertWinner, playerViewUpdate, computerViewUpdate, dragAndDropShips, setPlayerAndComputerCells, setHit, displayCaptainAvatar, hideCaptainAvatar, showCaptainAvatar, handlePlayerHitState, handlePlayerMissState, appendRuleModal, appendGameOverModal, updatePositionOnBoard }
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
        await view.DOM.setNewShipContainerHeight();
        
        view.DOM.initializeMainDisplay();
        view.appendRuleModal();
        audioSetup.generateAudioFiles();
        audioSetup.loopBackgroundSound();
        view.DOM.setMainGridToPlayer();
        view.DOM.generateShipRotationControls((shipElement) => {
            view.DOM.applyRotation(shipElement);
        });
        view.displayCaptainAvatar(captainChoice);
        view.DOM.speechBubbleText(view.response.shipPlacementResponse());
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
                    view.DOM.removeShipContainerHeight();

                    view.DOM.setMainGridToComputer();
                    view.showCaptainAvatar();
                    view.DOM.currentPlayerOutline(false);
                    view.DOM.speechBubbleText(view.response.playerTurnResponse());
                    view.updateBoard(game.computerBoard.getBoard(), true);
                    resolve();
                }
            });
        });
    }

    const initializeCaptainPicker = async () => {
        return new Promise(resolve => {
          view.DOM.initializeCaptainPicker(async captainChoice => {
            game.setPlayerCaptain(captainChoice);
            view.DOM.removeCaptainPicker();
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

        view.DOM.disableCells();  
        game.player.attack([coordinate[0], coordinate[1]]);


        const isaWinner = game.checkForWinner();
        if (isaWinner) {
            view.DOM.removeRulesButton();
            view.appendGameOverModal(isaWinner, resetGame);
            return;
        }

        if (game.computerBoard.getLastHit()['ship']) {
            audioSetup.playRandomHitSound();
            await delay(delayTime.waitForSound);
            view.updatePositionOnBoard(game.computerBoard.getBoard(), coordinate, true);
            view.handlePlayerHitState(coordinate);
        } else {
            audioSetup.playRandomMissSound()
            await delay(delayTime.waitForSound);
            view.updatePositionOnBoard(game.computerBoard.getBoard(), coordinate, true);
            view.DOM.speechBubbleText(view.response.playerMissResponse());
            await delay(delayTime.waitForSpeech);
            view.handlePlayerMissState();
            await delay(delayTime.waitBetweenTurns);
            handleComputerTurn();
        }
    }
    
    const handleComputerTurn = async () => {

        let attackPosition;
        if (game.playerBoard.getLastHit()['ship']) {
            attackPosition = game.computer.attackAdjacentCell(game.playerBoard.getLastHit()['ship']);   
        } else {
            attackPosition = game.computer.attack();
        }

        const winner = game.checkForWinner();
        if (winner) {
            view.DOM.removeRulesButton();
            view.appendGameOverModal(winner, resetGame);
            return;
        }

        if (game.playerBoard.getLastHit()['ship']) {
            audioSetup.playRandomHitSound();
            await delay(delayTime.waitForSound);
            view.updateBoard(game.playerBoard.getBoard(), false);
            view.setHit(attackPosition,false);
            view.DOM.speechBubbleText(view.response.computerTurnResponse());
            await delay(delayTime.waitForSpeech);
            view.DOM.currentPlayerOutline(true);
            handleComputerTurn();
        } else {
            audioSetup.playRandomMissSound();
            await delay(delayTime.waitForSound);
            view.updateBoard(game.playerBoard.getBoard(), false);
            view.DOM.speechBubbleText(view.response.computerMissResponse());
            await delay(delayTime.waitForSpeech); 
            view.DOM.currentPlayerOutline(false);
            view.DOM.enableCells();
            view.DOM.speechBubbleText(view.response.playerTurnResponse());
            view.DOM.setMainGridToComputer();
            view.showCaptainAvatar();
        }
    }

    const checkShipPlacement = (ship, coordinate) => {
        const arrayCoordinate = [+coordinate[0], +coordinate[1]];
        const shipLength = +ship.dataset.length;
        const newShip = gameHelper.makeShip(shipLength);
        
        if (ship.dataset.orientation === 'horizontal') {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, false)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, false);

                view.DOM.transitionElementRemoval(ship.parentNode);

            } else {
                console.log('Error: Cannot place ship there');
            }
        } else {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, true)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, true);

                view.DOM.transitionElementRemoval(ship.parentNode);

            } else {
                console.log('Error: Cannot place ship there');
            }
        }
    }

    const delay = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    const delayTime = {
        waitForSpeech: 2000,
        waitForSound: 2000,
        waitBetweenTurns: 2300
    }

    const resetGame = () => {
        gameStarted = false;
        game = (0,_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState)();
        view.DOM.removeGridsAndHeading();
        view.DOM.resetGameStyles();
        view.DOM.closeModal(view.DOM.elements.modal);
    }

    view.DOM.elements.startButton.addEventListener('click', playGame);
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
    
    let player = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('Player', computerBoard, false);
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
        const randomAdjacentCell = calculateAdjacentPosition(coordinate);

        opponentBoard.recieveAttack(randomAdjacentCell);
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
            `"Bullseye! Go again!"`,
            `"Nice shot! Enemy ship hit!"`,
            `"Direct hit! Next shot!"`
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const playerTurnResponse = () => {
        const responses = [
            `"Fire at will!"`,
            `"Take your shot!"`,
            `"You have the green light to attack."`,
            `"Show the enemy what we're made of!"`,
            `"We're counting on you, captain."`,
            `"Time to make your move."`
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const computerTurnResponse = () => {
        const responses = [
            `"The enemy is taking their shot."`,
            `"Its the enemies turn to fire."`,
            `"The enemy is attacking."`,
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
            `"A miss!"`,
            `"Damn, they missed it."`,
            `"That's good for us."`,
            `"Nice.."`,
            `"Plop... Nice miss."`
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const playerMissResponse = () => {
        const responses = [
            `"Ah, too bad.."`,
            `"A miss for us, bad luck.."`,
            `"We'll hit them next time."`
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

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/close.svg";

/***/ }),

/***/ "./src/assets/information.svg":
/*!************************************!*\
  !*** ./src/assets/information.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/information.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLFNBQVMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssa0JBQWtCLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7OztBQ3BFTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7QUN6RU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBa0Q7O0FBRWxELCtEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQXVkaW8gTW9kdWxlcy9hdWRpb0NyZWF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NIEhlbHBlciBNb2R1bGVzL0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NIEhlbHBlciBNb2R1bGVzL0RPTUhlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTSBIZWxwZXIgTW9kdWxlcy9FbGVtZW50U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVzcG9uc2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jbHI6IHJnYig2LCAxOCwgMzEpO1xcbiAgICAtLWdyaWQtYm9yZGVyLWNscjogcmdiKDIyLCA0NywgNzMpO1xcbiAgICAtLXNoaXAtYm9yZGVyLWNscjogI2M0Y2UzNTtcXG4gICAgLS1ib3gtaG92ZXItY2xyOiByZ2IoMzIsIDU3LCA4Myk7XFxuICAgIC0tc2hpcC1jbHI6IHJnYigzNiwgNjAsIDg1KTtcXG4gICAgLS1zZWNvbmRhcnktY2xyOiAjY2VlNjFjO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDUwbXM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucGxheS1hZ2FpbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucnVsZXMtaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDcxJSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSg3MTIlKSBodWUtcm90YXRlKDI1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDExNyUpO1xcbn1cXG5cXG4ucnVsZXMtaWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xMSk7XFxufVxcblxcbi5zdGFydC1nYW1lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLmluLXByb2dyZXNzIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEzNCU7XFxuICAgIGxlZnQ6IDU1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBtaW4td2lkdGg6IDI4NXB4OyAqL1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAvKiBoZWlnaHQ6IG1pbigxMDAlLCAyMDBweCk7ICovXFxuICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2U7XFxufVxcblxcbi5tb2RhbC5ydWxlcyB7XFxuICAgIG1pbi13aWR0aDogMjg1cHg7XFxuICAgIGhlaWdodDogbWluKDEwMCUsIDIwMHB4KTtcXG59XFxuXFxuLm1vZGFsLmdhbWUtb3ZlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xcbiAgICB0b3A6IDU2JTtcXG4gICAgbGVmdDogNTUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLm1vZGFsIG9sIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4ubW9kYWwgb2wgbGksXFxuLm1vZGFsIG9sIGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGFsIG9sIGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMTFweCAxMXB4IDBweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEzZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTA1JSk7XFxufVxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAuNyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2U7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbiAgfVxcblxcblxcblxcbi8qIC5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxufSAqL1xcblxcbi5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXB0YWluLWJvYXJkLWF2YXRhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQzLjUlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIDtcXG59XFxuXFxuLyogLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59ICovXFxuXFxuLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDEzJTtcXG4gICAgLyogYm90dG9tOiA3JTsgKi9cXG4gICAgYm90dG9tOiAzMCU7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gIH1cXG5cXG4uY2FwdGFpbi1tZXNzYWdlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBza2V3KC02MGRlZyk7XFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1zZWNvbmRhcnktY2xyKSB0cmFuc3BhcmVudDtcXG59XFxuICBcXG5cXG4uY2FwdGFpbi1pbWFnZSB7XFxuICAgIC8qIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxMHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuXFxufVxcblxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAqL1xcblxcbi8qIC5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59ICovXFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcXG4gICAgbWF4LXdpZHRoOiA4NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uY2FwdGFpbi1uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluOmhvdmVyIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTsgKi9cXG59XFxuLmNhcHRhaW4tY29udGFpbmVyLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDByZW07XFxufVxcbi8qIC5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcblxcblxcbn0gKi9cXG5cXG4uZ3JpZC5sZWZ0LFxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC40cmVtO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LmN1cnJlbnQsXFxuLmdyaWQucmlnaHQuY3VycmVudCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0IHtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uZ3JpZC5yaWdodCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufSAqL1xcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQsXFxuLmdyaWQubGVmdC5mYWRlLW91dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNzAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQuaGlkZSxcXG4uZ3JpZC5yaWdodC5mYWRlLW91dC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdyaWQubGVmdC52aXNpYmxlLFxcbi5ncmlkLnJpZ2h0LnZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0LmRpc2FibGVkLFxcbi5ncmlkLnJpZ2h0LmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufSAqL1xcblxcbi5yb3cge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uYm94LFxcbi5vdXRlci1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDU2LCA1OCwgNzApOyAqL1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2U7XFxufVxcblxcbi8qIC5ib3ggLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufSAqL1xcblxcbi5kaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uYm94LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWhvdmVyLWNscik7XFxufVxcblxcbi5ib3gucGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG5cXG59XFxuXFxuLyogLmJveC5wbGFjZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAwLjVyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn0gKi9cXG5cXG4uc2hpcC1zcXVhcmUtaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtdmVydGljYWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm91dGVyLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmF0dGFjay1tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWhpdC1tYXJrZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdCxcXG4uY29tcHV0ZXItc2hpcC1oaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnRyYW5zaXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNzAwbXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIuZXhwYW5kIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaGlwLXN1Yi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQge1xcbiAgICB3aWR0aDogOTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNSB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC52ZXJ0aWNhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKDEwMCUgKyAtNTVweCkpO1xcbiAgICBmaWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDgyJSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSg3ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoMTA4JSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4vKiAuc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59ICovXFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHNjYWxlOiAwO1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcbn1cXG5cXG4ubW92ZS1wb3NpdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NSUpO1xcbiAgICB3aWR0aDogOTQlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdDQUFn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cmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jbHI6IHJnYig2LCAxOCwgMzEpO1xcbiAgICAtLWdyaWQtYm9yZGVyLWNscjogcmdiKDIyLCA0NywgNzMpO1xcbiAgICAtLXNoaXAtYm9yZGVyLWNscjogI2M0Y2UzNTtcXG4gICAgLS1ib3gtaG92ZXItY2xyOiByZ2IoMzIsIDU3LCA4Myk7XFxuICAgIC0tc2hpcC1jbHI6IHJnYigzNiwgNjAsIDg1KTtcXG4gICAgLS1zZWNvbmRhcnktY2xyOiAjY2VlNjFjO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDUwbXM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucGxheS1hZ2FpbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucnVsZXMtaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDcxJSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSg3MTIlKSBodWUtcm90YXRlKDI1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDExNyUpO1xcbn1cXG5cXG4ucnVsZXMtaWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xMSk7XFxufVxcblxcbi5zdGFydC1nYW1lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLmluLXByb2dyZXNzIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEzNCU7XFxuICAgIGxlZnQ6IDU1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBtaW4td2lkdGg6IDI4NXB4OyAqL1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAvKiBoZWlnaHQ6IG1pbigxMDAlLCAyMDBweCk7ICovXFxuICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2U7XFxufVxcblxcbi5tb2RhbC5ydWxlcyB7XFxuICAgIG1pbi13aWR0aDogMjg1cHg7XFxuICAgIGhlaWdodDogbWluKDEwMCUsIDIwMHB4KTtcXG59XFxuXFxuLm1vZGFsLmdhbWUtb3ZlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xcbiAgICB0b3A6IDU2JTtcXG4gICAgbGVmdDogNTUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLm1vZGFsIG9sIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4ubW9kYWwgb2wgbGksXFxuLm1vZGFsIG9sIGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGFsIG9sIGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMTFweCAxMXB4IDBweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEzZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTA1JSk7XFxufVxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAuNyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2U7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5jYXB0YWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbiAgfVxcblxcblxcblxcbi8qIC5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxufSAqL1xcblxcbi5jYXB0YWluLWF2YXRhcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXB0YWluLWJvYXJkLWF2YXRhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQzLjUlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIDtcXG59XFxuXFxuLyogLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59ICovXFxuXFxuLmNhcHRhaW4tbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDEzJTtcXG4gICAgLyogYm90dG9tOiA3JTsgKi9cXG4gICAgYm90dG9tOiAzMCU7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gIH1cXG5cXG4uY2FwdGFpbi1tZXNzYWdlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBza2V3KC02MGRlZyk7XFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1zZWNvbmRhcnktY2xyKSB0cmFuc3BhcmVudDtcXG59XFxuICBcXG5cXG4uY2FwdGFpbi1pbWFnZSB7XFxuICAgIC8qIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxMHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuXFxufVxcblxcblxcbi5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC5jYXB0YWluLWNvbnRhaW5lciAuY2FwdGFpbiB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNoaXAtY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAqL1xcblxcbi8qIC5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59ICovXFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcXG4gICAgbWF4LXdpZHRoOiA4NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4uY2FwdGFpbi1uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluOmhvdmVyIHtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTsgKi9cXG59XFxuLmNhcHRhaW4tY29udGFpbmVyLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDByZW07XFxufVxcbi8qIC5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcblxcblxcbn0gKi9cXG5cXG4uZ3JpZC5sZWZ0LFxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC40cmVtO1xcbiAgICB0cmFuc2l0aW9uOiA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LmN1cnJlbnQsXFxuLmdyaWQucmlnaHQuY3VycmVudCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0IHtcXG4gICAgbWluLXdpZHRoOiA5NXB4O1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uZ3JpZC5yaWdodCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufSAqL1xcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQsXFxuLmdyaWQubGVmdC5mYWRlLW91dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNzAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5ncmlkLmxlZnQuZmFkZS1vdXQuaGlkZSxcXG4uZ3JpZC5yaWdodC5mYWRlLW91dC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdyaWQubGVmdC52aXNpYmxlLFxcbi5ncmlkLnJpZ2h0LnZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4vKiAuZ3JpZC5sZWZ0LmRpc2FibGVkLFxcbi5ncmlkLnJpZ2h0LmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufSAqL1xcblxcbi5yb3cge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uYm94LFxcbi5vdXRlci1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDU2LCA1OCwgNzApOyAqL1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2U7XFxufVxcblxcbi8qIC5ib3ggLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufSAqL1xcblxcbi5kaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uYm94LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWhvdmVyLWNscik7XFxufVxcblxcbi5ib3gucGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2hpcC1ib3JkZXItY2xyKTtcXG5cXG59XFxuXFxuLyogLmJveC5wbGFjZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAwLjVyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn0gKi9cXG5cXG4uc2hpcC1zcXVhcmUtaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUtdmVydGljYWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm91dGVyLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmF0dGFjay1tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWhpdC1tYXJrZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdCxcXG4uY29tcHV0ZXItc2hpcC1oaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLnBsYXllci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjpiZWZvcmUsXFxuLmNvbXB1dGVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlcixcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnRyYW5zaXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWJvcmRlci1jbHIpO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNzAwbXMgZWFzZTtcXG59XFxuXFxuLnNoaXAtbWFpbi1jb250YWluZXIuZXhwYW5kIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaGlwLXN1Yi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLWJhY2tncm91bmQtY2xyKTtcXG59XFxuXFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQge1xcbiAgICB3aWR0aDogOTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNSB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC52ZXJ0aWNhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNS52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKDEwMCUgKyAtNTVweCkpO1xcbiAgICBmaWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDgyJSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSg3ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoMTA4JSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4vKiAuc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtMy5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTQucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59ICovXFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHNjYWxlOiAwO1xcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcbn1cXG5cXG4ubW92ZS1wb3NpdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NSUpO1xcbiAgICB3aWR0aDogOTQlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IG1pc3MxIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvc2hvdC1taXNzLm1wMyc7XG4vLyBpbXBvcnQgbWlzczIgZnJvbSAnLi4vYXNzZXRzL3NvdW5kcy9zaG90LW1pc3MyLm1wMyc7XG4vLyBpbXBvcnQgaGl0MSBmcm9tICcuLi9hc3NldHMvc291bmRzL3Nob3QtaGl0Lm1wMyc7XG4vLyBpbXBvcnQgaGl0MiBmcm9tICcuLi9hc3NldHMvc291bmRzL3Nob3QtaGl0Mi5tcDMnO1xuXG5pbXBvcnQgbmV3SGl0MSBmcm9tICcuLi9hc3NldHMvc291bmRzL2hpdC5vZ2cnO1xuaW1wb3J0IG5ld01pc3MxIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvbWlzcy5vZ2cnO1xuaW1wb3J0IGJhY2tncm91bmRXYXZlcyBmcm9tICcuLi9hc3NldHMvc291bmRzL2JhY2tncm91bmQtd2F2ZXMub2dnJztcblxuZXhwb3J0IGNvbnN0IEF1ZGlvU2V0dXAgPSAoKSA9PiB7XG5cbiAgICBsZXQgc2hpcEhpdHMgPSBbXTtcbiAgICBsZXQgc2hpcE1pc3NlcyA9IFtdO1xuXG4gICAgbGV0IHdhdmVzID0gbmV3IEF1ZGlvKGJhY2tncm91bmRXYXZlcyk7XG4gICAgY29uc3QgZ2VuZXJhdGVBdWRpb0ZpbGVzID0gKCkgPT4ge1xuICAgICAgICAvLyBzaGlwTWlzc2VzLnB1c2gobmV3IEF1ZGlvKG1pc3MxKSk7XG4gICAgICAgIC8vIHNoaXBNaXNzZXMucHVzaChuZXcgQXVkaW8obWlzczIpKTtcblxuICAgICAgICAvLyBzaGlwSGl0cy5wdXNoKG5ldyBBdWRpbyhoaXQxKSk7XG4gICAgICAgIC8vIHNoaXBIaXRzLnB1c2gobmV3IEF1ZGlvKGhpdDIpKTtcblxuICAgICAgICBzaGlwTWlzc2VzLnB1c2gobmV3IEF1ZGlvKG5ld01pc3MxKSk7XG4gICAgICAgIHNoaXBIaXRzLnB1c2gobmV3IEF1ZGlvKG5ld0hpdDEpKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHBsYXlSYW5kb21IaXRTb3VuZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhpdCBzb3VuZHMgYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZG9tSGl0ID0gc2hpcEhpdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcEhpdHMubGVuZ3RoKV07XG4gICAgICAgIHJhbmRvbUhpdC52b2x1bWUgPSAwLjQ7XG4gICAgICAgIHJhbmRvbUhpdC5wbGF5KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheVJhbmRvbU1pc3NTb3VuZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1pc3Mgc291bmRzIGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmRvbU1pc3MgPSBzaGlwTWlzc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoaXBNaXNzZXMubGVuZ3RoKV07XG4gICAgICAgIHJhbmRvbU1pc3Mudm9sdW1lID0gMC40O1xuICAgICAgICByYW5kb21NaXNzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb29wQmFja2dyb3VuZFNvdW5kID0gKCkgPT4ge1xuICAgICAgICB3YXZlcy52b2x1bWUgPSAwLjI7XG4gICAgICAgIHdhdmVzLnBsYXkoKTtcblxuICAgICAgICB3YXZlcy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHdhdmVzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHdhdmVzLnBsYXkoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdlbmVyYXRlQXVkaW9GaWxlcywgcGxheVJhbmRvbUhpdFNvdW5kLCBwbGF5UmFuZG9tTWlzc1NvdW5kLCBsb29wQmFja2dyb3VuZFNvdW5kIH1cbn0iLCJcbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50Q3JlYXRvciA9ICgpID0+IHtcblxuICAgIGNvbnN0IG9uZUVsZW1lbnQgPSAoY2xhc3NUaXRsZSwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc1RpdGxlO1xuICAgIFxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBtdWx0aXBsZUVsZW1lbnRzID0gKGVsZW1lbnQsIHF0eSkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHF0eTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGFyci5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBvbmVFbGVtZW50LCBtdWx0aXBsZUVsZW1lbnRzIH1cbn1cbiIsImltcG9ydCB7IEN1c3RvbUVsZW1lbnRDcmVhdG9yIH0gZnJvbSAnLi9ET01DcmVhdGlvbic7XG5pbXBvcnQgeyBNeUVsZW1lbnRzIH0gZnJvbSAnLi9FbGVtZW50U2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgRE9NSW50ZXJmYWNlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY3JlYXRvciA9IEN1c3RvbUVsZW1lbnRDcmVhdG9yKCk7XG4gICAgY29uc3QgZWxlbWVudHMgPSBNeUVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBpbml0aWFsaXplTWFpbkRpc3BsYXkgPSAoKSA9PiB7XG5cbiAgICAgICAgZ2VuZXJhdGVHcmlkcygpO1xuICAgICAgICBzZXRJbkdhbWVTdHlsZXMoKTtcbiAgICAgICAgZ2VuZXJhdGVTaGlwRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnNoaXBNYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgZWxlbWVudHMuc2hpcE1haW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCA9ICgpID0+IHtcbiAgICAgICAgZWxlbWVudHMuc2hpcE1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJylcbiAgICB9XG5cbiAgICBjb25zdCBzZXRNYWluR3JpZFRvUGxheWVyID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE1haW5HcmlkVG9Db21wdXRlciA9ICgpID0+IHtcbiAgICAgICAgZWxlbWVudHMucGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblxuICAgIH1cbiAgICBjb25zdCBpbml0aWFsaXplQ2FwdGFpblBpY2tlciA9IGFzeW5jIChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQ29udGFpbmVyID0gY3JlYXRvci5vbmVFbGVtZW50KCdjYXB0YWluLWNvbnRhaW5lcicsICdkaXYnKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1BpY2sgeW91ciBsaWV1dGVuYW50ISdcbiAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGVsZW1lbnRzLmdhbWVib2FyZENvbnRhaW5lci5hcHBlbmQoY2FwdGFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgc2V0SW5HYW1lU3R5bGVzKCk7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50cy50cmFuc2l0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWRvd24nKTtcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVDYXB0YWlucyhjYXB0YWluQ29udGFpbmVyLCBjYWxsYmFjayk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDYXB0YWluUGlja2VyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHNldERlZmF1bHRDb250YWluZXJTaXplKCk7XG5cbiAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgY2FwdGFpbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDYXB0YWluSW1hZ2VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gWyBlbGVtZW50cy5jYXB0YWluMSwgZWxlbWVudHMuY2FwdGFpbjIsIGVsZW1lbnRzLmNhcHRhaW4zIF1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDYXB0YWlucyA9IChjb250YWluZXIsIGNhbGxiYWNrKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhcnMgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2NhcHRhaW4tYXZhdGFycycsICdkaXYnKTtcblxuICAgICAgICBjb25zdCBjYXB0YWlucyA9IGNyZWF0b3IubXVsdGlwbGVFbGVtZW50cygnZGl2JywgMyk7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5OYW1lcyA9IFsnVGVkJywgJ0RvbmFsZCcsICdCdXJ0J11cbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGNhcHRhaW4gb2YgY2FwdGFpbnMpIHtcbiAgICAgICAgICAgICAgICBjYXB0YWluLmNsYXNzTmFtZSA9ICdjYXB0YWluJztcbiAgICAgICAgICAgICAgICAvLyBjYXB0YWluLnRleHRDb250ZW50ID0gYGNhcHRhaW4ke2NvdW50ZXJ9YDtcbiAgICAgICAgICAgICAgICBjYXB0YWluLmRhdGFzZXQuY2FwdGFpbiA9IGNvdW50ZXI7XG4gICAgICAgICAgICAgICAgY2FwdGFpbkF2YXRhcnMuYXBwZW5kQ2hpbGQoY2FwdGFpbik7XG5cbiAgICAgICAgICAgICAgICBjYXB0YWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjYXB0YWluLmRhdGFzZXQuY2FwdGFpbik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdmF0YXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGF2YXRhckltYWdlLnNyYyA9IGdldENhcHRhaW5JbWFnZXMoKVtjb3VudGVyXTtcbiAgICAgICAgICAgICAgICBhdmF0YXJJbWFnZS5jbGFzc05hbWUgPSAnY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2UnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuYW1lRWxlbWVudC5jbGFzc05hbWUgPSAnY2FwdGFpbi1uYW1lJztcbiAgICAgICAgICAgICAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGNhcHRhaW5OYW1lc1tjb3VudGVyKytdO1xuICAgICAgICAgICAgICAgIC8vIGF2YXRhckltYWdlLmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGF2YXRhckltYWdlLmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhcHRhaW4uYXBwZW5kKGF2YXRhckltYWdlLCBuYW1lRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY2FwdGFpbkF2YXRhcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VHcmlkU3F1YXJlcyA9IChjb250YWluZXIsIGlzQ29tcEdyaWQpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwxMTsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3JvdycsICdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTE7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2JveCcsICdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChib3gpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC54eVBvcyA9IGAke2otMX0ke2ktMX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcEdyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSAnY29tcHV0ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSAncGxheWVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ291dGVyLWJveCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnRleHRDb250ZW50ID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdvdXRlci1ib3gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmRhdGFzZXQucGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IHNldEFscGhhYmV0W2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldERlZmF1bHRDb250YWluZXJTaXplID0gKCkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgZWxlbWVudHMudHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS50b3AgPSAnMHZoJztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnN0IG1haW5Cb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuICAgICAgICAvLyBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkc0hlaWdodCA9IGVsZW1lbnRzLmdhbWVib2FyZENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGVsZW1lbnRzLnRyYW5zaXRpb25Db250YWluZXIuc3R5bGUudG9wID0gYCR7Z2FtZWJvYXJkc0hlaWdodCArIDM1fXB4YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBbHBoYWJldCA9IHtcbiAgICAgICAgMTogJ0EnLFxuICAgICAgICAyOiAnQicsXG4gICAgICAgIDM6ICdDJyxcbiAgICAgICAgNDogJ0QnLFxuICAgICAgICA1OiAnRScsXG4gICAgICAgIDY6ICdGJyxcbiAgICAgICAgNzogJ0cnLFxuICAgICAgICA4OiAnSCcsXG4gICAgICAgIDk6ICdJJyxcbiAgICAgICAgMTA6ICdKJ1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlR3JpZHMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NOYW1lID0gJ2dyaWQgbGVmdCc7XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTmFtZSA9ICdncmlkIHJpZ2h0JztcblxuICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZCA9IHBsYXllckJvYXJkO1xuICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkID0gY29tcHV0ZXJCb2FyZDtcbiAgICAgICAgXG4gICAgICAgIHBsYXllckJvYXJkLmRhdGFzZXQuZ3JpZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgbWFrZUdyaWRTcXVhcmVzKHBsYXllckJvYXJkLCBmYWxzZSk7XG4gICAgICAgIG1ha2VHcmlkU3F1YXJlcyhjb21wdXRlckJvYXJkLCB0cnVlKTtcblxuICAgICAgICBlbGVtZW50cy5nYW1lYm9hcmRDb250YWluZXIuYXBwZW5kKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb25Db250YWluZXJUb3AoKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnRyYW5zaXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpZnQtZG93bicpO1xuICAgICAgICB9LDMwKTtcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFRyYW5zaXRpb25Db250YWluZXJUb3ApO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlU2hpcEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBjcmVhdG9yLm11bHRpcGxlRWxlbWVudHMoJ2RpdicsIDQpO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LDQsMywyXTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwLCBpKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQubGVuZ3RoID0gc2hpcExlbmd0aHNbaV07XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTmFtZSA9ICdzaGlwLWVsZW1lbnQnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoYGxlbmd0aC0ke3NoaXAuZGF0YXNldC5sZW5ndGh9YCk7XG4gICAgICAgICAgICBzaGlwRWxlbWVudEFyZWEuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgZGV0YWlscyB0byBwbGFjZSBvbiB0aGUgc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAuZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRldGFpbC5jbGFzc05hbWUgPSAnZGV0YWlsJztcbiAgICAgICAgICAgICAgICBzaGlwLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBNYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtbWFpbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBzaGlwU3ViQ29udGFpbmVyID0gY3JlYXRvci5vbmVFbGVtZW50KCdzaGlwLXN1Yi1jb250YWluZXInLCAnZGl2Jyk7XG5cbiAgICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1lbGVtZW50Jyk7XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcE1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3NoaXAtZWxlbWVudC1jb250YWluZXInLCAnZGl2Jyk7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgICAgICAgICBzaGlwU3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3JvdGF0ZS1idXR0b24nLCAnaW1nJyk7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uc3JjID0gZWxlbWVudHMucm90YXRlO1xuICAgICAgICAgICAgcm90YXRlQnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNoaXApO1xuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWVudGF0aW9uKHNoaXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFN1YkNvbnRhaW5lcik7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNyZWF0ZU1vZGFsID0gKG9wdGlvbnMsIGNvbnRlbnRBcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGNyZWF0b3Iub25lRWxlbWVudCgnbW9kYWwnLCAnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnRzLm1vZGFsID0gbW9kYWw7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ292ZXJsYXknLCAnZGl2Jyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ1J1bGVzJykge1xuXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdydWxlcycpO1xuXG4gICAgICAgICAgICBjb25zdCBydWxlTGlzdCA9IGNyZWF0ZUxpc3QoJ29sJywgY29udGVudEFycmF5LCBvcHRpb25zLnR5cGUpO1xuXG4gICAgICAgICAgICBjb25zdCBjbG9zZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zcmMgPSBlbGVtZW50cy5jbG9zZTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5jbGFzc05hbWUgPSAnY2xvc2UtaWNvbic7XG4gICAgXG4gICAgICAgICAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZChydWxlTGlzdCwgY2xvc2VJY29uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgbW9kYWwsIG92ZXJsYXkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2dhbWVPdmVyJykge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyJyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMud2lubmVyID09PSAnUGxheWVyJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnWW91IHdvbiEnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRIZWFkaW5nLnRleHRDb250ZW50ID0gJ1RoZSBjb21wdXRlciB3b24hJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICByZXN1bHRQYXJhLnRleHRDb250ZW50ID0gY29udGVudEFycmF5WzBdO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGNyZWF0b3Iub25lRWxlbWVudCgncGxheS1hZ2FpbicsICdidXR0b24nKTtcbiAgICAgICAgICAgIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG5cbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZChyZXN1bHRIZWFkaW5nLCByZXN1bHRQYXJhLCBwbGF5QWdhaW5CdXR0b24pO1xuXG4gICAgICAgICAgICByZXR1cm4geyBtb2RhbCwgb3ZlcmxheSwgcGxheUFnYWluQnV0dG9uIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdFR5cGUsIGxpc3RJdGVtcywgbGlzdEhlYWRpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbXlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsaXN0VHlwZSk7XG5cbiAgICAgICAgaWYgKGxpc3RIZWFkaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBsaXN0SGVhZGluZztcbiAgICAgICAgICAgIG15TGlzdC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxpc3RJdGVtVGV4dCBvZiBsaXN0SXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gbGlzdEl0ZW1UZXh0O1xuICAgICAgICAgICAgbXlMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG15TGlzdDtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBhcHBseVJvdGF0aW9uID0gKHNoaXBFbGVtZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKHNoaXBFbGVtZW50LmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVJ1bGVzQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50cy5idXR0b25Db250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUdyaWRzQW5kSGVhZGluZyA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICBzZXREZWZhdWx0Q29udGFpbmVyU2l6ZSgpO1xuICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgZWxlbWVudHMuY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVtb3ZlUnVsZXNCdXR0b24oKTtcbiAgICAgICAgLy8gZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVDZWxscyA9ICgpID0+IHtcblxuICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgY29uc3QgZW5hYmxlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpO1xuICAgICAgICBlbmFibGVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmFibGVDZWxscyA9ICgpID0+IHtcblxuICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgY29uc3QgZGlzYWJsZWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcblxuICAgICAgICBkaXNhYmxlZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFBsYXllck91dGxpbmUgPSAoaXNQbGF5ZXJzVHVybikgPT4ge1xuICAgICAgICBpZiAoaXNQbGF5ZXJzVHVybikge1xuICAgICAgICAgICAgZWxlbWVudHMucGxheWVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDNweCByZWQnO1xuICAgICAgICAgICAgZWxlbWVudHMuY29tcHV0ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnM3B4IHRyYW5zcGFyZW50JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDNweCBncmVlbic7XG4gICAgICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnM3B4IHRyYW5zcGFyZW50JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNwZWVjaEJ1YmJsZVRleHQgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluU3BlZWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tbWVzc2FnZScpO1xuICAgICAgICBjYXB0YWluU3BlZWNoLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHNwZWVkID0gNTA7XG4gICAgICAgIGNvbnN0IHR5cGVXcml0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA8IG1lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FwdGFpblNwZWVjaC50ZXh0Q29udGVudCArPSBtZXNzYWdlLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCA1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEluR2FtZVN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaW4tcHJvZ3Jlc3MnKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEdhbWVTdHlsZXMgPSAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnRzLnN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2luLXByb2dyZXNzJyk7XG5cbiAgICAgICAgZWxlbWVudHMucGxheWVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkLnN0eWxlLmJvcmRlciA9ICdub25lJztcblxuICAgICAgICBlbmFibGVDZWxscygpO1xuXG5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRWxlbWVudFJlbW92YWwgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbW92ZUdyaWRzQW5kSGVhZGluZywgY3VycmVudFBsYXllck91dGxpbmUsIGVuYWJsZUNlbGxzLCBkaXNhYmxlQ2VsbHMsIHNwZWVjaEJ1YmJsZVRleHQsIHJlc2V0R2FtZVN0eWxlcywgZ2VuZXJhdGVTaGlwUm90YXRpb25Db250cm9scyxhcHBseVJvdGF0aW9uLCB0cmFuc2l0aW9uRWxlbWVudFJlbW92YWwsIGluaXRpYWxpemVNYWluRGlzcGxheSwgaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIsIHJlbW92ZUNhcHRhaW5QaWNrZXIsIHNldE1haW5HcmlkVG9QbGF5ZXIsIHNldE1haW5HcmlkVG9Db21wdXRlciwgc2V0TmV3U2hpcENvbnRhaW5lckhlaWdodCwgcmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCwgZ2V0Q2FwdGFpbkltYWdlcywgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBjcmVhdGVNb2RhbCwgZWxlbWVudHMsIHJlbW92ZVJ1bGVzQnV0dG9uIH1cbn0iLCJpbXBvcnQgcm90YXRlIGZyb20gJy4uL2Fzc2V0cy9yb3RhdGUuc3ZnJztcbmltcG9ydCBjbG9zZSBmcm9tICcuLi9hc3NldHMvY2xvc2Uuc3ZnJztcbmltcG9ydCBpbmZvcm1hdGlvbiBmcm9tICcuLi9hc3NldHMvaW5mb3JtYXRpb24uc3ZnJztcbmltcG9ydCBjYXB0YWluMSBmcm9tICcuLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjEucG5nJztcbmltcG9ydCBjYXB0YWluMiBmcm9tICcuLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjIucG5nJztcbmltcG9ydCBjYXB0YWluMyBmcm9tICcuLi9hc3NldHMvY2FwdGFpbnMvY2FwdGFpbjMucG5nJztcblxuZXhwb3J0IGNvbnN0IE15RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHBsYXllckNlbGxzO1xuICAgIGxldCBjb21wdXRlckNlbGxzO1xuXG4gICAgbGV0IHBsYXllckJvYXJkO1xuICAgIGxldCBjb21wdXRlckJvYXJkO1xuXG4gICAgbGV0IGNhcHRhaW5BdmF0YXI7XG5cbiAgICBsZXQgbW9kYWw7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2hpcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJDZWxscyxcbiAgICAgICAgY29tcHV0ZXJDZWxscyxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgICAgIHN0YXJ0QnV0dG9uLFxuICAgICAgICBnYW1lYm9hcmRDb250YWluZXIsXG4gICAgICAgIHRyYW5zaXRpb25Db250YWluZXIsXG4gICAgICAgIHNoaXBNYWluQ29udGFpbmVyLFxuICAgICAgICBidXR0b25Db250YWluZXIsXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgY2xvc2UsXG4gICAgICAgIGluZm9ybWF0aW9uLFxuICAgICAgICBjYXB0YWluMSxcbiAgICAgICAgY2FwdGFpbjIsXG4gICAgICAgIGNhcHRhaW4zLFxuICAgICAgICBjYXB0YWluQXZhdGFyLFxuICAgICAgICBtb2RhbFxuICAgIH1cbn0iLCJpbXBvcnQgeyBET01JbnRlcmZhY2UgfSBmcm9tIFwiLi9ET00gSGVscGVyIE1vZHVsZXMvRE9NSGVscGVyXCI7XG5pbXBvcnQgeyBBdmF0YXJSZXNwb25zZXMgfSBmcm9tIFwiLi9yZXNwb25zZXNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXcgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBET00gPSBET01JbnRlcmZhY2UoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IEF2YXRhclJlc3BvbnNlcygpO1xuXG4gICAgY29uc3Qgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscyA9ICgpID0+IHtcbiAgICAgICAgRE9NLmVsZW1lbnRzLnBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGxheWVyPVwicGxheWVyXCJdJyk7XG4gICAgICAgIERPTS5lbGVtZW50cy5jb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGxheWVyPVwiY29tcHV0ZXJcIl0nKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkNlbGxDbGljayA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgRE9NLmVsZW1lbnRzLmNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlLnRhcmdldC5kYXRhc2V0Lnh5UG9zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBsYXllckhpdFN0YXRlID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgRE9NLnNwZWVjaEJ1YmJsZVRleHQocmVzcG9uc2UucGxheWVySGl0UmVzcG9uc2UoKSk7XG4gICAgICAgIHNldEhpdChjb29yZGluYXRlLCB0cnVlKTtcbiAgICAgICAgY29tcHV0ZXJWaWV3VXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGxheWVyTWlzc1N0YXRlID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJWaWV3VXBkYXRlKCk7XG4gICAgICAgIERPTS5zcGVlY2hCdWJibGVUZXh0KHJlc3BvbnNlLmNvbXB1dGVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICBET00uc2V0TWFpbkdyaWRUb1BsYXllcigpO1xuICAgICAgICBoaWRlQ2FwdGFpbkF2YXRhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEhpdCA9IChjb29yZGluYXRlLCBpc1BsYXllcikgPT4ge1xuXG4gICAgICAgIGlmIChpc1BsYXllcikge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLXBsYXllcj1cImNvbXB1dGVyXCJdW2RhdGEteHktcG9zPVwiJHtjb29yZGluYXRlfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2stbWFya2VyJyk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLWhpdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGUuam9pbignJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtcGxheWVyPVwicGxheWVyXCJdW2RhdGEteHktcG9zPVwiJHtjb29yZGluYXRlfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2stbWFya2VyJyk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2hpcC1oaXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZFJ1bGVNb2RhbCA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBpbmZvQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGluZm9CdXR0b24uc3JjID0gRE9NLmVsZW1lbnRzLmluZm9ybWF0aW9uO1xuICAgICAgICBpbmZvQnV0dG9uLmNsYXNzTmFtZSA9ICdydWxlcy1pY29uJztcbiAgICAgICAgRE9NLmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBtb2RhbE9iaiA9IERPTS5jcmVhdGVNb2RhbCh7XG4gICAgICAgICAgICB0eXBlOiAnUnVsZXMnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICAgICdQbGFjZSB5b3VyIHNoaXBzIGJ5IGNsaWNraW5nIGFuZCBkcmFnZ2luZyB0aGVtIG9udG8geW91ciBncmlkLCB5b3UgY2FuIHVzZSB0aGUgcm90YXRpb24gaWNvbiB0byBzd2l0Y2ggYmV0d2VlbiB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICAnWW91IGNhbiBhdHRhY2sgYnkgY2xpY2tpbmcgYW55IHNxdWFyZSBvbiB0aGUgb3Bwb25lbnRzIGdyaWQsIHlvdXIgZ29hbCBpcyB0byBoaXQgdGhlaXIgc2hpcHMhJyxcbiAgICAgICAgICAgICdBZnRlciB5b3UgbWFrZSB5b3VyIGF0dGFjayBpdCB3aWxsIGJlIHRoZSBjb21wdXRlcnMgdHVybicsXG4gICAgICAgICAgICAnSWYgZWl0aGVyIHlvdSBvciB0aGUgY29tcHV0ZXIgaGl0IGEgc2hpcCwgdGhhdCBzcG90IHdpbGwgYmUgbWFya2VkIGFjY29yZGluZ2x5IGFuZCB3aWxsIGdlbmVyYXRlIGFuIGV4dHJhIHR1cm4gZm9yIHRoZSBwbGF5ZXIgd2hvIGhpdCBhIHNoaXAuIE1ha2UgdGhhdCBtb3ZlIGNvdW50IScsXG4gICAgICAgICAgICAnWW91ciBnb2FsIGlzIHRvIHNpbmsgYWxsIG9mIHRoZWlyIHNoaXBzLCBnb29kIGx1Y2shJ1xuICAgICAgICBdKTtcblxuICAgICAgICBET00uZWxlbWVudHMuZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsT2JqLm92ZXJsYXkpO1xuICAgICAgICBET00uZWxlbWVudHMuZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsT2JqLm1vZGFsKTtcblxuICAgICAgICBpbmZvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgRE9NLm9wZW5Nb2RhbChtb2RhbE9iai5tb2RhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZEdhbWVPdmVyTW9kYWwgPSAoZ2FtZVdpbm5lciwgY2FsbGJhY2spID0+IHtcblxuICAgICAgICBjb25zdCBtb2RhbE9iaiA9IERPTS5jcmVhdGVNb2RhbCh7XG4gICAgICAgICAgICB0eXBlOiAnZ2FtZU92ZXInLFxuICAgICAgICAgICAgd2lubmVyOiBnYW1lV2lubmVyXG4gICAgICAgIH0sIFtcbiAgICAgICAgICAgICdUaGFua3MgZm9yIHBsYXlpbmchIFlvdSBjYW4gY2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyBhbmQgdHJ5IHlvdXIgbHVjayBhZ2FpbnN0IHRoZSBjb21wdXRlciBvbmUgbW9yZSB0aW1lISdcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbW9kYWxPYmoucGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgICAgICBET00uZWxlbWVudHMuZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsT2JqLm92ZXJsYXkpO1xuICAgICAgICBET00uZWxlbWVudHMuZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsT2JqLm1vZGFsKTtcblxuICAgICAgICBET00ub3Blbk1vZGFsKG1vZGFsT2JqLm1vZGFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5Q2FwdGFpbkF2YXRhciA9IChjYXB0YWluKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcHRhaW5NZXNzYWdlLmNsYXNzTmFtZSA9ICdjYXB0YWluLW1lc3NhZ2UnO1xuICAgICAgICBjb25zdCBjYXB0YWluSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBjYXB0YWluSW1hZ2Uuc3JjID0gRE9NLmdldENhcHRhaW5JbWFnZXMoKVtjYXB0YWluXTtcbiAgICAgICAgY2FwdGFpbkltYWdlLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBjYXB0YWluSW1hZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4taW1hZ2UnO1xuXG4gICAgICAgIGNhcHRhaW5BdmF0YXIuYXBwZW5kKGNhcHRhaW5JbWFnZSwgY2FwdGFpbk1lc3NhZ2UpO1xuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTmFtZSA9ICdjYXB0YWluLWJvYXJkLWF2YXRhcic7XG4gICAgICAgIERPTS5lbGVtZW50cy5jb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNhcHRhaW5BdmF0YXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVDYXB0YWluQXZhdGFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0YWluQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRhaW4tYm9hcmQtYXZhdGFyJyk7XG5cbiAgICAgICAgY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QuYWRkKCdtb3ZlLXBvc2l0aW9uJyk7XG4gICAgICAgIC8vIGNhcHRhaW5BdmF0YXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0NhcHRhaW5BdmF0YXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1ib2FyZC1hdmF0YXInKTtcbiAgICAgICAgY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlLXBvc2l0aW9uJyk7XG4gICAgICAgIC8vIGNhcHRhaW5BdmF0YXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlciA9IChkcmFnZ2VkU2hpcCwgY3VycmVudENlbGwsIHRvUmVtb3ZlSG92ZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRyYWdnZWRTaGlwLmRhdGFzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFlib2FyZFBvc2l0aW9uID0gTnVtYmVyKGN1cnJlbnRDZWxsLmRhdGFzZXQueHlQb3NbMF0pO1xuICAgICAgICAgICAgY29uc3QgWGJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1sxXSkgKyBpO1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3hbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl1bZGF0YS14eS1wb3M9XCIke1lib2FyZFBvc2l0aW9ufSR7WGJvYXJkUG9zaXRpb259XCJdYCk7XG4gICAgICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgICAgICAgIHRvUmVtb3ZlSG92ZXIgPyB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJylcbiAgICAgICAgICAgICAgICA6IHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFZlcnRpY2FsU2hpcEhvdmVyID0gKGRyYWdnZWRTaGlwLCBjdXJyZW50Q2VsbCwgdG9SZW1vdmVIb3ZlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZHJhZ2dlZFNoaXAuZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgWWJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1swXSkgKyBpO1xuICAgICAgICAgICAgY29uc3QgWGJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1sxXSk7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJveFtkYXRhLXBsYXllcj1cInBsYXllclwiXVtkYXRhLXh5LXBvcz1cIiR7WWJvYXJkUG9zaXRpb259JHtYYm9hcmRQb3NpdGlvbn1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgICAgICAgdG9SZW1vdmVIb3ZlciA/IHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKVxuICAgICAgICAgICAgICAgIDogdGlsZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBkcmFnQW5kRHJvcFNoaXBzID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWVsZW1lbnQnKTtcbiAgICAgICAgbGV0IGRyYWdnZWRTaGlwO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwRWxlbWVudHMpIHtcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYWdnZWRTaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICAvLyBkcmFnZ2VkU2hpcC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2hpcCA9IHNoaXA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGRyYWdnZWRTaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBET00uZWxlbWVudHMucGxheWVyQ2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZFNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhvcml6b250YWxTaGlwSG92ZXIoZHJhZ2dlZFNoaXAsIGNlbGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZlcnRpY2FsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmVydGljYWxTaGlwSG92ZXIoZHJhZ2dlZFNoaXAsIGNlbGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZFNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcblxuICAgICAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCB0cnVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZlcnRpY2FsU2hpcEhvdmVyKGRyYWdnZWRTaGlwLCBjZWxsLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgRE9NLmVsZW1lbnRzLnBsYXllckNlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gZHJhZ2dlZFNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRyYWdnZWRTaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkcmFnZ2VkU2hpcCwgZS50YXJnZXQuZGF0YXNldC54eVBvcyk7XG4gICAgICAgICAgICAgICAgRE9NLmVsZW1lbnRzLnBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vd2Ugd2FudCB0byB1cGRhdGUgb25lIGJvYXJkIGF0IGEgdGltZSwganVzdCBwYXNzIGluIHRoZSBib2FyZCB3ZSB3YW50IHRvIHVwZGF0ZSBhdCB0aGF0IHBvaW50LiBObyBwb2ludCBpbiB1cGRhdGluZyBib3RoLiBXZSBjYW4gaGF2ZSBhIGJvb2wgdmFsdWUgdGhhdCBjaGVja3MgaWYgaXRzIGEgY29tcHV0ZXIgYm9hcmQgb3Igbm90LlxuICAgIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkLCBpc0NvbXB1dGVyQm9hcmQpID0+IHtcblxuICAgICAgICBzZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzKCk7XG4gICAgICAgIGxldCBib2FyZENlbGxzO1xuXG4gICAgICAgIGlmIChpc0NvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgICAgIGJvYXJkQ2VsbHMgPSBET00uZWxlbWVudHMuY29tcHV0ZXJDZWxscztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkQ2VsbHMgPSBET00uZWxlbWVudHMucGxheWVyQ2VsbHM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgYm9hcmRDZWxscykge1xuICAgICAgICAgICAgY29uc3QgeHkgPSBjZWxsLmRhdGFzZXQueHlQb3M7XG4gICAgICAgICAgICBpZiAoYm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmNsYXNzTmFtZSA9ICdhdHRhY2stbWFya2VyJztcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4eVswXV1beHlbMV1dID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICghaXNDb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQb3NpdGlvbk9uQm9hcmQgPSAoYm9hcmQsIHh5LCBpc0NvbXB1dGVyQm9hcmQpID0+IHtcbiAgICAgICAgbGV0IGNlbGw7XG4gICAgICAgIGlmIChpc0NvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9XCJjb21wdXRlclwiXVtkYXRhLXh5LXBvcz1cIiR7eHl9XCJdYCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl1bZGF0YS14eS1wb3M9XCIke3h5fVwiXWApO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICd4Jykge1xuICAgICAgICAgICAgaWYgKCFjZWxsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG1hcmtlci5jbGFzc05hbWUgPSAnYXR0YWNrLW1hcmtlcic7XG4gICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4eVswXV1beHlbMV1dID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKCFpc0NvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyVmlld1VwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmRpc2FibGVDZWxscygpO1xuICAgICAgICBET00uY3VycmVudFBsYXllck91dGxpbmUodHJ1ZSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyVmlld1VwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmVuYWJsZUNlbGxzKCk7XG4gICAgICAgIERPTS5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWxlcnRXaW5uZXIgPSAod2lubmVyKSA9PiB7XG4gICAgICAgIGFsZXJ0KGBQbGF5ZXIgJHt3aW5uZXJ9IGhhcyB3b24gdGhlIG1hdGNoIWApO1xuICAgIH1cblxuICAgIHJldHVybiB7IERPTSwgcmVzcG9uc2UsIG9uQ2VsbENsaWNrLCB1cGRhdGVCb2FyZCwgYWxlcnRXaW5uZXIsIHBsYXllclZpZXdVcGRhdGUsIGNvbXB1dGVyVmlld1VwZGF0ZSwgZHJhZ0FuZERyb3BTaGlwcywgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscywgc2V0SGl0LCBkaXNwbGF5Q2FwdGFpbkF2YXRhciwgaGlkZUNhcHRhaW5BdmF0YXIsIHNob3dDYXB0YWluQXZhdGFyLCBoYW5kbGVQbGF5ZXJIaXRTdGF0ZSwgaGFuZGxlUGxheWVyTWlzc1N0YXRlLCBhcHBlbmRSdWxlTW9kYWwsIGFwcGVuZEdhbWVPdmVyTW9kYWwsIHVwZGF0ZVBvc2l0aW9uT25Cb2FyZCB9XG59XG4iLCJleHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG5cbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgcGxhY2VDb21wdXRlclNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZFNoaXBQb3NpdGlvbnMgPSBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzKCk7XG5cbiAgICAgICAgY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRTaGlwUG9zaXRpb25zLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmFsaWRTaGlwUG9zaXRpb25zW3JhbmRvbVBsYWNlbWVudF07XG5cbiAgICAgICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgICAgICBpZiAoY2FuUGxhY2VTaGlwKHNoaXAsIHBvc2l0aW9uLCByYW5kb21PcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgIHBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgcmFuZG9tT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxhY2VDb21wdXRlclNoaXAoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FuUGxhY2VTaGlwID0gKHNoaXAsIHBvc2l0aW9uLCBpc1ZlcnRpY2FsKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICgocG9zaXRpb25bMF0gLSAxKSArIHNoaXAubGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBkb2VzIG5vdCBmaXQgb24gdGhlIGJvYXJkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbcG9zaXRpb25bMF0gKyBpXVtwb3NpdGlvblsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBleGlzdHMgaW4gdGhpcyBwb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChwb3NpdGlvblsxXSAtIDEpICsgc2hpcC5sZW5ndGggPiA5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZG9lcyBub3QgZml0IG9uIHRoZSBib2FyZCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdICsgaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGV4aXN0cyBpbiB0aGlzIHBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzLmxlbmd0aCA+PSA0O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGxCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gbmV3IEFycmF5KDEwKTtcbiAgICAgICAgICAgIGFyci5maWxsKCcnKTtcbiAgICAgICAgICAgIGJvYXJkLnB1c2goYXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgICBjb25zdCBnZXRWYWxpZEF0dGFja3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdICE9PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goW2ksal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbGlkU2hpcFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVtqXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goW2ksal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZGluYXRlLCBpc1ZlcnRpY2FsKSA9PiB7XG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICBzaGlwLnNldFNoaXBEaXJlY3Rpb24oJ1ZlcnRpY2FsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF0gKyBpXVtjb29yZGluYXRlWzFdXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwLnNldFNoaXBEaXJlY3Rpb24oJ0hvcml6b250YWwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXSArIGldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuXG4gICAgLy8gbGV0IGxhc3RIaXQgPSBudWxsO1xuICAgIGxldCBsYXN0SGl0ID0ge1xuICAgICAgICBzaGlwOiBudWxsLFxuICAgIH1cblxuICAgIGNvbnN0IGdldExhc3RIaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsYXN0SGl0O1xuICAgIH1cblxuICAgIGNvbnN0IGlzVmFsaWRBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA8PSA5ICYmIGNvb3JkaW5hdGVbMV0gPD0gOSkge1xuXG4gICAgICAgICAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBPdXQgb2YgYm91bmRzIGF0dGFjaycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkSXRlbSA9IGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dO1xuXG4gICAgICAgICAgICBpZiAoYm9hcmRJdGVtID09PSAnJykge1xuICAgICAgICAgICAgICAgIG1pc3NlZFNob3RzW2Nvb3JkaW5hdGVbMF1dLnB1c2goY29vcmRpbmF0ZVsxXSk7XG4gICAgICAgICAgICAgICAgLy8gbGFzdEhpdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdEhpdFsnc2hpcCddID0gbnVsbDsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRJdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGJvYXJkSXRlbS5oaXQoKTtcbiAgICAgICAgICAgICAgICBsYXN0SGl0WydzaGlwJ10gPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgICAgIC8vIGxhc3RIaXQgPSAnc2hpcCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dID0gJ3gnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXG4gICAgICAgIFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXG4gICAgXVxuXG4gICAgY29uc3QgZ2V0TWlzc2VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWlzc2VkU2hvdHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG5cbiAgICBmaWxsQm9hcmQoYm9hcmQpO1xuICAgIFxuICAgIHJldHVybiB7IGdldEJvYXJkLCBwbGFjZVNoaXAsIHJlY2lldmVBdHRhY2ssIGdldE1pc3NlcywgZ2V0U2hpcHMsIGFsbFNoaXBzU3VuaywgZ2V0VmFsaWRBdHRhY2tzLCBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzLCBnZXRMYXN0SGl0LCBhbGxTaGlwc1BsYWNlZCwgcGxhY2VDb21wdXRlclNoaXAsIGNhblBsYWNlU2hpcCwgaXNWYWxpZEF0dGFjayB9XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZ2FtZVN0YXRlJztcbmltcG9ydCB7IGdhbWVJbml0SGVscGVyIH0gZnJvbSAnLi9nYW1lU3RhdGUnO1xuaW1wb3J0IHsgQXVkaW9TZXR1cCB9IGZyb20gJy4vQXVkaW8gTW9kdWxlcy9hdWRpb0NyZWF0aW9uJztcblxuZXhwb3J0IGNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdmlldyA9IFZpZXcoKTtcbiAgICBsZXQgZ2FtZSA9IEdhbWVTdGF0ZSgpO1xuICAgIGNvbnN0IGF1ZGlvU2V0dXAgPSBBdWRpb1NldHVwKCk7XG4gICAgY29uc3QgZ2FtZUhlbHBlciA9IGdhbWVJbml0SGVscGVyKCk7XG5cbiAgICBsZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHBsYXlHYW1lID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVTdGFydGVkKSB7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkNob2ljZSA9IGF3YWl0IGluaXRpYWxpemVDYXB0YWluUGlja2VyKCk7XG4gICAgICAgIGF3YWl0IHZpZXcuRE9NLnNldE5ld1NoaXBDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgXG4gICAgICAgIHZpZXcuRE9NLmluaXRpYWxpemVNYWluRGlzcGxheSgpO1xuICAgICAgICB2aWV3LmFwcGVuZFJ1bGVNb2RhbCgpO1xuICAgICAgICBhdWRpb1NldHVwLmdlbmVyYXRlQXVkaW9GaWxlcygpO1xuICAgICAgICBhdWRpb1NldHVwLmxvb3BCYWNrZ3JvdW5kU291bmQoKTtcbiAgICAgICAgdmlldy5ET00uc2V0TWFpbkdyaWRUb1BsYXllcigpO1xuICAgICAgICB2aWV3LkRPTS5nZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzKChzaGlwRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdmlldy5ET00uYXBwbHlSb3RhdGlvbihzaGlwRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmRpc3BsYXlDYXB0YWluQXZhdGFyKGNhcHRhaW5DaG9pY2UpO1xuICAgICAgICB2aWV3LkRPTS5zcGVlY2hCdWJibGVUZXh0KHZpZXcucmVzcG9uc2Uuc2hpcFBsYWNlbWVudFJlc3BvbnNlKCkpO1xuICAgICAgICB2aWV3LmhpZGVDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgIHZpZXcuc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscygpO1xuXG4gICAgICAgIGdhbWUucGxhY2VBbGxDb21wdXRlclNoaXBzKCk7XG5cbiAgICAgICAgYXdhaXQgc2hpcFBsYWNlbWVudEhhbmRsZXIoKTtcbiAgICAgICAgdmlldy5vbkNlbGxDbGljayhnYW1lTG9vcCk7XG4gICAgICAgIC8vIHZpZXcuZHJhZ0FuZERyb3BTaGlwcygoc2hpcCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAvLyAgICAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGUpO1xuXG4gICAgICAgIC8vICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIucmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5zcGVlY2hCdWJibGVUZXh0KHZpZXcuRE9NSGVscGVyLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCB0cnVlKVxuXG4gICAgICAgIC8vICAgICAgICAgdmlldy5vbkNlbGxDbGljayhwbGF5Um91bmQpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB2aWV3LmRyYWdBbmREcm9wU2hpcHMoKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET00ucmVtb3ZlU2hpcENvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5ET00uc3BlZWNoQnViYmxlVGV4dCh2aWV3LnJlc3BvbnNlLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB2aWV3LkRPTS5pbml0aWFsaXplQ2FwdGFpblBpY2tlcihhc3luYyBjYXB0YWluQ2hvaWNlID0+IHtcbiAgICAgICAgICAgIGdhbWUuc2V0UGxheWVyQ2FwdGFpbihjYXB0YWluQ2hvaWNlKTtcbiAgICAgICAgICAgIHZpZXcuRE9NLnJlbW92ZUNhcHRhaW5QaWNrZXIoKTtcbiAgICAgICAgICAgIHJlc29sdmUoY2FwdGFpbkNob2ljZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVMb29wID0gYXN5bmMgKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKCFjb29yZGluYXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IEF0dGFjayBhbHJlYWR5IHBsYWNlZGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFnYW1lLmNvbXB1dGVyQm9hcmQuaXNWYWxpZEF0dGFjayhjb29yZGluYXRlKSkgcmV0dXJuO1xuXG4gICAgICAgIHZpZXcuRE9NLmRpc2FibGVDZWxscygpOyAgXG4gICAgICAgIGdhbWUucGxheWVyLmF0dGFjayhbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV0pO1xuXG5cbiAgICAgICAgY29uc3QgaXNhV2lubmVyID0gZ2FtZS5jaGVja0Zvcldpbm5lcigpO1xuICAgICAgICBpZiAoaXNhV2lubmVyKSB7XG4gICAgICAgICAgICB2aWV3LkRPTS5yZW1vdmVSdWxlc0J1dHRvbigpO1xuICAgICAgICAgICAgdmlldy5hcHBlbmRHYW1lT3Zlck1vZGFsKGlzYVdpbm5lciwgcmVzZXRHYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0TGFzdEhpdCgpWydzaGlwJ10pIHtcbiAgICAgICAgICAgIGF1ZGlvU2V0dXAucGxheVJhbmRvbUhpdFNvdW5kKCk7XG4gICAgICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUud2FpdEZvclNvdW5kKTtcbiAgICAgICAgICAgIHZpZXcudXBkYXRlUG9zaXRpb25PbkJvYXJkKGdhbWUuY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpLCBjb29yZGluYXRlLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXcuaGFuZGxlUGxheWVySGl0U3RhdGUoY29vcmRpbmF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdWRpb1NldHVwLnBsYXlSYW5kb21NaXNzU291bmQoKVxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTb3VuZCk7XG4gICAgICAgICAgICB2aWV3LnVwZGF0ZVBvc2l0aW9uT25Cb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgY29vcmRpbmF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3LkRPTS5zcGVlY2hCdWJibGVUZXh0KHZpZXcucmVzcG9uc2UucGxheWVyTWlzc1Jlc3BvbnNlKCkpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTcGVlY2gpO1xuICAgICAgICAgICAgdmlldy5oYW5kbGVQbGF5ZXJNaXNzU3RhdGUoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0QmV0d2VlblR1cm5zKTtcbiAgICAgICAgICAgIGhhbmRsZUNvbXB1dGVyVHVybigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZUNvbXB1dGVyVHVybiA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICBsZXQgYXR0YWNrUG9zaXRpb247XG4gICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmdldExhc3RIaXQoKVsnc2hpcCddKSB7XG4gICAgICAgICAgICBhdHRhY2tQb3NpdGlvbiA9IGdhbWUuY29tcHV0ZXIuYXR0YWNrQWRqYWNlbnRDZWxsKGdhbWUucGxheWVyQm9hcmQuZ2V0TGFzdEhpdCgpWydzaGlwJ10pOyAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0YWNrUG9zaXRpb24gPSBnYW1lLmNvbXB1dGVyLmF0dGFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0Zvcldpbm5lcigpO1xuICAgICAgICBpZiAod2lubmVyKSB7XG4gICAgICAgICAgICB2aWV3LkRPTS5yZW1vdmVSdWxlc0J1dHRvbigpO1xuICAgICAgICAgICAgdmlldy5hcHBlbmRHYW1lT3Zlck1vZGFsKHdpbm5lciwgcmVzZXRHYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmdldExhc3RIaXQoKVsnc2hpcCddKSB7XG4gICAgICAgICAgICBhdWRpb1NldHVwLnBsYXlSYW5kb21IaXRTb3VuZCgpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTb3VuZCk7XG4gICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgdmlldy5zZXRIaXQoYXR0YWNrUG9zaXRpb24sZmFsc2UpO1xuICAgICAgICAgICAgdmlldy5ET00uc3BlZWNoQnViYmxlVGV4dCh2aWV3LnJlc3BvbnNlLmNvbXB1dGVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTcGVlY2gpO1xuICAgICAgICAgICAgdmlldy5ET00uY3VycmVudFBsYXllck91dGxpbmUodHJ1ZSk7XG4gICAgICAgICAgICBoYW5kbGVDb21wdXRlclR1cm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1ZGlvU2V0dXAucGxheVJhbmRvbU1pc3NTb3VuZCgpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTb3VuZCk7XG4gICAgICAgICAgICB2aWV3LnVwZGF0ZUJvYXJkKGdhbWUucGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgdmlldy5ET00uc3BlZWNoQnViYmxlVGV4dCh2aWV3LnJlc3BvbnNlLmNvbXB1dGVyTWlzc1Jlc3BvbnNlKCkpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTcGVlY2gpOyBcbiAgICAgICAgICAgIHZpZXcuRE9NLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuRE9NLmVuYWJsZUNlbGxzKCk7XG4gICAgICAgICAgICB2aWV3LkRPTS5zcGVlY2hCdWJibGVUZXh0KHZpZXcucmVzcG9uc2UucGxheWVyVHVyblJlc3BvbnNlKCkpO1xuICAgICAgICAgICAgdmlldy5ET00uc2V0TWFpbkdyaWRUb0NvbXB1dGVyKCk7XG4gICAgICAgICAgICB2aWV3LnNob3dDYXB0YWluQXZhdGFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja1NoaXBQbGFjZW1lbnQgPSAoc2hpcCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheUNvb3JkaW5hdGUgPSBbK2Nvb3JkaW5hdGVbMF0sICtjb29yZGluYXRlWzFdXTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9ICtzaGlwLmRhdGFzZXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gZ2FtZUhlbHBlci5tYWtlU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuY2FuUGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgYXJyYXlDb29yZGluYXRlLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LkRPTS50cmFuc2l0aW9uRWxlbWVudFJlbW92YWwoc2hpcC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IENhbm5vdCBwbGFjZSBzaGlwIHRoZXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5jYW5QbGFjZVNoaXAobmV3U2hpcCwgYXJyYXlDb29yZGluYXRlLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LkRPTS50cmFuc2l0aW9uRWxlbWVudFJlbW92YWwoc2hpcC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IENhbm5vdCBwbGFjZSBzaGlwIHRoZXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxheVRpbWUgPSB7XG4gICAgICAgIHdhaXRGb3JTcGVlY2g6IDIwMDAsXG4gICAgICAgIHdhaXRGb3JTb3VuZDogMjAwMCxcbiAgICAgICAgd2FpdEJldHdlZW5UdXJuczogMjMwMFxuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgZ2FtZSA9IEdhbWVTdGF0ZSgpO1xuICAgICAgICB2aWV3LkRPTS5yZW1vdmVHcmlkc0FuZEhlYWRpbmcoKTtcbiAgICAgICAgdmlldy5ET00ucmVzZXRHYW1lU3R5bGVzKCk7XG4gICAgICAgIHZpZXcuRE9NLmNsb3NlTW9kYWwodmlldy5ET00uZWxlbWVudHMubW9kYWwpO1xuICAgIH1cblxuICAgIHZpZXcuRE9NLmVsZW1lbnRzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUdhbWUpO1xufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwTW9kdWxlXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZUluaXRIZWxwZXIgPSAoKSA9PiB7XG5cbiAgICAvLyBjb25zdCBwbGFjZVRlc3RTaGlwcyA9IChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDUpLCBbNCwxXSk7XG4gICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFs3LDRdKTtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgzKSwgWzIsMl0pO1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDIpLCBbOCw3XSk7XG5cbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNSksIFsyLDNdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoNCksIFsxLDFdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMyksIFs5LDVdKTtcbiAgICAvLyAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMiksIFszLDddKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZVNoaXAgfVxufVxuXG5leHBvcnQgY29uc3QgR2FtZVN0YXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICBsZXQgcGxheWVyQ2FwdGFpbiA9IG51bGw7XG5cbiAgICBjb25zdCBwbGF5ZXJIYXNDYXB0YWluID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyQ2FwdGFpbiA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJDYXB0YWluID0gKGNhcHRhaW4pID0+IHtcbiAgICAgICAgcGxheWVyQ2FwdGFpbiA9IGNhcHRhaW47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGxheWVyQ2FwdGFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllckNhcHRhaW47XG4gICAgfVxuICAgIFxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUGxheWVyJywgY29tcHV0ZXJCb2FyZCwgZmFsc2UpO1xuICAgIGxldCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInLCBwbGF5ZXJCb2FyZCwgdHJ1ZSlcblxuICAgIGNvbnN0IHBsYWNlQWxsQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZUNvbXB1dGVyU2hpcChTaGlwKDUpKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZUNvbXB1dGVyU2hpcChTaGlwKDQpKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZUNvbXB1dGVyU2hpcChTaGlwKDMpKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZUNvbXB1dGVyU2hpcChTaGlwKDIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcHV0ZXIuZ2V0TmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyLmdldE5hbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXIsIGNvbXB1dGVyLCBjaGVja0Zvcldpbm5lciwgcGxhY2VBbGxDb21wdXRlclNoaXBzLCBjdXJyZW50UGxheWVyLCBwbGF5ZXJIYXNDYXB0YWluLCBzZXRQbGF5ZXJDYXB0YWluLCBnZXRQbGF5ZXJDYXB0YWluIH1cbn0iLCJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgb3Bwb25lbnRCb2FyZCwgaXNDUFUgPSBmYWxzZSkgPT4ge1xuLy9mYWN0b3J5IGZvciBvdXIgZGlmZmVyZW50IHBsYXllcnMgKGluIHRoZSBjYXNlIG9mIHRoaXMgZ2FtZSBpdCB3b3VsZCBiZSB0aGUgcGxheWVyIGFuZCB0aGUgY29tcHV0ZXIpIHdvdWxkIHRha2UgYSBuYW1lLCBhbmQgdGhlIG9wcG9zaW5nIHBsYXllcnMgYm9hcmQuIFNvIGlmIHdlIG1ha2UgYSBwbGF5ZXIgaXQgd291bGQgdGFrZSBpbiB0aGUgY29tcHV0ZXJzIGJvYXJkLlxuXG4gICAgY29uc3QgY2FjdWxhdGlvblJhbmRvbVBvc2l0aW9uID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHZhbGlkUG9zaXRpb25zID0gb3Bwb25lbnRCb2FyZC5nZXRWYWxpZEF0dGFja3MoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB2YWxpZFBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFBvc2l0aW9ucy5sZW5ndGgpXTtcblxuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlQWRqYWNlbnRQb3NpdGlvbiA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIC8veSBjb29yZGluYXRlIGZpcnN0LCB0aGVuIHhcbiAgICAgICAgY29uc3QgdmFsaWRQb3NpdGlvbnMgPSBvcHBvbmVudEJvYXJkLmdldFZhbGlkQXR0YWNrcygpO1xuICAgICAgICAvLyBjb25zdCBhZGphY2VudFBvc2l0aW9ucyA9IFtcbiAgICAgICAgLy8gICAgIFtjb29yZGluYXRlWzBdIC0gMSwgY29vcmRpbmF0ZVsxXV0sXG4gICAgICAgIC8vICAgICBbY29vcmRpbmF0ZVswXSArIDEsIGNvb3JkaW5hdGVbMV1dLFxuICAgICAgICAvLyAgICAgW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0gLSAxXSxcbiAgICAgICAgLy8gICAgIFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdICsgMV0sXG4gICAgICAgIC8vIF1cbiAgICAgICAgY29uc3QgYWRqYWNlbnRQb3NpdGlvbnMgPSBbXG4gICAgICAgICAgICBbTnVtYmVyKGNvb3JkaW5hdGVbMF0pIC0gMSwgTnVtYmVyKGNvb3JkaW5hdGVbMV0pXSxcbiAgICAgICAgICAgIFtOdW1iZXIoY29vcmRpbmF0ZVswXSkgKyAxLCBOdW1iZXIoY29vcmRpbmF0ZVsxXSldLFxuICAgICAgICAgICAgW051bWJlcihjb29yZGluYXRlWzBdKSwgTnVtYmVyKGNvb3JkaW5hdGVbMV0pIC0gMV0sXG4gICAgICAgICAgICBbTnVtYmVyKGNvb3JkaW5hdGVbMF0pLCBOdW1iZXIoY29vcmRpbmF0ZVsxXSkgKyAxXSxcbiAgICAgICAgXVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhZGphY2VudFBvc2l0aW9ucylcbiAgICAgICAgbGV0IHJhbmRvbVBvc2l0aW9uID0gYWRqYWNlbnRQb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqYWNlbnRQb3NpdGlvbnMubGVuZ3RoKV07XG5cbiAgICAgICAgbGV0IHJhbmRvbVBvc2l0aW9uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocmFuZG9tUG9zaXRpb24pO1xuXG5cbiAgICAgICAgd2hpbGUgKCF2YWxpZFBvc2l0aW9ucy5zb21lKCh2YWxpZFBvc2l0aW9uKSA9PiBKU09OLnN0cmluZ2lmeSh2YWxpZFBvc2l0aW9uKSA9PT0gcmFuZG9tUG9zaXRpb25TdHJpbmcpKSB7XG4gICAgICAgICAgICByYW5kb21Qb3NpdGlvbiA9IGFkamFjZW50UG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50UG9zaXRpb25zLmxlbmd0aCldO1xuXG4gICAgICAgICAgICByYW5kb21Qb3NpdGlvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJhbmRvbVBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGlsZSAoIXZhbGlkUG9zaXRpb25zLmluY2x1ZGVzKHJhbmRvbVBvc2l0aW9uKSkge1xuICAgICAgICAvLyAgICAgcmFuZG9tUG9zaXRpb24gPSBhZGphY2VudFBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGphY2VudFBvc2l0aW9ucy5sZW5ndGgpXTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgICAgICAgLy8xIGFib3ZlXG4gICAgICAgIC8vMSBiZWxvd1xuICAgICAgICAvLzEgdG8gdGhlIGxlZnRcbiAgICAgICAgLy8xIHRvIHRoZSByaWdodFxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChpc0NQVSkge1xuXG4gICAgICAgICAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNhY3VsYXRpb25SYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICAgICAgb3Bwb25lbnRCb2FyZC5yZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHBvbmVudEJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZSlcblxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFja0FkamFjZW50Q2VsbCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUFkamFjZW50Q2VsbCA9IGNhbGN1bGF0ZUFkamFjZW50UG9zaXRpb24oY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgb3Bwb25lbnRCb2FyZC5yZWNpZXZlQXR0YWNrKHJhbmRvbUFkamFjZW50Q2VsbCk7XG4gICAgICAgIHJldHVybiByYW5kb21BZGphY2VudENlbGw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYXR0YWNrLCBnZXROYW1lLCBhdHRhY2tBZGphY2VudENlbGwgfVxufSIsImV4cG9ydCBjb25zdCBBdmF0YXJSZXNwb25zZXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwbGF5ZXJIaXRSZXNwb25zZSA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJCdWxsc2V5ZSEgR28gYWdhaW4hXCJgLFxuICAgICAgICAgICAgYFwiTmljZSBzaG90ISBFbmVteSBzaGlwIGhpdCFcImAsXG4gICAgICAgICAgICBgXCJEaXJlY3QgaGl0ISBOZXh0IHNob3QhXCJgXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGxheWVyVHVyblJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJGaXJlIGF0IHdpbGwhXCJgLFxuICAgICAgICAgICAgYFwiVGFrZSB5b3VyIHNob3QhXCJgLFxuICAgICAgICAgICAgYFwiWW91IGhhdmUgdGhlIGdyZWVuIGxpZ2h0IHRvIGF0dGFjay5cImAsXG4gICAgICAgICAgICBgXCJTaG93IHRoZSBlbmVteSB3aGF0IHdlJ3JlIG1hZGUgb2YhXCJgLFxuICAgICAgICAgICAgYFwiV2UncmUgY291bnRpbmcgb24geW91LCBjYXB0YWluLlwiYCxcbiAgICAgICAgICAgIGBcIlRpbWUgdG8gbWFrZSB5b3VyIG1vdmUuXCJgXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgY29tcHV0ZXJUdXJuUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIlRoZSBlbmVteSBpcyB0YWtpbmcgdGhlaXIgc2hvdC5cImAsXG4gICAgICAgICAgICBgXCJJdHMgdGhlIGVuZW1pZXMgdHVybiB0byBmaXJlLlwiYCxcbiAgICAgICAgICAgIGBcIlRoZSBlbmVteSBpcyBhdHRhY2tpbmcuXCJgLFxuICAgICAgICBdXG4gICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiUGxhY2UgdGhlIHNoaXBzLCBDYXAnbiFcImAsXG4gICAgICAgICAgICBgXCJDYXB0YWluLCBsZXRzIHBsYWNlIG91ciBmbGVldCFcImAsXG4gICAgICAgICAgICBgXCJMZXQncyBiZWdpbiBwbGFjaW5nIG91ciBzaGlwcyFcImAsXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgY29tcHV0ZXJNaXNzUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIkEgbWlzcyFcImAsXG4gICAgICAgICAgICBgXCJEYW1uLCB0aGV5IG1pc3NlZCBpdC5cImAsXG4gICAgICAgICAgICBgXCJUaGF0J3MgZ29vZCBmb3IgdXMuXCJgLFxuICAgICAgICAgICAgYFwiTmljZS4uXCJgLFxuICAgICAgICAgICAgYFwiUGxvcC4uLiBOaWNlIG1pc3MuXCJgXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGxheWVyTWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJBaCwgdG9vIGJhZC4uXCJgLFxuICAgICAgICAgICAgYFwiQSBtaXNzIGZvciB1cywgYmFkIGx1Y2suLlwiYCxcbiAgICAgICAgICAgIGBcIldlJ2xsIGhpdCB0aGVtIG5leHQgdGltZS5cImBcbiAgICAgICAgXVxuICAgIFxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllckhpdFJlc3BvbnNlLFxuICAgICAgICBwbGF5ZXJNaXNzUmVzcG9uc2UsXG4gICAgICAgIHBsYXllclR1cm5SZXNwb25zZSxcbiAgICAgICAgY29tcHV0ZXJNaXNzUmVzcG9uc2UsXG4gICAgICAgIGNvbXB1dGVyVHVyblJlc3BvbnNlLFxuICAgICAgICBzaGlwUGxhY2VtZW50UmVzcG9uc2VcbiAgICB9XG59XG4iLCIvL3NoaXAgZmFjdG9yeSBzaG91bGQgaW5jbHVkZSBhIHR5cGUsIHdoaWNoIHdlIGNhbiBkZWZpbmUgbGF0ZXIgZnJvbSB0aGUgc2hpcCB0aGF0IHRoZSB1c2VyIGNsaWNrcyBvbi4gXG5cbmV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgY29uc3Qgc2hpcExvb2t1cCA9IHtcbiAgICAgICAgNTogJ0NhcnJpZXInLFxuICAgICAgICA0OiAnQmF0dGxlc2hpcCcsXG4gICAgICAgIDM6ICdDcnVpc2VyJyxcbiAgICAgICAgMjogJ0Rlc3Ryb3llcidcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlID0gc2hpcExvb2t1cFtsZW5ndGhdO1xuICAgIFxuICAgIGxldCBzaGlwRGlyZWN0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNldFNoaXBEaXJlY3Rpb24gPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIHNoaXBEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBEaXJlY3Rpb247XG4gICAgfVxuXG4gICAgbGV0IGRhbWFnZVJlY2lldmVkID0gMDtcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgZGFtYWdlUmVjaWV2ZWQrKztcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gZGFtYWdlUmVjaWV2ZWQgPj0gbGVuZ3RoO1xuICAgIFxuXG4gICAgY29uc3QgZ2V0RGFtYWdlUmVjaWV2ZWQgPSAoKSA9PiBkYW1hZ2VSZWNpZXZlZDtcblxuICAgIHJldHVybiB7IHR5cGUsIGxlbmd0aCwgZ2V0RGFtYWdlUmVjaWV2ZWQsIGhpdCwgaXNTdW5rLCBzZXRTaGlwRGlyZWN0aW9uLCBnZXRTaGlwRGlyZWN0aW9uIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nYW1lQ29udHJvbGxlclwiO1xuXG5nYW1lQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==