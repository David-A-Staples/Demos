
// Script

// var rollFourSide = getRandomNumber(1, 4);
// var rollSixSide = getRandomNumber(1, 6);
// var rollTenSide = getRandomNumber(1, 10);
// var rollTwelveSide = getRandomNumber(1, 12);
// var rollTwentySide = getRandomNumber(1, 20);

var rollFourSide = "";
var rollSixSide = "";
var rollTenSide = "";
var rollTwelveSide = "";
var rollTwentySide = "";

var answerText = document.getElementById('answer-text');
// var rollButton = document.getElementById('roll-button');

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function dieRoll(chosenDie) {
    
    if (chosenDie == "4-Sided") {
        answerText.innerText = '';
        var rollFourSide = getRandomNumber(1, 4);
        answerText.innerText = rollFourSide;
    };
    if (chosenDie == "6-Sided") {
        answerText.innerText = '';
        var rollSixSide = getRandomNumber(1, 6);
        answerText.innerText = rollSixSide;
    };
    if (chosenDie == "10-Sided") {
        answerText.innerText = '';
        var rollTenSide = getRandomNumber(1, 10);
        answerText.innerText = rollTenSide;
    };
    if (chosenDie == "12-Sided") {
        answerText.innerText = '';
        var rollTwelveSide = getRandomNumber(1, 12);
        answerText.innerText = rollTwelveSide;
    };
    if (chosenDie == "20-Sided") {
        answerText.innerText = '';
        var rollTwentySide = getRandomNumber(1, 20);
        answerText.innerText = rollTwentySide;
    };

};