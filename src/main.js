import { Ship } from "./shipModule";
import { Gameboard } from "./gameBoard";
import { Player } from "./player";

const gameLoop = () => {

    const playerBoard = Gameboard();
    const computerBoard = Gameboard();

    const player = Player('V', computerBoard);
    const computer = Player('comp', playerBoard, true);

    console.log(playerBoard.getBoard());
}
