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
    
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();
    
    const player = Player('Ryan', computerBoard, false);
    const computer = Player('Computer', playerBoard, true);

    let currentPlayer = player.getName();

    const changeTurn = () => {
        currentPlayer === player.getName() ? currentPlayer = computer.getName() : currentPlayer = player.getName();
    }

    gameInit.placeTestShips(playerBoard, computerBoard);

    // if current player is not the computer we can use some function to get the input from the player on the coordinate they want to attack, if its the computer we just want to generate a random attack.

    const attackTheBoard = (coordinate) => {
        if (currentPlayer === player.getName()) {
            player.attack(coordinate);
            changeTurn();
        } else {
            computer.attack();
            changeTurn();
        }

    }

    return { playerBoard, computerBoard, player, computer, attackTheBoard }
}

export const game = gameState();