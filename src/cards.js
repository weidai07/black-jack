export class Cards {

    constructor(){
        this.id = 'gbkzaq1dz3t7';
    }

    async makeDecks(){
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/gbkzaq1dz3t7/shuffle/?deck_count=1`);
            let jsonifiedResponse = await response.json();
            this.id = jsonifiedResponse.deck_id;
            this.remaining = jsonifiedResponse.remaining;
            return jsonifiedResponse;
        } catch (error) {
            return "heck";
        }
    }

    async nextCard(){
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/gbkzaq1dz3t7/draw/?count=1`);
            let jsonResponse = await response.json();
            this.cardCode = jsonResponse.cards[0].code;
            this.cardValue = jsonResponse.cards[0].value;
            return jsonResponse;
        } catch (error) {
            return "super heck";
        }
    }

    getRemaining(response) {
        return response.remaining;
    }

    getDeck_id(){
        return this.id;
    }

    getValue(response){
        if (isNaN(response.cards[0].value)){
            if (response.cards[0].value === "ACE"){
                return 11;
            } else {
                return 10;
            }
        }
        return parseInt(response.cards[0].value);
    }
    getImage(response){
        return response.cards[0].image;
    }
}
                    