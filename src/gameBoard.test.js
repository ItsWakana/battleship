import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";

describe('placeShip', () => {

    let board;

    beforeEach(() => {
        board = Gameboard();
    });

    test('Should place ship on the board', () => {
        const ship = {type: 'Carrier', length: 5}
        board.placeShip(ship, [0,2]);

        expect(board.getBoard()[0][2]).toBe(ship);
        expect(board.getBoard()[0][3]).toBe(ship);
        expect(board.getBoard()[0][4]).toBe(ship);
        expect(board.getBoard()[0][5]).toBe(ship);
        expect(board.getBoard()[0][6]).toBe(ship);

        expect(board.getShips()).toEqual([ship]);
    });

    test('Should throw error if ship not on the board', () => {
        const ship1 = {type: 'Cruiser', length: 3}

        expect(() => board.placeShip(ship1, [3,8])).toThrow('Ship not on the board');

        const ship2 = {type: 'Battleship', length: 4}

        expect(() => board.placeShip(ship2, [8,6])).toThrow('Ship not on the board');
    });

    test('Should throw error if ship exists in position', () => {
        board.placeShip(Ship(2), [7,6]);
        board.placeShip(Ship(5), [2,2]);

        expect(() => board.placeShip(Ship(2), [7,7])).toThrowError('Ship exists in this position');

        expect(() => board.placeShip(Ship(5), [2,5]).toThrowError('Ship exists in this position'));
    });

});

describe('recieveAttack', () => {

    let board;

    beforeEach(() => board = Gameboard());

    test('Recieve an attack on the board', () => {
        const ship = Ship(5);

        board.placeShip(ship, [0,2]);
        board.recieveAttack([0,4]);

        board.recieveAttack([5,6]);

        expect(ship.getDamageRecieved()).toBe(1);

        expect(board.getBoard()[0][2]).toBe(ship);
        expect(board.getBoard()[0][3]).toBe(ship);
        expect(board.getBoard()[0][4]).toBe('x');
        expect(board.getBoard()[0][5]).toBe(ship);
        expect(board.getBoard()[0][6]).toBe(ship);

        expect(board.getBoard()[5][6]).toBe('x');
    });

    test('Recieve multiple attacks to a ship on the board', () => {
        const ship = Ship(5);

        board.placeShip(ship, [0,2]);
        board.recieveAttack([0,4]);
        board.recieveAttack([0,6]);

        expect(ship.getDamageRecieved()).toBe(2);

        expect(board.getBoard()[0][2]).toBe(ship);
        expect(board.getBoard()[0][3]).toBe(ship);
        expect(board.getBoard()[0][4]).toBe('x');
        expect(board.getBoard()[0][5]).toBe(ship);
        expect(board.getBoard()[0][6]).toBe('x');
    });

    test('Should throw error if attacking same coordinate more than once', () => {
        board.placeShip(Ship(5), [4,4]);
        board.recieveAttack([4,4]);
        board.recieveAttack([6,2]);
        
        expect(() => board.recieveAttack([4,4])).toThrowError('Cannot attack same coordinate more than once');

        expect(() => board.recieveAttack([6,2])).toThrowError('Cannot attack same coordinate more than once');
    });

    test('Should throw error if an attack is not on the board', () => {
        expect(() => board.recieveAttack([10,4])).toThrowError('Attack is not on the board');
    });

    test('Missed shot should be recorded', () => {

        board.recieveAttack([5,2]);
        board.recieveAttack([5,7]);
        board.recieveAttack([2,1]);
        board.recieveAttack([8,3]);

        expect(board.getMisses()[5]).toEqual([2,7]);
        expect(board.getMisses()[2]).toEqual([1]);
        expect(board.getMisses()[8]).toEqual([3]);
    });
});

describe('allShipsSunk', () => {

    let board;

    beforeEach(() => board = Gameboard());

    test('Return true as all ships are sunk', () => {
        
        board.placeShip(Ship(5), [2,2]);
        board.placeShip(Ship(2), [6,3]);

        for (let i=2; i<=7; i++) {
            board.recieveAttack([2,i]);
        }

        for (let i=3; i<=5; i++) {
            board.recieveAttack([6,i]);
        }

        expect(board.allShipsSunk()).toBe(true);
    });

    test('Return false as not all ships are sunk', () => {

        board.placeShip(Ship(3), [1,5]);
        board.placeShip(Ship(4), [6,2]);

        board.recieveAttack([1,7]);
        board.recieveAttack([6,3]);
        board.recieveAttack([6,4]);

        expect(board.allShipsSunk()).toBe(false);
    });
});


describe('getValidPositions', () => {

    let board;

    beforeEach(() => board = Gameboard());

    test('Return array of valid positions', () => {
        board.placeShip(Ship(5), [4,2]);
        board.placeShip(Ship(2), [7,5]);
        board.placeShip(Ship(4), [8,2]);
        board.placeShip(Ship(3), [7,1]);

        const validPositions = [
            [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
            [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],
            [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],
            [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],
            [4,0],[4,1],[4,7],[4,8],[4,9],
            [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],
            [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],
            [7,0],[7,4],[7,7],[7,8],[7,9],
            [8,0],[8,1],[8,6],[8,7],[8,8],[8,9],
            [9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],
        ]

        expect(board.getValidPositions()).toEqual(validPositions);
    });
});