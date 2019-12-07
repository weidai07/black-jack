export class Bet {
    constructor (){
        this.playerTotal = 100;
    }

    checkBet(playerScore,dealerScore,playerBet)
    {
        this.playerTotal -= playerBet;
        if ((playerScore > dealerScore && playerScore <=21) || (playerScore<=21 && dealerScore>21)){
            return this.playerTotal += (playerBet *2);
        }
        else if (playerScore==dealerScore && playerScore <=21){
            return this.playerTotal += playerBet;}
        else {
            return this.playerTotal;
        }

    }
}