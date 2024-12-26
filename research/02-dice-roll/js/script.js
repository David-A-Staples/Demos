
// Script

var rollFourSide = '';
var rollSixSide = '';
var rollEightSide = '';
var rollTenSide = '';
var rollTwelveSide = '';
var rollTwentySide = '';

var historyContainer = document.getElementById('historyContainer');
var currentAnswer = '';

var answerText = document.getElementById('answer-text');

var dice = document.querySelectorAll('.die');
var fourDieImage = document.getElementById('four-die-image');
var sixDieImage = document.getElementById('six-die-image');
var eightDieImage = document.getElementById('eight-die-image');
var tenDieImage = document.getElementById('ten-die-image');
var twelveDieImage = document.getElementById('twelve-die-image');
var twentyDieImage = document.getElementById('twenty-die-image');

var activeDie = '';

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function dieRoll(chosenDie) {
    answerText.style.opacity = '0';

    // Roll die image
    setTimeout(
        function() {
            dice.forEach(function(dieImage) {
                if (dieImage.style.transform !== 'rotate(360deg)') {
                    dieImage.style.transform = 'rotate(360deg)';
                } else {
                    dieImage.style.transform = '';
                }
            });
        }, 0,
    );

    // Die roll, based on selected die
    setTimeout(
        function() {
            if (chosenDie == "4-Sided") {
                answerText.innerText = '';
                var rollFourSide = getRandomNumber(1, 4);
                answerText.innerText = rollFourSide;
                answerText.style.opacity = '1';
            };
            if (chosenDie == "6-Sided") {
                answerText.innerText = '';
                var rollSixSide = getRandomNumber(1, 6);
                answerText.innerText = rollSixSide;
                answerText.style.opacity = '1';
            };
            if (chosenDie == "8-Sided") {
                answerText.innerText = '';
                var rollEightSide = getRandomNumber(1, 8);
                answerText.innerText = rollEightSide;
                answerText.style.opacity = '1';
            };
            if (chosenDie == "10-Sided") {
                answerText.innerText = '';
                var rollTenSide = getRandomNumber(1, 10);
                answerText.innerText = rollTenSide;
                answerText.style.opacity = '1';
            };
            if (chosenDie == "12-Sided") {
                answerText.innerText = '';
                var rollTwelveSide = getRandomNumber(1, 12);
                answerText.innerText = rollTwelveSide;
                answerText.style.opacity = '1';
            };
            if (chosenDie == "20-Sided") {
                answerText.innerText = '';
                var rollTwentySide = getRandomNumber(1, 20);
                answerText.innerText = rollTwentySide;
                answerText.style.opacity = '1';
            };
        }, 750,
    );
    
    // Add result to history
    const paragraph = document.createElement('p');
    let selectedDie = diceList.value;
    setTimeout(
        function() {
            let currentAnswer = answerText.textContent;
            
            var historyEntry = document.createTextNode(selectedDie + ': ' + currentAnswer);

            // Append paragraph, then result to paragraph
            paragraph.appendChild(historyEntry);
            historyContainer.appendChild(paragraph);

            // Make history paragraphs visible
            var allHistoryParagraphs = historyContainer.querySelectorAll('p');
            allHistoryParagraphs.forEach(function(paragraph) {
                paragraph.style.opacity = '1';
            });

        }, 1500,
    );
    
};

// Make height of .nav-wrap equal to .history
// function setHistoryNavHeights() {
//     var historyWrap = document.querySelector('.history-wrap');
//     var activeHistoryHeight = historyWrap.clientHeight;
//     var navWrap = document.querySelector('.nav-wrap');

//     navWrap.style.height = activeHistoryHeight + 'px';
// };

// Toggle open history
function historyOpen() {
    var history = document.querySelector('.history');

    if (history.style.maxHeight !== '18px') {
        history.style.maxHeight = '18px';
    } else {
        history.style.maxHeight = '206px';
    }

    historyContainer.style.paddingBottom = '5px';
    historyContainer.style.borderBottom = '1px solid #ccc';
    historyContainer.style.marginBottom = '10px';
};

// Change dice image when die is selected
var diceList = document.getElementById('dice');
var selectedDie = '';

diceList.addEventListener('change', function() {
    var selectedDie = this.value;

    // console.log('Selected die: ', selectedDie);

    var activeDie = document.querySelector('.die.active-die');

    if (selectedDie == "4-Sided") {
        activeDie.classList.remove('active-die');
        fourDieImage.classList.add('active-die');
    };
    if (selectedDie == "6-Sided") {
        activeDie.classList.remove('active-die');
        sixDieImage.classList.add('active-die');
    };
    if (selectedDie == "8-Sided") {
        activeDie.classList.remove('active-die');
        eightDieImage.classList.add('active-die');
    };
    if (selectedDie == "10-Sided") {
        activeDie.classList.remove('active-die');
        tenDieImage.classList.add('active-die');
    };
    if (selectedDie == "12-Sided") {
        activeDie.classList.remove('active-die');
        twelveDieImage.classList.add('active-die');
    };
    if (selectedDie == "20-Sided") {
        activeDie.classList.remove('active-die');
        twentyDieImage.classList.add('active-die');
    };

    answerText.style.opacity = '0';
    setTimeout(
        function() {
            answerText.innerText = '?';
        },
        50,
    );
    setTimeout(
        function() {
            answerText.style.opacity = '1';
        },
        100,
    );
    
});

// function dieRoll(chosenDie) {
//     answerText.style.opacity = '0';

//     if (chosenDie == "4-Sided") {
//         answerText.innerText = '';
//         var rollFourSide = getRandomNumber(1, 4);
//         answerText.innerText = rollFourSide;
//     };
//     if (chosenDie == "6-Sided") {
//         answerText.innerText = '';
//         var rollSixSide = getRandomNumber(1, 6);
//         answerText.innerText = rollSixSide;
//     };
//     if (chosenDie == "10-Sided") {
//         answerText.innerText = '';
//         var rollTenSide = getRandomNumber(1, 10);
//         answerText.innerText = rollTenSide;
//     };
//     if (chosenDie == "12-Sided") {
//         answerText.innerText = '';
//         var rollTwelveSide = getRandomNumber(1, 12);
//         answerText.innerText = rollTwelveSide;
//     };
//     if (chosenDie == "20-Sided") {
//         answerText.innerText = '';
//         var rollTwentySide = getRandomNumber(1, 20);
//         answerText.innerText = rollTwentySide;
//     };

// };