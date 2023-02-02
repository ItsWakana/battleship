import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";
//what we want to test:

test('placing invalid ship off of the board', () => {
    const board = Gameboard();


    expect(() => {
        board.placeShip(Ship(3), [3,8])
    }).toThrow();

});

test('placing invalid ship off of the board', () => {
    const board = Gameboard();


    expect(() => {
        board.placeShip(Ship(4), [8,6])
    }).toThrow();

});

test('placing ship on top of existing ship', () => {
    const board = Gameboard();

    board.placeShip(Ship(2), [7,6]);

    expect(() => {
        board.placeShip(Ship(2), [7,7])
    }).toThrow();

});

test('placing ship on top of existing ship', () => {
    const board = Gameboard();
    board.placeShip( Ship(5), [2,2]);

    expect(() => {
        board.placeShip(Ship(5), [2,5])
    }).toThrow();

});

test('placing valid ship coordinate on board', () => {
    const board = Gameboard();
    const carrier = board.placeShip( Ship(5), [0,2]);
    const destroyer = board.placeShip( Ship(2), [5,6]);
    
    expect(board.getBoard()[0]).toEqual(
        ['','',carrier,carrier,carrier,carrier,carrier,'','',''],

    );

    expect(board.getBoard()[5]).toEqual(
        ['','','','','','',destroyer,destroyer,'',''],

    );
});

//that the gameboard is recieving an attack on the board (using coordinates)

test('Attacking a ship on the gameboard', () => {
    const board = Gameboard();
    const carrier = board.placeShip(Ship(5), [0,2]);
    board.recieveAttack([0,4]);

    expect(carrier.getDamageRecieved()).toBe(1);

    expect(board.getBoard()[0]).toEqual(
        ['','',carrier,carrier,'x',carrier,carrier,'','',''],
    );
});

test('Attacking multiple ships on the gameboard', () => {

    const board = Gameboard();
    const carrier = board.placeShip(Ship(5), [6,4]);
    const destroyer = board.placeShip(Ship(2), [2,2]);

    board.recieveAttack([6,6]);
    board.recieveAttack([2,3]);

    expect(carrier.getDamageRecieved()).toBe(1);
    expect(destroyer.getDamageRecieved()).toBe(1);

    expect(board.getBoard()[6]).toEqual(
        ['','','','',carrier,carrier,'x',carrier,carrier,''],
    );

    expect(board.getBoard()[2]).toEqual(
        ['','',destroyer,'x','','','','','',''],
    );
});

test('Attacking same spot of a ship', () => {
    const board = Gameboard();
    board.placeShip(Ship(5), [4,4]);
    board.recieveAttack([4,4]);

    expect(() => {
        board.recieveAttack([4,4]);
    }).toThrow();
});

test('Attacking an empty spot on the gameboard', () => {
    const board = Gameboard();
    board.recieveAttack([5,5]);
    board.recieveAttack([5,1]);

    expect(board.getBoard()[5]).toEqual(
        ['','x','','','','x','','','','']
    );
});

test('Attacking the same coordinate more than once', () => {
    const board = Gameboard();
    board.recieveAttack([3,8]);

    expect(() => {
        board.recieveAttack([3,8]);
    }).toThrow();

});

test('Checking for invalid or out of bounds attack', () => {
    const board = Gameboard();
    board.placeShip(Ship(5), [0,2]);

    expect(() => {
        board.recieveAttack([10,4]);
    }).toThrow();
});



//test the functionality of an attack hitting a ship on the board


