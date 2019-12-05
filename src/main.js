import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Player} from './players.js';
import {Cards} from './cards.js';



let cards = new Cards();
let player1;
let dealer; 
let cardImg = [];
let dealerImgs = [];
$(document).ready(function() {
   $("#start").click(function(){
    $("#split").attr("disabled",true);
    $("#hit2").attr("disabled", true);  
       $("#imgDisplay").text("");
       
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
        // let cCheck1 = await cards.checkValue(card1);
        // let cCheck2 = await cards.checkValue(card2);
        player1 = new Player(c1,c2, false);
        if (c1==c2)
        {
            $("#split").attr("disabled",false);  
        }
        player1.addScore();
        console.log(c1);
        console.log(c2);
        console.log(img1);
        console.log(img2);
        console.log(id);
        console.log(newDeck);
        console.log(player1);
        $("#start").attr("disabled",true);  
        let dealerCard1 = await cards.nextCard();
        let dealerCard2 = await cards.nextCard();
        let dealerImg1 = await cards.getImage(dealerCard1);
        let dealerImg2 = await cards.getImage(dealerCard2);
        dealerImgs.push(dealerImg1);
        dealerImgs.push(dealerImg2);
        let dealerStart1 = await cards.getValue(dealerCard1);
        let dealerStart2 = await cards.getValue(dealerCard2);
        dealer = new Player(dealerStart1, dealerStart2, true);
        dealer.addScore();

        $("#hit").click(function(){    
        (async () => {
            $("#hit").attr("disabled", false);
            let card3 = await cards.nextCard();
            let img3 = await cards.getImage(card3);
            $('#imgDisplay').append("<img src = '"+img3+"'>");
            player1.hitScore(cards.getValue(card3));
            if (player1.checkScore()=== "You busted" || player1.checkScore() === "You have 21 points"){
                $("#hit").attr("disabled", true);
                if (player1.splitCheck === true);
                {
                $("#hit").attr("disabled", false);
                $("hit2").click(function(){
                player1.hitScoreDouble();
                });
            }
            }
            $("#hitScoreDoubles").click(function(){    
                (async () => {
                    let card4 = await cards.nextCard();
                    let img4 = await cards.getImage(card4);
                    $('#imgDisplay').append("<img src = '"+img4+"'>");
                    player1.hitScoreDoubles(cards.getValue(card4));
                    if (player1.checkScore()=== "You busted" || player1.checkScore() === "You have 21 points"){  
                        $("#hit2").show();
                    }
                })();
            });
            console.log(img3);
            console.log(player1.checkScore());
            console.log(player1);
            console.log(cards.getValue(card3));
            console.log(card3.cards[0].value);
            console.log(newDeck);
          })();
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
});