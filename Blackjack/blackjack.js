var container = document.getElementById('container');


// Dealer & Player Box Attributes
var dealerBox = document.getElementById('dealer-hand');
dealerBox.setAttribute('style','height: 150px; background-color: rgb(221, 228, 220); border: solid black 1px; border-radius: 1%');

var playerBox = document.getElementById('player-hand');
playerBox.setAttribute('style', 'height: 150px; background-color: rgb(221, 228, 220); border: solid black 1px; border-radius: 1%')

// Dealer Box - Cards
var dealerImage = document.createElement('img');
dealerImage.setAttribute('src','images/2_of_clubs.jpg');
dealerImage.setAttribute('style', 'height: 75px; width:60px; padding: 8px');

var dealerImage2 = document.createElement('img');
dealerImage2.setAttribute('src','images/2_of_diamonds.jpg');
dealerImage2.setAttribute('style', 'height: 75px; width:60px; padding: 8px');

// Player Box - Cards
var playerImage = document.createElement('img');
playerImage.setAttribute('src','images/3_of_clubs.jpg');
playerImage.setAttribute('style', 'height: 75px; width:60px; padding: 8px');

var playerImage2 = document.createElement('img');
playerImage2.setAttribute('src','images/3_of_diamonds.jpg');
playerImage2.setAttribute('style', 'height: 75px; width:60px; padding: 8px');

var playerImage3 = document.createElement('img');
playerImage3.setAttribute('src', 'images/4_of_clubs.jpg');
playerImage3.setAttribute('style', 'height: 75px; width:60px; padding: 8px');

// Deck of 
// ------ FOR LOOP -------------------------------------
    var deck = [];    
    function deckCreation(){
        // 1 = Ace, 11 = Jack, 12 = Queen, 13 = King
        var name = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        var suits = ['hearts', 'spades', 'clubs', 'diamonds'];

        for (let x in suits){
            for (let y in name){

                var card = {};
                card.name = name[y];
                card.suits = suits[x];
                card.imageURL = "./images/" + name[y] + "_of_" + suits[x] + ".jpg";

                if (card.name == 'Ace'){
                    (card.value = 1);
                } else if (card.name == '2'){
                    (card.value = 2);
                } else if (card.name == '3'){
                    (card.value = 3);
                } else if (card.name == '4'){
                    (card.value = 4);
                } else if (card.name == '5'){
                    (card.value = 5);
                } else if (card.name == '6'){
                    (card.value = 6);
                } else if (card.name == '7'){
                    (card.value = 7);
                } else if (card.name == '8'){
                    (card.value = 8);
                } else if (card.name == '9'){
                    (card.value = 9);
                } else if (card.name == '10'){
                    (card.value = 10);
                } else if (card.name == 'Jack'){
                    (card.value = 10);
                } else if (card.name == 'Queen'){
                    (card.value = 10);
                } else if (card.name == 'King'){
                    (card.value = 10);
                }
                deck.push(card);
            }
        }
    }
deckCreation();
console.log(deck);
// -------------------------------------------
// Deal the Deck ** put arrays and objects inside of function to reset value 
var dealerHand = [];
var playerHand = [];

var totalDealerPoints = [];
var totalPlayerPoints = [];


var dealButton = document.getElementById('deal-button');
dealButton.addEventListener('click', function(){

    for (var z = 0; z < 2; z ++){

        dealerHand.push(deck.pop());    
        dealerHand.push(deck.pop());    
        var dealerPoints = dealerHand[dealerHand.length-1].value;  
        
        totalDealerPoints.push(dealerPoints);
        var displayDealerPoints = calculatePoints(totalDealerPoints);
        var a = document.createElement('img');
        a.src = dealerHand[dealerHand.length-1].imageURL;
        dealerBox.appendChild(a);
        var dScore = document.getElementById('dealer-points');
        dScore.textContent = displayDealerPoints;

        

        playerHand.push(deck.pop());
        var playerPoints = playerHand[playerHand.length-1].value;    
        totalPlayerPoints.push(playerPoints);
        var displayPlayerPoints = (calculatePoints(totalPlayerPoints));
        var pScore = document.getElementById('player-points');
        pScore.textContent = displayPlayerPoints;
        


        var b = document.createElement('img');
        b.src = playerHand[playerHand.length-1].imageURL;
        playerBox.appendChild(b);
        dealButton.disabled = true;

}

})

// // Hit Button
var hitButton = document.getElementById('hit-button');

    hitButton.addEventListener('click', function(){
        for (var z = 0; z < 1; z++){
            playerHand.push(deck.pop());
            
            var playerPoints = playerHand[playerHand.length-1].value;
            totalPlayerPoints.push(playerPoints);
            var displayPlayerPoints = calculatePoints(totalPlayerPoints);
            var b = document.createElement('img');
            b.src = playerHand[playerHand.length-1].imageURL;
            playerBox.appendChild(b);
            var pScore = document.getElementById('player-points');


            if (displayPlayerPoints > 21){
                alert('BUST!');
                location.reload();
            }
            pScore.textContent = displayPlayerPoints;
        }
    })

// // Stand Button
var standButton = document.getElementById('stand-button');

    standButton.addEventListener('click', function(){
        alert('Stand - No Action');
    })



// Calculate Points for Hand

function calculatePoints(array){
var dealerScore = 0;
var playerScore = 0;

    for (var i = 0; i < array.length; i++){
        dealerScore = array[i] + dealerScore;
    }
    return dealerScore;
}

console.log(calculatePoints(totalDealerPoints));



// Shuffle the Deck
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
shuffleArray(deck);

// Check for Busts
// make both the dealerPoints and playerPoints call Bust function below.

// function Busts(value){
//     if (value > 21) {
//         console.log(alert('BUST!'));
//     }
// }


// Restart game
var restartButton = document.getElementById('restart-button');

    restartButton.addEventListener('click', function(){
        location.reload();
    })


// Buttons Attributes
dealButton.setAttribute('style', 'margin: 5px');
hitButton.setAttribute('style', 'margin: 5px');
standButton.setAttribute('style', 'margin: 5px');
restartButton.setAttribute('style', 'margin: 5px');










