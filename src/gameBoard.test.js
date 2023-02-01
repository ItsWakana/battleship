import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";
//what we want to test:

test('placing invalid ship off of the board', () => {
    const sub = Ship('Submarine', 3);
    const board = Gameboard();


    expect(() => {
        board.placeShip(sub, [3,8])
    }).toThrow();

});

test('placing invalid ship off of the board', () => {
    const bship = Ship('Battleship', 4);
    const board = Gameboard();


    expect(() => {
        board.placeShip(bship, [8,6])
    }).toThrow();

});

test('placing ship on top of existing ship', () => {
    const destroyer = Ship('Destroyer', 2);
    const bship = Ship('Battleship', 4);
    const board = Gameboard();

    board.placeShip(destroyer, [7,6]);
    console.log(board.getBoard());

    expect(() => {
        board.placeShip(bship, [7,7])
    }).toThrow();

});

test('placing ship on top of existing ship', () => {
    const carrier = Ship('Carrier', 5);
    const bship = Ship('Battleship', 4);
    const board = Gameboard();

    board.placeShip(carrier, [2,2]);
    console.log(board.getBoard());

    expect(() => {
        board.placeShip(bship, [2,5])
    }).toThrow();

});

test('placing valid ship coordinate on board', () => {
    const s = Ship('Carrier', 5);
    const board = Gameboard();
    board.placeShip(s, [0,2]);

    expect(board.getBoard()).toEqual([
        ['','',s,s,s,s,s,'','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],

    ])
});

//that the gameboard is recieving an attack on the board (using coordinates)

test('Attacking a ship on the gameboard', () => {
    const s = Ship('Carrier', 5);
    const board = Gameboard();
    board.placeShip(s, [0,2]);
    board.recieveAttack([0,4]);

    expect(board.getBoard()).toEqual([
        ['','',s,s,'x',s,s,'','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],

    ]);
});

test('Attacking same spot of a ship', () => {
    const s = Ship('Carrier', 5);
    const board = Gameboard();
    board.placeShip(s, [4,4]);
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
    const s = Ship('Carrier', 5);
    const board = Gameboard();
    board.placeShip(s, [0,2]);

    expect(() => {
        board.recieveAttack([10,4]);
    }).toThrow();
});



//test the functionality of an attack hitting a ship on the board


