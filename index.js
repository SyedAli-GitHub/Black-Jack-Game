

/*
if (sum < 21){
    console.log("Do you want to draw a new card 🙂")
}

else if(sum === 21){
    console.log("Wohoo! you have got Blackjack 🥳")
}

else{
    console.log("You have lost and out of the game 😭")
}

let age = 21;

if (age<21) {
    console.log("You can not enter the club")
}

else{
    console.log("Welcome into the club")
}

let age1 = 110;

if (age1 <100){
    console.log("Not eligible")
}

else if (age === 100) {
    console.log("Here is your birth day card from the King!")

}

else{
    console.log("Not eligible, you have already gotten card")
}
*/

//let firstCard = getRandomCard();
//let secondCard = getRandomCard();
//let cards = [firstCard, secondCard]
let cards = []
//let sum = firstCard + secondCard;
let sum = 0;
//console.log(sum)
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


// player is an object

let player = {
    name: "Syed",
    chips: 150
}

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": £" + player.chips;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber > 10 ){
        return 10
    }

    else if (randomNumber === 1){
        return 11
    }

    else{
        return randomNumber
    }
}

console.log(getRandomCard())

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard +secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }
    
    sumEl.textContent = "Sum: " + sum;
    
    if (sum<=20) {
    message ="Do you want to draw a new card?";
}
else if (sum===21){
    message = "You have got Blackjack!";
    hasBlackjack = true;
}
else{
    message = "You are out of the game!";
    isAlive = false;
}
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
    //console.log("Drawing a new card from the deck!")
    let card = getRandomCard();
    sum += card
    cards.push(card)
    //console.log(cards)
    renderGame();
    }

    
}

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count += 1 )  {
    
//     console.log(count)

// }

// for ( let count = 10;  count < 101;  count += 10 )  {
    
//     console.log(count)

// }

// for (i = 0; i < 6; i+=1 ) {
//     console.log(i)
// }

// let cards1 = [7,3,9,8]

// for (let i = 0; i <cards1.length; i+=1){
//     console.log(cards1[i])
// }




//Cash Out

//console.log(hasBlackjack);
//console.log(isAlive);









