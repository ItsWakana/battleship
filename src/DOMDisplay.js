//function to generate the grid
import { game } from "./gameLoop";

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
                        box.dataset.player = game.computer.getName();
                    } else {
                        box.dataset.player = game.player.getName();
                    }
                }
            }
    }

    const generateGrid = () => {

        const leftBoard = document.querySelector('.grid.left');
        const rightBoard = document.querySelector('.grid.right');

        if (leftBoard.dataset.grid === 'false') {
            makeGridSquares(leftBoard, false);
            makeGridSquares(rightBoard, true);
            leftBoard.dataset.grid = 'true';
            rightBoard.dataset.grid = 'true';
        }
    }

    const addListenersToGrid = () => {
        const squares = document.querySelectorAll('.box');

        squares.forEach((square) => {
            square.addEventListener('click', () => {
                //need to make it so the player can only click attack  on the opponents board and not their own. And we also want the computer to be making their attack on the opponents board and not their own.
                const xy = square.dataset.xyPos;
                game.attackTheBoard([xy[0], xy[1]]);
            });
        });
    }

    return { generateGrid, addListenersToGrid }
}

export const DOM = () => {

    const DOMHelper = DOMHelperCreation();

    const setUpGame = () => {
        document.querySelector('.start-game').
            addEventListener('click', () => {
                DOMHelper.generateGrid();
                DOMHelper.addListenersToGrid();
            });
    }

    return { setUpGame }
}
