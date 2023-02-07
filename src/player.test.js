import { Gameboard } from "./gameBoard";
import { Player } from "./player";
//we need to test the attack method of the Player factory firstly, to make sure the player attack is working as intended we'll need to expect the enemy's gameboard to display a marker on it.

describe('Attack', () => {

    let enemyBoard;

    beforeEach(() => enemyBoard = Gameboard());

    test('Attack a valid spot on the board', () => {

        const firstPlayer = Player('John', enemyBoard);
        
        firstPlayer.attack([4,4]);
    });
});