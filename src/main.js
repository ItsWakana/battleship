import './style.css';
import { View } from "./displayController";
import { GameState } from './gameState';
import { gameInitHelper } from './gameState';
const gameController = () => {

    const view = View();
    let game = GameState();
    const gameHelper = gameInitHelper();

    let gameStarted = false;

    const gameLoop = () => {
        if (!gameStarted) {
            view.DOMHelper.generateGrids();
            view.DOMHelper.generateShipElements();
            view.DOMHelper.generateShipRotationControls((shipElement) => {
                view.DOMHelper.applyRotation(shipElement);
            });
            view.setPlayerAndComputerCells();

            game.placeAllComputerShips();

            view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

            view.dragAndDropShips((ship, coordinate) => {

                //currently an error with being able to drag the refresh icon onto the board and it seems to place it on the board even  though the refresh icon is set to non-draggable. Thinking this could be because our refresh icon is a child element on the ship element, so it still counts it as draggable.


                //check if the ship is horizontal using the ship elements dataset

                // if ship orientation is horizontal
                // call shipplacement passing in false as its not horizontal.

                //otherwise if its not horizontal we know its vertical, so we can call shipPlacement but pass in true as it must be vertical.
                checkShipPlacement(ship, coordinate);
                view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

                if (game.playerBoard.allShipsPlaced()) {
                    view.DOMHelper.currentPlayerOutline(false);
                    view.DOMHelper.setUserInstruction('Its your turn!');
                    view.onCellClick(playRound);
                }
            });

            gameStarted = true;
        }
    }

    const playRound = async (coordinate) => {
        if (coordinate) {
            if (game.computerBoard.isValidAttack(coordinate)) {    
                executePlayerTurn(coordinate);
                if (game.computerBoard.getLastHit() === 'ship') {
                    view.DOMHelper.setUserInstruction('Its your turn!');
                    view.setHit(coordinate, true);
                    view.computerViewUpdate();
                    return;
                } else {
                    await delay(2000);

                    executeComputerTurn();
                }
            }
        } else {
            console.log('Error: Attack already placed');
        }

    }

    const checkShipPlacement = async (ship, coordinate) => {

        const arrayCoordinate = [+coordinate[0], +coordinate[1]];
        const shipLength = +ship.dataset.length;
        const newShip = gameHelper.makeShip(shipLength);
        
        if (ship.dataset.orientation === 'horizontal') {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, false)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, false);
                // ship.remove();
                ship.parentNode.classList.add('invisible');

                ship.parentNode.addEventListener('transitionend', () => {
                    ship.parentNode.remove();
                });
                // await delay(500);
                // ship.parentNode.remove();
            } else {
                console.log('Error: Cannot place ship there');
                //handle a missplaced ship, user tooltip or error pop up
            }
        } else {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, true)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, true);
                // ship.remove();
                ship.parentNode.classList.add('invisible');

                ship.parentNode.addEventListener('transitionend', () => {
                    ship.parentNode.remove();
                });
                // await delay(500);
                // ship.parentNode.remove();
            } else {
                console.log('Error: Cannot place ship there');
                //handle a missplaced ship, user tooltip or error pop up
            }
        }
    }

    const executePlayerTurn = (coordinate) => {

        game.currentPlayer = game.player.getName();
        view.DOMHelper.setUserInstruction('Computer is attacking!');
        view.playerViewUpdate();

        game.player.attack([coordinate[0], coordinate[1]]);
        updateGameStateAndView();
        game.currentPlayer = game.computer.getName();
         
    }
    
    const executeComputerTurn = async () => {
        view.DOMHelper.currentPlayerOutline(false);
        view.DOMHelper.setUserInstruction('Its your turn!');
        const position = game.computer.attack();
        updateGameStateAndView();

        while (game.playerBoard.getLastHit() === 'ship') {
            view.setHit(position, false);
            view.DOMHelper.setUserInstruction('Computer is attacking!');
            view.DOMHelper.currentPlayerOutline(true);
            await delay(2000);

            game.computer.attack();
            updateGameStateAndView();
            view.computerViewUpdate();
        }
        view.DOMHelper.setUserInstruction('Its your turn!');
        view.DOMHelper.enableCells();
    }

    const delay = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });

    }
    const updateGameStateAndView = () => {
        view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

        const winner = game.checkForWinner();
        if (winner) {
            view.alertWinner(winner);
            resetGame();
            return;
        }
    }

    const resetGame = () => {
        game = GameState();
        view.DOMHelper.removeGrids();
        gameStarted = false;
    }

    view.startButton.addEventListener('click', gameLoop);
}

document.addEventListener('DOMContentLoaded', () => {
    gameController();
});