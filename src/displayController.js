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

    let playerCells;
    let computerCells;

    const DOMHelper = DOMHelperCreation();

    const startButton = document.querySelector('.start-game');

    const addListenersToCells = (callback) => {
        computerCells = document.querySelectorAll('[data-player="computer"]');
        playerCells = document.querySelectorAll('[data-player="player"]');

            computerCells.forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    callback(e.target.dataset.xyPos);
                });
            });
    }

    const updateBoard = (computerBoard, playerBoard) => {
        computerCells.forEach((cell) => {
            const xy = cell.dataset.xyPos;
            if (computerBoard[xy[0]][xy[1]] === 'x') {
                cell.textContent = computerBoard[xy[0]][xy[1]];
            }

            // if (typeof computerBoard[xy[0]][xy[1]] === 'object') {
            //     cell.style.backgroundColor = 'red';
            // }
        });

        playerCells.forEach((cell) => {
            const xy = cell.dataset.xyPos;
            if (playerBoard[xy[0]][xy[1]] === 'x') {
                cell.textContent = playerBoard[xy[0]][xy[1]];
            }

            if (typeof playerBoard[xy[0]][xy[1]] === 'object') {
                cell.style.backgroundColor = 'green';
            }
        });

 
    }

    return { DOMHelper, startButton, addListenersToCells, updateBoard }
}
