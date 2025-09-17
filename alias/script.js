let words = [];

function loadWords() {
    fetch("words.json")
        .then(response => response.json())
        .then(data => {
            words = data;
            console.log("Слова завантажено:", words);
        })
        .catch(error => {
            console.error("Помилка завантаження слів:", error);
        });
}

loadWords()

function round(end) {
    const arr = [];
    for (let i = 0; i < 19; i++) {
        arr.push(i);
    }
    return arr
}

function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    const word = words[index]
    words.splice(index, 1)
    return word
}

// let currentIndex = 0;
let timerInterval;
let currentTeam = "red";
let scores = {red: 0, blue: 0};

const wordDisplay = document.getElementById("word-display");
const infoHelpDisplay = document.getElementById("info-help-display");
const startBtn = document.getElementById("start-btn");
const infoHelpBtn = document.getElementById("info-help-btn");
const skipBtn = document.getElementById("skip-btn");
const correctBtn = document.getElementById("correct-btn");
const timer = document.getElementById("timer");
const scoreRed = document.getElementById("score-red");
const scoreBlue = document.getElementById("score-blue");
const currentTeamDisplay = document.getElementById("current-team");

function startGame() {
    // currentIndex = 0;
    startBtn.disabled = true;

    startBtn.classList.toggle('d-none')
    infoHelpBtn.classList.toggle('d-none')

    skipBtn.disabled = false;
    correctBtn.disabled = false;
    showWord();
    startTimer();
}

function showWord() {
    const word = getRandomWord()
    if (word) {
        wordDisplay.textContent = word['word'];
        infoHelpDisplay.innerHTML = word['description'];
    } else {
        wordDisplay.textContent = "Кінець слів!";
        infoHelpDisplay.textContent = "Гра завершена, перезавантаж сторінку";
        disableButtons();
        clearInterval(timerInterval);
    }
}

function skipWord() {
    // currentIndex++;
    scores[currentTeam] = scores[currentTeam] - 1;
    updateScores();
    showWord()
}


function correctAnswer() {
    scores[currentTeam] = scores[currentTeam] + 2;
    updateScores();
    showWord()
    // skipWord();
}

function updateScores() {
    scoreRed.textContent = scores.red;
    scoreBlue.textContent = scores.blue;
}

function switchTeam() {
    currentTeam = currentTeam === "red" ? "blue" : "red";
    currentTeamDisplay.textContent = currentTeam === "red" ? "Червоні" : "Сині";
}

function startTimer() {
    let timeLeft = 60;
    // let timeLeft = 10; // for test
    timer.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            // TODO: add event listen
            wordDisplay.textContent = "Час вийшов!";

            startBtn.classList.toggle('d-none')
            infoHelpBtn.classList.toggle('d-none')

            disableButtons();
            switchTeam();
            startBtn.disabled = false;
        }
    }, 1000);
}

function disableButtons() {
    skipBtn.disabled = true;
    correctBtn.disabled = true;
}

startBtn.addEventListener("click", startGame);
skipBtn.addEventListener("click", skipWord);
correctBtn.addEventListener("click", correctAnswer);
