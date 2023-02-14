//function to generate the grid
import { gameState } from "./gameState";

const DOMHelperCreation = () => {

    const makeGridSquares = (container, isCompGrid) => {
            for (let i=0; i<10; i++) {
                const row = document.createElement('div');
                row.className = 'row';
                container.appendChild(row);
    
                for (let j=0; j<10; j++) {
                    const box = document.createElement('div');
                    box.className = 'box';
                    row.appendChild(box);
                    box.dataset.xyPos = `${j}${i}`;
                    if (isCompGrid) {
                        box.dataset.player = 'computer';
                    } else {
                        box.dataset.player = 'player';
                    }
                }
            }
    }

    const generateGrid = () => {

        const playerBoard = document.querySelector('.grid.left');
        const computerBoard = document.querySelector('.grid.right');

        if (playerBoard.dataset.grid === 'false') {
            makeGridSquares(playerBoard, false);
            makeGridSquares(computerBoard, true);
            playerBoard.dataset.grid = 'true';
        }
    }

    return { generateGrid }
}

export const View = () => {

    const DOMHelper = DOMHelperCreation();

    const startButton = document.querySelector('.start-game');

    // const playerCells = document.querySelectorAll('[data-player="player"]');
    // const computerCells = document.querySelectorAll('[data-player="computer"]');


    // const setUpGame = () => {
    //     document.querySelector('.start-game').
    //         addEventListener('click', () => {
    //             game = gameState();
    //             DOMHelper.generateGrid();
    //             addListenersToCells();
    //         });
    // }

    // const addListenersToCells = () => {
    //     const squares = document.querySelectorAll('.box');

    //     squares.forEach((square) => {
    //         square.addEventListener('click', () => {
    //             //need to make it so the player can only click attack  on the opponents board and not their own. And we also want the computer to be making their attack on the opponents board and not their own.
    //             const xy = square.dataset.xyPos;
    //             game.attackTheBoard([xy[0], xy[1]]);
    //         });
    //     });
    // }
    const addListenersToCells = (callback) => {
        const cells = document.querySelectorAll('[data-player="computer"]');


        if (!cells) {
            cells.forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    callback(e);
                });
            });
        }
    }

    return { DOMHelper, startButton, addListenersToCells }
}
