const boxes = document.querySelectorAll('.box');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const box5 = document.querySelector('.box-5');
const box6 = document.querySelector('.box-6');
const box7 = document.querySelector('.box-7');
const box8 = document.querySelector('.box-8');
const box9 = document.querySelector('.box-9');
const container = document.querySelector('.container');
const turn = document.querySelector('#turn');
const x = document.querySelector('#x');
const o = document.querySelector('#o');
const whoWon = document.querySelector('.whoWon');
const overlay = document.querySelector('#overlay');
const reset = document.querySelector('.reset');
var whoPlays = 1;
var xWon = 0;
var oWon = 0;
var moveCount = 0;


// Setting up score in local storage
if (localStorage.getItem('xScore')) {
    xWon = parseInt(localStorage.getItem('xScore'));
    localStorage.setItem('xScore', xWon);
} else {
    localStorage.setItem('xScore', xWon);
}

if (localStorage.getItem('oScore')) {
    oWon = parseInt(localStorage.getItem('oScore'));
    localStorage.setItem('oScore', oWon);
} else {
    localStorage.setItem('oScore', oWon);

}

//Reload after a game ends
function restart() {
    window.location.reload();
}


// Tracks who's turn it is
function move(e) {
    if (whoPlays === 1) {
        e.target.classList.add('X');
        turn.textContent = 'O';
        whoPlays = 2;
        moveCount++;
    } else if (whoPlays === 2) {
        e.target.classList.add('O');
        turn.textContent = 'X';
        whoPlays = 1;
        moveCount++;
    }
}


box1.addEventListener('click', move);
box2.addEventListener('click', move);
box3.addEventListener('click', move);
box4.addEventListener('click', move);
box5.addEventListener('click', move);
box6.addEventListener('click', move);
box7.addEventListener('click', move);
box8.addEventListener('click', move);
box9.addEventListener('click', move);


x.innerText = xWon;
o.innerText = oWon;

// Checks if it's a draw
function isDraw() {
    if ((box1.classList.contains('X') || box1.classList.contains('O')) && (box1.classList.contains('X') || box1.classList.contains('O')) &&
        (box2.classList.contains('X') || box2.classList.contains('O')) &&
        (box3.classList.contains('X') || box3.classList.contains('O')) &&
        (box4.classList.contains('X') || box4.classList.contains('O')) &&
        (box5.classList.contains('X') || box5.classList.contains('O')) &&
        (box6.classList.contains('X') || box6.classList.contains('O')) &&
        (box7.classList.contains('X') || box7.classList.contains('O')) &&
        (box8.classList.contains('X') || box8.classList.contains('O')) &&
        (box9.classList.contains('X') || box9.classList.contains('O'))) {
        return true;
    }

}



// Game 

function game() {
    if ((box1.classList.contains('X') && box2.classList.contains('X') && box3.classList.contains('X'))
        || (box1.classList.contains('X') && box5.classList.contains('X') && box9.classList.contains('X'))
        || (box1.classList.contains('X') && box4.classList.contains('X') && box7.classList.contains('X'))
        || (box2.classList.contains('X') && box5.classList.contains('X') && box8.classList.contains('X'))
        || (box3.classList.contains('X') && box6.classList.contains('X') && box9.classList.contains('X'))
        || (box3.classList.contains('X') && box5.classList.contains('X') && box7.classList.contains('X'))
        || (box7.classList.contains('X') && box8.classList.contains('X') && box9.classList.contains('X'))
        || (box4.classList.contains('X') && box5.classList.contains('X') && box6.classList.contains('X'))
    ) {

        whoWon.innerHTML = "<h1 style='font-size: 50px; color: white;'> X WON </h1>";
        whoWon.style.display = 'block';
        overlay.classList.add('active');
        xWon++;
        localStorage.setItem('xScore', xWon);
        x.innerText = localStorage.getItem('xScore');
        setTimeout(restart, 1500);
    } else if ((box1.classList.contains('O') && box2.classList.contains('O') && box3.classList.contains('O'))
        || (box1.classList.contains('O') && box5.classList.contains('O') && box9.classList.contains('O'))
        || (box1.classList.contains('O') && box4.classList.contains('O') && box7.classList.contains('O'))
        || (box2.classList.contains('O') && box5.classList.contains('O') && box8.classList.contains('O'))
        || (box3.classList.contains('O') && box6.classList.contains('O') && box9.classList.contains('O'))
        || (box3.classList.contains('O') && box5.classList.contains('O') && box7.classList.contains('O'))
        || (box7.classList.contains('O') && box8.classList.contains('O') && box9.classList.contains('O'))
        || (box4.classList.contains('O') && box5.classList.contains('O') && box6.classList.contains('O'))
    ) {

        whoWon.innerHTML = "<h1 style='font-size: 50px; color: white;'> O WON </h1>";
        whoWon.style.display = 'block';
        overlay.classList.add('active');
        oWon++;
        localStorage.setItem('oScore', oWon);
        o.innerText = localStorage.getItem('oScore');
        setTimeout(restart, 1500);
    } else if (moveCount === 9 && isDraw()) {
        whoWon.innerHTML = "<h1 style='font-size: 50px; color: white;'> DRAW </h1>";
        whoWon.style.display = 'block';
        overlay.classList.add('active');
        setTimeout(restart, 1500);
    }
}

boxes.forEach(box => {
    box.addEventListener('click', game);
})

// Reset Score
function resetScore() {
    localStorage.clear();
    xWon = 0;
    oWon = 0;
    x.innerText = xWon;
    o.innerText = oWon;
}

reset.addEventListener('click', resetScore);