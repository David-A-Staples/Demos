
// Script

var inputField = document.getElementById('calcInput');

// Call getCurrentInput to update the current input variable
var currentInput = "";
function getCurrentInput() {
    currentInput = inputField.value;
}

var currentExpression = '';

var calculation = '';



function calculate() {
    getCurrentInput();

    console.log(currentInput);
    // console.log(currentInput + '+' + calculation);
};

// Buttons

var zeroButton = document.getElementById('calc-zero');
var oneButton = document.getElementById('calc-one');
var twoButton = document.getElementById('calc-two');
var threeButton = document.getElementById('calc-three');
var fourButton = document.getElementById('calc-four');
var fiveButton = document.getElementById('calc-five');
var sixButton = document.getElementById('calc-six');
var sevenButton = document.getElementById('calc-seven');
var eightButton = document.getElementById('calc-eight');
var nineButton = document.getElementById('calc-nine');

var decimalButton = document.getElementById('calc-decimal');
var percentButton = document.getElementById('calc-percent');
var clearButton = document.getElementById('calc-clear');

var equalsButton = document.getElementById('calc-enter');
var plusButton = document.getElementById('calc-plus');
var minusButton = document.getElementById('calc-minus');
var multiplyButton = document.getElementById('calc-multiply');
var divideButton = document.getElementById('calc-divide');
 
var openBracketButton = document.getElementById('calc-open-bracket');
var closeBracketButton = document.getElementById('calc-close-bracket');
var rootButton = document.getElementById('calc-root');
var piButton = document.getElementById('calc-pi');

function buttonPress(character) {
    getCurrentInput();
    inputField.value = currentInput + character;
}




// Handle keyboard presses

function keyboardPress(event) {
    let key = event.key;
    if (key == 'enter' || key == 'Enter') {
        calculate();
    }
};



// Toggle extra buttons

var extraButtons = document.getElementById('extra-buttons');
var toggleArrow = document.getElementById('toggle-arrow');

function expandButtons() {
    if (extraButtons.style.height == '0px') {
        extraButtons.style.height = 'initial';
        extraButtons.style.overflow = 'visible';
        toggleArrow.style.transform = 'rotate(180deg)';
    } else {
        extraButtons.style.height = '0px';
        extraButtons.style.overflow = 'hidden';
        toggleArrow.style.transform = 'rotate(0deg)';
    };
    
};



// Shuffle placeholder text

var placeholders = ['Math = hard', 'Numbers go brrr', 'Calculating...'];
var randomPlaceholders = Math.floor(Math.random() * placeholders.length);
var shufflePlaceholders = placeholders[randomPlaceholders];

function placeholderShuffle() {
    inputField.placeholder = shufflePlaceholders;
};
placeholderShuffle();



// History function

var historyWrap = document.getElementById('historyWrap');

function addToHistory() {
    getCurrentInput();
    
    const paragraph = document.createElement('p');
    paragraph.textContent = currentInput;

    historyWrap.appendChild(paragraph);
}



// Clear function

function clearInput() {
    getCurrentInput();

    if (inputField.value !== null && inputField.value !== undefined && inputField.value !== '') {
        addToHistory();
    } else {}

    inputField.value = '';
};