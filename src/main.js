import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Player} from './players.js';
import {Cards} from './cards.js';



// let player1;
let cards = new Cards();
let player1;
$(document).ready(function() {
    (async () => {
        let newDeck = await cards.makeDecks(1);
        const id = cards.getDeck_id(newDeck);
        let c1 = await cards.getValue(await cards.nextCard(id));
        let c2 = await cards.getValue(await cards.nextCard(id));
        player1 = new Player(c1,c2, false);
        player1.addScore();
        console.log(c1);
        console.log(c2);
        console.log(id);
        console.log(newDeck);
        console.log(player1);

        $("#start").click(function(){    
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
 
       
         