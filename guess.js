let images = [
    { img: "images/Horse.jpg", correctChoice: 1 },
    { img: "images/Falcon.jpg", correctChoice: 2 },
    { img: "images/Killer-Whale.jpg", correctChoice: 3 }
];
let score = 0;
let plays = 0;
let currentImage = 0;
let cardFlipped = false;

function loadImage() {
    currentImage = Math.floor(Math.random() * 4);
    document.getElementById('hiddenImage').src = images[currentImage].img;
    document.getElementById('flashcard').classList.remove('flipped');  // Ensure the card is reset to front
}

function checkAnswer(choice) {
    if (cardFlipped) return; // Prevent multiple clicks before flip completes

    cardFlipped = true;
    document.getElementById('flashcard').classList.add('flipped'); // Flip the card to show the image

    plays++;
    setTimeout(() => {
        if (choice === images[currentImage].correctChoice) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
        updateScoreboard();

        if (plays === 3) {
            setTimeout(() => {
                alert(`Game Over! Your final score is: ${score}`);
                resetGame();
            }, 500);
        } else {
            cardFlipped = false; // Allow further interaction
            loadImage();
        }
    }, 1000); // Delay to let the flip animation complete
}

function updateScoreboard() {
    document.getElementById('score').textContent = score;
    document.getElementById('plays').textContent = plays;
}

function resetGame() {
    score = 0;
    plays = 0;
    cardFlipped = false;
    updateScoreboard();
    loadImage();
}

// Start the game when the page loads
window.onload = loadImage;

function flipCard() {
    // No need to manually flip. The checkAnswer will trigger the flip.
}
