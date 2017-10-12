console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;

var cardOne = cards [0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo;

var cardTwo = cards [1];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

var cardId;
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
var flipCard = function(cardId) {
	if (cardsInPlay.length === 2) {
	console.log("Great!")
}
if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
}
else {alert("Sorry, try again.");
	}
	checkForMatch();
}
cardsInPlay.push(cards[cardId])
flipCard(0);
flipCard(2);