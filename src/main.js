import './style.css';
import { View } from "./displayController";
import { gameState } from './gameState';

const gameController = () => {

    const view = View();

    view.startButton.addEventListener('click', () => {
        view.DOMHelper.generateGrid();
        view.addListenersToCells((cell) => game.player.attack(cell));
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
    // const display = View();
    // gameController(null, display);
    gameController();
});

// const dom = View();

// dom.setUpGame();