

var words = ["football, futbol" +
"soccer, tennis" +
"basketball", "lacrosse"];

var easy = [];
var medium = [];
var hard = [];
var word = "";
var guess = 10;
var guessedLetters = [];

function getWord() {
    var value = document.getElementById("difficulty").value;
    if (value == 1) {
        word = easy[Math.floor(Math.random() * easy.length)];
    }
    if (value == 2) {
        word = easy[Math.floor(Math.random() * medium.length)];
    }
    if (value == "3")
        word = words[Math.floor(Math.random() * hard.length)];
    setBoard();
}

function setBoard(){
    var board = "";
    for (var i=0; i<word.length; i++){
        if (guessedLetters.indexOf(word[i]) === -1){
            board += "_ ";
            console.log(board);
        }else{
            board += word[i];
            console.log(board);
        }
    }
    document.getElementById("board").innerHTML = board;
}

function guess(){
    guessedLetters += document.getElementById("guess").value;
    setBoard();
}