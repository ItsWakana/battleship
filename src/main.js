import './style.css';
import { View } from "./displayController";
import { gameState } from './gameState';

const gameController = () => {

    const view = View();
    let game = gameState();

    let gameStarted = false;

    const playGame = () => {
        if (!gameStarted) {
            view.DOMHelper.generateGrids();
            view.addListenersToCells((coordinate) => {
                game.playRound([coordinate[0], coordinate[1]]);
                view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

                const winner = game.checkForWinner();
                if (winner) {
                    view.alertWinner(winner);
                    resetGame();
                    return;
                }
            });
            gameStarted = true;
        }
    }

    const resetGame = () => {
        game = gameState();
        setTimeout(() => view.resetDisplay(), 2000);
        view.DOMHelper.removeGrids();
        gameStarted = false;
    }

    view.startButton.addEventListener('click', playGame);
}

document.addEventListener('DOMContentLoaded', () => {
    gameController();
});