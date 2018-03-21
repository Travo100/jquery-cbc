// box picker
// make an object for four boxes

var boxes = [
    {
        name:"box box-1",
        score: 10
    },
    {
        name: "box box-2",
        score: 12
    },
    {
        name: "box box-3",
        score: 44
    }, 
    {
        name: "box box-4",
        score: 6
    }
];

var randomNumber = 6;

$("#randomNumber").text(randomNumber);

for (var i = 0; i < boxes.length; i++) {
    var div = $("<div>");
    div.addClass(boxes[i].name);
    div.attr("data-boxscore", boxes[i].score);
    $("#boxes").append(div);
}

// when you click on a box
$(".box").on("click", function(){

    var boxScore = parseInt($(this).attr("data-boxscore"));
    // if the score of the box 
    // matches the random number 
    // you win
    if(boxScore === randomNumber) {
        alert("You win! They match!")
    } else {
         // otherwise you lose
        alert("You lose!");
    }

   

});