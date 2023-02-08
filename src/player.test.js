import { Gameboard } from "./gameBoard";
import { Player } from "./player";
//we need to test the attack method of the Player factory firstly, to make sure the player attack is working as intended we'll need to expect the enemy's gameboard to display a marker on it.

describe('Attack', () => {

    let enemyBoard;

    beforeEach(() => enemyBoard = Gameboard());

    test('CPU attack a valid spot on the board', () => {

        const computerPlayer = Player('CPU', enemyBoard, true);
        const compMove = computerPlayer.attack();


        expect(enemyBoard.getBoard()[compMove[0]][compMove[1]]).toBe('x');
    });

    test('Player attack spot on the board', () => {

        const player = Player('James', enemyBoard);

        player.attack([4,4]);

        expect(enemyBoard.getBoard()[4][4]).toBe('x');
    });
});