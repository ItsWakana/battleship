//ship factory should include a type, which we can define later from the ship that the user clicks on. 

export const Ship = (type, length) => {

    let damageRecieved = 0;

    const hit = () => {
        damageRecieved++;
    }
    const isSunk = () => damageRecieved === length;
    

    const getDamageRecieved = () => damageRecieved;

    return { type, length, getDamageRecieved, hit, isSunk }
}