export class Player
{
    constructor (card1, card2, dealerActive)
    {
        this.card1 = card1,
        this.card2 = card2,
        this.score = 0,
        this.score2 = 0,
        this.cards = [],
        this.cardsSplit = [],
        this.dealerActive = dealerActive,
        this.choices = 0,
        this.splitCheck = false;
    }
    addScore()
    {
        this.cards.push(this.card1);
        this.cards.push(this.card2);
        return this.score = this.card1 +this.card2;
    }
    split() //will need a button to allow user to make "split" (choice) in param
    {
        this.choices = 1;
        if (this.card1==this.card2)
        {
            this.splitCheck = true;
        }
        if (this.choices==1&& this.splitCheck)
        {
            this.cardsSplit.push(this.card2);
            this.cards.pop();
            console.log(this.cards);
            return this.cardsSplit;
        }
    }
    cardsSplit(){
        return this.cardsSplit;
    }
    hitScore(hit)
    {
        this.score = 0;
        this.hitCount = 1;
        this.cards.push(hit);
        for (let i = 0; i<this.cards.length;i++)
        {
            this.score+= this.cards[i];
            for (let j = 0; j<this.cards.length;j++)
            {
                if (this.score>21 && this.cards[j]==11)
                {
                    this.cards[j] = 1;
                    this.score -= 10;
                }
            }
        }
        return this.score;
    }
    hitScoreDoubles(hit)
    {
        this.score2 = 0;
        this.cardsSplit.push(hit);
        for (let i = 0; i<this.cardsSplit.length;i++)
        {
            this.score2+= this.cards[i];
            for (let j = 0; j<this.cardsSplit.length;j++)
            {
                if (this.score2>21 && this.cardsSplit[j]==11)
                {
                    this.cardsSplit[j] = 1;
                    this.score2 -= 10;
                }
            }
        }
        return this.score;
    }
    checkScore()
    {
        if (this.score<21)
        {
            return "You have less than 21 points";
        }
        else if (this.score==21)
            return "You have 21 points";
        else
            return "You busted";
    }
    //make sure to change hitScore(2) to the card value that is picked up
    bjDealer() {
        this.addScore();
        while(this.score<17){
            this.hitScore(2); //call from api
        } 
        return this.score;
    }
}
