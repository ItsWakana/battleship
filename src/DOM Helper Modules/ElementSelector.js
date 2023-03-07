import rotate from '../assets/rotate.svg';
import close from '../assets/close.svg';
import information from '../assets/information.svg';
import captain1 from '../assets/captains/captain1.png';
import captain2 from '../assets/captains/captain2.png';
import captain3 from '../assets/captains/captain3.png';

export const MyElements = () => {
    
    let playerCells;
    let computerCells;

    const startButton = document.querySelector('.start-game');
    const gameboardContainer = document.querySelector('.gameboards');
    const transitionContainer = document.querySelector('.transition-container');
    const shipMainContainer = document.querySelector('.ship-main-container');
    const buttonContainer = document.querySelector('.button-container');

    return {
        playerCells,
        computerCells,
        startButton,
        gameboardContainer,
        transitionContainer,
        shipMainContainer,
        buttonContainer,
        rotate,
        close,
        information,
        captain1,
        captain2,
        captain3
    }
}