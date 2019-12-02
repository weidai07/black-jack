export class Player
{
  constructor (card1, card2)
  {
    this.card1 = card1,
    this.card2 = card2,
    this.score = 0
  }
  addScore()
  {
    return this.score = this.card1 +this.card2;
  }
  hitScore(hit)
  {
   return this.score += hit;
  }
  checkScore()
  {
    if (this.score<21)
    {
      return "You have less than 21 points"
    }
    else if (this.score==21)
      return "You have 21 points"
    else
      return "You busted"
  }
}
