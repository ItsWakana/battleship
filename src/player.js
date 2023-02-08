import { Gameboard } from "./gameBoard"

export const Player = (name, opponentBoard, isCPU = false) => {
//factory for our different players (in the case of this game it would be the player and the computer) would take a name, and the opposing players board. So if we make a player it would take in the computers board.
    const attack = (coordinate) => {
        if (isCPU) {
            
            const validPositions = opponentBoard.getValidPositions();
            
            let cpuCoordinate = validPositions[Math.floor(Math.random() * validPositions.length - 1)];

            opponentBoard.recieveAttack(cpuCoordinate);

            return cpuCoordinate;
        }
        //check if isCPU is true, if it is we want to calculate a random coordinate on the boardand use that for the board to recieveAttack. 

        //player attack coordinate can be passed into here.
        opponentBoard.recieveAttack(coordinate);

    }

    const randomAttack = () => {
        const validPositions = opponentBoard.getValidPositions();
            
        let cpuCoordinate = validPositions[Math.floor(Math.random() * validPositions.length - 1)];

        opponentBoard.recieveAttack(cpuCoordinate);

        return cpuCoordinate;
    }

    return { attack }
}