const message = document.querySelector('.firstContainer');
const squareContainer = document.querySelector('.container');
const numberOfChar = document.querySelector('#numberOfCharacters');
const submitBtn = document.querySelector('#submitBtn');
const charArea = document.createElement('input');
const palindromDiv = document.querySelector('.palindromText');
const deleteMessage = document.querySelector('.deleteMessage');

var j = 0;
var chars = '';
var itemsProcessed = 0;

var numberOfCharInt = parseInt(numberOfChar.value);


// Squares appear on button click
function showSquares() {
    if (numberOfChar.value > 0) {
        for (let i = 0; i < numberOfChar.value; i++) {
            message.style.display = 'none';
            const charBox = document.createElement('input');
            charBox.classList.add('square');
            charBox.setAttribute('maxlength', '1');
            charBox.addEventListener('keydown', deleteSquare);
            charBox.addEventListener('input', () => {
                if (chars.length <= numberOfChar.value) {
                    chars += charBox.value;
                };
                if (chars.length === numberOfCharInt) {

                    isPalindrom();
                }
            });


            squareContainer.appendChild(charBox);
        }
    } else {
        alert('Please enter a number of characters.');
    }
};


// Button for adding squares
function addSquareBox() {
    if (numberOfChar.value > 0) {
        const addSquare = document.createElement("button");
        addSquare.classList.add('plusSquare');
        squareContainer.appendChild(addSquare);
        addSquare.addEventListener('click', addMoreSquares);
    }
}


// Check if characters create a palindrom
function isPalindrom() {

    // convert string to an array
    const arrayValues = chars.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if (chars == reverseString) {
        palindromDiv.innerHTML = 'It is a palindrom!';
    }
    else {

        palindromDiv.innerHTML = 'It is not a palindrom!';

    }

}

// Adding more squares on click
function addMoreSquares() {
    const charBox = document.createElement('input');
    charBox.classList.add('square');
    charBox.setAttribute('maxlength', '1');
    charBox.addEventListener('keydown', deleteSquare);
    squareContainer.appendChild(charBox);
    numberOfCharInt += 1;
    charBox.addEventListener('input', () => {
        chars += charBox.value;
        if (chars.length === numberOfCharInt) {
            isPalindrom();
        }
    });
}

function deleteSquare(e) {
    if (e.keyCode === 46) {
        e.target.style.display = 'none';
    }
}


function howToDeleteSquaresMessage() {
    deleteMessage.innerText = 'Delete square using delete key!';
}

// Event Listeners
submitBtn.addEventListener('click', addSquareBox);
submitBtn.addEventListener('click', showSquares);
submitBtn.addEventListener('click', howToDeleteSquaresMessage);
