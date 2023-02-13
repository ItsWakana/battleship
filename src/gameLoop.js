import { gameState } from "./gameState"

//should run through our game turn by turn, it is in this gameLoop we should initialize our game module. Which will include all our methods for working with the game. We could set up a condition like a while loop that continues until the game state is terminal.

const gameLoop = () => {

    const game = gameState();

    let isGameOver = false;
    //we could have a method on our game object like 'isGameOver()' which checks if either the computer or players ships have all sunk. and call it like 
    
    // if (game.isGameOver()) return 'game is over';

}