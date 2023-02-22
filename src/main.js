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
            view.setPlayerAndComputerCells();

            game.placeAllComputerShips();

            view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

            view.dragAndDropShips((ship, coordinate) => {

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

    const checkShipPlacement = (ship, coordinate) => {
        const arrayCoordinate = [+coordinate[0], +coordinate[1]];
        const shipLength = +ship.dataset.length;
        const newShip = gameHelper.makeShip(shipLength);

        if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate)) {
            game.playerBoard.placeShip(newShip, arrayCoordinate);
            ship.remove();
        } else {
            console.log('Error: Cannot place ship there');
            //handle a missplaced ship, user tooltip or error pop up
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