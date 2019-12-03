import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Player} from './players.js';
import {Cards} from './cards.js';



$(document).ready(function() {
    let player1;
    $("#start").click(function(){
        (async () => {
            let cards = new Cards();
            let x = await cards.makeDecks(1);
            const id = cards.getDeck_id(x);
            let currentCard = await cards.nextCard(id);
        $("#hit").click(player1.hitScore(currentCard)); // current card is var form async
        $("#start").click()
        player1 = new Player(10,3, false);
        player1.hitScore();

   
    //this is to test all the api calls and methods, because i cant seem to test them with jest

    
        // let player = new Player (6,10,false);
        // console.log(player);
        

        console.log(cards.getRemaining(x));
        console.log(cards.getDeck_id(x));
        console.log(cards.getValue(currentCard));
        // currentCard = await cards.nextCard(id);
        console.log(cards.getValue(currentCard));
    })();
});
});
