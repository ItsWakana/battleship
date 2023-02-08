//for the moment, our gameboard can just be logic. We can represent it as a 2d array of positions and coordinates. The ships available in a particular gameboard should be stored inside some kind of data structure (maybe an array?). We should set some kind of limit for how many ships a board can have, so the user can't add more than the limit.

// import { Ship } from "./shipModule";

export const Gameboard = () => {
    const board = [];

    const ships = [];
    //we can use a method called 'allShipsSunk' which could use the 'every' array method to loop over this ships array containing all the ships on the gameboard and if all the ships return true for 'isSunk'. We can deduce that all the ships have been sunk and the game can finish.

    const fillBoard = (board) => {
        for (let i=0; i<10; i++) {
            const arr = new Array(10);
            arr.fill('');
            board.push(arr);
        }
    }

    const getBoard = () => board;

    const getValidPositions = () => {
        const arr = [];

        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[i].length; j++) {
                if (board[i][j] === '') {
                    arr.push([i,j]);
                }
            }
        }
        return arr;
    }

    const placeShip = (ship, coordinate) => {
    
        if (board[coordinate[0]][coordinate[1]] !== '') {
            throw new Error('Ship exists in this position');
        } 
        if (coordinate[1] + ship.length > 9) {
            throw new Error('Ship not on the board');
        }

        for (let i=0; i<ship.length; i++) {
            board[coordinate[0]][coordinate[1] + i] = ship;
        }

        ships.push(ship);
    }

    const recieveAttack = (coordinate) => {

        if (coordinate[0] <= 9 && coordinate[1] <= 9) {
            const boardItem = board[coordinate[0]][coordinate[1]];

            if (boardItem === '') {
                missedShots[coordinate[0]].push(coordinate[1]);
            }
            if (typeof boardItem === 'object') {
                boardItem.hit();
            }
            if (board[coordinate[0]][coordinate[1]] === 'x') {
                console.log('Cannot attack same coordinate more than once');
                // return null;
                throw new Error('Cannot attack same coordinate more than once');
            }
            board[coordinate[0]][coordinate[1]] = 'x';
        } else {
            console.log('Attack is not on the board');
            // return null;
            throw new Error('Attack is not on the board');
        }
        
        return coordinate;
    }

    const missedShots = [
        [],[],[],[],[],[],[],[],[],[]
    ]

    const getMisses = () => {
        return missedShots;
    }

    const getShips = () => {
        return ships;
    }

    const allShipsSunk = () => {

        return ships.every((ship) => ship.isSunk());
    }

    fillBoard(board);
    
    return { getBoard, placeShip, recieveAttack, getMisses, getShips, allShipsSunk, getValidPositions }
}