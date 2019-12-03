export class Bet {
    constructor (playerBet){
        this.playerBet = playerBet,
        this.playerTotal = 100;
    }

    checkBet(playerScore,dealerScore){
        this.playerTotal -= this.playerBet;
        if ((playerScore > dealerScore && playerScore <=21) || (playerScore<=21 && dealerScore>21)){
            return this.playerTotal += (this.playerBet *2);
        }
        else if (playerScore==dealerScore && playerScore <=21){
            return this.playerTotal += this.playerBet;}
        else {
            console.log ("hello");
            return this.playerTotal;
        }

    }
}