//for the moment, our gameboard can just be logic. We can represent it as a 2d array of positions and coordinates. The ships available in a particular gameboard should be stored inside some kind of data structure (maybe an array?). We should set some kind of limit for how many ships a board can have, so the user can't add more than the limit.

// import { Ship } from "./shipModule";

export const Gameboard = () => {
    const board = [];

    const fillBoard = (board) => {
        for (let i=0; i<10; i++) {
            const arr = new Array(10);
            arr.fill('');
            board.push(arr);
        }
    }

    const getBoard = () => board;

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

        return ship;

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
                throw new Error('Cannot attack same coordinate more than once');
            }
            board[coordinate[0]][coordinate[1]] = 'x';
        } else {
            throw new Error('Attack is not on the board');
        } 
    }

    const missedShots = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
    }

    const getMisses = () => {
        return missedShots;
    }

    fillBoard(board);
    
    return { getBoard, placeShip, recieveAttack, getMisses }
}