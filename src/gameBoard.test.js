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

test('Attacking a ship on the gameboard', () => {
    const s = Ship('Carrier', 5);
    const board = Gameboard();
    board.placeShip(s, [0,2]);
    board.recieveAttack([0,4]);

    //i want to test if the hit is being registered on the board, so i guess i need to check if the board is displaying a mark on that spot to indicate this?

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

//that the gameboard is recieving an attack on the board (using coordinates)



//test the functionality of an attack hitting a ship on the board


