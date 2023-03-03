import miss1 from '../assets/sounds/shot-miss.mp3';
import miss2 from '../assets/sounds/shot-miss2.mp3';
import hit1 from '../assets/sounds/shot-hit.mp3';
import hit2 from '../assets/sounds/shot-hit2.mp3';


export const AudioSetup = () => {

    let shipHits = [];
    let shipMisses = [];

    const generateAudioFiles = () => {
        shipMisses.push(new Audio(miss1));
        shipMisses.push(new Audio(miss2));

        shipHits.push(new Audio(hit1));
        shipHits.push(new Audio(hit2));

    }

    const playRandomHitSound = () => {
        if (shipHits.length === 0) {
            console.log('No hit sounds available');
            return;
        }
        shipHits[Math.floor(Math.random() * shipHits.length)].play();
    }

    const playRandomMissSound = () => {
        if (shipHits.length === 0) {
            console.log('No miss sounds available');
            return;
        }
        shipMisses[Math.floor(Math.random() * shipMisses.length)].play();
    }

    return { generateAudioFiles, playRandomHitSound, playRandomMissSound }
}