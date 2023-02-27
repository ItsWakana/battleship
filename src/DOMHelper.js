import rotate from './assets/rotate.svg';
import { CustomElementCreator } from './DOMCreation';

export const DOMHelperCreation = () => {

    const creator = CustomElementCreator();

    let playerBoard;
    let computerBoard;

    //module for querySelector references

    const mainTopContainer = document.querySelector('.gameboards');
    // const transitionContainer = document.querySelector('.transition-container');

    
    const initializeMainDisplay = () => {

        // generateGrids();
        renderPlayerGrid();
        setInGameStyles();
        generateShipElements();

        window.addEventListener('resize', adjustTransitionContainerSize);
    }

    const initializeCaptainPicker = (callback) => {
        // const mainBoardsContainer = document.querySelector('.gameboards');
        const captainContainer = creator.oneElement('captain-container', 'div');

        const title = document.createElement('h3');
        title.textContent = 'Pick your captain!'
        captainContainer.appendChild(title);
        mainTopContainer.append(captainContainer);

        const transitionContainer = document.querySelector('.transition-container');

        setInGameStyles();

        setTransitionContainerTop();

        transitionContainer.classList.add('shift-down');

        setTimeout(() => {
            captainContainer.classList.add('visible');
        }, 500);

        createCaptains(captainContainer, callback);
    
        window.addEventListener('resize', setTransitionContainerTop);

    }

    const removeCaptainPicker = () => {
        const captainContainer = document.querySelector('.captain-container');

        captainContainer.classList.remove('visible');
        setDefaultContainerSize();

        captainContainer.addEventListener('transitionend', () => {
            captainContainer.remove();
        });

    }

    const createCaptains = (container, callback) => {

        const captainAvatars = creator.oneElement('captain-avatars', 'div');

        const captains = creator.multipleElements('div', 3);
        let counter = 1;
        for (const captain of captains) {
                captain.className = 'captain';
                captain.textContent = `Captain ${counter}`;
                captain.dataset.captain = `Captain ${counter++}`;
                captainAvatars.appendChild(captain);

                captain.addEventListener('click', () => {
                    callback(captain.dataset.captain);
                });
        }

        container.append(captainAvatars);
    }

    const makeGridSquares = (container, isCompGrid) => {
            for (let i=0; i<11; i++) {

                const row = creator.oneElement('row', 'div');
                container.appendChild(row);
    
                for (let j=0; j<11; j++) {

                        const box = creator.oneElement('box', 'div');
                        row.appendChild(box)
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

    const adjustTransitionContainerSize = () => {

        // const mainBoardsContainer = document.querySelector('.gameboards');

        const transitionContainer = document.querySelector('.transition-container');

        const gameboardsHeight = mainTopContainer.offsetHeight;
        transitionContainer.style.top = `${gameboardsHeight + 35}px`;
    }

    const setDefaultContainerSize = () => {
        const transitionContainer = document.querySelector('.transition-container');

        transitionContainer.style.top = '0vh';
    }

    const setTransitionContainerTop = () => {

        // const mainBoardsContainer = document.querySelector('.gameboards');
        const transitionContainer = document.querySelector('.transition-container');

        const gameboardsHeight = mainTopContainer.offsetHeight;
        transitionContainer.style.top = `${gameboardsHeight + 35}px`;
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

    const renderPlayerGrid = () => {

        const transitionContainer = document.querySelector('.transition-container');

        
        playerBoard = document.createElement('div');
        playerBoard.className = 'grid left';
        playerBoard.dataset.grid = false;
        
        makeGridSquares(playerBoard, false);

        mainTopContainer.append(playerBoard);

        setTransitionContainerTop();

        transitionContainer.classList.add('shift-down');

        setTimeout(() => {
            playerBoard.classList.add('visible');
        }, 500);

        window.addEventListener('resize', setTransitionContainerTop);
    }

    const renderComputerGrid = () => {

        const transitionContainer = document.querySelector('.transition-container');

        
        computerBoard = document.createElement('div');
        computerBoard.className = 'grid left';
        computerBoard.dataset.grid = false;
        
        makeGridSquares(computerBoard, true);

        mainTopContainer.append(computerBoard);

        setTransitionContainerTop();

        transitionContainer.classList.add('shift-down');

        setTimeout(() => {
            computerBoard.classList.add('visible');
        }, 500);

        window.addEventListener('resize', setTransitionContainerTop);
    }

    const removeCurrentBoard = () => {
        mainTopContainer.lastChild.remove();
    }

    // const generateGrids = () => {

    //     // const mainBoardsContainer = document.querySelector('.gameboards');

    //     const transitionContainer = document.querySelector('.transition-container');

        
    //     playerBoard = document.createElement('div');
    //     computerBoard = document.createElement('div');
        
    //     playerBoard.className = 'grid left';
        
    //     computerBoard.className = 'grid right';
        
    //     playerBoard.dataset.grid = false;
        
    //     makeGridSquares(playerBoard, false);
    //     makeGridSquares(computerBoard, true);

    //     mainTopContainer.append(playerBoard, computerBoard);

    //     setTransitionContainerTop();

    //     transitionContainer.classList.add('shift-down');

    //     setTimeout(() => {
    //         playerBoard.classList.add('visible');
    //         computerBoard.classList.add('visible');
    //     }, 500);

    //     window.addEventListener('resize', setTransitionContainerTop);
    // }

    const generateShipElements = () => {
        const shipElementArea = document.querySelector('.ship-main-container');

        const title = creator.oneElement('user-instruction', 'h2');
        title.textContent = 'Drag your fleet onto the battlefield, captain!'
        shipElementArea.appendChild(title);
        
        const ships = creator.multipleElements('div', 4);
        const shipLengths = [5,4,3,2];

        ships.forEach((ship, i) => {
            ship.dataset.length = shipLengths[i];
        });
        
        for (const ship of ships) {
            ship.className = 'ship-element';
            
            ship.classList.add(`length-${ship.dataset.length}`);
            shipElementArea.appendChild(ship);
            ship.draggable = true;
            ship.dataset.orientation = 'horizontal';
        }
    }

    const generateShipRotationControls = (callback) => {
        const shipMainContainer = document.querySelector('.ship-main-container');

        const shipSubContainer = creator.oneElement('ship-sub-container', 'div');

        const ships = shipMainContainer.querySelectorAll('.ship-element');

        ships.forEach((ship) => {
            shipMainContainer.removeChild(ship);

            const shipContainer = creator.oneElement('ship-element-container', 'div');
            shipContainer.appendChild(ship);

            shipSubContainer.appendChild(shipContainer);

            const rotateButton = creator.oneElement('rotate-button', 'img');
            rotateButton.src = rotate;
            rotateButton.draggable = false;
            rotateButton.addEventListener('click', () => {
                // rotateButton.classList.toggle('active');
                callback(ship);
                changeOrientation(ship);
                // applyRotation(ship);
            });

            shipContainer.appendChild(rotateButton);
        });

        shipMainContainer.appendChild(shipSubContainer);
    
    }


    const applyRotation = (shipElement) => {

        if (shipElement.dataset.orientation === 'horizontal') {
            shipElement.classList.add('vertical');
        } else {
            shipElement.classList.remove('vertical');
        }
    }

    const changeOrientation = (ship) => {
        if (ship.dataset.orientation === 'horizontal') {
            ship.dataset.orientation = 'vertical';
        } else {
            ship.dataset.orientation = 'horizontal';
        }
    }

    const removeGridsAndHeading = () => {
        
        playerBoard.classList.add('invisible');
        computerBoard.classList.add('invisible');
        setDefaultContainerSize();
        playerBoard.addEventListener('transitionend', () => {

            playerBoard.remove();
            computerBoard.remove();

            playerBoard.classList.remove('invisible');
            computerBoard.classList.remove('invisible');
        });

        const shipContainer = document.querySelector('.ship-container');
        if (shipContainer) {
            while (shipContainer.hasChildNodes()) {
                shipContainer.removeChild(shipContainer.lastChild);
            }
        }

        const heading = document.querySelector('.user-instruction');
        heading.remove();


    }

    const disableCells = () => {

        computerBoard.classList.add('disabled');
        playerBoard.classList.add('disabled');

        const enabledCells = document.querySelectorAll('.box');
        enabledCells.forEach((cell) => {
            cell.classList.add('disabled');
        });
    }

    const enableCells = () => {

        computerBoard.classList.remove('disabled');
        playerBoard.classList.remove('disabled');

        const disabledCells = document.querySelectorAll('.box');

        disabledCells.forEach((cell) => {
            cell.classList.remove('disabled');
        });
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

    const setInGameStyles = () => {
        const button = document.querySelector('.start-game');

        button.classList.add('in-progress');
    }

    const resetGameStyles = () => {
        const button = document.querySelector('.start-game');
        button.classList.remove('in-progress');

        playerBoard.style.border = 'none';
        computerBoard.style.border = 'none';

        enableCells();


    }

    const transitionElementRemoval = (element) => {
        element.classList.add('invisible');

        element.addEventListener('transitionend', () => {
            element.remove();
        });
    }

    return { removeGridsAndHeading, currentPlayerOutline, enableCells, disableCells, setUserInstruction, resetGameStyles, generateShipRotationControls,applyRotation, transitionElementRemoval, initializeMainDisplay, initializeCaptainPicker, removeCaptainPicker, renderComputerGrid, renderPlayerGrid, removeCurrentBoard }
}