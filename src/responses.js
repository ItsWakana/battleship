export const AvatarResponses = () => {

    const playerHitResponse = () => {

        const responses = [
            `"Bullseye! Go again!"`,
            `"Nice shot! Enemy ship hit!"`,
            `"Direct hit! Next shot!"`
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const playerTurnResponse = () => {
        const responses = [
            `"Fire at will!"`,
            `"Take your shot!"`,
            `"You have the green light to attack."`,
            `"Show the enemy what we're made of!"`,
            `"We're counting on you, captain."`,
            `"Time to make your move."`
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const computerTurnResponse = () => {
        const responses = [
            `"The enemy is taking their shot."`,
            `"Its the enemies turn to fire."`,
            `"The enemy is attacking."`,
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const shipPlacementResponse = () => {
        const responses = [
            `"Place the ships, Cap'n!"`,
            `"Captain, lets place our fleet!"`,
            `"Let's begin placing our ships!"`,
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const computerMissResponse = () => {
        const responses = [
            `"A miss!"`,
            `"Damn, they missed it."`,
            `"That's good for us."`,
            `"Nice.."`,
            `"Plop... Nice miss."`
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }
    
    const playerMissResponse = () => {
        const responses = [
            `"Ah, too bad.."`,
            `"A miss for us, bad luck.."`,
            `"We'll hit them next time."`
        ]
    
        return responses[Math.floor(Math.random() * responses.length)]
    }

    return {
        playerHitResponse,
        playerMissResponse,
        playerTurnResponse,
        computerMissResponse,
        computerTurnResponse,
        shipPlacementResponse
    }
}
