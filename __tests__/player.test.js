import {Player} from './../src/players.js';
import {Bet} from './../src/bet.js';
describe ('Player', ()=>
{
  test ('Should correctly test if the score of the user is over 21', ()=>
  {
    let player1 = new Player (12,12,false);
    player1.addScore();
    expect(player1.checkScore()).toEqual("You busted");
  });
  test ('Should correctly test if the score of the user is 21', ()=>
  {
    let player1 = new Player (11,10,false);
    player1.addScore();
    expect(player1.checkScore()).toEqual("You have 21 points");
  });
  test ('Should correctly test if the score of the user is under 21', ()=>
  {
    let player1 = new Player(10,9,false);
    player1.addScore();
    expect(player1.checkScore()).toEqual("You have less than 21 points");
  });
  test ('Should correctly test if a hit makes the user bust', () =>
  {
    let player1 = new Player(10,4,false);
    player1.addScore();
    player1.hitScore(9);
    expect(player1.checkScore()).toEqual("You busted");
  });
  test ('Should correctly test if a hit makes the user score equal 21', () =>
  {
    let player1 = new Player(6,5,false);
    player1.addScore();
    player1.hitScore(10);
    expect(player1.checkScore()).toEqual("You have 21 points");
  });
  test ('Should correctly test if the score of the user is under 21 after a hit', () =>
  {
    let player1 = new Player (4,6,false);
    player1.addScore();
    player1.hitScore(9);
    expect (player1.checkScore()).toEqual("You have less than 21 points");
  });
  test ('Should correctly test if the ace rounds down to a 1 if the user goes over 21',() =>
  {
    let player1 = new Player (9,10,false);
    player1.addScore();
    player1.hitScore(11);
    expect (player1.checkScore()).toEqual("You have less than 21 points");
  });
  test ('Should correctly stand/hit for dealerAI',() => 
  {
    let player1 = new Player (10,8,true);
    player1.bjDealer();
    expect(player1.checkScore()).toEqual( "You have less than 21 points");
    let player2 = new Player (10,3, true);
    player2.bjDealer();
    console.log(player2.score);
    expect(player2.checkScore()).toEqual( "You have less than 21 points");
  });
  test('Should correctly split when two of the cards are the same',()  => 
  {
    let player1 = new Player (8,8, false);
    player1.split(1);
    console.log("Split Check: "+player1.splitCheck + "Choice: "+ player1.choice);
    expect(player1.cardsSplit).toEqual([8]);
  });
  test('Should correctly add and subtract bet amount', () => 
  {
    let player1 = new Bet (50);
    let userPlayer = new Player (8, 6, false);
    let dealer = new Player (9,7,true);
    userPlayer.addScore();
    dealer.addScore();
    player1.checkBet(userPlayer.score,dealer.score);
    expect(player1.playerTotal).toEqual(50);
  });
});

