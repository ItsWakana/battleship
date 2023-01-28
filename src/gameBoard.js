//for the moment, our gameboard can just be logic. We can represent it as a 2d array of positions and coordinates. The ships available in a particular gameboard should be stored inside some kind of data structure (maybe an array?). We should set some kind of limit for how many ships a board can have, so the user can't add more than the limit.

//we could then have a placeShip() method that calls the ship factory, and creates a ship and places it at a coordinate that we pass into it. 

//we will also need a recieve attack method, so that our board can register if an attack on the board has hit a ship or not & send that hit to the correct ship. If the hit is a miss we'll need to record that miss coordinate in some way (maybe adding an 'x' in the 2d array gameboard so we know its a miss).

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

    }

    const recieveAttack = () => {
        //function should recieve some coordinates as a parameter, and determine if the coordinate has hit a ship on the board or not. We can then mark that position on the board with an 'x' or something similar. 

        //if it does end up hitting a ship, we can somehow check which ship its hit and call the hit() method for that speicific ship.
    }
    fillBoard(board);
    
    return { getBoard, placeShip, recieveAttack }
}