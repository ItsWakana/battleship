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

    gameInit.placeTestShips(playerBoard, computerBoard);

    const playRound = (target) => {
        //if player.allShipsSunk or computer.allShipsSunk return 'game over';
        //else
        player.attack(target);
        computer.attack();

    }

    return { playerBoard, computerBoard, player, computer, playRound }
}

// export const game = gameState();