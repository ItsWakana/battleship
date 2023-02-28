import './style.css';
import { View } from "./displayController";
import { GameState } from './gameState';
import { gameInitHelper } from './gameState';

const gameController = () => {

    const view = View();
    let game = GameState();
    const gameHelper = gameInitHelper();

    let gameStarted = false;

    const gameLoop = async () => {
        if (!gameStarted) {
                gameStarted = true;
                view.DOMHelper.initializeCaptainPicker( async (captainChoice) => {
                    game.setPlayerCaptain(captainChoice);
                    view.DOMHelper.removeCaptainPicker();

                    await delay(700);
                    
                    view.DOMHelper.initializeMainDisplay();
                    view.DOMHelper.setMainGridToPlayer();
                    view.DOMHelper.generateShipRotationControls((shipElement) => {
                        view.DOMHelper.applyRotation(shipElement);
                    });
                    view.setPlayerAndComputerCells();
        
                    game.placeAllComputerShips();
        
                    view.dragAndDropShips((ship, coordinate) => {
                        checkShipPlacement(ship, coordinate);

                        view.updateBoard(game.playerBoard.getBoard(), false);
                        
                        if (game.playerBoard.allShipsPlaced()) {
                            view.DOMHelper.setMainGridToComputer();
                            view.DOMHelper.currentPlayerOutline(false);
                            view.DOMHelper.setUserInstruction('Its your turn!');
                            view.updateBoard(game.computerBoard.getBoard(), true)

                            view.onCellClick(playRound);
                        }
                    });
                });
        }
    }

    const playRound = async (coordinate) => {
        if (coordinate) {
            if (game.computerBoard.isValidAttack(coordinate)) { 
                view.DOMHelper.disableCells();  
                executePlayerTurn(coordinate);

                const isaWinner = game.checkForWinner();
                if (isaWinner) {
                    view.alertWinner(isaWinner);
                    resetGame();
                    return;
                }
                //delay displaying players attack by 3 seconds, for sound effects purposes later
                await delay(3000);
                view.DOMHelper.setUserInstruction('Computer is attacking!');
                view.playerViewUpdate();


                view.updateBoard(game.computerBoard.getBoard(), true);  

                if (game.computerBoard.getLastHit() === 'ship') {
                    view.DOMHelper.setUserInstruction('Its your turn!');
                    view.setHit(coordinate, true);
                    view.computerViewUpdate();
                    return;
                } else {
                    view.DOMHelper.setMainGridToPlayer();
                    await delay(2000);
                    executeComputerTurn();
                }
            }
        } else {
            console.log('Error: Attack already placed');
        }

    }

    const executePlayerTurn = (coordinate) => {

        game.currentPlayer = game.player.getName();
        game.player.attack([coordinate[0], coordinate[1]]);
        game.currentPlayer = game.computer.getName();

        //we shouldn't be calling the view updating and removing from inside the players turn, this function should be soley responsible for executing the players turn and the checks associated with a turn.   
    }
    
    const executeComputerTurn = async () => {

        const position = game.computer.attack();
        const winner = game.checkForWinner();
        if (winner) {
            view.alertWinner(winner);
            resetGame();
            return;
        }
        //to delay computers attacks, for adding in sound effects later on
        await delay(3000);
        view.updateBoard(game.playerBoard.getBoard(), false);
        view.DOMHelper.currentPlayerOutline(false);
        view.DOMHelper.setUserInstruction('Its your turn!');
        view.DOMHelper.enableCells();

        if (game.playerBoard.getLastHit() === 'ship') {
            view.setHit(position,false);
            view.DOMHelper.setUserInstruction('Computer is attacking!');
            view.DOMHelper.currentPlayerOutline(true);
            executeComputerTurn();
        } else {
            view.DOMHelper.setMainGridToComputer();
        }
    }

    const checkShipPlacement = (ship, coordinate) => {

        const arrayCoordinate = [+coordinate[0], +coordinate[1]];
        const shipLength = +ship.dataset.length;
        const newShip = gameHelper.makeShip(shipLength);
        
        if (ship.dataset.orientation === 'horizontal') {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, false)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, false);

                view.DOMHelper.transitionElementRemoval(ship.parentNode);

            } else {
                console.log('Error: Cannot place ship there');
                //handle a missplaced ship, user tooltip or error pop up
            }
        } else {
            if (game.playerBoard.canPlaceShip(newShip, arrayCoordinate, true)) {
                game.playerBoard.placeShip(newShip, arrayCoordinate, true);

                view.DOMHelper.transitionElementRemoval(ship.parentNode);

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

    const resetGame = () => {
        gameStarted = false;
        game = GameState();
        view.DOMHelper.removeGridsAndHeading();
        view.DOMHelper.resetGameStyles();
    }

    view.startButton.addEventListener('click', gameLoop);
}

document.addEventListener('DOMContentLoaded', () => {
    gameController();
});