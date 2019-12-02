export class Cards {

    constructor(){
        this.id = '';
    }

    async makeDecks(numDecks){
        let decks = numDecks;
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${decks}`);
            let jsonifiedResponse = await response.json();
            this.id = jsonifiedResponse.deck_id;
            console.log(this.id);
            return jsonifiedResponse;
        } catch (error) {
            return "heck";
        }
    }

    async nextCard(id){
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
            let jsonResponse = await response.json();
            return jsonResponse;
        } catch (error) {
            return "super heck"
        }
    }

    getRemaining(response) {
        return response.remaining;
    }

    getDeck_id(response){
        return response.deck_id;
    }

    getValue(response, pointer){
        console.log(response.remaining);
        if (isNaN(response.cards[pointer].value)){
            if (response.cards[pointer].value === "ACE"){
                return 11 + "\n " + response.remaining;
            } else {
                return response.cards[pointer].value + " 10";
            }
        }
        return response.cards[pointer].value + "\n" + response.remaining + " cards remaining";
    }
}
