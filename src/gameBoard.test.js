import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";
//what we want to test:

//placing a ship on the board

test('placing invalid ship coordinate on board', () => {
    const shipCarrier = Ship('Carrier', 5);
    const board = Gameboard();


    expect(board.placeShip(shipCarrier, [4,5])).toBe('Error: ship does not fit on board');
});

test('placing valid ship coordinate on board', () => {
    const s = Ship('Carrier', 5);
    const board = Gameboard();
    board.placeShip(s, [0,2]);

    expect(board.getBoard()).toEqual([
        ['','',s,s,s,s,s],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
    ])
});


//that the gameboard is recieving an attack on the board (using coordinates)



//test the functionality of an attack hitting a ship on the board


