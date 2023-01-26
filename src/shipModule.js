//ship factory should include a type, which we can define later from the ship that the user clicks on. 

export const Ship = (type) => (shipLength) => {

    let damageRecieved = 0;

    const hit = () => {
        damageRecieved++;
    }
    const isSunk = () => {
        // if (damageRecieved === shipLength) {
        //     return true;
        // } else {
        //     return false;
        // }
        return damageRecieved === shipLength;
    }

    return { type, length, damageRecieved, hit, isSunk };
}