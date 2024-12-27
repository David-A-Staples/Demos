
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

    // Get a random number with one decimal place, used as the base variable
    var dieRollRandom = getRandomNumberOneDecimal(0.7, 1.4);
    console.log(dieRollRandom + "s");

    // Multiply the variable by 1000 to get milliseconds
    var dieRollRandomMill = dieRollRandom * 1000;

    // A delayed version of the variable
    var dieRollRandomDelayed = dieRollRandomMill + 500;

    // A version of the varable for CSS
    var dieRollRandomSeconds = dieRollRandom + 's';
    
    // Roll die image
    setTimeout(
        // function() {
        //     dice.forEach(function(dieImage) {
        //         dieImage.style.scale = '1.2';
        //     });
        // }, 0,
        function() {
            dice.forEach(function(dieImage) {
                // Set the duration of the die roll animation transition by changing the CSS variable
                document.documentElement.style.setProperty('--dieroll-duration', `${dieRollRandomSeconds}`);

                // Rotate the die
                if (dieImage.style.rotate !== '720deg') {
                    dieImage.style.rotate = '720deg';
                } else {
                    dieImage.style.rotate = '';
                };

                // Scale the die
                
                setTimeout(
                    function() {
                        dieImage.style.scale = '1';
                    }, 100,
                );
            });
        }, 200,
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
        }, dieRollRandomDelayed,
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

        }, dieRollRandomDelayed,
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

// Get random number with one decimal place, used for die roll timing
function getRandomNumberOneDecimal(min, max) {
    const random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(1));
};

function dieScale() {
    dice.forEach(function(dieImage) {
        dieImage.style.scale = '1.2';
    });
};