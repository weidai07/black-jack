import {Player} from './../src/players.js';
describe ('Player', ()=>
{
  test ('Should correctly test if the score of the user is over 21', ()=>
  {
    var player1 = new Player (12,12);
    player1.addScore();
    expect(player1.checkScore()).toEqual("You busted");
  });
  test ('Should correctly test if the score of the user is 21', ()=>
  {
    var player1 = new Player (11,10)
    player1.addScore();
    expect(player1.checkScore()).toEqual("You have 21 points");
  })
})
