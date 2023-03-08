import { DOMInterface } from "./DOM Helper Modules/DOMHelper";
import { AvatarResponses } from "./responses";

export const View = () => {

    const DOM = DOMInterface();
    const response = AvatarResponses();

    const setPlayerAndComputerCells = () => {
        DOM.elements.playerCells = document.querySelectorAll('[data-player="player"]');
        DOM.elements.computerCells = document.querySelectorAll('[data-player="computer"]');
    }

    const onCellClick = (callback) => {
            DOM.elements.computerCells.forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    callback(e.target.dataset.xyPos);
                });
            });
    }

    const handlePlayerHitState = (coordinate) => {
        DOM.speechBubbleText(response.playerHitResponse());
        setHit(coordinate, true);
        computerViewUpdate();
    }

    const handlePlayerMissState = () => {
        playerViewUpdate();
        DOM.speechBubbleText(response.computerTurnResponse());
        DOM.setMainGridToPlayer();
        hideCaptainAvatar();
    }

    const setHit = (coordinate, isPlayer) => {

        if (isPlayer) {
            const element = document.querySelector(
                `[data-player="computer"][data-xy-pos="${coordinate}"]`);
            const child = element.querySelector('.attack-marker');
            child.classList.add('computer-ship-hit');
        } else {
            coordinate = coordinate.join('');
            const element = document.querySelector(
                `[data-player="player"][data-xy-pos="${coordinate}"]`);
            const child = element.querySelector('.attack-marker');
            child.classList.add('player-ship-hit');
        }
    }

    const appendRuleModal = () => {

        const infoButton = new Image();
        infoButton.src = DOM.elements.information;
        infoButton.className = 'rules-icon';
        DOM.elements.buttonContainer.appendChild(infoButton);

        const modalObj = DOM.createModal({
            type: 'Rules'
        }, [
            'Place your ships by clicking and dragging them onto your grid, you can use the rotation icon to switch between vertical and horizontal',
            'You can attack by clicking any square on the opponents grid, your goal is to hit their ships!',
            'After you make your attack it will be the computers turn',
            'If either you or the computer hit a ship, that spot will be marked accordingly and will generate an extra turn for the player who hit a ship. Make that move count!',
            'Your goal is to sink all of their ships, good luck!'
        ]);

        DOM.elements.gameboardContainer.appendChild(modalObj.overlay);
        DOM.elements.gameboardContainer.appendChild(modalObj.modal);

        infoButton.addEventListener('click', () => {
            DOM.openModal(modalObj.modal);
        });
    }

    const appendGameOverModal = (gameWinner, callback) => {

        const modalObj = DOM.createModal({
            type: 'gameOver',
            winner: gameWinner
        }, [
            'Thanks for playing! You can click the button below and try your luck against the computer one more time!'
        ]);

        modalObj.playAgainButton.addEventListener('click', callback);
        DOM.elements.gameboardContainer.appendChild(modalObj.overlay);
        DOM.elements.gameboardContainer.appendChild(modalObj.modal);

        DOM.openModal(modalObj.modal);
    }

    const displayCaptainAvatar = (captain) => {

        const captainAvatar = document.createElement('div');

        const captainMessage = document.createElement('div');
        captainMessage.className = 'captain-message';
        const captainImage = new Image();

        captainImage.src = DOM.getCaptainImages()[captain];
        captainImage.draggable = false;
        captainImage.className = 'captain-image';

        captainAvatar.append(captainImage, captainMessage);
        captainAvatar.className = 'captain-board-avatar';
        DOM.elements.computerBoard.appendChild(captainAvatar);
    }

    const hideCaptainAvatar = () => {
        const captainAvatar = document.querySelector('.captain-board-avatar');

        captainAvatar.classList.add('move-position');
        // captainAvatar.classList.add('invisible');
    }

    const showCaptainAvatar = () => {
        const captainAvatar = document.querySelector('.captain-board-avatar');
        captainAvatar.classList.remove('move-position');
        // captainAvatar.classList.remove('invisible');
    }

    const setHorizontalShipHover = (draggedShip, currentCell, toRemoveHover) => {
        for (let i=0; i<draggedShip.dataset.length; i++) {
            const YboardPosition = Number(currentCell.dataset.xyPos[0]);
            const XboardPosition = Number(currentCell.dataset.xyPos[1]) + i;
            const tile = document.querySelector(`.box[data-player="player"][data-xy-pos="${YboardPosition}${XboardPosition}"]`);
            if (tile) {
                toRemoveHover ? tile.classList.remove('hover')
                : tile.classList.add('hover');
            }
        }
    }

    const setVerticalShipHover = (draggedShip, currentCell, toRemoveHover) => {
        for (let i=0; i<draggedShip.dataset.length; i++) {
            const YboardPosition = Number(currentCell.dataset.xyPos[0]) + i;
            const XboardPosition = Number(currentCell.dataset.xyPos[1]);
            const tile = document.querySelector(`.box[data-player="player"][data-xy-pos="${YboardPosition}${XboardPosition}"]`);
            if (tile) {
                toRemoveHover ? tile.classList.remove('hover')
                : tile.classList.add('hover');
            }
        }
    }


    const dragAndDropShips = (callback) => {
        const shipElements = document.querySelectorAll('.ship-element');
        let draggedShip;

        for (const ship of shipElements) {
            ship.addEventListener('dragstart', () => {
                draggedShip = ship;
                // draggedShip.parentNode.classList.add('hidden');
            });


            // ship.addEventListener('dragend', () => {
            //     draggedShip.parentNode.classList.remove('hidden');
            // });
        }

        for (const cell of DOM.elements.playerCells) {
            cell.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            cell.addEventListener('dragenter', () => {
                if (draggedShip.dataset.orientation === 'horizontal') {
                    setHorizontalShipHover(draggedShip, cell, false)
                } else {
                    setVerticalShipHover(draggedShip, cell, false)
                }
            });

            cell.addEventListener('dragleave', () => {
                
                if (draggedShip.dataset.orientation === 'horizontal') {

                    setHorizontalShipHover(draggedShip, cell, true)
                } else {
                    setVerticalShipHover(draggedShip, cell, true)
                }
            });
        }        

        for (const cell of DOM.elements.playerCells) {
            cell.addEventListener('drop', (e) => {

                // draggedShip.addEventListener('dragend', (e) => {
                //     draggedShip.parentNode.classList.add('hidden');
                // });

                callback(draggedShip, e.target.dataset.xyPos);
                DOM.elements.playerCells.forEach((cell) => cell.classList.remove('hover'))
            });
        }
    }
    //we want to update one board at a time, just pass in the board we want to update at that point. No point in updating both. We can have a bool value that checks if its a computer board or not.
    const updateBoard = (board, isComputerBoard) => {

        setPlayerAndComputerCells();
        let boardCells;

        if (isComputerBoard) {
            boardCells = DOM.elements.computerCells;
        } else {
            boardCells = DOM.elements.playerCells;
        }

        for (const cell of boardCells) {
            const xy = cell.dataset.xyPos;
            if (board[xy[0]][xy[1]] === 'x') {
                if (!cell.hasChildNodes()) {
                    const marker = document.createElement('div');
                    marker.className = 'attack-marker';
                    cell.appendChild(marker);
                }
            }

            if (typeof board[xy[0]][xy[1]] === 'object') {
                if (!isComputerBoard) {
                    cell.classList.add('placed');
                } else {
                    cell.style.backgroundColor = 'red';
                }
            }
        }
    }

    const updatePositionOnBoard = (board, xy, isComputerBoard) => {
        let cell;
        if (isComputerBoard) {
            cell = document.querySelector(`[data-player="computer"][data-xy-pos="${xy}"]`);

        } else {
            cell = document.querySelector(`[data-player="player"][data-xy-pos="${xy}"]`);

        }
        if (board[xy[0]][xy[1]] === 'x') {
            if (!cell.hasChildNodes()) {
                const marker = document.createElement('div');
                marker.className = 'attack-marker';
                cell.appendChild(marker);
            }
        }

        if (typeof board[xy[0]][xy[1]] === 'object') {
            if (!isComputerBoard) {
                cell.classList.add('placed');
            } else {
                cell.style.backgroundColor = 'red';
            }
        }
    }

    const playerViewUpdate = () => {
        DOM.disableCells();
        DOM.currentPlayerOutline(true);
        
    }

    const computerViewUpdate = () => {
        DOM.enableCells();
        DOM.currentPlayerOutline(false);
    }

    const alertWinner = (winner) => {
        alert(`Player ${winner} has won the match!`);
    }

    return { DOM, response, onCellClick, updateBoard, alertWinner, playerViewUpdate, computerViewUpdate, dragAndDropShips, setPlayerAndComputerCells, setHit, displayCaptainAvatar, hideCaptainAvatar, showCaptainAvatar, handlePlayerHitState, handlePlayerMissState, appendRuleModal, appendGameOverModal, updatePositionOnBoard }
}
