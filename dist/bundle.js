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

            cell.addEventListener('dragleave', () => {
                
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLFNBQVMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssa0JBQWtCLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7OztBQ3pFTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0FrRDs7QUFFbEQsK0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9BdWRpbyBNb2R1bGVzL2F1ZGlvQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00gSGVscGVyIE1vZHVsZXMvRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00gSGVscGVyIE1vZHVsZXMvRE9NSGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NIEhlbHBlciBNb2R1bGVzL0VsZW1lbnRTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lU3RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZXNwb25zZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwTW9kdWxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNscjogcmdiKDYsIDE4LCAzMSk7XFxuICAgIC0tZ3JpZC1ib3JkZXItY2xyOiByZ2IoMjIsIDQ3LCA3Myk7XFxuICAgIC0tc2hpcC1ib3JkZXItY2xyOiAjYzRjZTM1O1xcbiAgICAtLWJveC1ob3Zlci1jbHI6IHJnYigzMiwgNTcsIDgzKTtcXG4gICAgLS1zaGlwLWNscjogcmdiKDM2LCA2MCwgODUpO1xcbiAgICAtLXNlY29uZGFyeS1jbHI6ICNjZWU2MWM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3RhcnQtZ2FtZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogNTBtcztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wbGF5LWFnYWluIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ydWxlcy1pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNzElKSBzZXBpYSg0MCUpIHNhdHVyYXRlKDcxMiUpIGh1ZS1yb3RhdGUoMjVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTE3JSk7XFxufVxcblxcbi5ydWxlcy1pY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjExKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4uaW4tcHJvZ3Jlc3Mge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTM0JTtcXG4gICAgbGVmdDogNTUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIC8qIG1pbi13aWR0aDogMjg1cHg7ICovXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC8qIGhlaWdodDogbWluKDEwMCUsIDIwMHB4KTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZTtcXG59XFxuXFxuLm1vZGFsLnJ1bGVzIHtcXG4gICAgbWluLXdpZHRoOiAyODVweDtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwJSwgMjAwcHgpO1xcbn1cXG5cXG4ubW9kYWwuZ2FtZS1vdmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSk7ICovXFxuICAgIHRvcDogNTYlO1xcbiAgICBsZWZ0OiA1NSU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ubW9kYWwgb2wge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5tb2RhbCBvbCBsaSxcXG4ubW9kYWwgb2wgaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwgb2wgaDMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAxMXB4IDExcHggMHB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTNkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDUlKTtcXG59XFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIC43KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0b3A6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuICB9XFxuXFxuXFxuXFxuLyogLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG59ICovXFxuXFxuLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcHRhaW4tYm9hcmQtYXZhdGFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNDMuNSU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSk7ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMTMlO1xcbiAgICAvKiBib3R0b206IDclOyAqL1xcbiAgICBib3R0b206IDMwJTtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbi5jYXB0YWluLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNrZXcoLTYwZGVnKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLXNlY29uZGFyeS1jbHIpIHRyYW5zcGFyZW50O1xcbn1cXG4gIFxcblxcbi5jYXB0YWluLWltYWdlIHtcXG4gICAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG5cXG59XFxuXFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zaGlwLWNscik7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLyogLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2Uge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDApOyAqL1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xcbiAgICBtYXgtd2lkdGg6IDg1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5jYXB0YWluLW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW46aG92ZXIge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyAqL1xcbn1cXG4uY2FwdGFpbi1jb250YWluZXIudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMHJlbTtcXG59XFxuLyogLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuXFxuXFxufSAqL1xcblxcbi5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjRyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxufVxcblxcbi5ncmlkLmxlZnQuY3VycmVudCxcXG4uZ3JpZC5yaWdodC5jdXJyZW50IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbi8qIC5ncmlkLmxlZnQge1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG59ICovXFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dCxcXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3MDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dC5oaWRlLFxcbi5ncmlkLnJpZ2h0LmZhZGUtb3V0LmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LnZpc2libGUsXFxuLmdyaWQucmlnaHQudmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIC5ncmlkLmxlZnQuZGlzYWJsZWQsXFxuLmdyaWQucmlnaHQuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59ICovXFxuXFxuLnJvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5ib3gsXFxuLm91dGVyLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoNTYsIDU4LCA3MCk7ICovXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLyogLmJveCAuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5ib3guaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtaG92ZXItY2xyKTtcXG59XFxuXFxuLmJveC5wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcblxcbn1cXG5cXG4vKiAuYm94LnBsYWNlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufSAqL1xcblxcbi5zaGlwLXNxdWFyZS1ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZS12ZXJ0aWNhbCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ub3V0ZXItYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYXR0YWNrLW1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtaGl0LW1hcmtlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0LFxcbi5jb21wdXRlci1zaGlwLWhpdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5zaGlwLW1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIC8qIHBhZGRpbmctdG9wOiAxMHB4OyAqL1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lci5leHBhbmQge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG59XFxuXFxuLnNoaXAtc3ViLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG59XFxuXFxuLnNoaXAtZWxlbWVudDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMge1xcbiAgICB3aWR0aDogNzBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNCB7XFxuICAgIHdpZHRoOiA5MHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01IHtcXG4gICAgd2lkdGg6IDExMHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50LnZlcnRpY2FsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoMTAwJSArIC01NXB4KSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoODIlKSBzYXR1cmF0ZSg0NjAlKSBodWUtcm90YXRlKDdkZWcpIGJyaWdodG5lc3MoODclKSBjb250cmFzdCgxMDglKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi8qIC5zaGlwLWVsZW1lbnQubGVuZ3RoLTIucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn0gKi9cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgc2NhbGU6IDA7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxufVxcblxcbi5tb3ZlLXBvc2l0aW9uIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1JSk7XFxuICAgIHdpZHRoOiA5NCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Is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LGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXOztBQUVmOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCw4Q0FBOEM7SUFDOUMsNkZBQTZGO0lBQzdGLHNDQUFzQztJQUN0QywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRzs7QUFFSDtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNscjogcmdiKDYsIDE4LCAzMSk7XFxuICAgIC0tZ3JpZC1ib3JkZXItY2xyOiByZ2IoMjIsIDQ3LCA3Myk7XFxuICAgIC0tc2hpcC1ib3JkZXItY2xyOiAjYzRjZTM1O1xcbiAgICAtLWJveC1ob3Zlci1jbHI6IHJnYigzMiwgNTcsIDgzKTtcXG4gICAgLS1zaGlwLWNscjogcmdiKDM2LCA2MCwgODUpO1xcbiAgICAtLXNlY29uZGFyeS1jbHI6ICNjZWU2MWM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3RhcnQtZ2FtZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogNTBtcztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wbGF5LWFnYWluIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ydWxlcy1pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNzElKSBzZXBpYSg0MCUpIHNhdHVyYXRlKDcxMiUpIGh1ZS1yb3RhdGUoMjVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTE3JSk7XFxufVxcblxcbi5ydWxlcy1pY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjExKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4uaW4tcHJvZ3Jlc3Mge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTM0JTtcXG4gICAgbGVmdDogNTUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIC8qIG1pbi13aWR0aDogMjg1cHg7ICovXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC8qIGhlaWdodDogbWluKDEwMCUsIDIwMHB4KTsgKi9cXG4gICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZTtcXG59XFxuXFxuLm1vZGFsLnJ1bGVzIHtcXG4gICAgbWluLXdpZHRoOiAyODVweDtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwJSwgMjAwcHgpO1xcbn1cXG5cXG4ubW9kYWwuZ2FtZS1vdmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSk7ICovXFxuICAgIHRvcDogNTYlO1xcbiAgICBsZWZ0OiA1NSU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ubW9kYWwgb2wge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5tb2RhbCBvbCBsaSxcXG4ubW9kYWwgb2wgaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwgb2wgaDMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAxMXB4IDExcHggMHB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTNkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDUlKTtcXG59XFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIC43KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0b3A6IC0xMHJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1ib3JkZXItY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuICB9XFxuXFxuXFxuXFxuLyogLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG59ICovXFxuXFxuLmNhcHRhaW4tYXZhdGFycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcHRhaW4tYm9hcmQtYXZhdGFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNDMuNSU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSk7ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgO1xcbn1cXG5cXG4vKiAuY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMTMlO1xcbiAgICAvKiBib3R0b206IDclOyAqL1xcbiAgICBib3R0b206IDMwJTtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbi5jYXB0YWluLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNrZXcoLTYwZGVnKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLXNlY29uZGFyeS1jbHIpIHRyYW5zcGFyZW50O1xcbn1cXG4gIFxcblxcbi5jYXB0YWluLWltYWdlIHtcXG4gICAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG5cXG59XFxuXFxuXFxuLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCB2YXIoLS1zaGlwLWNscik7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLmNhcHRhaW4tY29udGFpbmVyIC5jYXB0YWluIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2hpcC1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLyogLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn0gKi9cXG5cXG4uY2FwdGFpbi13aGVlbC1waWNrZXItaW1hZ2Uge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDApOyAqL1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xcbiAgICBtYXgtd2lkdGg6IDg1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcHRhaW4td2hlZWwtcGlja2VyLWltYWdlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5jYXB0YWluLW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2FwdGFpbi1jb250YWluZXIgLmNhcHRhaW46aG92ZXIge1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyAqL1xcbn1cXG4uY2FwdGFpbi1jb250YWluZXIudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMHJlbTtcXG59XFxuLyogLmdyaWQubGVmdCxcXG4uZ3JpZC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxuXFxuXFxufSAqL1xcblxcbi5ncmlkLmxlZnQsXFxuLmdyaWQucmlnaHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjRyZW07XFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2U7XFxufVxcblxcbi5ncmlkLmxlZnQuY3VycmVudCxcXG4uZ3JpZC5yaWdodC5jdXJyZW50IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbi8qIC5ncmlkLmxlZnQge1xcbiAgICBtaW4td2lkdGg6IDk1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5ncmlkLnJpZ2h0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG59ICovXFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dCxcXG4uZ3JpZC5sZWZ0LmZhZGUtb3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3MDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLmdyaWQubGVmdC5mYWRlLW91dC5oaWRlLFxcbi5ncmlkLnJpZ2h0LmZhZGUtb3V0LmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JpZC5sZWZ0LnZpc2libGUsXFxuLmdyaWQucmlnaHQudmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIC5ncmlkLmxlZnQuZGlzYWJsZWQsXFxuLmdyaWQucmlnaHQuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59ICovXFxuXFxuLnJvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5ib3gsXFxuLm91dGVyLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoNTYsIDU4LCA3MCk7ICovXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcXG59XFxuXFxuLyogLmJveCAuZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5ib3guaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtaG92ZXItY2xyKTtcXG59XFxuXFxuLmJveC5wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zaGlwLWJvcmRlci1jbHIpO1xcblxcbn1cXG5cXG4vKiAuYm94LnBsYWNlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufSAqL1xcblxcbi5zaGlwLXNxdWFyZS1ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZS12ZXJ0aWNhbCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ub3V0ZXItYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYXR0YWNrLW1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAtaGl0LW1hcmtlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAtaGl0LFxcbi5jb21wdXRlci1zaGlwLWhpdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBsYXllci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YmVmb3JlLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4ucGxheWVyLXNoaXAtaGl0OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmJlZm9yZSxcXG4uY29tcHV0ZXItc2hpcC1oaXQ6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1oaXQ6OmFmdGVyLFxcbi5jb21wdXRlci1zaGlwLWhpdDo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5zaGlwLW1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIC8qIHBhZGRpbmctdG9wOiAxMHB4OyAqL1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtYm9yZGVyLWNscik7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCA3MDBtcyBlYXNlO1xcbn1cXG5cXG4uc2hpcC1tYWluLWNvbnRhaW5lci5leHBhbmQge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG59XFxuXFxuLnNoaXAtc3ViLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG59XFxuXFxuLnNoaXAtZWxlbWVudDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLW1haW4tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTMge1xcbiAgICB3aWR0aDogNzBweDtcXG5cXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNCB7XFxuICAgIHdpZHRoOiA5MHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01IHtcXG4gICAgd2lkdGg6IDExMHB4O1xcblxcbn1cXG5cXG4uc2hpcC1lbGVtZW50LnZlcnRpY2FsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0yLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC00LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC01LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoMTAwJSArIC01NXB4KSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoODIlKSBzYXR1cmF0ZSg0NjAlKSBodWUtcm90YXRlKDdkZWcpIGJyaWdodG5lc3MoODclKSBjb250cmFzdCgxMDglKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi8qIC5zaGlwLWVsZW1lbnQubGVuZ3RoLTIucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcC1lbGVtZW50Lmxlbmd0aC0zLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAtZWxlbWVudC5sZW5ndGgtNC5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFxufVxcblxcbi5zaGlwLWVsZW1lbnQubGVuZ3RoLTUucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn0gKi9cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgc2NhbGU6IDA7XFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxufVxcblxcbi5tb3ZlLXBvc2l0aW9uIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1JSk7XFxuICAgIHdpZHRoOiA5NCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgbWlzczEgZnJvbSAnLi4vYXNzZXRzL3NvdW5kcy9zaG90LW1pc3MubXAzJztcbi8vIGltcG9ydCBtaXNzMiBmcm9tICcuLi9hc3NldHMvc291bmRzL3Nob3QtbWlzczIubXAzJztcbi8vIGltcG9ydCBoaXQxIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvc2hvdC1oaXQubXAzJztcbi8vIGltcG9ydCBoaXQyIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvc2hvdC1oaXQyLm1wMyc7XG5cbmltcG9ydCBuZXdIaXQxIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvaGl0Lm9nZyc7XG5pbXBvcnQgbmV3TWlzczEgZnJvbSAnLi4vYXNzZXRzL3NvdW5kcy9taXNzLm9nZyc7XG5pbXBvcnQgYmFja2dyb3VuZFdhdmVzIGZyb20gJy4uL2Fzc2V0cy9zb3VuZHMvYmFja2dyb3VuZC13YXZlcy5vZ2cnO1xuXG5leHBvcnQgY29uc3QgQXVkaW9TZXR1cCA9ICgpID0+IHtcblxuICAgIGxldCBzaGlwSGl0cyA9IFtdO1xuICAgIGxldCBzaGlwTWlzc2VzID0gW107XG5cbiAgICBsZXQgd2F2ZXMgPSBuZXcgQXVkaW8oYmFja2dyb3VuZFdhdmVzKTtcbiAgICBjb25zdCBnZW5lcmF0ZUF1ZGlvRmlsZXMgPSAoKSA9PiB7XG4gICAgICAgIC8vIHNoaXBNaXNzZXMucHVzaChuZXcgQXVkaW8obWlzczEpKTtcbiAgICAgICAgLy8gc2hpcE1pc3Nlcy5wdXNoKG5ldyBBdWRpbyhtaXNzMikpO1xuXG4gICAgICAgIC8vIHNoaXBIaXRzLnB1c2gobmV3IEF1ZGlvKGhpdDEpKTtcbiAgICAgICAgLy8gc2hpcEhpdHMucHVzaChuZXcgQXVkaW8oaGl0MikpO1xuXG4gICAgICAgIHNoaXBNaXNzZXMucHVzaChuZXcgQXVkaW8obmV3TWlzczEpKTtcbiAgICAgICAgc2hpcEhpdHMucHVzaChuZXcgQXVkaW8obmV3SGl0MSkpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgcGxheVJhbmRvbUhpdFNvdW5kID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcEhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGl0IHNvdW5kcyBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kb21IaXQgPSBzaGlwSGl0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGlwSGl0cy5sZW5ndGgpXTtcbiAgICAgICAgcmFuZG9tSGl0LnZvbHVtZSA9IDAuNDtcbiAgICAgICAgcmFuZG9tSGl0LnBsYXkoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5UmFuZG9tTWlzc1NvdW5kID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcEhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWlzcyBzb3VuZHMgYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZG9tTWlzcyA9IHNoaXBNaXNzZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcE1pc3Nlcy5sZW5ndGgpXTtcbiAgICAgICAgcmFuZG9tTWlzcy52b2x1bWUgPSAwLjQ7XG4gICAgICAgIHJhbmRvbU1pc3MucGxheSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvb3BCYWNrZ3JvdW5kU291bmQgPSAoKSA9PiB7XG4gICAgICAgIHdhdmVzLnZvbHVtZSA9IDAuMjtcbiAgICAgICAgd2F2ZXMucGxheSgpO1xuXG4gICAgICAgIHdhdmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgd2F2ZXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgd2F2ZXMucGxheSgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2VuZXJhdGVBdWRpb0ZpbGVzLCBwbGF5UmFuZG9tSGl0U291bmQsIHBsYXlSYW5kb21NaXNzU291bmQsIGxvb3BCYWNrZ3JvdW5kU291bmQgfVxufSIsIlxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgb25lRWxlbWVudCA9IChjbGFzc1RpdGxlLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzVGl0bGU7XG4gICAgXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG11bHRpcGxlRWxlbWVudHMgPSAoZWxlbWVudCwgcXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cXR5OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgYXJyLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiB7IG9uZUVsZW1lbnQsIG11bHRpcGxlRWxlbWVudHMgfVxufVxuIiwiaW1wb3J0IHsgQ3VzdG9tRWxlbWVudENyZWF0b3IgfSBmcm9tICcuL0RPTUNyZWF0aW9uJztcbmltcG9ydCB7IE15RWxlbWVudHMgfSBmcm9tICcuL0VsZW1lbnRTZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBET01JbnRlcmZhY2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjcmVhdG9yID0gQ3VzdG9tRWxlbWVudENyZWF0b3IoKTtcbiAgICBjb25zdCBlbGVtZW50cyA9IE15RWxlbWVudHMoKTtcblxuICAgIGNvbnN0IGluaXRpYWxpemVNYWluRGlzcGxheSA9ICgpID0+IHtcblxuICAgICAgICBnZW5lcmF0ZUdyaWRzKCk7XG4gICAgICAgIHNldEluR2FtZVN0eWxlcygpO1xuICAgICAgICBnZW5lcmF0ZVNoaXBFbGVtZW50cygpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5ld1NoaXBDb250YWluZXJIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudHMuc2hpcE1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICBlbGVtZW50cy5zaGlwTWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50cy5zaGlwTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQnKVxuICAgIH1cblxuICAgIGNvbnN0IHNldE1haW5HcmlkVG9QbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgZWxlbWVudHMuY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWFpbkdyaWRUb0NvbXB1dGVyID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemVDYXB0YWluUGlja2VyID0gYXN5bmMgKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5Db250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ2NhcHRhaW4tY29udGFpbmVyJywgJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUGljayB5b3VyIGxpZXV0ZW5hbnQhJ1xuICAgICAgICBjYXB0YWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZWxlbWVudHMuZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZChjYXB0YWluQ29udGFpbmVyKTtcblxuICAgICAgICBzZXRJbkdhbWVTdHlsZXMoKTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnRzLnRyYW5zaXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpZnQtZG93bicpO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYXB0YWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb25Db250YWluZXJUb3AoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUNhcHRhaW5zKGNhcHRhaW5Db250YWluZXIsIGNhbGxiYWNrKTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRUcmFuc2l0aW9uQ29udGFpbmVyVG9wKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNhcHRhaW5QaWNrZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1jb250YWluZXInKTtcblxuICAgICAgICBjYXB0YWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgc2V0RGVmYXVsdENvbnRhaW5lclNpemUoKTtcblxuICAgICAgICBjYXB0YWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjYXB0YWluQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbnN0IGdldENhcHRhaW5JbWFnZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbIGVsZW1lbnRzLmNhcHRhaW4xLCBlbGVtZW50cy5jYXB0YWluMiwgZWxlbWVudHMuY2FwdGFpbjMgXVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNhcHRhaW5zID0gKGNvbnRhaW5lciwgY2FsbGJhY2spID0+IHtcblxuICAgICAgICBjb25zdCBjYXB0YWluQXZhdGFycyA9IGNyZWF0b3Iub25lRWxlbWVudCgnY2FwdGFpbi1hdmF0YXJzJywgJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGNhcHRhaW5zID0gY3JlYXRvci5tdWx0aXBsZUVsZW1lbnRzKCdkaXYnLCAzKTtcbiAgICAgICAgY29uc3QgY2FwdGFpbk5hbWVzID0gWydUZWQnLCAnRG9uYWxkJywgJ0J1cnQnXVxuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgY2FwdGFpbiBvZiBjYXB0YWlucykge1xuICAgICAgICAgICAgICAgIGNhcHRhaW4uY2xhc3NOYW1lID0gJ2NhcHRhaW4nO1xuICAgICAgICAgICAgICAgIC8vIGNhcHRhaW4udGV4dENvbnRlbnQgPSBgY2FwdGFpbiR7Y291bnRlcn1gO1xuICAgICAgICAgICAgICAgIGNhcHRhaW4uZGF0YXNldC5jYXB0YWluID0gY291bnRlcjtcbiAgICAgICAgICAgICAgICBjYXB0YWluQXZhdGFycy5hcHBlbmRDaGlsZChjYXB0YWluKTtcblxuICAgICAgICAgICAgICAgIGNhcHRhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNhcHRhaW4uZGF0YXNldC5jYXB0YWluKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGF2YXRhckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgYXZhdGFySW1hZ2Uuc3JjID0gZ2V0Q2FwdGFpbkltYWdlcygpW2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIGF2YXRhckltYWdlLmNsYXNzTmFtZSA9ICdjYXB0YWluLXdoZWVsLXBpY2tlci1pbWFnZSc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTmFtZSA9ICdjYXB0YWluLW5hbWUnO1xuICAgICAgICAgICAgICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gY2FwdGFpbk5hbWVzW2NvdW50ZXIrK107XG4gICAgICAgICAgICAgICAgLy8gYXZhdGFySW1hZ2UuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgYXZhdGFySW1hZ2UuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FwdGFpbi5hcHBlbmQoYXZhdGFySW1hZ2UsIG5hbWVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChjYXB0YWluQXZhdGFycyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUdyaWRTcXVhcmVzID0gKGNvbnRhaW5lciwgaXNDb21wR3JpZCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPDExOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNyZWF0b3Iub25lRWxlbWVudCgncm93JywgJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMTsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGNyZWF0b3Iub25lRWxlbWVudCgnYm94JywgJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJveClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0Lnh5UG9zID0gYCR7ai0xfSR7aS0xfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wR3JpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0LnBsYXllciA9ICdjb21wdXRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0LnBsYXllciA9ICdwbGF5ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnb3V0ZXItYm94JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kYXRhc2V0LnBsYXllciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBqO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ291dGVyLWJveCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGF0YXNldC5wbGF5ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnRleHRDb250ZW50ID0gc2V0QWxwaGFiZXRbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVmYXVsdENvbnRhaW5lclNpemUgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICBlbGVtZW50cy50cmFuc2l0aW9uQ29udGFpbmVyLnN0eWxlLnRvcCA9ICcwdmgnO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRyYW5zaXRpb25Db250YWluZXJUb3AgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gY29uc3QgbWFpbkJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzJyk7XG4gICAgICAgIC8vIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmRzSGVpZ2h0ID0gZWxlbWVudHMuZ2FtZWJvYXJkQ29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgZWxlbWVudHMudHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtnYW1lYm9hcmRzSGVpZ2h0ICsgMzV9cHhgO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEFscGhhYmV0ID0ge1xuICAgICAgICAxOiAnQScsXG4gICAgICAgIDI6ICdCJyxcbiAgICAgICAgMzogJ0MnLFxuICAgICAgICA0OiAnRCcsXG4gICAgICAgIDU6ICdFJyxcbiAgICAgICAgNjogJ0YnLFxuICAgICAgICA3OiAnRycsXG4gICAgICAgIDg6ICdIJyxcbiAgICAgICAgOTogJ0knLFxuICAgICAgICAxMDogJ0onXG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVHcmlkcyA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc05hbWUgPSAnZ3JpZCBsZWZ0JztcbiAgICAgICAgXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NOYW1lID0gJ2dyaWQgcmlnaHQnO1xuXG4gICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkID0gcGxheWVyQm9hcmQ7XG4gICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQgPSBjb21wdXRlckJvYXJkO1xuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQuZGF0YXNldC5ncmlkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBtYWtlR3JpZFNxdWFyZXMocGxheWVyQm9hcmQsIGZhbHNlKTtcbiAgICAgICAgbWFrZUdyaWRTcXVhcmVzKGNvbXB1dGVyQm9hcmQsIHRydWUpO1xuXG4gICAgICAgIGVsZW1lbnRzLmdhbWVib2FyZENvbnRhaW5lci5hcHBlbmQocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCgpO1xuICAgICAgICAgICAgZWxlbWVudHMudHJhbnNpdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlmdC1kb3duJyk7XG4gICAgICAgIH0sMzApO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0VHJhbnNpdGlvbkNvbnRhaW5lclRvcCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVTaGlwRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLW1haW4tY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwcyA9IGNyZWF0b3IubXVsdGlwbGVFbGVtZW50cygnZGl2JywgNCk7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsNCwzLDJdO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXAsIGkpID0+IHtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5sZW5ndGggPSBzaGlwTGVuZ3Roc1tpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NOYW1lID0gJ3NoaXAtZWxlbWVudCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChgbGVuZ3RoLSR7c2hpcC5kYXRhc2V0Lmxlbmd0aH1gKTtcbiAgICAgICAgICAgIHNoaXBFbGVtZW50QXJlYS5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICAgICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcblxuICAgICAgICAgICAgLy9nZW5lcmF0ZSBkZXRhaWxzIHRvIHBsYWNlIG9uIHRoZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5kYXRhc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGV0YWlsLmNsYXNzTmFtZSA9ICdkZXRhaWwnO1xuICAgICAgICAgICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlU2hpcFJvdGF0aW9uQ29udHJvbHMgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHNoaXBTdWJDb250YWluZXIgPSBjcmVhdG9yLm9uZUVsZW1lbnQoJ3NoaXAtc3ViLWNvbnRhaW5lcicsICdkaXYnKTtcblxuICAgICAgICBjb25zdCBzaGlwcyA9IHNoaXBNYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWVsZW1lbnQnKTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwKTtcblxuICAgICAgICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGNyZWF0b3Iub25lRWxlbWVudCgnc2hpcC1lbGVtZW50LWNvbnRhaW5lcicsICdkaXYnKTtcbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgICAgIHNoaXBTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGNyZWF0b3Iub25lRWxlbWVudCgncm90YXRlLWJ1dHRvbicsICdpbWcnKTtcbiAgICAgICAgICAgIHJvdGF0ZUJ1dHRvbi5zcmMgPSBlbGVtZW50cy5yb3RhdGU7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc2hpcCk7XG4gICAgICAgICAgICAgICAgY2hhbmdlT3JpZW50YXRpb24oc2hpcCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwU3ViQ29udGFpbmVyKTtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3JlYXRlTW9kYWwgPSAob3B0aW9ucywgY29udGVudEFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gY3JlYXRvci5vbmVFbGVtZW50KCdtb2RhbCcsICdkaXYnKTtcbiAgICAgICAgZWxlbWVudHMubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0b3Iub25lRWxlbWVudCgnb3ZlcmxheScsICdkaXYnKTtcblxuICAgICAgICBpZiAob3B0aW9ucy50eXBlID09PSAnUnVsZXMnKSB7XG5cbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3J1bGVzJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJ1bGVMaXN0ID0gY3JlYXRlTGlzdCgnb2wnLCBjb250ZW50QXJyYXksIG9wdGlvbnMudHlwZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnNyYyA9IGVsZW1lbnRzLmNsb3NlO1xuICAgICAgICAgICAgY2xvc2VJY29uLmNsYXNzTmFtZSA9ICdjbG9zZS1pY29uJztcbiAgICBcbiAgICAgICAgICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbW9kYWwuYXBwZW5kKHJ1bGVMaXN0LCBjbG9zZUljb24pO1xuXG4gICAgICAgICAgICByZXR1cm4geyBtb2RhbCwgb3ZlcmxheSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy50eXBlID09PSAnZ2FtZU92ZXInKSB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aW5uZXIgPT09ICdQbGF5ZXInKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0SGVhZGluZy50ZXh0Q29udGVudCA9ICdZb3Ugd29uISc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGhlIGNvbXB1dGVyIHdvbiEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHJlc3VsdFBhcmEudGV4dENvbnRlbnQgPSBjb250ZW50QXJyYXlbMF07XG5cblxuICAgICAgICAgICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gY3JlYXRvci5vbmVFbGVtZW50KCdwbGF5LWFnYWluJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcblxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kKHJlc3VsdEhlYWRpbmcsIHJlc3VsdFBhcmEsIHBsYXlBZ2FpbkJ1dHRvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB7IG1vZGFsLCBvdmVybGF5LCBwbGF5QWdhaW5CdXR0b24gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTGlzdCA9IChsaXN0VHlwZSwgbGlzdEl0ZW1zLCBsaXN0SGVhZGluZykgPT4ge1xuICAgICAgICBjb25zdCBteUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUeXBlKTtcblxuICAgICAgICBpZiAobGlzdEhlYWRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGxpc3RIZWFkaW5nO1xuICAgICAgICAgICAgbXlMaXN0LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGlzdEl0ZW1UZXh0IG9mIGxpc3RJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBsaXN0SXRlbVRleHQ7XG4gICAgICAgICAgICBteUxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbXlMaXN0O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9IChtb2RhbCkgPT4ge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGFwcGx5Um90YXRpb24gPSAoc2hpcEVsZW1lbnQpID0+IHtcblxuICAgICAgICBpZiAoc2hpcEVsZW1lbnQuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUnVsZXNCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50cy5idXR0b25Db250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlR3JpZHNBbmRIZWFkaW5nID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudHMucGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIHNldERlZmF1bHRDb250YWluZXJTaXplKCk7XG4gICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgZWxlbWVudHMuY29tcHV0ZXJCb2FyZC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZWxlbWVudHMucGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZW1vdmVSdWxlc0J1dHRvbigpO1xuICAgICAgICAvLyBlbGVtZW50cy5idXR0b25Db250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZUNlbGxzID0gKCkgPT4ge1xuXG4gICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgZWxlbWVudHMucGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcblxuICAgICAgICBjb25zdCBlbmFibGVkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG4gICAgICAgIGVuYWJsZWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVuYWJsZUNlbGxzID0gKCkgPT4ge1xuXG4gICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgZWxlbWVudHMucGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcblxuICAgICAgICBjb25zdCBkaXNhYmxlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpO1xuXG4gICAgICAgIGRpc2FibGVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UGxheWVyT3V0bGluZSA9IChpc1BsYXllcnNUdXJuKSA9PiB7XG4gICAgICAgIGlmIChpc1BsYXllcnNUdXJuKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnc29saWQgM3B4IHJlZCc7XG4gICAgICAgICAgICBlbGVtZW50cy5jb21wdXRlckJvYXJkLnN0eWxlLmJvcmRlciA9ICczcHggdHJhbnNwYXJlbnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudHMuY29tcHV0ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnc29saWQgM3B4IGdyZWVuJztcbiAgICAgICAgICAgIGVsZW1lbnRzLnBsYXllckJvYXJkLnN0eWxlLmJvcmRlciA9ICczcHggdHJhbnNwYXJlbnQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlZWNoQnViYmxlVGV4dCA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5TcGVlY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1tZXNzYWdlJyk7XG4gICAgICAgIGNhcHRhaW5TcGVlY2gudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgc3BlZWQgPSA1MDtcbiAgICAgICAgY29uc3QgdHlwZVdyaXRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpIDwgbWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYXB0YWluU3BlZWNoLnRleHRDb250ZW50ICs9IG1lc3NhZ2UuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIDUwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW5HYW1lU3R5bGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbi1wcm9ncmVzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0R2FtZVN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgZWxlbWVudHMuc3RhcnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW4tcHJvZ3Jlc3MnKTtcblxuICAgICAgICBlbGVtZW50cy5wbGF5ZXJCb2FyZC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuXG4gICAgICAgIGVuYWJsZUNlbGxzKCk7XG5cblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25FbGVtZW50UmVtb3ZhbCA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVtb3ZlR3JpZHNBbmRIZWFkaW5nLCBjdXJyZW50UGxheWVyT3V0bGluZSwgZW5hYmxlQ2VsbHMsIGRpc2FibGVDZWxscywgc3BlZWNoQnViYmxlVGV4dCwgcmVzZXRHYW1lU3R5bGVzLCBnZW5lcmF0ZVNoaXBSb3RhdGlvbkNvbnRyb2xzLGFwcGx5Um90YXRpb24sIHRyYW5zaXRpb25FbGVtZW50UmVtb3ZhbCwgaW5pdGlhbGl6ZU1haW5EaXNwbGF5LCBpbml0aWFsaXplQ2FwdGFpblBpY2tlciwgcmVtb3ZlQ2FwdGFpblBpY2tlciwgc2V0TWFpbkdyaWRUb1BsYXllciwgc2V0TWFpbkdyaWRUb0NvbXB1dGVyLCBzZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0LCByZW1vdmVTaGlwQ29udGFpbmVySGVpZ2h0LCBnZXRDYXB0YWluSW1hZ2VzLCBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGNyZWF0ZU1vZGFsLCBlbGVtZW50cywgcmVtb3ZlUnVsZXNCdXR0b24gfVxufSIsImltcG9ydCByb3RhdGUgZnJvbSAnLi4vYXNzZXRzL3JvdGF0ZS5zdmcnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4uL2Fzc2V0cy9jbG9zZS5zdmcnO1xuaW1wb3J0IGluZm9ybWF0aW9uIGZyb20gJy4uL2Fzc2V0cy9pbmZvcm1hdGlvbi5zdmcnO1xuaW1wb3J0IGNhcHRhaW4xIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMS5wbmcnO1xuaW1wb3J0IGNhcHRhaW4yIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMi5wbmcnO1xuaW1wb3J0IGNhcHRhaW4zIGZyb20gJy4uL2Fzc2V0cy9jYXB0YWlucy9jYXB0YWluMy5wbmcnO1xuXG5leHBvcnQgY29uc3QgTXlFbGVtZW50cyA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgcGxheWVyQ2VsbHM7XG4gICAgbGV0IGNvbXB1dGVyQ2VsbHM7XG5cbiAgICBsZXQgcGxheWVyQm9hcmQ7XG4gICAgbGV0IGNvbXB1dGVyQm9hcmQ7XG5cbiAgICBsZXQgY2FwdGFpbkF2YXRhcjtcblxuICAgIGxldCBtb2RhbDtcblxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb250YWluZXInKTtcbiAgICBjb25zdCBzaGlwTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLW1haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jb250YWluZXInKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllckNlbGxzLFxuICAgICAgICBjb21wdXRlckNlbGxzLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgY29tcHV0ZXJCb2FyZCxcbiAgICAgICAgc3RhcnRCdXR0b24sXG4gICAgICAgIGdhbWVib2FyZENvbnRhaW5lcixcbiAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lcixcbiAgICAgICAgc2hpcE1haW5Db250YWluZXIsXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgcm90YXRlLFxuICAgICAgICBjbG9zZSxcbiAgICAgICAgaW5mb3JtYXRpb24sXG4gICAgICAgIGNhcHRhaW4xLFxuICAgICAgICBjYXB0YWluMixcbiAgICAgICAgY2FwdGFpbjMsXG4gICAgICAgIGNhcHRhaW5BdmF0YXIsXG4gICAgICAgIG1vZGFsXG4gICAgfVxufSIsImltcG9ydCB7IERPTUludGVyZmFjZSB9IGZyb20gXCIuL0RPTSBIZWxwZXIgTW9kdWxlcy9ET01IZWxwZXJcIjtcbmltcG9ydCB7IEF2YXRhclJlc3BvbnNlcyB9IGZyb20gXCIuL3Jlc3BvbnNlc1wiO1xuXG5leHBvcnQgY29uc3QgVmlldyA9ICgpID0+IHtcblxuICAgIGNvbnN0IERPTSA9IERPTUludGVyZmFjZSgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gQXZhdGFyUmVzcG9uc2VzKCk7XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJBbmRDb21wdXRlckNlbGxzID0gKCkgPT4ge1xuICAgICAgICBET00uZWxlbWVudHMucGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl0nKTtcbiAgICAgICAgRE9NLmVsZW1lbnRzLmNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wbGF5ZXI9XCJjb21wdXRlclwiXScpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uQ2VsbENsaWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBET00uZWxlbWVudHMuY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUudGFyZ2V0LmRhdGFzZXQueHlQb3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGxheWVySGl0U3RhdGUgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBET00uc3BlZWNoQnViYmxlVGV4dChyZXNwb25zZS5wbGF5ZXJIaXRSZXNwb25zZSgpKTtcbiAgICAgICAgc2V0SGl0KGNvb3JkaW5hdGUsIHRydWUpO1xuICAgICAgICBjb21wdXRlclZpZXdVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQbGF5ZXJNaXNzU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllclZpZXdVcGRhdGUoKTtcbiAgICAgICAgRE9NLnNwZWVjaEJ1YmJsZVRleHQocmVzcG9uc2UuY29tcHV0ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgIERPTS5zZXRNYWluR3JpZFRvUGxheWVyKCk7XG4gICAgICAgIGhpZGVDYXB0YWluQXZhdGFyKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGl0ID0gKGNvb3JkaW5hdGUsIGlzUGxheWVyKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzUGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtcGxheWVyPVwiY29tcHV0ZXJcIl1bZGF0YS14eS1wb3M9XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjay1tYXJrZXInKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtaGl0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb29yZGluYXRlID0gY29vcmRpbmF0ZS5qb2luKCcnKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1wbGF5ZXI9XCJwbGF5ZXJcIl1bZGF0YS14eS1wb3M9XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjay1tYXJrZXInKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwLWhpdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kUnVsZU1vZGFsID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGluZm9CdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW5mb0J1dHRvbi5zcmMgPSBET00uZWxlbWVudHMuaW5mb3JtYXRpb247XG4gICAgICAgIGluZm9CdXR0b24uY2xhc3NOYW1lID0gJ3J1bGVzLWljb24nO1xuICAgICAgICBET00uZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9CdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsT2JqID0gRE9NLmNyZWF0ZU1vZGFsKHtcbiAgICAgICAgICAgIHR5cGU6ICdSdWxlcydcbiAgICAgICAgfSwgW1xuICAgICAgICAgICAgJ1BsYWNlIHlvdXIgc2hpcHMgYnkgY2xpY2tpbmcgYW5kIGRyYWdnaW5nIHRoZW0gb250byB5b3VyIGdyaWQsIHlvdSBjYW4gdXNlIHRoZSByb3RhdGlvbiBpY29uIHRvIHN3aXRjaCBiZXR3ZWVuIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsJyxcbiAgICAgICAgICAgICdZb3UgY2FuIGF0dGFjayBieSBjbGlja2luZyBhbnkgc3F1YXJlIG9uIHRoZSBvcHBvbmVudHMgZ3JpZCwgeW91ciBnb2FsIGlzIHRvIGhpdCB0aGVpciBzaGlwcyEnLFxuICAgICAgICAgICAgJ0FmdGVyIHlvdSBtYWtlIHlvdXIgYXR0YWNrIGl0IHdpbGwgYmUgdGhlIGNvbXB1dGVycyB0dXJuJyxcbiAgICAgICAgICAgICdJZiBlaXRoZXIgeW91IG9yIHRoZSBjb21wdXRlciBoaXQgYSBzaGlwLCB0aGF0IHNwb3Qgd2lsbCBiZSBtYXJrZWQgYWNjb3JkaW5nbHkgYW5kIHdpbGwgZ2VuZXJhdGUgYW4gZXh0cmEgdHVybiBmb3IgdGhlIHBsYXllciB3aG8gaGl0IGEgc2hpcC4gTWFrZSB0aGF0IG1vdmUgY291bnQhJyxcbiAgICAgICAgICAgICdZb3VyIGdvYWwgaXMgdG8gc2luayBhbGwgb2YgdGhlaXIgc2hpcHMsIGdvb2QgbHVjayEnXG4gICAgICAgIF0pO1xuXG4gICAgICAgIERPTS5lbGVtZW50cy5nYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxPYmoub3ZlcmxheSk7XG4gICAgICAgIERPTS5lbGVtZW50cy5nYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxPYmoubW9kYWwpO1xuXG4gICAgICAgIGluZm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBET00ub3Blbk1vZGFsKG1vZGFsT2JqLm1vZGFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kR2FtZU92ZXJNb2RhbCA9IChnYW1lV2lubmVyLCBjYWxsYmFjaykgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsT2JqID0gRE9NLmNyZWF0ZU1vZGFsKHtcbiAgICAgICAgICAgIHR5cGU6ICdnYW1lT3ZlcicsXG4gICAgICAgICAgICB3aW5uZXI6IGdhbWVXaW5uZXJcbiAgICAgICAgfSwgW1xuICAgICAgICAgICAgJ1RoYW5rcyBmb3IgcGxheWluZyEgWW91IGNhbiBjbGljayB0aGUgYnV0dG9uIGJlbG93IGFuZCB0cnkgeW91ciBsdWNrIGFnYWluc3QgdGhlIGNvbXB1dGVyIG9uZSBtb3JlIHRpbWUhJ1xuICAgICAgICBdKTtcblxuICAgICAgICBtb2RhbE9iai5wbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgICAgIERPTS5lbGVtZW50cy5nYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxPYmoub3ZlcmxheSk7XG4gICAgICAgIERPTS5lbGVtZW50cy5nYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxPYmoubW9kYWwpO1xuXG4gICAgICAgIERPTS5vcGVuTW9kYWwobW9kYWxPYmoubW9kYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlDYXB0YWluQXZhdGFyID0gKGNhcHRhaW4pID0+IHtcblxuICAgICAgICBjb25zdCBjYXB0YWluQXZhdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgY2FwdGFpbk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FwdGFpbk1lc3NhZ2UuY2xhc3NOYW1lID0gJ2NhcHRhaW4tbWVzc2FnZSc7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGNhcHRhaW5JbWFnZS5zcmMgPSBET00uZ2V0Q2FwdGFpbkltYWdlcygpW2NhcHRhaW5dO1xuICAgICAgICBjYXB0YWluSW1hZ2UuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIGNhcHRhaW5JbWFnZS5jbGFzc05hbWUgPSAnY2FwdGFpbi1pbWFnZSc7XG5cbiAgICAgICAgY2FwdGFpbkF2YXRhci5hcHBlbmQoY2FwdGFpbkltYWdlLCBjYXB0YWluTWVzc2FnZSk7XG4gICAgICAgIGNhcHRhaW5BdmF0YXIuY2xhc3NOYW1lID0gJ2NhcHRhaW4tYm9hcmQtYXZhdGFyJztcbiAgICAgICAgRE9NLmVsZW1lbnRzLmNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2FwdGFpbkF2YXRhcik7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUNhcHRhaW5BdmF0YXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5BdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGFpbi1ib2FyZC1hdmF0YXInKTtcblxuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5hZGQoJ21vdmUtcG9zaXRpb24nKTtcbiAgICAgICAgLy8gY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93Q2FwdGFpbkF2YXRhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FwdGFpbkF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0YWluLWJvYXJkLWF2YXRhcicpO1xuICAgICAgICBjYXB0YWluQXZhdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUtcG9zaXRpb24nKTtcbiAgICAgICAgLy8gY2FwdGFpbkF2YXRhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRIb3Jpem9udGFsU2hpcEhvdmVyID0gKGRyYWdnZWRTaGlwLCBjdXJyZW50Q2VsbCwgdG9SZW1vdmVIb3ZlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZHJhZ2dlZFNoaXAuZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgWWJvYXJkUG9zaXRpb24gPSBOdW1iZXIoY3VycmVudENlbGwuZGF0YXNldC54eVBvc1swXSk7XG4gICAgICAgICAgICBjb25zdCBYYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzFdKSArIGk7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJveFtkYXRhLXBsYXllcj1cInBsYXllclwiXVtkYXRhLXh5LXBvcz1cIiR7WWJvYXJkUG9zaXRpb259JHtYYm9hcmRQb3NpdGlvbn1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgICAgICAgdG9SZW1vdmVIb3ZlciA/IHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKVxuICAgICAgICAgICAgICAgIDogdGlsZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VmVydGljYWxTaGlwSG92ZXIgPSAoZHJhZ2dlZFNoaXAsIGN1cnJlbnRDZWxsLCB0b1JlbW92ZUhvdmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxkcmFnZ2VkU2hpcC5kYXRhc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBZYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzBdKSArIGk7XG4gICAgICAgICAgICBjb25zdCBYYm9hcmRQb3NpdGlvbiA9IE51bWJlcihjdXJyZW50Q2VsbC5kYXRhc2V0Lnh5UG9zWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm94W2RhdGEtcGxheWVyPVwicGxheWVyXCJdW2RhdGEteHktcG9zPVwiJHtZYm9hcmRQb3NpdGlvbn0ke1hib2FyZFBvc2l0aW9ufVwiXWApO1xuICAgICAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgICAgICB0b1JlbW92ZUhvdmVyID8gdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpXG4gICAgICAgICAgICAgICAgOiB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGRyYWdBbmREcm9wU2hpcHMgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtZWxlbWVudCcpO1xuICAgICAgICBsZXQgZHJhZ2dlZFNoaXA7XG5cbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBFbGVtZW50cykge1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIC8vIGRyYWdnZWRTaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZHJhZ2dlZFNoaXAucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIERPTS5lbGVtZW50cy5wbGF5ZXJDZWxscykge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmVydGljYWxTaGlwSG92ZXIoZHJhZ2dlZFNoaXAsIGNlbGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZFNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNoaXBIb3ZlcihkcmFnZ2VkU2hpcCwgY2VsbCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIERPTS5lbGVtZW50cy5wbGF5ZXJDZWxscykge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIGRyYWdnZWRTaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBkcmFnZ2VkU2hpcC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZHJhZ2dlZFNoaXAsIGUudGFyZ2V0LmRhdGFzZXQueHlQb3MpO1xuICAgICAgICAgICAgICAgIERPTS5lbGVtZW50cy5wbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJykpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3dlIHdhbnQgdG8gdXBkYXRlIG9uZSBib2FyZCBhdCBhIHRpbWUsIGp1c3QgcGFzcyBpbiB0aGUgYm9hcmQgd2Ugd2FudCB0byB1cGRhdGUgYXQgdGhhdCBwb2ludC4gTm8gcG9pbnQgaW4gdXBkYXRpbmcgYm90aC4gV2UgY2FuIGhhdmUgYSBib29sIHZhbHVlIHRoYXQgY2hlY2tzIGlmIGl0cyBhIGNvbXB1dGVyIGJvYXJkIG9yIG5vdC5cbiAgICBjb25zdCB1cGRhdGVCb2FyZCA9IChib2FyZCwgaXNDb21wdXRlckJvYXJkKSA9PiB7XG5cbiAgICAgICAgc2V0UGxheWVyQW5kQ29tcHV0ZXJDZWxscygpO1xuICAgICAgICBsZXQgYm9hcmRDZWxscztcblxuICAgICAgICBpZiAoaXNDb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgICBib2FyZENlbGxzID0gRE9NLmVsZW1lbnRzLmNvbXB1dGVyQ2VsbHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZENlbGxzID0gRE9NLmVsZW1lbnRzLnBsYXllckNlbGxzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGJvYXJkQ2VsbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHh5ID0gY2VsbC5kYXRhc2V0Lnh5UG9zO1xuICAgICAgICAgICAgaWYgKGJvYXJkW3h5WzBdXVt4eVsxXV0gPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5jbGFzc05hbWUgPSAnYXR0YWNrLW1hcmtlcic7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ29tcHV0ZXJCb2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlUG9zaXRpb25PbkJvYXJkID0gKGJvYXJkLCB4eSwgaXNDb21wdXRlckJvYXJkKSA9PiB7XG4gICAgICAgIGxldCBjZWxsO1xuICAgICAgICBpZiAoaXNDb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiY29tcHV0ZXJcIl1bZGF0YS14eS1wb3M9XCIke3h5fVwiXWApO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwicGxheWVyXCJdW2RhdGEteHktcG9zPVwiJHt4eX1cIl1gKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZFt4eVswXV1beHlbMV1dID09PSAneCcpIHtcbiAgICAgICAgICAgIGlmICghY2VsbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBtYXJrZXIuY2xhc3NOYW1lID0gJ2F0dGFjay1tYXJrZXInO1xuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeHlbMF1dW3h5WzFdXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICghaXNDb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllclZpZXdVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5kaXNhYmxlQ2VsbHMoKTtcbiAgICAgICAgRE9NLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKHRydWUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlclZpZXdVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5lbmFibGVDZWxscygpO1xuICAgICAgICBET00uY3VycmVudFBsYXllck91dGxpbmUoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGFsZXJ0V2lubmVyID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBhbGVydChgUGxheWVyICR7d2lubmVyfSBoYXMgd29uIHRoZSBtYXRjaCFgKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBET00sIHJlc3BvbnNlLCBvbkNlbGxDbGljaywgdXBkYXRlQm9hcmQsIGFsZXJ0V2lubmVyLCBwbGF5ZXJWaWV3VXBkYXRlLCBjb21wdXRlclZpZXdVcGRhdGUsIGRyYWdBbmREcm9wU2hpcHMsIHNldFBsYXllckFuZENvbXB1dGVyQ2VsbHMsIHNldEhpdCwgZGlzcGxheUNhcHRhaW5BdmF0YXIsIGhpZGVDYXB0YWluQXZhdGFyLCBzaG93Q2FwdGFpbkF2YXRhciwgaGFuZGxlUGxheWVySGl0U3RhdGUsIGhhbmRsZVBsYXllck1pc3NTdGF0ZSwgYXBwZW5kUnVsZU1vZGFsLCBhcHBlbmRHYW1lT3Zlck1vZGFsLCB1cGRhdGVQb3NpdGlvbk9uQm9hcmQgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlQ29tcHV0ZXJTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRTaGlwUG9zaXRpb25zID0gZ2V0VmFsaWRTaGlwUGxhY2VtZW50cygpO1xuXG4gICAgICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkU2hpcFBvc2l0aW9ucy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZhbGlkU2hpcFBvc2l0aW9uc1tyYW5kb21QbGFjZW1lbnRdO1xuXG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICAgICAgaWYgKGNhblBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgcmFuZG9tT3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICBwbGFjZVNoaXAoc2hpcCwgcG9zaXRpb24sIHJhbmRvbU9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwKHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhblBsYWNlU2hpcCA9IChzaGlwLCBwb3NpdGlvbiwgaXNWZXJ0aWNhbCkgPT4ge1xuXG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICBpZiAoKHBvc2l0aW9uWzBdIC0gMSkgKyBzaGlwLmxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZG9lcyBub3QgZml0IG9uIHRoZSBib2FyZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3Bvc2l0aW9uWzBdICsgaV1bcG9zaXRpb25bMV1dID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6IFNoaXAgZXhpc3RzIGluIHRoaXMgcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgocG9zaXRpb25bMV0gLSAxKSArIHNoaXAubGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBTaGlwIGRvZXMgbm90IGZpdCBvbiB0aGUgYm9hcmQnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXSArIGldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogU2hpcCBleGlzdHMgaW4gdGhpcyBwb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dICE9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcy5sZW5ndGggPj0gNDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgICAgICBhcnIuZmlsbCgnJyk7XG4gICAgICAgICAgICBib2FyZC5wdXNoKGFycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gICAgY29uc3QgZ2V0VmFsaWRBdHRhY2tzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSAhPT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKFtpLGpdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKFtpLGpdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmRpbmF0ZSwgaXNWZXJ0aWNhbCkgPT4ge1xuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgc2hpcC5zZXRTaGlwRGlyZWN0aW9uKCdWZXJ0aWNhbCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZGluYXRlWzBdICsgaV1bY29vcmRpbmF0ZVsxXV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zZXRTaGlwRGlyZWN0aW9uKCdIb3Jpem9udGFsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV0gKyBpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIC8vIGxldCBsYXN0SGl0ID0gbnVsbDtcbiAgICBsZXQgbGFzdEhpdCA9IHtcbiAgICAgICAgc2hpcDogbnVsbCxcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMYXN0SGl0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGFzdEhpdDtcbiAgICB9XG5cbiAgICBjb25zdCBpc1ZhbGlkQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVbMF0gPD0gOSAmJiBjb29yZGluYXRlWzFdIDw9IDkpIHtcblxuICAgICAgICAgICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogT3V0IG9mIGJvdW5kcyBhdHRhY2snKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZEl0ZW0gPSBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXTtcblxuICAgICAgICAgICAgaWYgKGJvYXJkSXRlbSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBtaXNzZWRTaG90c1tjb29yZGluYXRlWzBdXS5wdXNoKGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgICAgIC8vIGxhc3RIaXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RIaXRbJ3NoaXAnXSA9IG51bGw7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkSXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBib2FyZEl0ZW0uaGl0KCk7XG4gICAgICAgICAgICAgICAgbGFzdEhpdFsnc2hpcCddID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICAvLyBsYXN0SGl0ID0gJ3NoaXAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9ICd4JztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IG1pc3NlZFNob3RzID0gW1xuICAgICAgICBbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXVxuICAgIF1cblxuICAgIGNvbnN0IGdldE1pc3NlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1pc3NlZFNob3RzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuXG4gICAgZmlsbEJvYXJkKGJvYXJkKTtcbiAgICBcbiAgICByZXR1cm4geyBnZXRCb2FyZCwgcGxhY2VTaGlwLCByZWNpZXZlQXR0YWNrLCBnZXRNaXNzZXMsIGdldFNoaXBzLCBhbGxTaGlwc1N1bmssIGdldFZhbGlkQXR0YWNrcywgZ2V0VmFsaWRTaGlwUGxhY2VtZW50cywgZ2V0TGFzdEhpdCwgYWxsU2hpcHNQbGFjZWQsIHBsYWNlQ29tcHV0ZXJTaGlwLCBjYW5QbGFjZVNoaXAsIGlzVmFsaWRBdHRhY2sgfVxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL2dhbWVTdGF0ZSc7XG5pbXBvcnQgeyBnYW1lSW5pdEhlbHBlciB9IGZyb20gJy4vZ2FtZVN0YXRlJztcbmltcG9ydCB7IEF1ZGlvU2V0dXAgfSBmcm9tICcuL0F1ZGlvIE1vZHVsZXMvYXVkaW9DcmVhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBnYW1lQ29udHJvbGxlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IHZpZXcgPSBWaWV3KCk7XG4gICAgbGV0IGdhbWUgPSBHYW1lU3RhdGUoKTtcbiAgICBjb25zdCBhdWRpb1NldHVwID0gQXVkaW9TZXR1cCgpO1xuICAgIGNvbnN0IGdhbWVIZWxwZXIgPSBnYW1lSW5pdEhlbHBlcigpO1xuXG4gICAgbGV0IGdhbWVTdGFydGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwbGF5R2FtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lU3RhcnRlZCkge1xuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRhaW5DaG9pY2UgPSBhd2FpdCBpbml0aWFsaXplQ2FwdGFpblBpY2tlcigpO1xuICAgICAgICBhd2FpdCB2aWV3LkRPTS5zZXROZXdTaGlwQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIFxuICAgICAgICB2aWV3LkRPTS5pbml0aWFsaXplTWFpbkRpc3BsYXkoKTtcbiAgICAgICAgdmlldy5hcHBlbmRSdWxlTW9kYWwoKTtcbiAgICAgICAgYXVkaW9TZXR1cC5nZW5lcmF0ZUF1ZGlvRmlsZXMoKTtcbiAgICAgICAgYXVkaW9TZXR1cC5sb29wQmFja2dyb3VuZFNvdW5kKCk7XG4gICAgICAgIHZpZXcuRE9NLnNldE1haW5HcmlkVG9QbGF5ZXIoKTtcbiAgICAgICAgdmlldy5ET00uZ2VuZXJhdGVTaGlwUm90YXRpb25Db250cm9scygoc2hpcEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHZpZXcuRE9NLmFwcGx5Um90YXRpb24oc2hpcEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5kaXNwbGF5Q2FwdGFpbkF2YXRhcihjYXB0YWluQ2hvaWNlKTtcbiAgICAgICAgdmlldy5ET00uc3BlZWNoQnViYmxlVGV4dCh2aWV3LnJlc3BvbnNlLnNoaXBQbGFjZW1lbnRSZXNwb25zZSgpKTtcbiAgICAgICAgdmlldy5oaWRlQ2FwdGFpbkF2YXRhcigpO1xuICAgICAgICB2aWV3LnNldFBsYXllckFuZENvbXB1dGVyQ2VsbHMoKTtcblxuICAgICAgICBnYW1lLnBsYWNlQWxsQ29tcHV0ZXJTaGlwcygpO1xuXG4gICAgICAgIGF3YWl0IHNoaXBQbGFjZW1lbnRIYW5kbGVyKCk7XG4gICAgICAgIHZpZXcub25DZWxsQ2xpY2soZ2FtZUxvb3ApO1xuICAgICAgICAvLyB2aWV3LmRyYWdBbmREcm9wU2hpcHMoKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgLy8gICAgIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCBjb29yZGluYXRlKTtcblxuICAgICAgICAvLyAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQoKTtcblxuICAgICAgICAvLyAgICAgICAgIHZpZXcuRE9NSGVscGVyLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgICAgICAvLyAgICAgICAgIHZpZXcuc2hvd0NhcHRhaW5BdmF0YXIoKTtcbiAgICAgICAgLy8gICAgICAgICB2aWV3LkRPTUhlbHBlci5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy5ET01IZWxwZXIuc3BlZWNoQnViYmxlVGV4dCh2aWV3LkRPTUhlbHBlci5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgIC8vICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgdHJ1ZSlcblxuICAgICAgICAvLyAgICAgICAgIHZpZXcub25DZWxsQ2xpY2socGxheVJvdW5kKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdmlldy5kcmFnQW5kRHJvcFNoaXBzKChzaGlwLCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGUpO1xuXG4gICAgICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NLnJlbW92ZVNoaXBDb250YWluZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTS5zZXRNYWluR3JpZFRvQ29tcHV0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LkRPTS5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuRE9NLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5wbGF5ZXJUdXJuUmVzcG9uc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpemVDYXB0YWluUGlja2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgdmlldy5ET00uaW5pdGlhbGl6ZUNhcHRhaW5QaWNrZXIoYXN5bmMgY2FwdGFpbkNob2ljZSA9PiB7XG4gICAgICAgICAgICBnYW1lLnNldFBsYXllckNhcHRhaW4oY2FwdGFpbkNob2ljZSk7XG4gICAgICAgICAgICB2aWV3LkRPTS5yZW1vdmVDYXB0YWluUGlja2VyKCk7XG4gICAgICAgICAgICByZXNvbHZlKGNhcHRhaW5DaG9pY2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lTG9vcCA9IGFzeW5jIChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmICghY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBBdHRhY2sgYWxyZWFkeSBwbGFjZWRgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZ2FtZS5jb21wdXRlckJvYXJkLmlzVmFsaWRBdHRhY2soY29vcmRpbmF0ZSkpIHJldHVybjtcblxuICAgICAgICB2aWV3LkRPTS5kaXNhYmxlQ2VsbHMoKTsgIFxuICAgICAgICBnYW1lLnBsYXllci5hdHRhY2soW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dKTtcblxuXG4gICAgICAgIGNvbnN0IGlzYVdpbm5lciA9IGdhbWUuY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgICAgaWYgKGlzYVdpbm5lcikge1xuICAgICAgICAgICAgdmlldy5ET00ucmVtb3ZlUnVsZXNCdXR0b24oKTtcbiAgICAgICAgICAgIHZpZXcuYXBwZW5kR2FtZU92ZXJNb2RhbChpc2FXaW5uZXIsIHJlc2V0R2FtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2FtZS5jb21wdXRlckJvYXJkLmdldExhc3RIaXQoKVsnc2hpcCddKSB7XG4gICAgICAgICAgICBhdWRpb1NldHVwLnBsYXlSYW5kb21IaXRTb3VuZCgpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lLndhaXRGb3JTb3VuZCk7XG4gICAgICAgICAgICB2aWV3LnVwZGF0ZVBvc2l0aW9uT25Cb2FyZChnYW1lLmNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSwgY29vcmRpbmF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3LmhhbmRsZVBsYXllckhpdFN0YXRlKGNvb3JkaW5hdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tTWlzc1NvdW5kKClcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU291bmQpO1xuICAgICAgICAgICAgdmlldy51cGRhdGVQb3NpdGlvbk9uQm9hcmQoZ2FtZS5jb21wdXRlckJvYXJkLmdldEJvYXJkKCksIGNvb3JkaW5hdGUsIHRydWUpO1xuICAgICAgICAgICAgdmlldy5ET00uc3BlZWNoQnViYmxlVGV4dCh2aWV3LnJlc3BvbnNlLnBsYXllck1pc3NSZXNwb25zZSgpKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU3BlZWNoKTtcbiAgICAgICAgICAgIHZpZXcuaGFuZGxlUGxheWVyTWlzc1N0YXRlKCk7XG4gICAgICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUud2FpdEJldHdlZW5UdXJucyk7XG4gICAgICAgICAgICBoYW5kbGVDb21wdXRlclR1cm4oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVDb21wdXRlclR1cm4gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGF0dGFja1Bvc2l0aW9uO1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRMYXN0SGl0KClbJ3NoaXAnXSkge1xuICAgICAgICAgICAgYXR0YWNrUG9zaXRpb24gPSBnYW1lLmNvbXB1dGVyLmF0dGFja0FkamFjZW50Q2VsbChnYW1lLnBsYXllckJvYXJkLmdldExhc3RIaXQoKVsnc2hpcCddKTsgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dGFja1Bvc2l0aW9uID0gZ2FtZS5jb21wdXRlci5hdHRhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGdhbWUuY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgICAgaWYgKHdpbm5lcikge1xuICAgICAgICAgICAgdmlldy5ET00ucmVtb3ZlUnVsZXNCdXR0b24oKTtcbiAgICAgICAgICAgIHZpZXcuYXBwZW5kR2FtZU92ZXJNb2RhbCh3aW5uZXIsIHJlc2V0R2FtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5nZXRMYXN0SGl0KClbJ3NoaXAnXSkge1xuICAgICAgICAgICAgYXVkaW9TZXR1cC5wbGF5UmFuZG9tSGl0U291bmQoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU291bmQpO1xuICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuc2V0SGl0KGF0dGFja1Bvc2l0aW9uLGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuRE9NLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5jb21wdXRlclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU3BlZWNoKTtcbiAgICAgICAgICAgIHZpZXcuRE9NLmN1cnJlbnRQbGF5ZXJPdXRsaW5lKHRydWUpO1xuICAgICAgICAgICAgaGFuZGxlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdWRpb1NldHVwLnBsYXlSYW5kb21NaXNzU291bmQoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU291bmQpO1xuICAgICAgICAgICAgdmlldy51cGRhdGVCb2FyZChnYW1lLnBsYXllckJvYXJkLmdldEJvYXJkKCksIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXcuRE9NLnNwZWVjaEJ1YmJsZVRleHQodmlldy5yZXNwb25zZS5jb21wdXRlck1pc3NSZXNwb25zZSgpKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZS53YWl0Rm9yU3BlZWNoKTsgXG4gICAgICAgICAgICB2aWV3LkRPTS5jdXJyZW50UGxheWVyT3V0bGluZShmYWxzZSk7XG4gICAgICAgICAgICB2aWV3LkRPTS5lbmFibGVDZWxscygpO1xuICAgICAgICAgICAgdmlldy5ET00uc3BlZWNoQnViYmxlVGV4dCh2aWV3LnJlc3BvbnNlLnBsYXllclR1cm5SZXNwb25zZSgpKTtcbiAgICAgICAgICAgIHZpZXcuRE9NLnNldE1haW5HcmlkVG9Db21wdXRlcigpO1xuICAgICAgICAgICAgdmlldy5zaG93Q2FwdGFpbkF2YXRhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tTaGlwUGxhY2VtZW50ID0gKHNoaXAsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlDb29yZGluYXRlID0gWytjb29yZGluYXRlWzBdLCArY29vcmRpbmF0ZVsxXV07XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSArc2hpcC5kYXRhc2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IGdhbWVIZWxwZXIubWFrZVNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckJvYXJkLmNhblBsYWNlU2hpcChuZXdTaGlwLCBhcnJheUNvb3JkaW5hdGUsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5ET00udHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsKHNoaXAucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBDYW5ub3QgcGxhY2Ugc2hpcCB0aGVyZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyQm9hcmQuY2FuUGxhY2VTaGlwKG5ld1NoaXAsIGFycmF5Q29vcmRpbmF0ZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllckJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBhcnJheUNvb3JkaW5hdGUsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5ET00udHJhbnNpdGlvbkVsZW1lbnRSZW1vdmFsKHNoaXAucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBDYW5ub3QgcGxhY2Ugc2hpcCB0aGVyZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXlUaW1lID0ge1xuICAgICAgICB3YWl0Rm9yU3BlZWNoOiAyMDAwLFxuICAgICAgICB3YWl0Rm9yU291bmQ6IDIwMDAsXG4gICAgICAgIHdhaXRCZXR3ZWVuVHVybnM6IDIzMDBcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGdhbWUgPSBHYW1lU3RhdGUoKTtcbiAgICAgICAgdmlldy5ET00ucmVtb3ZlR3JpZHNBbmRIZWFkaW5nKCk7XG4gICAgICAgIHZpZXcuRE9NLnJlc2V0R2FtZVN0eWxlcygpO1xuICAgICAgICB2aWV3LkRPTS5jbG9zZU1vZGFsKHZpZXcuRE9NLmVsZW1lbnRzLm1vZGFsKTtcbiAgICB9XG5cbiAgICB2aWV3LkRPTS5lbGVtZW50cy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlHYW1lKTtcbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcE1vZHVsZVwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWVJbml0SGVscGVyID0gKCkgPT4ge1xuXG4gICAgLy8gY29uc3QgcGxhY2VUZXN0U2hpcHMgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCg1KSwgWzQsMV0pO1xuICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChTaGlwKDQpLCBbNyw0XSk7XG4gICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFNoaXAoMyksIFsyLDJdKTtcbiAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgyKSwgWzgsN10pO1xuXG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDUpLCBbMiwzXSk7XG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDQpLCBbMSwxXSk7XG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDMpLCBbOSw1XSk7XG4gICAgLy8gICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChTaGlwKDIpLCBbMyw3XSk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgbWFrZVNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBzaGlwO1xuICAgIH1cblxuICAgIHJldHVybiB7IG1ha2VTaGlwIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdhbWVTdGF0ZSA9ICgpID0+IHtcblxuICAgIGxldCBjdXJyZW50UGxheWVyO1xuXG4gICAgbGV0IHBsYXllckNhcHRhaW4gPSBudWxsO1xuXG4gICAgY29uc3QgcGxheWVySGFzQ2FwdGFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllckNhcHRhaW4gPT09IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGxheWVyQ2FwdGFpbiA9IChjYXB0YWluKSA9PiB7XG4gICAgICAgIHBsYXllckNhcHRhaW4gPSBjYXB0YWluO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBsYXllckNhcHRhaW4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJDYXB0YWluO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIFxuICAgIGxldCBwbGF5ZXIgPSBQbGF5ZXIoJ1BsYXllcicsIGNvbXB1dGVyQm9hcmQsIGZhbHNlKTtcbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgcGxheWVyQm9hcmQsIHRydWUpXG5cbiAgICBjb25zdCBwbGFjZUFsbENvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg1KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCg0KSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgzKSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXAoU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyLmdldE5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5nZXROYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgcGxheWVyLCBjb21wdXRlciwgY2hlY2tGb3JXaW5uZXIsIHBsYWNlQWxsQ29tcHV0ZXJTaGlwcywgY3VycmVudFBsYXllciwgcGxheWVySGFzQ2FwdGFpbiwgc2V0UGxheWVyQ2FwdGFpbiwgZ2V0UGxheWVyQ2FwdGFpbiB9XG59IiwiXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIG9wcG9uZW50Qm9hcmQsIGlzQ1BVID0gZmFsc2UpID0+IHtcbi8vZmFjdG9yeSBmb3Igb3VyIGRpZmZlcmVudCBwbGF5ZXJzIChpbiB0aGUgY2FzZSBvZiB0aGlzIGdhbWUgaXQgd291bGQgYmUgdGhlIHBsYXllciBhbmQgdGhlIGNvbXB1dGVyKSB3b3VsZCB0YWtlIGEgbmFtZSwgYW5kIHRoZSBvcHBvc2luZyBwbGF5ZXJzIGJvYXJkLiBTbyBpZiB3ZSBtYWtlIGEgcGxheWVyIGl0IHdvdWxkIHRha2UgaW4gdGhlIGNvbXB1dGVycyBib2FyZC5cblxuICAgIGNvbnN0IGNhY3VsYXRpb25SYW5kb21Qb3NpdGlvbiA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB2YWxpZFBvc2l0aW9ucyA9IG9wcG9uZW50Qm9hcmQuZ2V0VmFsaWRBdHRhY2tzKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmFsaWRQb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRQb3NpdGlvbnMubGVuZ3RoKV07XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZUFkamFjZW50UG9zaXRpb24gPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAvL3kgY29vcmRpbmF0ZSBmaXJzdCwgdGhlbiB4XG4gICAgICAgIGNvbnN0IHZhbGlkUG9zaXRpb25zID0gb3Bwb25lbnRCb2FyZC5nZXRWYWxpZEF0dGFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgYWRqYWNlbnRQb3NpdGlvbnMgPSBbXG4gICAgICAgIC8vICAgICBbY29vcmRpbmF0ZVswXSAtIDEsIGNvb3JkaW5hdGVbMV1dLFxuICAgICAgICAvLyAgICAgW2Nvb3JkaW5hdGVbMF0gKyAxLCBjb29yZGluYXRlWzFdXSxcbiAgICAgICAgLy8gICAgIFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdIC0gMV0sXG4gICAgICAgIC8vICAgICBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSArIDFdLFxuICAgICAgICAvLyBdXG4gICAgICAgIGNvbnN0IGFkamFjZW50UG9zaXRpb25zID0gW1xuICAgICAgICAgICAgW051bWJlcihjb29yZGluYXRlWzBdKSAtIDEsIE51bWJlcihjb29yZGluYXRlWzFdKV0sXG4gICAgICAgICAgICBbTnVtYmVyKGNvb3JkaW5hdGVbMF0pICsgMSwgTnVtYmVyKGNvb3JkaW5hdGVbMV0pXSxcbiAgICAgICAgICAgIFtOdW1iZXIoY29vcmRpbmF0ZVswXSksIE51bWJlcihjb29yZGluYXRlWzFdKSAtIDFdLFxuICAgICAgICAgICAgW051bWJlcihjb29yZGluYXRlWzBdKSwgTnVtYmVyKGNvb3JkaW5hdGVbMV0pICsgMV0sXG4gICAgICAgIF1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYWRqYWNlbnRQb3NpdGlvbnMpXG4gICAgICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IGFkamFjZW50UG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50UG9zaXRpb25zLmxlbmd0aCldO1xuXG4gICAgICAgIGxldCByYW5kb21Qb3NpdGlvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJhbmRvbVBvc2l0aW9uKTtcblxuXG4gICAgICAgIHdoaWxlICghdmFsaWRQb3NpdGlvbnMuc29tZSgodmFsaWRQb3NpdGlvbikgPT4gSlNPTi5zdHJpbmdpZnkodmFsaWRQb3NpdGlvbikgPT09IHJhbmRvbVBvc2l0aW9uU3RyaW5nKSkge1xuICAgICAgICAgICAgcmFuZG9tUG9zaXRpb24gPSBhZGphY2VudFBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGphY2VudFBvc2l0aW9ucy5sZW5ndGgpXTtcblxuICAgICAgICAgICAgcmFuZG9tUG9zaXRpb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyYW5kb21Qb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hpbGUgKCF2YWxpZFBvc2l0aW9ucy5pbmNsdWRlcyhyYW5kb21Qb3NpdGlvbikpIHtcbiAgICAgICAgLy8gICAgIHJhbmRvbVBvc2l0aW9uID0gYWRqYWNlbnRQb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqYWNlbnRQb3NpdGlvbnMubGVuZ3RoKV07XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gICAgICAgIC8vMSBhYm92ZVxuICAgICAgICAvLzEgYmVsb3dcbiAgICAgICAgLy8xIHRvIHRoZSBsZWZ0XG4gICAgICAgIC8vMSB0byB0aGUgcmlnaHRcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoaXNDUFUpIHtcblxuICAgICAgICAgICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjYWN1bGF0aW9uUmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgIG9wcG9uZW50Qm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkaW5hdGUpXG5cbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2tBZGphY2VudENlbGwgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21BZGphY2VudENlbGwgPSBjYWxjdWxhdGVBZGphY2VudFBvc2l0aW9uKGNvb3JkaW5hdGUpO1xuXG4gICAgICAgIG9wcG9uZW50Qm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kb21BZGphY2VudENlbGwpO1xuICAgICAgICByZXR1cm4gcmFuZG9tQWRqYWNlbnRDZWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF0dGFjaywgZ2V0TmFtZSwgYXR0YWNrQWRqYWNlbnRDZWxsIH1cbn0iLCJleHBvcnQgY29uc3QgQXZhdGFyUmVzcG9uc2VzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcGxheWVySGl0UmVzcG9uc2UgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiQnVsbHNleWUhIEdvIGFnYWluIVwiYCxcbiAgICAgICAgICAgIGBcIk5pY2Ugc2hvdCEgRW5lbXkgc2hpcCBoaXQhXCJgLFxuICAgICAgICAgICAgYFwiRGlyZWN0IGhpdCEgTmV4dCBzaG90IVwiYFxuICAgICAgICBdXG4gICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHBsYXllclR1cm5SZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiRmlyZSBhdCB3aWxsIVwiYCxcbiAgICAgICAgICAgIGBcIlRha2UgeW91ciBzaG90IVwiYCxcbiAgICAgICAgICAgIGBcIllvdSBoYXZlIHRoZSBncmVlbiBsaWdodCB0byBhdHRhY2suXCJgLFxuICAgICAgICAgICAgYFwiU2hvdyB0aGUgZW5lbXkgd2hhdCB3ZSdyZSBtYWRlIG9mIVwiYCxcbiAgICAgICAgICAgIGBcIldlJ3JlIGNvdW50aW5nIG9uIHlvdSwgY2FwdGFpbi5cImAsXG4gICAgICAgICAgICBgXCJUaW1lIHRvIG1ha2UgeW91ciBtb3ZlLlwiYFxuICAgICAgICBdXG4gICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNvbXB1dGVyVHVyblJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJUaGUgZW5lbXkgaXMgdGFraW5nIHRoZWlyIHNob3QuXCJgLFxuICAgICAgICAgICAgYFwiSXRzIHRoZSBlbmVtaWVzIHR1cm4gdG8gZmlyZS5cImAsXG4gICAgICAgICAgICBgXCJUaGUgZW5lbXkgaXMgYXR0YWNraW5nLlwiYCxcbiAgICAgICAgXVxuICAgIFxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlcy5sZW5ndGgpXVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzaGlwUGxhY2VtZW50UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgIGBcIlBsYWNlIHRoZSBzaGlwcywgQ2FwJ24hXCJgLFxuICAgICAgICAgICAgYFwiQ2FwdGFpbiwgbGV0cyBwbGFjZSBvdXIgZmxlZXQhXCJgLFxuICAgICAgICAgICAgYFwiTGV0J3MgYmVnaW4gcGxhY2luZyBvdXIgc2hpcHMhXCJgLFxuICAgICAgICBdXG4gICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNvbXB1dGVyTWlzc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXG4gICAgICAgICAgICBgXCJBIG1pc3MhXCJgLFxuICAgICAgICAgICAgYFwiRGFtbiwgdGhleSBtaXNzZWQgaXQuXCJgLFxuICAgICAgICAgICAgYFwiVGhhdCdzIGdvb2QgZm9yIHVzLlwiYCxcbiAgICAgICAgICAgIGBcIk5pY2UuLlwiYCxcbiAgICAgICAgICAgIGBcIlBsb3AuLi4gTmljZSBtaXNzLlwiYFxuICAgICAgICBdXG4gICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2VzLmxlbmd0aCldXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHBsYXllck1pc3NSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW1xuICAgICAgICAgICAgYFwiQWgsIHRvbyBiYWQuLlwiYCxcbiAgICAgICAgICAgIGBcIkEgbWlzcyBmb3IgdXMsIGJhZCBsdWNrLi5cImAsXG4gICAgICAgICAgICBgXCJXZSdsbCBoaXQgdGhlbSBuZXh0IHRpbWUuXCJgXG4gICAgICAgIF1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNwb25zZXMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJIaXRSZXNwb25zZSxcbiAgICAgICAgcGxheWVyTWlzc1Jlc3BvbnNlLFxuICAgICAgICBwbGF5ZXJUdXJuUmVzcG9uc2UsXG4gICAgICAgIGNvbXB1dGVyTWlzc1Jlc3BvbnNlLFxuICAgICAgICBjb21wdXRlclR1cm5SZXNwb25zZSxcbiAgICAgICAgc2hpcFBsYWNlbWVudFJlc3BvbnNlXG4gICAgfVxufVxuIiwiLy9zaGlwIGZhY3Rvcnkgc2hvdWxkIGluY2x1ZGUgYSB0eXBlLCB3aGljaCB3ZSBjYW4gZGVmaW5lIGxhdGVyIGZyb20gdGhlIHNoaXAgdGhhdCB0aGUgdXNlciBjbGlja3Mgb24uIFxuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGNvbnN0IHNoaXBMb29rdXAgPSB7XG4gICAgICAgIDU6ICdDYXJyaWVyJyxcbiAgICAgICAgNDogJ0JhdHRsZXNoaXAnLFxuICAgICAgICAzOiAnQ3J1aXNlcicsXG4gICAgICAgIDI6ICdEZXN0cm95ZXInXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHNoaXBMb29rdXBbbGVuZ3RoXTtcbiAgICBcbiAgICBsZXQgc2hpcERpcmVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzZXRTaGlwRGlyZWN0aW9uID0gKGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBzaGlwRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBEaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwRGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGxldCBkYW1hZ2VSZWNpZXZlZCA9IDA7XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGRhbWFnZVJlY2lldmVkKys7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGRhbWFnZVJlY2lldmVkID49IGxlbmd0aDtcbiAgICBcblxuICAgIGNvbnN0IGdldERhbWFnZVJlY2lldmVkID0gKCkgPT4gZGFtYWdlUmVjaWV2ZWQ7XG5cbiAgICByZXR1cm4geyB0eXBlLCBsZW5ndGgsIGdldERhbWFnZVJlY2lldmVkLCBoaXQsIGlzU3Vuaywgc2V0U2hpcERpcmVjdGlvbiwgZ2V0U2hpcERpcmVjdGlvbiB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcblxuZ2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=