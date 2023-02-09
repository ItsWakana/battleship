import './style.css';
import { startGame } from "./gameLoop";
import { DOM } from "./DOMDisplay";

const dom = DOM();

document.querySelector('.start-game')
    .addEventListener('click', () => {
        dom.generateGrid();
    });
// startGame();