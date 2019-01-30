let p1Score = 0;
let p2Score = 0;
const p1Score_span = document.getElementById("score-p1");
const p2Score_span = document.getElementById("score-p2");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getPlayer2Choice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    p1Score++;
    p1Score_span.innerHTML = p1Score;
    p2Score_span.innerHTML = p2Score;
    result_div.innerHTML = `${convertToWord(Player1)} beats ${convertToWord(Player2)}. You win!`;
    Player1Choice_div.classList.add("green-glow");
    setTimeout(() => Player1Choice_div.classlist.remove("green-glow"), 500);
}

function lose(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    p2Score++;
    p1Score_span.innerHTML = p1Score;
    p2Score_span.innerHTML = p2Score;
    result_div.innerHTML = `${convertToWord(Player1)} beats ${convertToWord(Player2)}... You lose... Ha!`;
    Player1Choice_div.classList.add("red-glow");
    setTimeout(() => Player1Choice_div.classList.remove("red-glow"), 500);
}

function draw(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    result_div.innerHTML = `${convertToWord(Player1)} beats ${convertToWord(Player2)}........ It's a draw...`;
    Player1Choice_div.classList.add("draw-glow");
    setTimeout(() => Player1Choice_div.classList.remove("draw-glow"), 500);
}

function game(Player1Choice) {
    const Player2Choice = getPlayer2Choice();
    switch (Player1Choice + Player2Choice) {
        case "rs":
        case "sp":
        case "pr":
            win(Player1Choice, Player2Choice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(Player1Choice, Player2Choice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(Player1Choice, Player2Choice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();