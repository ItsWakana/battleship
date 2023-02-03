import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";

describe('placeShip', () => {

    let board;

    beforeEach(() => board = Gameboard());

    test('Should place ship on the board', () => {
        const ship = {type: 'Carrier', length: 5}
        board.placeShip(ship, [0,2]);

        expect(board.getBoard()[0][2]).toBe(ship);
        expect(board.getBoard()[0][3]).toBe(ship);
        expect(board.getBoard()[0][4]).toBe(ship);
        expect(board.getBoard()[0][5]).toBe(ship);
        expect(board.getBoard()[0][6]).toBe(ship);
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
        //if we miss a shot on a ship, we should store that coordinate somehow,perhaps we could use an object lookup to store our misses in each row. So key 0 could have an array of arrays for the coordinates that have been missed in that row.

        board.recieveAttack([5,2]);
        board.recieveAttack([5,7]);

        board.recieveAttack([2,1]);
        board.recieveAttack([8,3]);

        // const missesRow5 = [2,7];
        // const missesRow2 = [1];
        // const missesRow8 = [3];
        
        // expect(board.getMisses()[5]).toBe(missesRow5);
        // expect(board.getMisses()[2]).toBe(missesRow2);
        // expect(board.getMisses()[8]).toBe(missesRow8);

        expect(board.getMisses()[5]).toEqual([2,7]);
        expect(board.getMisses()[2]).toEqual([1]);
        expect(board.getMisses()[8]).toEqual([3]);
    });
});


