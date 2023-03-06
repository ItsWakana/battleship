
export const Player = (name, opponentBoard, isCPU = false) => {
//factory for our different players (in the case of this game it would be the player and the computer) would take a name, and the opposing players board. So if we make a player it would take in the computers board.

    const caculationRandomPosition = () => {

        const validPositions = opponentBoard.getValidAttacks();
        const position = validPositions[Math.floor(Math.random() * validPositions.length)];

        return position;
    }

    const calculateAdjacentPosition = (coordinate) => {
        //y coordinate first, then x
        const validPositions = opponentBoard.getValidAttacks();
        // const adjacentPositions = [
        //     [coordinate[0] - 1, coordinate[1]],
        //     [coordinate[0] + 1, coordinate[1]],
        //     [coordinate[0], coordinate[1] - 1],
        //     [coordinate[0], coordinate[1] + 1],
        // ]
        const adjacentPositions = [
            [Number(coordinate[0]) - 1, Number(coordinate[1])],
            [Number(coordinate[0]) + 1, Number(coordinate[1])],
            [Number(coordinate[0]), Number(coordinate[1]) - 1],
            [Number(coordinate[0]), Number(coordinate[1]) + 1],
        ]
        // console.log(adjacentPositions)
        let randomPosition = adjacentPositions[Math.floor(Math.random() * adjacentPositions.length)];

        let randomPositionString = JSON.stringify(randomPosition);


        while (!validPositions.some((validPosition) => JSON.stringify(validPosition) === randomPositionString)) {
            randomPosition = adjacentPositions[Math.floor(Math.random() * adjacentPositions.length)];

            randomPositionString = JSON.stringify(randomPosition);
        }
        // while (!validPositions.includes(randomPosition)) {
        //     randomPosition = adjacentPositions[Math.floor(Math.random() * adjacentPositions.length)];
        // }

        return randomPosition;
        //1 above
        //1 below
        //1 to the left
        //1 to the right
    }

    const attack = (coordinate) => {
        if (isCPU) {

            const randomPosition = caculationRandomPosition();
            opponentBoard.recieveAttack(randomPosition);

            return randomPosition;
        }
        return opponentBoard.recieveAttack(coordinate)

    }

    const attackAdjacentCell = (coordinate) => {
        console.log(coordinate);
        const randomAdjacentCell = calculateAdjacentPosition(coordinate);

        opponentBoard.recieveAttack(randomAdjacentCell);
        console.log(randomAdjacentCell);
        return randomAdjacentCell;
    }

    const getName = () => {
        return name;
    }

    return { attack, getName, attackAdjacentCell }
}