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
            //add listeners to each of the ship elements that the player can pick from. Ship elements need attributes on them telling us the length/values of the ship they have picked. 

            //when they drop the ship over a spot on the grid, we need to grab the coordinate of the square it was dropped on and call our game.playerBoard.placeShip() passing in that coordinate and the correct ship length.

            // view.DOMHelper.generateShips();

            //place ships at the bottom, which will allow the user to click a ship and drag it into a position on the board.

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
            // if (game.playerBoard.allShipsPlaced()) {
            //     view.onCellClick(playRound);
            // }
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
        // setTimeout(() => view.resetDisplay(), 2000);
        view.DOMHelper.removeGrids();
        gameStarted = false;
    }

    view.startButton.addEventListener('click', gameLoop);
}

document.addEventListener('DOMContentLoaded', () => {
    gameController();
});