import './style.css';
import { View } from "./displayController";
import { GameState } from './gameState';

const gameController = () => {

    const view = View();
    let game = GameState();

    let gameStarted = false;

    const gameLoop = () => {
        if (!gameStarted) {

            let currentPlayer;
            view.DOMHelper.generateGrids();
            view.addListenersToCells( async (coordinate) => {
                try {
                    currentPlayer = game.player.getName();
                    
                    if (currentPlayer !== 'computer') { 
                        view.playerViewUpdate();
                        game.player.attack([coordinate[0], coordinate[1]]);
                        updateGameStateAndView();
                        
                        if (game.computerBoard.getLastHit() === 'ship') { 
                            view.computerViewUpdate();
                            return;
                        }
                        currentPlayer = game.computer.getName();
                    }
                    await delay(2000);

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

                } catch(err) {
                    view.computerViewUpdate();
                }
            });
            gameStarted = true;
        }
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
        setTimeout(() => view.resetDisplay(), 2000);
        view.DOMHelper.removeGrids();
        gameStarted = false;
    }

    view.startButton.addEventListener('click', gameLoop);
}

document.addEventListener('DOMContentLoaded', () => {
    gameController();
});