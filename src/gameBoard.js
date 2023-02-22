//for the moment, our gameboard can just be logic. We can represent it as a 2d array of positions and coordinates. The ships available in a particular gameboard should be stored inside some kind of data structure (maybe an array?). We should set some kind of limit for how many ships a board can have, so the user can't add more than the limit.

export const Gameboard = () => {
    const board = [];

    const ships = [];

    const placeComputerShip = (ship) => {
        const validShipPositions = getValidShipPlacements();

        const randomPlacement = Math.floor(Math.random() * validShipPositions.length);
        const position = validShipPositions[randomPlacement];

        if (canPlaceShip(ship, position)) {
            placeShip(ship, position);
            return;
        }

        placeComputerShip(ship);
    }

    const canPlaceShip = (ship, position) => {
        console.log(`Ship Length: ${ship.length}, Coordinate: ${position}`);
        if ((position[1] - 1) + ship.length > 9) {
            console.log('too long')
            return false;
        }

        for (let i=0; i<=ship.length; i++) {
            if (typeof board[position[0]][position[1] + i] === 'object') {
                return false;
            }
        }

        if (board[position[0]][position[1]] !== '') {
            return false;
        }

        return true;
    }

    const allShipsPlaced = () => {
        console.log(ships);
        return ships.length >= 4;
    }

    const fillBoard = (board) => {
        for (let i=0; i<10; i++) {
            const arr = new Array(10);
            arr.fill('');
            board.push(arr);
        }
    }

    const getBoard = () => board;

    const getValidAttacks = () => {
        const arr = [];

        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[i].length; j++) {
                if (board[i][j] !== 'x') {
                    arr.push([i,j]);
                }
            }
        }
        return arr;
    }

    const getValidShipPlacements = () => {
        const arr = [];

        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[i].length; j++) {
                if (typeof board[i][j] !== 'object') {
                    arr.push([i,j]);
                }
            }
        }
        return arr;
    }

    const placeShip = (ship, coordinate) => {
        // if (board[coordinate[0]][coordinate[1]] !== '') {
        //     throw new Error('Ship exists in this position');
        // } 
        // if (coordinate[1] + ship.length > 9) {
        //     throw new Error('Ship not on the board');
        // }

        for (let i=0; i<ship.length; i++) {
            board[coordinate[0]][coordinate[1] + i] = ship;
        }

        ships.push(ship);
    }

    let lastHit = null;

    const getLastHit = () => {
        return lastHit;
    }

    // const isValidAttack = (coordinate) => {
    //     if (coordinate[0] <= 9 && coordinate[1] <= 9) {

    //         if (board[coordinate[0]][coordinate[1]] === 'x') {
    //             return false;
    //         }
    //     }

    //     return true;
    // }

    const isValidAttack = (coordinate) => {
        if (coordinate[0] <= 9 && coordinate[1] <= 9) {

            if (board[coordinate[0]][coordinate[1]] === 'x') {
                return false;
            }

            return true;
        }
        console.log('Error: Out of bounds attack');
        return false;
    }

    const recieveAttack = (coordinate) => {

            const boardItem = board[coordinate[0]][coordinate[1]];

            if (boardItem === '') {
                missedShots[coordinate[0]].push(coordinate[1]);
                lastHit = null;
            }

            if (typeof boardItem === 'object') {
                boardItem.hit();
                lastHit = 'ship';
            }

            board[coordinate[0]][coordinate[1]] = 'x';
        // if (coordinate[0] <= 9 && coordinate[1] <= 9) {
        //     const boardItem = board[coordinate[0]][coordinate[1]];

        //     if (boardItem === '') {
        //         missedShots[coordinate[0]].push(coordinate[1]);
        //         lastHit = null;
        //     }
        //     if (typeof boardItem === 'object') {
        //         boardItem.hit();
        //         lastHit = 'ship';
        //     }
        //     if (board[coordinate[0]][coordinate[1]] === 'x') {
        //         throw new Error('Cannot attack same coordinate more than once');
        //     }
        //     board[coordinate[0]][coordinate[1]] = 'x';
        // } else {
        //     throw new Error('Attack is not on the board');
        // }
        
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
    
    return { getBoard, placeShip, recieveAttack, getMisses, getShips, allShipsSunk, getValidAttacks, getValidShipPlacements, getLastHit, allShipsPlaced, placeComputerShip, canPlaceShip, isValidAttack }
}