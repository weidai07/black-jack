import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Player} from './players.js';
import {Cards} from './cards.js';
import {Bet} from './bet.js';



let player1;
let dealer; 
let cardImg = [];
let dealerImgs = [];
$(document).ready(function() {
    let cards = new Cards();
    let bet = new Bet();
   
    (async () => {
        $("#start").click(function(){
            $(".results").text("");
            $("#hit").attr("disabled", false);
            $("#stand").attr("disabled", false);
            
            $("#split").attr("disabled",true);
            $("#hit2").attr("disabled", true);  
            $("#imgDisplay").text("");
            $("#imgDisplayDealer").text("");
            $(".betTotal").text("Total $" + bet.playerTotal); 
            (async () => {
                let newDeck = await cards.makeDecks(1);
                const id = cards.getDeck_id(newDeck);
                let card1 = await cards.nextCard();
                let card2 = await cards.nextCard();
                let img1 = await cards.getImage(card1);
                let img2 = await cards.getImage(card2);
                cardImg.push(img1);
                cardImg.push(img2);
                $('#imgDisplay').append("<img src = '"+img1+"'>");
                $('#imgDisplay').append("<img src = '"+img2+"'>");
                let c1 = await cards.getValue(card1);
                let c2 = await cards.getValue(card2);
                player1 = new Player(c1,c2, false);
                if (c1==c2)
                {
                    $("#split").attr("disabled",false);  
                }
                player1.addScore();
                $("#start").attr("disabled",true);  
                
                let dealerCard1 = await cards.nextCard();
                let dealerCard2 = await cards.nextCard();
                let dealerImg1 = await cards.getImage(dealerCard1);
                let dealerImg2 = await cards.getImage(dealerCard2);
                $('#imgDisplayDealer').append("<img src = '"+dealerImg1+"'>");
                dealerImgs.push(dealerImg1);
                dealerImgs.push(dealerImg2);
                let dealerStart1 = await cards.getValue(dealerCard1);
                let dealerStart2 = await cards.getValue(dealerCard2);
                dealer = new Player(dealerStart1, dealerStart2, true);
                dealer.addScore();
                if (player1.score == 21) {
                    $(".results").text('Blackjack!');
                    $("#hit").attr("disabled", true);
                    $("#stand").attr("disabled", true);
                    $("#start").attr("disabled", false);
                    bet.checkBet(player1.score,dealer.score,50);
                    
                }
            })();
        });

        $("#hit").click(function(){    
        (async () => {
            $("#hit").attr("disabled", false);
            let card3 = await cards.nextCard();
            let img3 = await cards.getImage(card3);
            $('#imgDisplay').append("<img src = '"+img3+"'>");
            player1.hitScore(cards.getValue(card3));
            if (player1.checkScore()=== "You busted" || player1.checkScore() === "You have 21 points"){
                $("#hit").attr("disabled", true);
                $("#stand").attr("disabled", true);
                if (player1.score === 21) {
                    while(dealer.score < 17) {
                        let dealCard = await cards.nextCard();
                        let dealImg = await cards.getImage(dealCard);
                        let dealCardVal = await cards.getValue(dealCard);
                        $("#imgDisplayDealer").append("<img src = '"+dealImg+"'>");
                        dealer.bjDealer(dealCardVal); 
                    } 
                    if (dealer.score === 21) {
                        $(".card3").show();
                        $(".results").text(" It's a Push! (draw) ");               
                        $("#start").attr("disabled", false);
                        bet.checkBet(player1.score,dealer.score,50);
                    } else {
                        $(".card3").show();
                        $(".results").text(" You Win! ");
                        $("#start").attr("disabled", false);
                        bet.checkBet(player1.score,dealer.score,50);
                    }
                } else {
                    $(".card3").show();
                    $(".results").text(" You lose! ");
                    $("#start").attr("disabled", false);
                    bet.checkBet(player1.score,dealer.score,50);
                }
            }
          })();
        });

        $("#stand").click(function() {
            (async () => {
                $('#imgDisplayDealer').append("<img src = '"+dealerImgs[1]+"'>");
                $("#hit").attr("disabled", true);
                $("#stand").attr("disabled", true);
                if(dealer.score > player1.score){
                    $(".results").text(" You Lose! :/");
                    bet.checkBet(player1.score,dealer.score,50);
                } else if (dealer.score === player1.score && dealer.score >= 17) {
                    $(".results").text("Push");
                } else if (dealer.score < 17){
                    while(dealer.score < 17){
                        let dealCard = await cards.nextCard();
                        let dealImg = await cards.getImage(dealCard);
                        let dealCardVal = await cards.getValue(dealCard);
                        $("#imgDisplayDealer").append("<img src = '"+dealImg+"'>");
                        dealer.bjDealer(dealCardVal); 
                    } 
                    if (dealer.score >= player1.score && dealer.score <= 21){
                        $(".results").text("Dealer Wins!");
                        bet.checkBet(player1.score,dealer.score,50);
                    }
                }
                if (dealer.score > 21)
                {
                    $(".results").text(" You Win! ");
                    bet.checkBet(player1.score,dealer.score,50);
                }
                if(dealer.score >= 17 && dealer.score < player1.score){
                    $(".results").text(" You Win! ");
                    bet.checkBet(player1.score,dealer.score,50);
                }
            })();
            $("#start").attr("disabled", false);
        });
        $("#split").click(function(){
            player1.split();
            $("#hit2").show();
            $("#hit2").attr("disabled", false);
            $("hit").click(function(){
            player1.hitScoreDoubles();
            });
        });
    })();  
});
       
         

//happy birthday Shawn