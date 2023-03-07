import './style.css';
import { View } from "./displayController";
import { GameState } from './gameState';
import { gameInitHelper } from './gameState';
import { AudioSetup } from './Audio Modules/audioCreation';

export const gameController = () => {

    const view = View();
    let game = GameState();
    const audioSetup = AudioSetup();
    const gameHelper = gameInitHelper();

    let gameStarted = false;

    const playGame = () => {
        if (!gameStarted) {
            gameStarted = true;
            startGame();
        }
    }

    const startGame = async () => {
        const captainChoice = await initializeCaptainPicker();
        await view.DOM.setNewShipContainerHeight();
        // await delay(700);
        
        view.DOM.initializeMainDisplay();
        view.appendRuleModal();
        audioSetup.generateAudioFiles();
        audioSetup.loopBackgroundSound();
        view.DOM.setMainGridToPlayer();
        view.DOM.generateShipRotationControls((shipElement) => {
            view.DOM.applyRotation(shipElement);
        });
        view.displayCaptainAvatar(captainChoice);
        view.DOM.speechBubbleText(view.response.shipPlacementResponse());
        view.hideCaptainAvatar();
        view.setPlayerAndComputerCells();

        game.placeAllComputerShips();

        await shipPlacementHandler();
        view.onCellClick(gameLoop);
        // view.dragAndDropShips((ship, coordinate) => {
        //     checkShipPlacement(ship, coordinate);

        //     view.updateBoard(game.playerBoard.getBoard(), false);
            
        //     if (game.playerBoard.allShipsPlaced()) {
        //         view.DOMHelper.removeShipContainerHeight();

        //         view.DOMHelper.setMainGridToComputer();
        //         view.showCaptainAvatar();
        //         view.DOMHelper.currentPlayerOutline(false);
        //         view.DOMHelper.speechBubbleText(view.DOMHelper.playerTurnResponse());
        //         view.updateBoard(game.computerBoard.getBoard(), true)

        //         view.onCellClick(playRound);
        //     }
        // });
    }

    const shipPlacementHandler = async () => {
        return new Promise((resolve) => {
            view.dragAndDropShips((ship, coordinate) => {
                checkShipPlacement(ship, coordinate);

                view.updateBoard(game.playerBoard.getBoard(), false);
                
                if (game.playerBoard.allShipsPlaced()) {
                    view.DOM.removeShipContainerHeight();

                    view.DOM.setMainGridToComputer();
                    view.showCaptainAvatar();
                    view.DOM.currentPlayerOutline(false);
                    view.DOM.speechBubbleText(view.response.playerTurnResponse());
                    view.updateBoard(game.computerBoard.getBoard(), true);
                    resolve();
                }
            });
        });
    }

    const initializeCaptainPicker = async () => {
        return new Promise(resolve => {
          view.DOM.initializeCaptainPicker(async captainChoice => {
            game.setPlayerCaptain(captainChoice);
            view.DOM.removeCaptainPicker();
            resolve(captainChoice);
          });
        });
    }

    const gameLoop = async (coordinate) => {
        if (!coordinate) {
            console.log(`Error: Attack already placed`);
            return;
        }

        if (!game.computerBoard.isValidAttack(coordinate)) return;

        view.DOM.disableCells();  
        game.player.attack([coordinate[0], coordinate[1]]);


        const isaWinner = game.checkForWinner();
        if (isaWinner) {
            view.alertWinner(isaWinner);
            view.implementGameOverModal();
            resetGame();
            return;
        }

        if (game.computerBoard.getLastHit()['ship']) {
            audioSetup.playRandomHitSound();
            await delay(delayTime.waitForSound);
            view.updateBoard(game.computerBoard.getBoard(), true);  
            view.handlePlayerHitState(coordinate);
            return;
        }
        audioSetup.playRandomMissSound()
        await delay(delayTime.waitForSound);
        view.updateBoard(game.computerBoard.getBoard(), true);  
        view.DOM.speechBubbleText(view.response.playerMissResponse());
        await delay(delayTime.waitForSpeech);
        view.handlePlayerMissState();
        await delay(3000);
        handleComputerTurn();
    }
    
    const handleComputerTurn = async () => {

        let attackPosition;
        if (game.playerBoard.getLastHit()['ship']) {
            attackPosition = game.computer.attackAdjacentCell(game.playerBoard.getLastHit()['ship']);   
        } else {
            attackPosition = game.computer.attack();
        }

        const winner = game.checkForWinner();
        if (winner) {
            view.alertWinner(winner);
            resetGame();
            return;
        }

        if (game.playerBoard.getLastHit()['ship']) {
            audioSetup.playRandomHitSound();
            await delay(delayTime.waitForSound);
            view.updateBoard(game.playerBoard.getBoard(), false);
            view.setHit(attackPosition,false);
            view.DOM.speechBubbleText(view.response.computerTurnResponse());
            await delay(delayTime.waitForSpeech);
            view.DOM.currentPlayerOutline(true);
            handleComputerTurn();
            // return;
        } else {
            audioSetup.playRandomMissSound();
            await delay(delayTime.waitForSound);
            view.updateBoard(game.playerBoard.getBoard(), false);
            view.DOM.speechBubbleText(view.response.computerMissResponse());
            await delay(delayTime.waitForSpeech); // wait for message prompt to finish before switching turns
            view.DOM.currentPlayerOutline(false);
            view.DOM.enableCells();
            view.DOM.speechBubbleText(view.response.playerTurnResponse());
            view.DOM.setMainGridToComputer();
            view.showCaptainAvatar();
        }
    }

    const checkShipPlacement = (ship, coordinate) => {
        const arrayCoordinate = [+coordinate[0], +coordinate[1]];
        const shipLength = +ship.dataset.length;
        const newShip = gameHelper.makeShip(shipLength);
        
        if (ship.dataset.orientation === 'horizontal') {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, false)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, false);

                view.DOM.transitionElementRemoval(ship.parentNode);

            } else {
                console.log('Error: Cannot place ship there');
                //handle a missplaced ship, user tooltip or error pop up
            }
        } else {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, true)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, true);

                view.DOM.transitionElementRemoval(ship.parentNode);

            } else {
                console.log('Error: Cannot place ship there');
                //handle a missplaced ship, user tooltip or error pop up
            }
        }
    }

    const delay = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    const delayTime = {
        waitForSpeech: 2500,
        waitForSound: 2500
    }

    const resetGame = () => {
        gameStarted = false;
        game = GameState();
        view.DOM.removeGridsAndHeading();
        view.DOM.resetGameStyles();
    }

    view.DOM.elements.startButton.addEventListener('click', playGame);
}