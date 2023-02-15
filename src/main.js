import './style.css';
import { View } from "./displayController";
import { GameState } from './gameState';

const gameController = () => {

    const view = View();
    let game = GameState();

    let gameStarted = false;

    const playGame = () => {
        if (!gameStarted) {

            let currentPlayer;
            
            view.DOMHelper.generateGrids();
            view.addListenersToCells((coordinate) => {
                currentPlayer = game.player.getName();
                if (currentPlayer !== 'computer') {
                    view.DOMHelper.currentPlayerOutline(true);
                    game.player.attack([coordinate[0], coordinate[1]]);
                    currentPlayer = game.computer.getName();
                    view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());
                }

                setTimeout(() => {
                    view.DOMHelper.currentPlayerOutline(false);
                    game.computer.attack();
                    // game.playRound([coordinate[0], coordinate[1]]);
                    view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());
                }, 1000);

                // view.DOMHelper.currentPlayerOutline(false);
                // game.computer.attack();
                // // game.playRound([coordinate[0], coordinate[1]]);
                // view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

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
        game = GameState();
        setTimeout(() => view.resetDisplay(), 2000);
        view.DOMHelper.removeGrids();
        gameStarted = false;
    }

    view.startButton.addEventListener('click', playGame);
}

document.addEventListener('DOMContentLoaded', () => {
    gameController();
});