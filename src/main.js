import './style.css';
import { View } from "./displayController";
import { gameState } from './gameState';

const gameController = (game, view) => {

    view.startButton.addEventListener('click', () => {
        view.DOMHelper.generateGrid();
        // game.startGame();
    });

    // view.playerCells.forEach((cell) => {
    //     cell.addEventListener('click', () => {
    //         let coordinate;
    //         game.player.attack(coordinate);
    //         view.updateBoard(game.computerBoard);
    //     });
    // });
}

document.addEventListener('DOMContentLoaded', () => {
    const display = View();
    gameController(null, display);
});

// const dom = View();

// dom.setUpGame();