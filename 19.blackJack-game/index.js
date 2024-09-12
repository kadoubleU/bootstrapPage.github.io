let user = {
  name: "Gamer",
  chips: 200,
};
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.getElementById("sum-el");
let message = document.getElementById("want-to-play");
let userEl = document.getElementById("user-el");
let cards = [];
let sum = 0;
let blockStart = false;
let newGame = false;
let hasBlackjack = false;
let startGameBtn = document.getElementById("start-game-btn");
let newCardsBtn = document.getElementById("new-card-btn");
let newChips = user.chips;

userEl.textContent = user.name + ": $" + newChips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  statements();
  if (blockStart === false) {
    blockStart = true;
    cardsEl.textContent += " " + firstCard + " " + secondCard;

    sum = firstCard + secondCard;
    sumEl.textContent = "Sum: " + sum;
  } else if (blockStart === true || hasBlackjack === true) {
    startGameBtn.disabled = true;
    cardsEl.textContent = cardsEl.textContent;
  }
}

function newCard() {
  if (hasBlackjack === false && blockStart === true) {
    let addNewCard = getRandomCard();
    cardsEl.textContent += " " + addNewCard;

    sum += addNewCard;
    sumEl.textContent = "Sum: " + sum;
  } else if (newChips === 0) {
    blockStart = true;
  }

  statements();
}

function statements() {
  if (sum > 21) {
    message.textContent = "You're out of the game!";
    blockStart = true;
    newGame = true;
    newCardsBtn.disabled = true;
    userEl.textContent = user.name + ": $" + newChips;
    newChips -= 200;
  } else if (sum === 21) {
    message.textContent = "You've got Blackjack!";
    hasBlackjack = true;
    newCardsBtn.disabled = true;
    newChips += 200;
  } else {
    message.textContent = "Do you want to draw a new card?";
  }
}

if ((hasBlackjack = true)) {
  hasBlackjack = false;
}

if (newGame) {
  sum = 0;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent += " ";
}

function newGameBtn() {
  window.location.reload();
}
