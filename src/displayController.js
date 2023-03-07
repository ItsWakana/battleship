import { DOMInterface } from "./DOM Helper Modules/DOMHelper";
import { AvatarResponses } from "./responses";

export const View = () => {

    // let playerCells;
    // let computerCells;

    const DOM = DOMInterface();
    // const elements = MyElements();
    const response = AvatarResponses();

    // const startButton = document.querySelector('.start-game');

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

        // const buttonContainer = document.querySelector('.button-container');
        const infoButton = new Image();
        infoButton.src = DOM.elements.information;
        infoButton.className = 'rules-icon';
        DOM.elements.buttonContainer.appendChild(infoButton);

        // const gameBoardContainer = document.querySelector('.gameboards');

        const modalObj = DOM.createModal({
            type: 'Rules'
        })
        DOM.elements.gameboardContainer.appendChild(modalObj.overlay);
        DOM.elements.gameboardContainer.appendChild(modalObj.modal);

        infoButton.addEventListener('click', () => {
            DOM.openModal(modalObj.modal);
        });
    }

    const implementGameOverModal = () => {

    }

    const displayCaptainAvatar = (captain) => {

        const computerBoard = document.querySelector('.grid.right')

        const captainAvatar = document.createElement('div');

        const captainMessage = document.createElement('div');
        captainMessage.className = 'captain-message';
        const captainImage = new Image();

        captainImage.src = DOM.getCaptainImages()[captain];
        console.log(captainImage);
        captainImage.draggable = false;
        captainImage.className = 'captain-image';

        captainAvatar.append(captainImage, captainMessage);
        captainAvatar.className = 'captain-board-avatar';
        computerBoard.appendChild(captainAvatar);
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
    // const updateBoard = (computerBoard, playerBoard) => {

    //     for (const cell of computerCells) {
    //         const xy = cell.dataset.xyPos;
    //         if (computerBoard[xy[0]][xy[1]] === 'x') {
    //             if (!cell.hasChildNodes()) {
    //                 const marker = document.createElement('div');
    //                 marker.className = 'attack-marker';
    //                 cell.appendChild(marker);
    //             }
    //         }

    //         if (typeof computerBoard[xy[0]][xy[1]] === 'object') {
    //             // cell.style.backgroundColor = 'red';
    //         }
    //     }

    //     for (const cell of playerCells) {
    //         const xy = cell.dataset.xyPos;
    //         if (playerBoard[xy[0]][xy[1]] === 'x') {
    //             if (!cell.hasChildNodes()) {
    //                 const marker = document.createElement('div');
    //                 marker.className = 'attack-marker';
    //                 cell.appendChild(marker);
    //             }  
    //         }

    //         if (typeof playerBoard[xy[0]][xy[1]] === 'object') {
    //             // const ship = playerBoard[xy[0]][xy[1]];
    //             // const shipSquare = document.createElement('div');

    //             // if (ship.getShipDirection() === 'Horizontal') {
    //             //     shipSquare.className = 'ship-square-horizontal';
    //             // } else if (ship.getShipDirection() === 'Vertical') {
    //             //     shipSquare.className = 'ship-square-vertical';
    //             // }
    //             // cell.appendChild(shipSquare);
    //             cell.classList.add('placed');
    //         }
    //     }
    // }

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

    return { DOM, response, onCellClick, updateBoard, alertWinner, playerViewUpdate, computerViewUpdate, dragAndDropShips, setPlayerAndComputerCells, setHit, displayCaptainAvatar, hideCaptainAvatar, showCaptainAvatar, handlePlayerHitState, handlePlayerMissState, appendRuleModal, implementGameOverModal }
}
