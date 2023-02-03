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

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n//for the moment, our gameboard can just be logic. We can represent it as a 2d array of positions and coordinates. The ships available in a particular gameboard should be stored inside some kind of data structure (maybe an array?). We should set some kind of limit for how many ships a board can have, so the user can't add more than the limit.\n\n// import { Ship } from \"./shipModule\";\n\n//we could then have a placeShip() method that calls the ship factory, and creates a ship and places it at a coordinate that we pass into it. \n\n//we will also need a recieve attack method, so that our board can register if an attack on the board has hit a ship or not & send that hit to the correct ship. If the hit is a miss we'll need to record that miss coordinate in some way (maybe adding an 'x' in the 2d array gameboard so we know its a miss).\n\nconst Gameboard = () => {\n    const board = [];\n\n    const fillBoard = (board) => {\n        for (let i=0; i<10; i++) {\n            const arr = new Array(10);\n            arr.fill('');\n            board.push(arr);\n        }\n    }\n\n    const getBoard = () => board;\n\n    //place a specific ship at a specific coordinate on the gameboard\n    const placeShip = (ship, coordinate) => {\n    \n        if (board[coordinate[0]][coordinate[1]] !== '') {\n            throw new Error('Ship exists in this position');\n        } \n        if (coordinate[1] + ship.length > 9) {\n            throw new Error('Ship not on the board');\n        }\n\n        for (let i=0; i<ship.length; i++) {\n            board[coordinate[0]][coordinate[1] + i] = ship;\n        }\n\n        return ship;\n\n    }\n\n    const recieveAttack = (coordinate) => {\n        //function should recieve some coordinates as a parameter, and determine if the coordinate has hit a ship on the board or not. We can then mark that position on the board with an 'x' or something similar. \n\n        //we need a way to check if the coordinate is a ship, if it is a ship we need to call the hit method on it.\n        \n        //need a way of recording the coordinates of missed shots, so i'll have to set up a test for this.\n\n        if (coordinate[0] <= 9 && coordinate[1] <= 9) {\n            const boardItem = board[coordinate[0]][coordinate[1]];\n\n            if (typeof boardItem === 'object') {\n                boardItem.hit();\n            }\n            //valid coordinate\n            if (board[coordinate[0]][coordinate[1]] === 'x') {\n                throw new Error('Cannot attack same coordinate more than once');\n            }\n            board[coordinate[0]][coordinate[1]] = 'x';\n        } else {\n            throw new Error('Attack is not on the board');\n        } \n    }\n    fillBoard(board);\n    \n    return { getBoard, placeShip, recieveAttack }\n}\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shipModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipModule */ \"./src/shipModule.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n//We want a factory function for creating the ships that our players will use, this factory would have properties on it like the type of ship, size/length of the ship. We want methods in this ship factory that allow for the ships to take damage, for example in the instance that a ship gets clicked on, we want to add a hit counter to it. This ship and its data would be an object.\n\n//the factory should also have a method on it to check if the players ship is sunk. This would be a boolean value that checks the number of hits it has recieved against the length of the ship. \n\n\n\n\nconst playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\n\nplayerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(4), [0,2]);\nplayerBoard.recieveAttack([0,3]);\nplayerBoard.recieveAttack([0,2]);\nconsole.log(playerBoard.getBoard());\nconsole.log(playerBoard.getBoard()[0][4].getDamageRecieved());\n\n//# sourceURL=webpack://battleship/./src/main.js?");

/***/ }),

/***/ "./src/shipModule.js":
/*!***************************!*\
  !*** ./src/shipModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n//ship factory should include a type, which we can define later from the ship that the user clicks on. \n\nconst Ship = (length) => {\n\n    const shipLookup = {\n        5: 'Carrier',\n        4: 'Battleship',\n        3: 'Cruiser',\n        2: 'Destroyer'\n    }\n\n    const type = shipLookup[length];\n    \n    let damageRecieved = 0;\n\n    const hit = () => {\n        damageRecieved++;\n    }\n    const isSunk = () => damageRecieved >= length;\n    \n\n    const getDamageRecieved = () => damageRecieved;\n\n    return { type, length, getDamageRecieved, hit, isSunk }\n}\n\n//# sourceURL=webpack://battleship/./src/shipModule.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;