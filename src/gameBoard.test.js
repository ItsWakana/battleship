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

    test('Recieve an attack to a ship on the board', () => {
        const ship = Ship(5);

        board.placeShip(ship, [0,2]);
        board.recieveAttack([0,4]);

        expect(ship.getDamageRecieved()).toBe(1);

        expect(board.getBoard()[0][2]).toBe(ship);
        expect(board.getBoard()[0][3]).toBe(ship);
        expect(board.getBoard()[0][4]).toBe('x');
        expect(board.getBoard()[0][5]).toBe(ship);
        expect(board.getBoard()[0][6]).toBe(ship);
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

    test('Should throw error if attacking marked coordinate', () => {
        board.placeShip(Ship(5), [4,4]);
        board.recieveAttack([4,4]);
        board.recieveAttack([6,2]);
        
        expect(() => board.recieveAttack([4,4])).toThrowError('Cannot attack same coordinate more than once');

        expect(() => board.recieveAttack([6,2])).toThrowError('Cannot attack same coordinate more than once');
    });
});

// test('Attacking same spot of a ship', () => {
//     const board = Gameboard();
//     board.placeShip(Ship(5), [4,4]);
//     board.recieveAttack([4,4]);

//     expect(() => {
//         board.recieveAttack([4,4]);
//     }).toThrow();
// });

// test('Attacking an empty spot on the gameboard', () => {
//     const board = Gameboard();
//     board.recieveAttack([5,5]);
//     board.recieveAttack([5,1]);

//     expect(board.getBoard()[5]).toEqual(
//         ['','x','','','','x','','','','']
//     );
// });

// test('Attacking the same coordinate more than once', () => {
//     const board = Gameboard();
//     board.recieveAttack([3,8]);

//     expect(() => {
//         board.recieveAttack([3,8]);
//     }).toThrow();

// });

// test('Checking for invalid or out of bounds attack', () => {
//     const board = Gameboard();
//     board.placeShip(Ship(5), [0,2]);

//     expect(() => {
//         board.recieveAttack([10,4]);
//     }).toThrow();
// });


