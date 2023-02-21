const DOMHelperCreation = () => {

    const playerBoard = document.querySelector('.grid.left');
    const computerBoard = document.querySelector('.grid.right');
    
    const makeGridSquares = (container, isCompGrid) => {
            for (let i=0; i<11; i++) {

                const row = document.createElement('div');
                row.className = 'row';
                container.appendChild(row);
    
                for (let j=0; j<11; j++) {

                        const box = document.createElement('div');
                        box.className = 'box';
                        row.appendChild(box);
                        box.dataset.xyPos = `${j-1}${i-1}`;
                        if (isCompGrid) {
                            box.dataset.player = 'computer';
                        } else {
                            box.dataset.player = 'player';
                        }
                    
                    if (i === 0) {
                        box.className = 'outer-box';
                        box.dataset.player = null;
                        box.textContent = j;
                    }
                    if (j === 0) {
                        box.className = 'outer-box';
                        box.dataset.player = null;
                        box.textContent = setAlphabet[i];
                    }
                }
            }
    }

    const setAlphabet = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I',
        10: 'J'
    }

    const generateGrids = () => {

        makeGridSquares(playerBoard, false);
        makeGridSquares(computerBoard, true);
    }

    const generateShipElements = () => {
        const shipElementArea = document.querySelector('.ship-container');

        const title = document.createElement('h2');
        title.className = 'user-instruction';
        title.textContent = 'Drag your ships in place!'
        shipElementArea.appendChild(title);

        const carrier = document.createElement('div');
        const battleship = document.createElement('div')
        const cruiser = document.createElement('div');
        const destroyer = document.createElement('div');
        
        carrier.dataset.length = 5;
        battleship.dataset.length = 4;
        cruiser.dataset.length = 3;
        destroyer.dataset.length = 2;
        const shipElements = [carrier,battleship,cruiser,destroyer];
        
        for (const ship of shipElements) {
            ship.className = 'ship-element';
            ship.classList.add(`length-${ship.dataset.length}`);
            shipElementArea.appendChild(ship);
            ship.draggable = 'true';
        }

    }

    const removeGrids = () => {
        
        while (playerBoard.hasChildNodes()) {
            playerBoard.removeChild(playerBoard.lastChild);
        }

        while (computerBoard.hasChildNodes()) {
            computerBoard.removeChild(computerBoard.lastChild);
        }

        const shipContainer = document.querySelector('.ship-container');
        while (shipContainer.hasChildNodes()) {
            shipContainer.removeChild(shipContainer.lastChild);
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

    const currentPlayerOutline = (isPlayersTurn) => {
        if (isPlayersTurn) {
            playerBoard.style.border = 'solid 3px red';
            computerBoard.style.border = '3px transparent';
        } else {
            computerBoard.style.border = 'solid 3px green';
            playerBoard.style.border = '3px transparent';
        }
    }

    const setUserInstruction = (message) => {
        const heading = document.querySelector('.user-instruction');
        heading.textContent = message;
    }

    return { generateGrids, generateShipElements, removeGrids, currentPlayerOutline, enableCells, disableCells, setUserInstruction }
}

export const View = () => {

    let playerCells;
    let computerCells;

    const DOMHelper = DOMHelperCreation();

    const startButton = document.querySelector('.start-game');

    const setPlayerAndComputerCells = () => {
        playerCells = document.querySelectorAll('[data-player="player"]');
        computerCells = document.querySelectorAll('[data-player="computer"]');
    }
    const onCellClick = (callback) => {

            computerCells.forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    callback(e.target.dataset.xyPos);
                });
            });
    }

    const setHit = (coordinate, isPlayer) => {
        // const shipHitMarker = document.createElement('div');
        // shipHitMarker.className = 'ship-hit-marker';

        if (isPlayer) {
            const element = document.querySelector(`[data-player="computer"][data-xy-pos="${coordinate}"]`);
            const child = element.querySelector('.attack-marker');
            child.classList.add('computer-ship-hit');
            // child.appendChild(shipHitMarker);
        } else {
            coordinate = coordinate.join('');
            const element = document.querySelector(`[data-player="player"][data-xy-pos="${coordinate}"]`);
            const child = element.querySelector('.attack-marker');
            child.classList.add('player-ship-hit');
            // child.appendChild(shipHitMarker);
        }
    }
    const dragAndDropShips = (callback) => {
        const shipElements = document.querySelectorAll('.ship-element');
        let draggedShip;
        shipElements.forEach((ship) => {
            ship.addEventListener('dragstart', () => {
                draggedShip = ship;
            });
        });

        playerCells.forEach((cell) => {
            cell.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

        playerCells.forEach((cell) => {
            cell.addEventListener('dragenter', () => {
                cell.classList.add('hover');
            });
        });

        playerCells.forEach((cell) => {
            cell.addEventListener('dragleave', () => {
                cell.classList.remove('hover');
            });
        });

        });
        playerCells.forEach((cell) => {
            cell.addEventListener('drop', (e) => {
                callback(draggedShip, e.target.dataset.xyPos);
            });
        });
    }

    const updateBoard = (computerBoard, playerBoard) => {
        computerCells.forEach((cell) => {
            const xy = cell.dataset.xyPos;
            if (computerBoard[xy[0]][xy[1]] === 'x') {
                // cell.textContent = computerBoard[xy[0]][xy[1]];
                if (!cell.hasChildNodes()) {
                    const marker = document.createElement('div');
                    marker.className = 'attack-marker';
                    cell.appendChild(marker);
                }
            }

            if (typeof computerBoard[xy[0]][xy[1]] === 'object') {
                // cell.style.backgroundColor = 'red';
            }
        });

        playerCells.forEach((cell) => {
            const xy = cell.dataset.xyPos;
            if (playerBoard[xy[0]][xy[1]] === 'x') {
                // cell.textContent = playerBoard[xy[0]][xy[1]];
                if (!cell.hasChildNodes()) {
                    const marker = document.createElement('div');
                    marker.className = 'attack-marker';
                    cell.appendChild(marker);
                }  
            }

            if (typeof playerBoard[xy[0]][xy[1]] === 'object') {
                // cell.style.backgroundColor = 'black';
                cell.classList.add('placed');
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

    const alertWinner = (winner) => {
        alert(`Player ${winner} has won the match!`);
    }

    const resetDisplay = () => {
        playerCells.forEach((cell) => {
            cell.textContent = '';
        });

        computerCells.forEach((cell) => cell.textContent = '');
    }

    return { DOMHelper, startButton, onCellClick, updateBoard, alertWinner, resetDisplay, playerViewUpdate, computerViewUpdate, dragAndDropShips, setPlayerAndComputerCells, setHit }
}
