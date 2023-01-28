# Pizza Parlor

#### By Aaron Demski,

#### Pizza Parlor

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _TDD_
* _Whiteboard_

## Description

_A Pizza Parlor where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost._

## Setup/Installation Requirements

* _Clone my repository to your desktop using VsCode._
* _Type "git clone (My-GitHub-Repository-Link)_
* _Navigte to the top level of the directory._
* _Open index.html in the file you cloned._


## TDD Tests
Describe Pizza()

Test 1: "It should return a Pizza object with two properties for toppings and size."
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

<!-- New function -->
Describe GameBoard()

Test 1: ""
Code: 
let gameboard = new GameBoard();
gameboard.players.player1 = ("erin");
gameboard.players;
gameboard.players.player2 = ("vera")
gameboard.players;
Expected Output: player1 = ("erin"), player2 = ("vera");

<!-- New function -->
Describe Player()

Test 1: "It should add 2 players to the board constructor object."
Code: let newPlayers = new Player("erin", "timlin");
Expected Output: newPlayers = {player1: erin, player2: timlin}

<!-- New function -->
Describe Gameboard.prototype.score();

Test 1: "It should roll the die and create a score."
Code: let gameboard = new GameBoard();
gameboard.score();
Expected Outcome: random number between 1 and 6. 

<!-- New function -->
Describe Gameboard.prototype.playerTurn();

Test 1: "It should return the score created in Gameboard.prototype.score()."
Code: let gameboard = new GameBoard();
gameboard.playerTurn();
Expected Outcome: random number between 1 and 6. 


## Known Bugs

* _No known issues at this time_

## License

__Copyright (c) <2023> <Aaron Demski>

Copyright (c) _January 27th, 2023_ _Aaron Demski