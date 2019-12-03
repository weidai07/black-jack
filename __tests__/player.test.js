import {Player} from './../src/players.js';
describe ('Player', ()=>
{
  test ('Should correctly test if the score of the user is over 21', ()=>
  {
    let player1 = new Player (12,12);
    player1.addScore();
    expect(player1.checkScore()).toEqual("You busted");
  });
  test ('Should correctly test if the score of the user is 21', ()=>
  {
    let player1 = new Player (11,10);
    player1.addScore();
    console.log(player1.score);
    expect(player1.checkScore()).toEqual("You have 21 points");
  });
  test ('Should correctly test if the score of the user is under 21', ()=>
  {
    let player1 = new Player(10,9);
    player1.addScore();
    expect(player1.checkScore()).toEqual("You have less than 21 points");
  });
  test ('Should correctly test if a hit makes the user bust', () =>
  {
    let player1 = new Player(10,4);
    player1.addScore();
    player1.hitScore(9);
    expect(player1.checkScore()).toEqual("You busted");
  });
  test ('Should correctly test if a hit makes the user score equal 21', () =>
  {
    let player1 = new Player(6,5);
    player1.addScore();
    player1.hitScore(10);
      console.log(player1.score);
    expect(player1.checkScore()).toEqual("You have 21 points");
  });
  test ('Should correctly test if the score of the user is under 21 after a hit', () =>
  {
    let player1 = new Player (4,6);
    player1.addScore();
    player1.hitScore(9);
    console.log(player1.score);
    expect (player1.checkScore()).toEqual("You have less than 21 points");
  });
  test ('Should correctly test if the ace rounds down to a 1 if the user goes over 21',() =>
  {
    let player1 = new Player (9,10);
    player1.addScore();
    player1.hitScore(11);
    expect (player1.checkScore()).toEqual("You have less than 21 points");
  })
});
