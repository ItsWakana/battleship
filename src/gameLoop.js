import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";
import { Player } from "./player";

const gameInitHelper = () => {

    const placeTestShips = (playerBoard, computerBoard) => {
        computerBoard.placeShip(Ship(5), [4,1]);
        computerBoard.placeShip(Ship(4), [7,4]);
        computerBoard.placeShip(Ship(3), [2,2]);
        computerBoard.placeShip(Ship(2), [8,7]);

        playerBoard.placeShip(Ship(5), [2,3]);
        playerBoard.placeShip(Ship(4), [1,1]);
        playerBoard.placeShip(Ship(3), [9,5]);
        playerBoard.placeShip(Ship(2), [3,7]);
    }

    return { placeTestShips }
}

export const gameState = () => {

    const gameInit = gameInitHelper();

    //initialize boards for a 2-way game
    //create two player objects for the two players (one person and one computer)

    //create a current turn variable which switches between the both players as they play against each other.
    
    //to start with we need ships to be placed on the board, for now we can just place ships at random positions on the board.

    const playerBoard = Gameboard();
    const computerBoard = Gameboard();

    const player = Player('Ryan', computerBoard, false);
    const computer = Player('Computer', playerBoard, true);

    gameInit.placeTestShips(playerBoard, computerBoard);

    // if current player is not the computer we can use some function to get the input from the player on the coordinate they want to attack, if its the computer we just want to generate a random attack.

    return { playerBoard, computerBoard, player, computer }
}

export const game = gameState();