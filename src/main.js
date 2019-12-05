import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Player} from './players.js';
import {Cards} from './cards.js';



let cards = new Cards();
let player1;
let cardImg = [];
$(document).ready(function() {
    (async () => {
        let newDeck = await cards.makeDecks(1);
        const id = cards.getDeck_id(newDeck);
        let card1 = await cards.nextCard();
        let card2 = await cards.nextCard();
        let img1 = await cards.getImage(card1);
        let img2 = await cards.getImage(card2);
        cardImg.push(img1);
        cardImg.push(img2);
        document.getElementById('imgDisplay').src = img1;
        let c1 = await cards.getValue(await cards.nextCard(id));
        let c2 = await cards.getValue(await cards.nextCard(id));
        player1 = new Player(c1,c2, false);
        player1.addScore();
        console.log(c1);
        console.log(c2);
        console.log(img1);
        console.log(img2);
        console.log(id);
        console.log(newDeck);
        console.log(player1);

        $("#hit").click(function(){    
        (async () => {
            let response = await cards.nextCard(id);
            player1.hitScore(cards.getValue(response));
            console.log(player1.checkScore());
            console.log(player1);
            console.log(cards.getValue(response));
            console.log(response.cards[0].value);
            console.log(newDeck);
          })();
        });
    })();  
});
 
       
         