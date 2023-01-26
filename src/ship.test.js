import { Ship } from "./shipModule";

test('ship has recieved damage', () => {
    const shipCarrier = Ship('Carrier', 5);
    shipCarrier.hit();
    expect(shipCarrier.getDamageRecieved()).toBe(1);
});

test('ship has recieved damage', () => {
    const shipCarrier = Ship('Carrier', 5);
    for (let i=0; i<5; i++) {
        shipCarrier.hit();
    }
    expect(shipCarrier.getDamageRecieved()).toBe(5);
});

test('check if ship is sunk', () => {
    const shipBattleship = Ship('Battleship', 4);
    for (let i=0; i<4; i++) {
        shipBattleship.hit();
    }

    expect(shipBattleship.isSunk()).toBe(true);
});

test('check if ship is sunk', () => {
    const shipBattleship = Ship('Battleship', 4);
    for (let i=0; i<2; i++) {
        shipBattleship.hit();
    }

    expect(shipBattleship.isSunk()).toBe(false);
});