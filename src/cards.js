export class Cards {

    constructor(){
        this.id = '';
        this.remaining = 0;
    }

    async makeDecks(numDecks){
        let decks = numDecks;
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${decks}`);
            let jsonifiedResponse = await response.json();
            this.id = jsonifiedResponse.deck_id;
            this.remaining = jsonifiedResponse.remaining;
            return jsonifiedResponse;
        } catch (error) {
            return "heck";
        }
    }

    // async nextCard(id){
    //     try {
    //         let response = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
    //         let jsonResponse = await response.json();
    //         this.remaining = jsonResponse.remaining;
    //         console.log(this.remaining);
    //         return jsonResponse;
    //     } catch (error) {
    //         return "super heck";
    //     }
    // } // commented out: will clarify line 25 is ".remaining" rather than ".code"
    
    async nextCard(id){
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
            let jsonResponse = await response.json();
            this.remaining = jsonResponse.cards[0].code;
            console.log(this.remaining);
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
        return response.cards[0].value;
    }
}
                    