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

    const generateGrids = () => {

        const playerBoard = document.querySelector('.grid.left');
        const computerBoard = document.querySelector('.grid.right');

        if (playerBoard.dataset.grid === 'false') {
            makeGridSquares(playerBoard, false);
            makeGridSquares(computerBoard, true);
            playerBoard.dataset.grid = 'true';
        }
    }

    return { generateGrids }
}

export const View = () => {

    const DOMHelper = DOMHelperCreation();

    const startButton = document.querySelector('.start-game');

    const addListenersToCells = (callback) => {
        const cells = document.querySelectorAll('[data-player="computer"]');

            cells.forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    callback(e.target.dataset.xyPos);
                });
            });
    }

    const updateBoard = (computerBoard) => {
        const cells = document.querySelectorAll('[data-player="computer"]');
        cells.forEach((cell) => {
            const xy = cell.dataset.xyPos;
            if (computerBoard[xy[0]][xy[1]] === 'x') {
                cell.textContent = computerBoard[xy[0]][xy[1]];
            }
        });
        console.log(computerBoard)
    }

    return { DOMHelper, startButton, addListenersToCells, updateBoard }
}
