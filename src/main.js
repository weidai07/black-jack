import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Player} from './players.js';
import {Cards} from './cards.js';



// let player1;
let cards = new Cards();
let player1 = new Player(10,3, false);
$(document).ready(function() {
    (async () => {
        let newDeck = await cards.makeDecks(1);
        const id = cards.getDeck_id(newDeck);
        console.log(id);
        console.log(newDeck);
        console.log(player1);

        $("#start").click(function(){    
        (async () => {
            let response = await cards.nextCard(id);
            console.log(cards.getValue(response));
            console.log(response.cards[0].value);
            console.log(newDeck);
          })();
        });
    })();  
});
 
       
         