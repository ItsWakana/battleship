//for the moment, our gameboard can just be logic. We can represent it as a 2d array of positions and coordinates. The ships available in a particular gameboard should be stored inside some kind of data structure (maybe an array?). We should set some kind of limit for how many ships a board can have, so the user can't add more than the limit.

//we could then have a placeShip() method that calls the ship factory, and creates a ship and places it at a coordinate that we pass into it. 

//we will also need a recieve attack method, so that our board can register if an attack on the board has hit a ship or not & send that hit to the correct ship. If the hit is a miss we'll need to record that miss coordinate in some way (maybe adding an 'x' in the 2d array gameboard so we know its a miss).

export const Gameboard = () => {
    const board = [];

    const fillBoard = (board) => {
        for (let i=0; i<7; i++) {
            const arr = new Array(7);
            arr.fill('');
            board.push(arr);
        }
    }

    const getBoard = () => board;

    const placeShip = (ship, coordinate) => {
        for (let i=0; i<ship.length; i++) {
            board[coordinate[0]][coordinate[1] + i] = ship;
        }

    }
    fillBoard(board);
    
    return { getBoard, placeShip }
}