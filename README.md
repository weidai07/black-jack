# Blackjack
##### By Wei Dai, Jacob Ash, Andrew Bates, and Jamila Aliyeva
###### Created 02 December, 2019

## Description

_This is the final result of our group project._

## Links:

Github - https://github.com/weidai07/black-jack

## Setup/Installation Requirements:

  - $ npm  install - to install npm
  - $ npm run build - when you are ready to the build project
  - $ npm run start - for starting live server

## Specification

This project creates a webpage that allows users to play the game Blackjack; a card game that is also globally known as Twenty-One (21). The point of this game is to get 21 points on the player's cards, without the dealer getting 21 points. To reach exactly 21 points is called hitting a 'Blackjack,' which is an instant win, as long as the dealer does not have 21 points exact. 

In order to win this game, the player must reach a final score that is higher than the dealer's final score without exceeding 21 points or have the dealer draw additional cards until their points exceed 21. This game is implemented with the standard of using 6 decks of cards to prevent card counting strategies. In this context, we will be using only one deck of cards. 

This game has implementations of three standard options for player after receiving the first two initial cards, which are as follows: Hit, Stand, and Split. The rules for each implementations are described in the following paragraphs:

Hit: receive one additional card from dealer.

Stand: stay as you are with your cards, no more additional cards from the dealer. 

Split: split is only initiated when the player receives two cards with same number initially, the player can split the card into two hands instead of one. 

A Blackjack instantly beats all hands that is not a blackjack. In the case of a tied score which is also known as 'push,' all of the bets on the table will be withdrawn to the original players. 

Additional information for this game can be found on Wikipedia; https://en.wikipedia.org/wiki/Blackjack 

## Known Bugs

* _Dealer does not display final card in 2 places_
* _Split is not functional at this current time_

## Technologies Used:

* HTML
* CSS
* Bootstrap
* jQuery (Version 3.4.1)
* JavaScript
* Jest
* ESLint
* npm
* Webpack
* babel

### License:

Copyright (c) 2019 Wei Dai, Jacob Ash, Andrew Bates, and Jamila Aliyeva 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.