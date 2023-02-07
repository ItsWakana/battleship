import { Gameboard } from "./gameBoard";
import { Player } from "./player";
//we need to test the attack method of the Player factory firstly, to make sure the player attack is working as intended we'll need to expect the enemy's gameboard to display a marker on it.

describe('Attack', () => {

    let enemyBoard;

    beforeEach(() => enemyBoard = Gameboard());

    test('CPU attack a valid spot on the board', () => {

        const computerPlayer = Player('CPU', enemyBoard);
        const validPositions = enemyBoard.getValidPositions();
        const pos = validPositions[Math.floor(Math.random() * validPositions.length - 1)];

        computerPlayer.attack(pos);

        console.log(pos);
        expect(enemyBoard.getBoard()[pos[0][pos[1]]]).toBe(pos);
    });
});