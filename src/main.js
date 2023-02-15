import './style.css';
import { View } from "./displayController";
import { gameState } from './gameState';

const gameController = () => {

    const view = View();
    const game = gameState();

    let isStarted = false;

    const init = () => {
        if (!isStarted) {
            view.DOMHelper.generateGrids();
            view.addListenersToCells((coordinate) => {
                game.playRound([coordinate[0], coordinate[1]]);
                view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());
            });
            isStarted = true;
        }
    }

    view.startButton.addEventListener('click', init);
}

document.addEventListener('DOMContentLoaded', () => {
    // const display = View();
    // gameController(null, display);
    gameController();
});

// const dom = View();

// dom.setUpGame();