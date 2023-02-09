//function to generate the grid

const DOMHelperCreation = () => {

    const makeGridSquares = (container) => {
            for (let i=0; i<10; i++) {
                const row = document.createElement('div');
                row.className = 'row';
                container.appendChild(row);
    
                for (let j=0; j<10; j++) {
                    const box = document.createElement('div');
                    box.className = 'box';
                    row.appendChild(box);
                }
            } 
    }

    return { makeGridSquares }
}

export const DOM = () => {

    const DOMHelper = DOMHelperCreation();

    const generateGrid = () => {

        const leftBoard = document.querySelector('.grid.left');
        const rightBoard = document.querySelector('.grid.right');

        if (leftBoard.dataset.grid === 'false') {
            DOMHelper.makeGridSquares(leftBoard);
            DOMHelper.makeGridSquares(rightBoard);
            leftBoard.dataset.grid = 'true';
            rightBoard.dataset.grid = 'true';
        }
    }

    return { generateGrid }
}
