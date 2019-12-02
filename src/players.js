export class Player
{
  constructor (card1, card2)
  {
    this.card1 = card1,
    this.card2 = card2,
    this.score = 0,
    this.cards = [],
    this.cardsSplit = [],
    this.split = false
  }
  addScore()
  {
    this.cards.push(this.card1);
    this.cards.push(this.card2);
    return this.score = this.card1 +this.card2;
  }
  split(choice)
  {
    if (this.card1==this.card2)
    {
      this.split == true;
    }
    if (choice==true && this.split == true)
    {
      this.cardsSplit.push(this.card2);
      this.cards.pop();
    }
  }
  hitScore(hit)
  {
    this.score = this.score - this.card1 - this.card2;
    this.cards.push(hit);
    for (let i = 0; i<this.cards.length;i++)
    {
      this.score+= this.cards[i];
      for (let j = 0; j<this.cards.length;j++)
      {
        if (this.score>21 && this.cards[j]==11)
        {
          this.cards[j] == 1;
          this.score -= 10;
        }
      }
    }
    return this.score;
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
