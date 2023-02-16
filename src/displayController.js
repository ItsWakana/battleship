const DOMHelperCreation = () => {

    const playerBoard = document.querySelector('.grid.left');
    const computerBoard = document.querySelector('.grid.right');
    
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

        makeGridSquares(playerBoard, false);
        makeGridSquares(computerBoard, true);
    }

    const removeGrids = () => {
        
        while (playerBoard.hasChildNodes()) {
            playerBoard.removeChild(playerBoard.lastChild);
        }

        while (computerBoard.hasChildNodes()) {
            computerBoard.removeChild(computerBoard.lastChild);
        }
    }

    const disableCells = () => {
        computerBoard.classList.add('disabled');
        playerBoard.classList.add('disabled');
    }

    const enableCells = () => {
        computerBoard.classList.remove('disabled');
        playerBoard.classList.remove('disabled');
    }

    // const currentPlayerOutline = (currentPlayer) => {
    //     if (currentPlayer === 'computer') {
    //         playerBoard.style.border = 'solid 3px red';
    //         computerBoard.style.border = 'none';
    //         return;
    //     }
    //     computerBoard.style.border = 'solid 3px green';
    //     playerBoard.style.border = 'none';
    // }

    const currentPlayerOutline = (isPlayersTurn) => {
        if (isPlayersTurn) {
            playerBoard.style.border = 'solid 3px red';
            computerBoard.style.border = '3px transparent';
        } else {
            computerBoard.style.border = 'solid 3px green';
            playerBoard.style.border = '3px transparent';
        }
    }

    return { generateGrids, removeGrids, currentPlayerOutline, enableCells, disableCells }
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
                //we want to append something else like an element perhaps a circle to mark an attack, it'll look more visually appealing than an x
            }

            if (typeof computerBoard[xy[0]][xy[1]] === 'object') {
                cell.style.backgroundColor = 'red';
            }
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

    const playerViewUpdate = () => {
        DOMHelper.disableCells();
        DOMHelper.currentPlayerOutline(true);
        
    }

    const computerViewUpdate = () => {
        DOMHelper.enableCells();
        DOMHelper.currentPlayerOutline(false);
    }
    // const updateBoard = (computerBoard, playerBoard) => {
    //     computerCells.forEach((cell) => {
    //         const xy = cell.dataset.xyPos;
    //         if (computerBoard[xy[0]][xy[1]] === 'x') {
    //             cell.textContent = computerBoard[xy[0]][xy[1]];
    //         }

    //         if (typeof computerBoard[xy[0]][xy[1]] === 'object') {
    //             cell.style.backgroundColor = 'red';
    //         }
    //     });

    //     playerCells.forEach((cell) => {
    //         const xy = cell.dataset.xyPos;
    //         if (playerBoard[xy[0]][xy[1]] === 'x') {
    //             setTimeout(() => {
    //                 cell.textContent = playerBoard[xy[0]][xy[1]];  
    //             },1000);
    //         }

    //         if (typeof playerBoard[xy[0]][xy[1]] === 'object') {
    //             cell.style.backgroundColor = 'green';
    //         }
    //     });
    // }

    const alertWinner = (winner) => {
        alert(`Player ${winner} has won the match!`);
    }

    const resetDisplay = () => {
        playerCells.forEach((cell) => {
            cell.textContent = '';
        });

        computerCells.forEach((cell) => cell.textContent = '');
    }

    return { DOMHelper, startButton, addListenersToCells, updateBoard, alertWinner, resetDisplay, playerViewUpdate, computerViewUpdate }
}
