let player = {
    name: prompt("What's your name?"),
    chips: 100,
    bet: 0
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    player.bet = parseInt(prompt("Enter your bet amount (Current chips: " + player.chips + "):"));
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    // Update player's chips display
    playerEl.textContent = player.name + ": $" + player.chips;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        player.chips += player.bet * 2; 
    } else {
        message = "You're out of the game!";
        isAlive = false;
        player.chips -= player.bet; 
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false && player.chips >= player.bet) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    } else {
        if (player.chips < player.bet) {
            messageEl.textContent = "You don't have enough chips to place a bet.";
        } else if (hasBlackJack) {
            messageEl.textContent = "You've already got Blackjack!";
        }
    }
}
