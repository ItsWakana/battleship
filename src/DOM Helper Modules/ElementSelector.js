export const MyElements = () => {
    
    let playerCells;
    let computerCells;

    const startButton = document.querySelector('.start-game');
    const gameboardContainer = document.querySelector('.gameboards');
    const transitionContainer = document.querySelector('.transition-container');
    const buttonContainer = document.querySelector('.button-container');

    return {
        playerCells,
        computerCells,
        startButton,
        gameboardContainer,
        transitionContainer,
        buttonContainer,
    }
}