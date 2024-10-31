
// Script

var rollFourSide = "";
var rollSixSide = "";
var rollTenSide = "";
var rollTwelveSide = "";
var rollTwentySide = "";

var answerText = document.getElementById('answer-text');
var twentyDieImage = document.getElementById('twenty-die-image');

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function dieRoll(chosenDie) {
    answerText.style.opacity = '0';
    setTimeout(
        function() {
            // twentyDieImage.style.transform = 'rotate(360deg)';
            if (twentyDieImage.style.transform !== 'rotate(360deg)') {
                twentyDieImage.style.transform = 'rotate(360deg)';
            } else {
                twentyDieImage.style.transform = '';
            };
        },
    ),
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
        },
        1250,
    );
};

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