console.log("Up and running!");

//Card setup
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
]

var cardsInPlay = [];


//Alerts
var cardId;
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

//Flip the cards
var flipCard = function() {

var cardId = this.getAttribute("data-id");
console.log("User flipped " + cards[cardId].rank); 
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		
	this.setAttribute("src", cards[cardId].cardImage);	
	console.log("User flipped " + cards[cardId].suit);

	if (cardsInPlay.length ===2){
		checkForMatch();
	}
}
var createBoard = function() {
	//To check for errors
	console.log("Create board worked!");

	var boardGame = document.getElementById("game.board");
	for (var i = 0; i < cards.length; i ++){
	var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}



//Call the CreateBoard fxn 
createBoard();
