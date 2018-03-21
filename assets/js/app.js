// box picker
// make an object for four boxes

var boxes = [
    {
        name:"box box-1",
        score: 1
    },
    {
        name: "box box-2",
        score: 2
    },
    {
        name: "box box-3",
        score: 3
    }, 
    {
        name: "box box-4",
        score: 4
    }
];

var randomNumber = getRandomInt(1, 4);
var userGuesses = 2;
var intervalId;
var count = 5;


$("#randomNumber").text(randomNumber);
$("#userGuess").text(userGuesses);

$("#start-game").on("click", function(){
    clearInterval(intervalId);
    intervalId = setInterval(function(){
        $("#timeLeft").text(count);
        count--;
        if(count < 0) {
            alert("Time up you lose!");
            restartGame();
        }
    }, 1000);
});

function startGame() {
    // add the boxes 
    // to the game with a random score 
    // in each box
    for (var i = 0; i < boxes.length; i++) {
        var div = $("<div>");
        boxes[i].score = getRandomInt(1, 4);
        div.addClass(boxes[i].name);
        div.attr("data-boxscore", boxes[i].score);
        $("#boxes").append(div);
    }
}

startGame();

function restartGame() {
    // replaces old box scores 
    // with new box scores
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].score = getRandomInt(1, 4);
    }
    // update the user guesses to 2
    userGuesses = 2;
    // changes the randomNumber between 1 and 4
    randomNumber = getRandomInt(1, 4);

    // update the UI to reflect it
    $("#userGuess").text(userGuesses);
    $("#randomNumber").text(randomNumber);
    count = 5;
}


// when you click on a box
$(".box").on("click", function(){
    userGuesses--;
    $("#userGuess").text(userGuesses);
    var boxScore = parseInt($(this).attr("data-boxscore"));
    // if the score of the box 
    // matches the random number 
    // you win
    if(boxScore === randomNumber) {
        alert("You win! They match!");
        restartGame();
    }

    if (userGuesses === 0) {
        alert("You lose!");
        restartGame();
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}