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

                const arrayCoordinate = [+coordinate[0], +coordinate[1]];
                const shipLength = +ship.dataset.length;
                game.playerBoard.placeShip(gameHelper.makeShip(shipLength), arrayCoordinate);
                ship.remove();
                view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

                if (game.playerBoard.allShipsPlaced()) {
                    view.onCellClick(playRound);
                }
            });
            gameStarted = true;
        }
    }

    const playRound = async (coordinate) => {

        try {
            executePlayerTurn(coordinate);
            if (game.computerBoard.getLastHit() === 'ship') {
                view.computerViewUpdate();
                return;
            } else {
                await delay(2000);

                executeComputerTurn();
            }

        } catch(err) {
            view.computerViewUpdate();
        }
    }

    const setUpShips = () => {

    }
    const executePlayerTurn = (coordinate) => {

        game.currentPlayer = game.player.getName();
            view.playerViewUpdate();
            game.player.attack([coordinate[0], coordinate[1]]);
            updateGameStateAndView();
            game.currentPlayer = game.computer.getName();
    }

    const executeComputerTurn = async () => {
        view.DOMHelper.currentPlayerOutline(false);
        game.computer.attack();
        updateGameStateAndView();

        while (game.playerBoard.getLastHit() === 'ship') {
            view.DOMHelper.currentPlayerOutline(true);
            await delay(2000);

            game.computer.attack();
            updateGameStateAndView();
            view.computerViewUpdate();
        }
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