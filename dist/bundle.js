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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n//for the moment, our gameboard can just be logic. We can represent it as a 2d array of positions and coordinates. The ships available in a particular gameboard should be stored inside some kind of data structure (maybe an array?). We should set some kind of limit for how many ships a board can have, so the user can't add more than the limit.\n\n// import { Ship } from \"./shipModule\";\n\nconst Gameboard = () => {\n    const board = [];\n\n    const ships = [];\n    //we can use a method called 'allShipsSunk' which could use the 'every' array method to loop over this ships array containing all the ships on the gameboard and if all the ships return true for 'isSunk'. We can deduce that all the ships have been sunk and the game can finish.\n\n    const fillBoard = (board) => {\n        for (let i=0; i<10; i++) {\n            const arr = new Array(10);\n            arr.fill('');\n            board.push(arr);\n        }\n    }\n\n    const getBoard = () => board;\n\n    const getValidPositions = () => {\n        const arr = [];\n\n        for (let i=0; i<board.length; i++) {\n            for (let j=0; j<board[i].length; j++) {\n                if (board[i][j] === '') {\n                    arr.push([i,j]);\n                }\n            }\n        }\n        return arr;\n    }\n\n    const placeShip = (ship, coordinate) => {\n    \n        if (board[coordinate[0]][coordinate[1]] !== '') {\n            throw new Error('Ship exists in this position');\n        } \n        if (coordinate[1] + ship.length > 9) {\n            throw new Error('Ship not on the board');\n        }\n\n        for (let i=0; i<ship.length; i++) {\n            board[coordinate[0]][coordinate[1] + i] = ship;\n        }\n\n        ships.push(ship);\n    }\n\n    const recieveAttack = (coordinate) => {\n\n        if (coordinate[0] <= 9 && coordinate[1] <= 9) {\n            const boardItem = board[coordinate[0]][coordinate[1]];\n\n            if (boardItem === '') {\n                missedShots[coordinate[0]].push(coordinate[1]);\n            }\n            if (typeof boardItem === 'object') {\n                boardItem.hit();\n            }\n            if (board[coordinate[0]][coordinate[1]] === 'x') {\n                console.log('Cannot attack same coordinate more than once');\n                // return null;\n                throw new Error('Cannot attack same coordinate more than once');\n            }\n            board[coordinate[0]][coordinate[1]] = 'x';\n        } else {\n            console.log('Attack is not on the board');\n            // return null;\n            throw new Error('Attack is not on the board');\n        }\n        \n        return coordinate;\n    }\n\n    const missedShots = [\n        [],[],[],[],[],[],[],[],[],[]\n    ]\n\n    const getMisses = () => {\n        return missedShots;\n    }\n\n    const getShips = () => {\n        return ships;\n    }\n\n    const allShipsSunk = () => {\n\n        return ships.every((ship) => ship.isSunk());\n    }\n\n    fillBoard(board);\n    \n    return { getBoard, placeShip, recieveAttack, getMisses, getShips, allShipsSunk, getValidPositions }\n}\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shipModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipModule */ \"./src/shipModule.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\n// gameLoop() could be called on a button click like 'start-game'\nconst gameLoop = () => {\n\n    const placeTestShips = (playerBoard, computerBoard) => {\n        computerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(5), [4,1]);\n        computerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(4), [7,4]);\n        computerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(3), [2,2]);\n        computerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(2), [8,7]);\n\n        playerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(5), [2,3]);\n        playerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(4), [1,1]);\n        playerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(3), [9,5]);\n        playerBoard.placeShip((0,_shipModule__WEBPACK_IMPORTED_MODULE_0__.Ship)(2), [3,7]);\n    }\n\n    //initialize boards for a 2-way game\n    //create two player objects for the two players (one person and one computer)\n\n    //create a current turn variable which switches between the both players as they play against each other.\n    \n    //to start with we need ships to be placed on the board, for now we can just place ships at random positions on the board.\n\n    const playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\n    const computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\n\n    const player = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('Ryan', computerBoard, false);\n    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer', playerBoard, true);\n\n    placeTestShips(playerBoard, computerBoard);\n\n    let currentPlayer = player.getName();\n\n    // if current player is not the computer we can use some function to get the input from the player on the coordinate they want to attack, if its the computer we just want to generate a random attack.\n\n\n}\n\ngameLoop();\n\n//# sourceURL=webpack://battleship/./src/main.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\nconst Player = (name, opponentBoard, isCPU = false) => {\n//factory for our different players (in the case of this game it would be the player and the computer) would take a name, and the opposing players board. So if we make a player it would take in the computers board.\n\n    const caculationRandomPosition = () => {\n\n        const validPositions = opponentBoard.getValidPositions();\n        const position = validPositions[Math.floor(Math.random() * validPositions.length)];\n\n        return position;\n    }\n\n    const attack = (coordinate) => {\n        if (isCPU) {\n\n            const randomPosition = caculationRandomPosition();\n            opponentBoard.recieveAttack(randomPosition);\n\n            return randomPosition;\n        }\n        opponentBoard.recieveAttack(coordinate);\n\n    }\n\n    const getName = () => {\n        return name;\n    }\n\n    return { attack, getName }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

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