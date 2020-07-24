// HTML events
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

const xSymbol = '×';
const oSymbol = '○'; 

// game variable
let gameIsLive = true;
let xIsNext = true;

// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;  

const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if (winner === 'x') {
        statusDiv.innerHTML = `${letterToSymbol(winner)} is winner`;
    } 
    else {
        statusDiv.innerHTML = `<span>${letterToSymbol(winner)} is winner</span>`;
    }


}

const updateGameStatus = () => {
    const first = cellDivs[0].classList[1];
    const second = cellDivs[1].classList[1];
    const third = cellDivs[2].classList[1];
    const forth = cellDivs[3].classList[1];
    const fifth = cellDivs[4].classList[1];
    const sixth = cellDivs[5].classList[1];
    const seventh = cellDivs[6].classList[1];
    const eight = cellDivs[7].classList[1];
    const nine = cellDivs[8].classList[1];

    // winner
    if (first && first === second && first === third) {
        handleWin(first);   
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (forth && forth === fifth && forth === sixth) {
        handleWin(forth); 
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    } else if (seventh && seventh === eight && seventh === nine) {
        handleWin(seventh); 
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (first && first === forth && first === seventh) {
        handleWin(first); 
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (second && second === fifth && second === eight) {
        handleWin(second); 
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (third && third === sixth && third === nine) {
        handleWin(third); 
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (first && first === fifth && first === nine) {
        handleWin(first); 
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (third && third === fifth && third === seventh) {
        handleWin(third); 
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (first && second && third && forth && fifth && sixth && seventh && eight && nine) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied!';
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
    
}

// event handlers
const handleReset = (e) => {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    winner = null;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
}

const handleCellClick = (e) => {
    const classList = e.target.classList;
    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }
    if (xIsNext) {
        classList.add('x');
        updateGameStatus();
    } else {
        classList.add('o');
        updateGameStatus();
    }
}

// event listner
resetDiv.addEventListener("click",handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener("click",handleCellClick)
}
