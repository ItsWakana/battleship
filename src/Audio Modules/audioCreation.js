// import miss1 from '../assets/sounds/shot-miss.mp3';
// import miss2 from '../assets/sounds/shot-miss2.mp3';
// import hit1 from '../assets/sounds/shot-hit.mp3';
// import hit2 from '../assets/sounds/shot-hit2.mp3';

import newHit1 from '../assets/sounds/hit.ogg';
import newMiss1 from '../assets/sounds/miss.ogg';
import backgroundWaves from '../assets/sounds/background-waves.ogg';

export const AudioSetup = () => {

    let shipHits = [];
    let shipMisses = [];

    let waves = new Audio(backgroundWaves);
    const generateAudioFiles = () => {
        // shipMisses.push(new Audio(miss1));
        // shipMisses.push(new Audio(miss2));

        // shipHits.push(new Audio(hit1));
        // shipHits.push(new Audio(hit2));

        shipMisses.push(new Audio(newMiss1));
        shipHits.push(new Audio(newHit1));

    }

    const playRandomHitSound = () => {
        if (shipHits.length === 0) {
            console.log('No hit sounds available');
            return;
        }
        const randomHit = shipHits[Math.floor(Math.random() * shipHits.length)];
        randomHit.volume = 0.4;
        randomHit.play();
    }

    const playRandomMissSound = () => {
        if (shipHits.length === 0) {
            console.log('No miss sounds available');
            return;
        }
        const randomMiss = shipMisses[Math.floor(Math.random() * shipMisses.length)];
        randomMiss.volume = 0.4;
        randomMiss.play();
    }

    const loopBackgroundSound = () => {
        waves.volume = 0.2;
        waves.play();

        waves.addEventListener('ended', () => {
            waves.currentTime = 0;
            waves.play();
        }, false);
    }

    return { generateAudioFiles, playRandomHitSound, playRandomMissSound, loopBackgroundSound }
}