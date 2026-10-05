// Game state arrays
let gameSequence = [];
let userSequence = [];

// Game control variables
let gameStarted = false;
let level = 0;
let score = 0;

const playBtn = document.querySelector(".play-btn");
const scoreValue = document.querySelector(".score-value");
const highScoreValue = document.querySelector(".high-score-value");

// Persistent High Score
let highScore = localStorage.getItem("highScore") || 0;
highScoreValue.textContent = highScore;

// Start game when play button is clicked
playBtn.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        levelUp();
    }
});

// Function to move to next level
function levelUp() {
    userSequence = []; // reset user input for new round
    level++;
    playBtn.querySelector("span").innerText = "Level " + level;

    // Pick a random color
    const colors = ["green", "red", "yellow", "blue"];
    const randomColor = colors[Math.floor(Math.random() * 4)];
    gameSequence.push(randomColor);
    // Replay the entire sequence
    let i = 0;
    const interval = setInterval(() => {
        colorGlow(gameSequence[i]);
        i++;
        if (i >= gameSequence.length) {
            clearInterval(interval);
        }
    }, 600); // 600ms gap between flashes
}

// Function to flash a button with CSS effect + sound
function colorGlow(color) {
    const button = document.getElementById(color);
    button.classList.add(color + "-click");

    // Play sound for this color
    sounds[color].currentTime = 0;
    sounds[color].play();

    setTimeout(() => {
        button.classList.remove(color + "-click");
    }, 250);
}

// Select all color buttons
let colorBtns = document.querySelectorAll(".color-btn");

// Add click event listener to each button
for (let colorBtn of colorBtns) {
    colorBtn.addEventListener("click", colorBtnClick);
}

// Function to handle user clicks
function colorBtnClick(event) {
    let chosenColor = event.target.id;
    userSequence.push(chosenColor);

    colorGlow(chosenColor);

    checkAnswer(userSequence.length - 1);
}

// Check user input against game sequence
function checkAnswer(currentIndex) {
    if (userSequence[currentIndex] === gameSequence[currentIndex]) {
        // If user completed the sequence correctly        
        if (userSequence.length === gameSequence.length) {
            // Correct full sequence
            score++;
            scoreValue.textContent = score;
            // Update high score if beaten
            if (score > highScore) {
                highScore = score;
                highScoreValue.textContent = highScore;
                localStorage.setItem("highScore", highScore);
            }

            sounds.success.play();

            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    } else {
        // Wrong choice → Game Over
        const playText = playBtn.querySelector("span");
        playText.innerText = "Game Over! Click to Play";
        sounds.gameOver.play();
        resetGame();
    }
}

// Reset game after Game Over
function resetGame() {
    gameStarted = false;
    level = 0;
    score = 0;
    scoreValue.textContent = score;

    userSequence = [];
    gameSequence = [];
}

/* Sound Effects */
const sounds = {
    green: new Audio("assets/sounds/pad-green.wav"),
    red: new Audio("assets/sounds/pad-red.wav"),
    yellow: new Audio("assets/sounds/pad-yellow.wav"),
    blue: new Audio("assets/sounds/pad-blue.wav"),
    success: new Audio("assets/sounds/success-chime.wav"),
    gameOver: new Audio("assets/sounds/game-over.wav")
};

/* Cursor Glow Effect */
const glowCursor = document.querySelector('.cursor-glow');

// Track cursor position
document.addEventListener('mousemove', (e) => {
    glowCursor.style.left = `${e.clientX}px`;
    glowCursor.style.top = `${e.clientY}px`;
});

// Animate glow on click
document.addEventListener('mousedown', () => glowCursor.classList.add('clicking'));
document.addEventListener('mouseup', () => glowCursor.classList.remove('clicking'));

/* Dyanamic Glow Color Change on Hover */
const colorGlows = {
    green: 'rgba(0,255,0,0.6)',
    red: 'rgba(255,0,0,0.6)',
    yellow: 'rgba(255,255,0,0.6)',
    blue: 'rgba(0,0,255,0.6)'
};

// Change cursor glow when hovering over color buttons
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        glowCursor.style.boxShadow = `0 0 25px 8px ${colorGlows[btn.id]}`;
    });
    btn.addEventListener('mouseleave', () => {
        glowCursor.style.boxShadow = '0 0 20px 6px rgba(255,255,255,0.5)';
    });
});