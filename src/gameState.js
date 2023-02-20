import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";
import { Player } from "./player";

export const gameInitHelper = () => {

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
        const ship = Ship(length);
        console.log(ship);
        return ship;
    }

    return { makeShip }
}

export const GameState = () => {

    let currentPlayer;

    // const gameInit = gameInitHelper();
    
    let playerBoard = Gameboard();
    let computerBoard = Gameboard();
    
    let player = Player('Ryan', computerBoard, false);
    let computer = Player('Computer', playerBoard, true)

    // gameInit.placeTestShips(playerBoard, computerBoard);

    const checkForWinner = () => {
        if (playerBoard.allShipsSunk()) {
            return computer.getName();
        }
        if (computerBoard.allShipsSunk()) {
            return player.getName();
        }

        return null;
    }

    return { playerBoard, computerBoard, player, computer, checkForWinner, currentPlayer}
}