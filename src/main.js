import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Cards} from './cards.js';


// import { Example, anotherExample } from './scripts';

// UI Logic


$(document).ready(function() {
    (async () => {
        let cards = new Cards();
        let x = await cards.makeDecks(1);
        const cardMax = cards.getRemaining(x);
        let pointer = cardMax - cards.getRemaining(x);
        const id = cards.getDeck_id(x);
        let currentCard = await cards.nextCard(id);
        console.log(cards.getRemaining(x));
        console.log(cards.getDeck_id(x));
        console.log(cards.getValue(currentCard, pointer));
        
        currentCard = await cards.nextCard(id);
        console.log(cards.getValue(currentCard, pointer));

        console.log(cards.nextCard(id));
        
        
        // console.log(x.remaining);
        // console.log(x.deck_id);
        
        // console.log(cards.getVals(x));
    })();
});
