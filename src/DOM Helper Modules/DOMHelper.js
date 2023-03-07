// import rotate from '../assets/rotate.svg';
// import close from '../assets/close.svg';
// import information from '../assets/information.svg';
// import captain1 from '../assets/captains/captain1.png';
// import captain2 from '../assets/captains/captain2.png';
// import captain3 from '../assets/captains/captain3.png';

import { CustomElementCreator } from './DOMCreation';
import { MyElements } from './ElementSelector';

export const DOMInterface = () => {

    const creator = CustomElementCreator();
    const elements = MyElements();

    let playerBoard;
    let computerBoard;

    //module for querySelector references

    // const mainTopContainer = document.querySelector('.gameboards');
    // const transitionContainer = document.querySelector('.transition-container');

    
    const initializeMainDisplay = () => {

        generateGrids();
        setInGameStyles();
        generateShipElements();
    }

    const setNewShipContainerHeight = () => {
        return new Promise((resolve) => {
            // const shipMainContainer = document.querySelector('.ship-main-container')
            elements.shipMainContainer.classList.add('expand');
            elements.shipMainContainer.addEventListener('transitionend', () => {
                resolve();
            });
        });
    }

    const removeShipContainerHeight = () => {
        // const shipMainContainer = document.querySelector('.ship-main-container')
        elements.shipMainContainer.classList.remove('expand')
    }

    const setMainGridToPlayer = () => {
        playerBoard.classList.add('current');
        computerBoard.classList.remove('current');
    }

    const setMainGridToComputer = () => {
        playerBoard.classList.remove('current');
        computerBoard.classList.add('current');

    }
    const initializeCaptainPicker = async (callback) => {
        const captainContainer = creator.oneElement('captain-container', 'div');

        const title = document.createElement('h3');
        title.textContent = 'Pick your lieutenant!'
        captainContainer.appendChild(title);
        elements.gameboardContainer.append(captainContainer);

        // const transitionContainer = document.querySelector('.transition-container');

        setInGameStyles();
        
        elements.transitionContainer.classList.add('shift-down');
        
        setTimeout(() => {
            captainContainer.classList.add('visible');
            setTransitionContainerTop();
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

    const getCaptainImages = () => {
        return [ elements.captain1, elements.captain2, elements.captain3 ]
    }

    const createCaptains = (container, callback) => {

        const captainAvatars = creator.oneElement('captain-avatars', 'div');

        const captains = creator.multipleElements('div', 3);
        const captainNames = ['Ted', 'Donald', 'Burt']
        let counter = 0;
        for (const captain of captains) {
                captain.className = 'captain';
                // captain.textContent = `captain${counter}`;
                captain.dataset.captain = counter;
                captainAvatars.appendChild(captain);

                captain.addEventListener('click', () => {
                    callback(captain.dataset.captain);
                });

                const avatarImage = document.createElement('img');
                avatarImage.src = getCaptainImages()[counter];
                avatarImage.className = 'captain-wheel-picker-image';

                const nameElement = document.createElement('div');
                nameElement.className = 'captain-name';
                nameElement.textContent = captainNames[counter++];
                // avatarImage.appendChild(nameElement);

                avatarImage.classList.add('appear');
                
                captain.append(avatarImage, nameElement);
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

    const setDefaultContainerSize = () => {
        // const transitionContainer = document.querySelector('.transition-container');

        elements.transitionContainer.style.top = '0vh';
    }

    const setTransitionContainerTop = () => {

        // const mainBoardsContainer = document.querySelector('.gameboards');
        // const transitionContainer = document.querySelector('.transition-container');

        const gameboardsHeight = elements.gameboardContainer.offsetHeight;
        elements.transitionContainer.style.top = `${gameboardsHeight + 35}px`;
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

        // const mainBoardsContainer = document.querySelector('.gameboards');

        // const transitionContainer = document.querySelector('.transition-container');

        
        playerBoard = document.createElement('div');
        computerBoard = document.createElement('div');
        
        playerBoard.className = 'grid left';
        
        computerBoard.className = 'grid right';
        
        playerBoard.dataset.grid = false;
        
        makeGridSquares(playerBoard, false);
        makeGridSquares(computerBoard, true);

        elements.gameboardContainer.append(playerBoard, computerBoard);

        // setTransitionContainerTop();

        // transitionContainer.classList.add('shift-down');
        setTimeout(() => {
            setTransitionContainerTop();
            elements.transitionContainer.classList.add('shift-down');
        },30);
        
        setTimeout(() => {
            playerBoard.classList.add('visible');
            computerBoard.classList.add('visible');
        }, 500);

        window.addEventListener('resize', setTransitionContainerTop);
    }

    const generateShipElements = () => {
        const shipElementArea = document.querySelector('.ship-main-container');

        // const title = creator.oneElement('user-instruction', 'h2');
        // title.textContent = 'Drag your fleet onto the battlefield, captain!'
        // shipElementArea.appendChild(title);
        
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

            //generate details to place on the ship
            for (let i=0; i<ship.dataset.length; i++) {
                const detail = document.createElement('div');
                detail.className = 'detail';
                ship.appendChild(detail);
            }
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
            rotateButton.src = elements.rotate;
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
    
    const createModal = (options) => {
        const modal = creator.oneElement('modal', 'div');
        const overlay = creator.oneElement('overlay', 'div');

        if (options.type === 'Rules') {

            const ruleList = createList('ol', [
                'Place your ships by clicking and dragging them onto your grid, you can use the rotation icon to switch between vertical and horizontal',
                'You can attack by clicking any square on the opponents grid, your goal is to hit their ships!',
                'After you make your attack it will be the computers turn',
                'If either you or the computer hit a ship, that spot will be marked accordingly and will generate an extra turn for the player who hit a ship. Make that move count!',
                'Your goal is to sink all of their ships, good luck!'
            ], options.type);

            const closeIcon = new Image();
            closeIcon.src = elements.close;
            closeIcon.className = 'close-icon';
    
            closeIcon.addEventListener('click', () => {
                closeModal(modal);
            });
            modal.append(ruleList, closeIcon);

            return { modal, overlay }
        }
    }

    const createList = (listType, listItems, listHeading) => {
        const myList = document.createElement(listType);

        if (listHeading) {
            const heading = document.createElement('h3');
            heading.textContent = listHeading;
            myList.appendChild(heading);
        }
        for (const listItemText of listItems) {
            const item = document.createElement('li');

            item.textContent = listItemText;
            myList.appendChild(item);
        }

        return myList;
    }

    // const createGameRuleModal = () => {
    //     const modal = creator.oneElement('modal', 'div');
    //     const overlay = creator.oneElement('overlay', 'div');

    //     const listHeading = document.createElement('h3');
    //     listHeading.textContent = 'Rules';

    //     const myList = document.createElement('ol');

    //     const listItem1 = document.createElement('li');
    //     const listItem2 = document.createElement('li');
    //     const listItem3 = document.createElement('li');
    //     const listItem4 = document.createElement('li');
    //     const listItem5 = document.createElement('li');

    //     listItem1.textContent = 'Place your ships by clicking and dragging them onto your grid, you can use the rotation icon to switch between vertical and horizontal';
    //     listItem2.textContent = 'You can attack by clicking any square on the opponents grid, your goal is to hit their ships!';
    //     listItem3.textContent = 'After you make your attack it will be the computers turn';
    //     listItem4.textContent = 'If either you or the computer hit a ship, that spot will be marked accordingly and will generate an extra turn for the player who hit a ship. Make that move count!';
    //     listItem5.textContent = 'Your goal is to sink all of their ships, good luck!';


    //     const closeIcon = new Image();
    //     closeIcon.src = elements.close;
    //     closeIcon.className = 'close-icon';

    //     closeIcon.addEventListener('click', () => {
    //         closeModal(modal);
    //     });

    //     myList.append(listHeading, listItem1,listItem2, listItem3, listItem4, listItem5);

    //     modal.append(closeIcon, myList);

    //     return { modal, overlay };
    // }

    // const createGameOverModal = () => {
    //     //we want to create all the elements for our game over modal, when the game state hits a terminal condition we want this  to pop up instead of the alert. It should say who won the game and have a button that says 'play again';

    //     //This method should only create the modal and append all its elements and return the element, we will append it to our document or container elsewhere.
    // }
    
    const openModal = (modal) => {
        const overlay = document.querySelector('.overlay');

        modal.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    const closeModal = (modal) => {
        const overlay = document.querySelector('.overlay');

        modal.classList.remove('active');
        overlay.classList.remove('active');
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

        elements.buttonContainer.removeChild(elements.buttonContainer.lastChild);
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

    const speechBubbleText = (message) => {
        const captainSpeech = document.querySelector('.captain-message');
        captainSpeech.textContent = '';
        let i = 0;
        let speed = 50;
        const typeWriter = () => {
            if (i < message.length) {
                captainSpeech.textContent += message.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 500);
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

    return { removeGridsAndHeading, currentPlayerOutline, enableCells, disableCells, speechBubbleText, resetGameStyles, generateShipRotationControls,applyRotation, transitionElementRemoval, initializeMainDisplay, initializeCaptainPicker, removeCaptainPicker, setMainGridToPlayer, setMainGridToComputer, setNewShipContainerHeight, removeShipContainerHeight, getCaptainImages, openModal, closeModal, createModal, elements }
}