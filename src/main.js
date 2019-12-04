import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Player} from './players.js';
import {Cards} from './cards.js';



$(document).ready(function() {
    let player1;
    $("#start").click(function(){
          player1 = new Player(10,3, false);
        (async () => {
            let cards = new Cards();
            let x = await cards.makeDecks(1);
            const id = cards.getDeck_id(x);
            let currentCard = await cards.nextCard(id);
            console.log(currentCard);
            
            // $("#hit").click(player1.hitScore(currentCard.cards[0].value)); // current card is var form async


    //this is to test all the api calls and methods, because i cant seem to test them with jest

    
        //Makes a new deck every time we click hit

        console.log(cards.getRemaining(x));
        console.log(cards.getDeck_id(x));
        console.log(cards.getValue(currentCard));
        // currentCard = await cards.nextCard(id);
        console.log(cards.getValue(currentCard));
    })();
    });
});
