let p1Score = 0;
let p2Score = 0;
let time = 10;
let timer;

const p1Button = document.querySelector("#p1");
const p2Button = document.querySelector("#p2");
const p1Display = document.querySelector("#score1");
const p2Display = document.querySelector("#score2");

// ✅ FIXED LINE
const timerTag = document.getElementById("timer");

// PLAYER 1
function incrementp1() {
    p1Score++;
    p1Display.innerText = p1Score;
}

// PLAYER 2
function incrementp2() {
    p2Score++;
    p2Display.innerText = p2Score;
}

// TIMER
function startTimer() {
    clearInterval(timer);

    timer = setInterval(function () {
        time--;
        timerTag.innerText = "Time: " + time;

        if (time === 0) {
            clearInterval(timer);

            p1Button.disabled = true;
            p2Button.disabled = true;

            if (p1Score > p2Score) alert("Player 1 Wins!");
            else if (p2Score > p1Score) alert("Player 2 Wins!");
            else alert("Draw!");
        }
    }, 1000);
}

// RESET
function resetGame() {
    p1Score = 0;
    p2Score = 0;

    p1Display.innerText = 0;
    p2Display.innerText = 0;

    clearInterval(timer);
    time = 10;
    timerTag.innerText = "Time: 10";

    p1Button.disabled = false;
    p2Button.disabled = false;

    startTimer();
}

// START
startTimer();