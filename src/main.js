import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Cards} from './cards.js';

$(document).ready(function() {

    //this is to test all the api calls and methods, because i cant seem to test them with jest

    (async () => {
        let cards = new Cards();
        let x = await cards.makeDecks(1);
        const id = cards.getDeck_id(x);
        let currentCard = await cards.nextCard(id);

        console.log(cards.getRemaining(x));
        console.log(cards.getDeck_id(x));
        console.log(cards.getValue(currentCard));
        // currentCard = await cards.nextCard(id);
        console.log(cards.getValue(currentCard));

    })();
});
