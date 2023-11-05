const greetPage = document.querySelector(".greet-container");
const gameMain = document.querySelector(".game-main");
const gameScene = document.querySelector(".game-scene");
const selections = document.querySelector(".selections");

const user = gameScene.querySelector(".user");
const winner = document.querySelector(".winner");
const computer = gameScene.querySelector(".computer");

const selectionButtons = document.querySelectorAll(".selection-buttons");

// Whole Game
class Game {
  startBtn = document.querySelector(".start");
  randomNumber = Math.trunc(Math.random() * 3 + 1);

  constructor() {
    // Statics
    winner.textContent = "Waiting...";
    gameMain.style.display ='none'

    // Switch to main section
    this.startGame();

    // Selected icon from user
    this.selectedIcon();
  }

  // Check random number then render
  randomHand() {
    // Rock
    if (this.randomNumber === 1) {
      computer.innerHTML = `<img src="img/computer-fist.png" alt="computer-fist">`;
    }
    // Paper
    if (this.randomNumber === 2) {
      computer.innerHTML = `<img src="img/computer-hand.png" alt="computer-hand">`;
    }
    // Scissors
    if (this.randomNumber === 3) {
      computer.innerHTML = `<img src="img/computer-scissors.png" alt="computer-scissors">`;
    }
  }

  // Start button
  startGame() {
    this.startBtn.addEventListener("click", function () {
      greetPage.classList.toggle("hidden");
      gameMain.style.display = "flex";
      gameMain.classList.remove('hidden')
    });
  }

  // Compare Results
  compareResults(btn) {
    // Draw results
    if (btn.classList.contains("rock") && this.randomNumber === 1)
      winner.textContent = "Draw!";
    if (btn.classList.contains("paper") && this.randomNumber === 2)
      winner.textContent = "Draw!";
    if (btn.classList.contains("scissors") && this.randomNumber === 3)
      winner.textContent = "Draw!";

    // Lose Results
    if (btn.classList.contains("rock") && this.randomNumber === 2)
      winner.textContent = "You Lose!";
    if (btn.classList.contains("paper") && this.randomNumber === 3)
      winner.textContent = "You Lose!";
    if (btn.classList.contains("scissors") && this.randomNumber === 1)
      winner.textContent = "You Lose!";

    // Win Results
    if (btn.classList.contains("rock") && this.randomNumber === 3)
    winner.textContent = "You Win!";
    if (btn.classList.contains("paper") && this.randomNumber === 1)
    winner.textContent = "You Win!";
    if (btn.classList.contains("scissors") && this.randomNumber === 2)
    winner.textContent = "You Win!";
  }

  // User choice
  selectedIcon() {
    // Selecting icon
    selectionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Starter each time
        this.randomNumber = Math.trunc(Math.random() * 3 + 1);
        user.classList.add("userAnimate");
        computer.classList.add("compAnimate");

        // ROCK
        if (btn.classList.contains("rock")) {
          setTimeout(() => {
            // User's Hand
            user.innerHTML = `<img src="img/user-fist.png" alt="user-fist">`;

            // Computers hand
            this.randomHand();

            // Conditionally set Win - Lose or Draw!
            this.compareResults(btn)

            // Remove animations for another click
            user.classList.remove("userAnimate");
            computer.classList.remove("compAnimate");
          }, 2400);
        }
        // PAPER
        if (btn.classList.contains("paper")) {
          setTimeout(() => {
            // User's Hand
            user.innerHTML = `<img src="img/user-hand.png" alt="user-hand">`;

            // Computers hand
            this.randomHand();

            // Conditionally set Win - Lose or Draw!
            this.compareResults(btn)

            // Remove animations for another click
            user.classList.remove("userAnimate");
            computer.classList.remove("compAnimate");
          }, 2400);
        }

        // SCISSORS
        if (btn.classList.contains("scissors")) {
          setTimeout(() => {
            // User's Hand
            user.innerHTML = `<img src="img/user-scissors.png" alt="user-scissors">`;

            // Computers hand
            this.randomHand();

            // Conditionally set Win - Lose or Draw!
            this.compareResults(btn)

            // Remove animations for another click
            user.classList.remove("userAnimate");
            computer.classList.remove("compAnimate");
          }, 2400);
        }

        user.innerHTML = `<img src="img/user-fist.png" alt="user-fist">`
        computer.innerHTML = `<img src="img/computer-fist.png" alt="computer-fist">`
        winner.textContent = "Waiting...";
      });
    });
  }
}
const player = new Game();
