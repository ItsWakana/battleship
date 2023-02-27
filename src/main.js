import './style.css';
import { View } from "./displayController";
import { GameState } from './gameState';
import { gameInitHelper } from './gameState';

const gameController = () => {

    const view = View();
    let game = GameState();
    const gameHelper = gameInitHelper();

    let gameStarted = false;

    const gameLoop = () => {
        if (!gameStarted) {
            if (!game.playerHasCaptain()) {
                gameStarted = true;
                view.DOMHelper.initializeCaptainPicker( async (captainChoice) => {
                    game.setPlayerCaptain(captainChoice);
                    view.DOMHelper.removeCaptainPicker();

                    await delay(700);
                    
                    view.DOMHelper.initializeMainDisplay();

                    view.DOMHelper.generateShipRotationControls((shipElement) => {
                        view.DOMHelper.applyRotation(shipElement);
                    });
                    view.setPlayerAndComputerCells();
        
                    game.placeAllComputerShips();
        
                    // view.updateBoard(game.computerBoard.getBoard(), true);
                    
                    // view.hideComputerBoard();
                    // view.showPlayerBoard();
        
                    view.dragAndDropShips((ship, coordinate) => {
                        checkShipPlacement(ship, coordinate);

                        view.updateBoard(game.playerBoard.getBoard(), false);
                        
                        if (game.playerBoard.allShipsPlaced()) {
                            // view.showComputerBoard();
                            // view.hidePlayerBoard();
                            // view.DOMHelper.currentPlayerOutline(false);
                            view.DOMHelper.setUserInstruction('Its your turn!');
                            view.DOMHelper.removeCurrentBoard();
                            view.DOMHelper.renderComputerGrid();
                            view.updateBoard(game.computerBoard.getBoard(), true)
                            view.onCellClick(playRound);

                            //when we click the cell for our attack, we want to remove our board and then render the computers board.

                            //after the computer has made its attack and its a miss, we want to remove its board and re-render our board and apply the on cell click round again until a winner is found.
                        }
                    });
                });
            }

            // view.DOMHelper.initializeMainDisplay();

            // view.DOMHelper.generateShipRotationControls((shipElement) => {
            //     view.DOMHelper.applyRotation(shipElement);
            // });
            // view.setPlayerAndComputerCells();

            // game.placeAllComputerShips();

            // view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

            // view.dragAndDropShips((ship, coordinate) => {
            //     checkShipPlacement(ship, coordinate);
            //     view.updateBoard(game.computerBoard.getBoard(), game.playerBoard.getBoard());

            //     if (game.playerBoard.allShipsPlaced()) {
            //         view.DOMHelper.currentPlayerOutline(false);
            //         view.DOMHelper.setUserInstruction('Its your turn!');
            //         view.onCellClick(playRound);
            //     }
            // });

            // gameStarted = true;
        }
    }

    const playRound = async (coordinate) => {
        if (coordinate) {
            if (game.computerBoard.isValidAttack(coordinate)) {  
                // view.updateBoard(game.computerBoard.getBoard(), true);  
                executePlayerTurn(coordinate);
                view.updateBoard(game.computerBoard.getBoard(), true);  

                if (game.computerBoard.getLastHit() === 'ship') {
                    view.DOMHelper.setUserInstruction('Its your turn!');
                    // view.setHit(coordinate, true);
                    view.computerViewUpdate();
                    return;
                } else {
                    // view.DOMHelper.removeCurrentBoard();
                    // view.DOMHelper.renderPlayerGrid();
                    // await delay(500);
                    // view.showPlayerBoard();
                    // view.hideComputerBoard();
                    await delay(2000);
                    view.DOMHelper.removeCurrentBoard();
                    view.DOMHelper.renderPlayerGrid();

                    executeComputerTurn();

                    view.DOMHelper.removeCurrentBoard();
                    view.DOMHelper.renderComputerGrid();
                    view.onCellClick(playRound);
                    // await delay(2000);
                    // view.showComputerBoard();
                    // view.hidePlayerBoard();
                }
            }
        } else {
            console.log('Error: Attack already placed');
        }

    }

    const executePlayerTurn = (coordinate) => {

        if (game.checkForWinner()) return;

        game.currentPlayer = game.player.getName();
        view.DOMHelper.setUserInstruction('Computer is attacking!');
        view.playerViewUpdate();

        game.player.attack([coordinate[0], coordinate[1]]);
        checkForGameWinner();
        // view.updateBoard(game.computerBoard.getBoard(), true);
        game.currentPlayer = game.computer.getName();

        //we shouldn't be calling the view updating and removing from inside the players turn, this function should be soley responsible for executing the players turn and the checks associated with a turn. 

        // view.DOMHelper.removeCurrentBoard();
        // view.DOMHelper.renderComputerGrid();

        // view.updateBoard(game.computerBoard.getBoard(), true);
         
    }
    
    const executeComputerTurn = async () => {

        if (game.checkForWinner()) return;
        view.DOMHelper.currentPlayerOutline(false);
        view.DOMHelper.setUserInstruction('Its your turn!');
        const position = game.computer.attack();
        checkForGameWinner();
        view.updateBoard(game.playerBoard.getBoard(), false);

        while (game.playerBoard.getLastHit() === 'ship') {
            // view.setHit(position, false);
            view.DOMHelper.setUserInstruction('Computer is attacking!');
            view.DOMHelper.currentPlayerOutline(true);
            await delay(2000);

            game.computer.attack();
            checkForGameWinner();
            view.updateBoard(game.playerBoard.getBoard(), false);
            view.computerViewUpdate();
        }

        // view.DOMHelper.removeCurrentBoard();
        // view.DOMHelper.renderComputerGrid();
        // view.onCellClick(playRound);
        view.DOMHelper.setUserInstruction('Its your turn!');
        view.DOMHelper.enableCells();
    }

    // const playRound = async (coordinate) => {
    //     if (coordinate) {
    //         if (game.computerBoard.isValidAttack(coordinate)) {    
    //             executePlayerTurn(coordinate);
    //             if (game.computerBoard.getLastHit() === 'ship') {
    //                 view.DOMHelper.setUserInstruction('Its your turn!');
    //                 view.setHit(coordinate, true);
    //                 view.computerViewUpdate();
    //                 return;
    //             } else {
    //                 // await delay(500);
    //                 // view.showPlayerBoard();
    //                 // view.hideComputerBoard();
    //                 await delay(2000);

    //                 executeComputerTurn();
    //                 // await delay(2000);
    //                 // view.showComputerBoard();
    //                 // view.hidePlayerBoard();
    //             }
    //         }
    //     } else {
    //         console.log('Error: Attack already placed');
    //     }

    // }

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
    const checkForGameWinner = () => {
        const winner = game.checkForWinner();
        if (winner) {
            view.alertWinner(winner);
            resetGame();
            return;
        }
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