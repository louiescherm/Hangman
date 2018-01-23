var easy = ["football", "soccer"];
var medium = ["football", "futbol"];
var hard = ["basketball", "lacrosse"];
var word = "";
var guessesLeft = 10;
var guessedLetters = [];
var board = "";

function getWord() {
    guessedLetters = [];
    var value = document.getElementById("difficulty").value;
    if (value === "1") {
        word = easy[Math.floor(Math.random() * easy.length)];
    }
    if (value === "2") {
        word = medium[Math.floor(Math.random() * medium.length)];
    }
    if (value === "3")
        word = hard[Math.floor(Math.random() * hard.length)];
    setBoard();
}

function setBoard(){
    board = "";
    for (var i = 0; i < word.length; i++){
        if (guessedLetters.indexOf(word[i]) === -1){
            board += "_ ";
        }else{
            board += word[i];
        }
    }
    document.getElementById("board").innerHTML = board;
}

function guess(letter){
    guessedLetters += letter;
    setBoard();
    if(word.search(letter)===-1) guessesLeft -= 1;
    if(guessesLeft <= 0){
        document.getElementById("board").innerHTML = "You Lose" + "<img src='Images/Loser.jpg'>";
    }
    if(board.search("_")==-1) document.getElementById("board").innerHTML = "You Win" + "<img src='Images/Winner.jpg'>";
}