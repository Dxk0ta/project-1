# The Dice Is Right
 Welcome to The Dice Is Right! You will take turns rolling the dice. Every time you roll, the number you roll will add to your scoreboard, you can choose to hold your scoreboard number and end your turn, or roll again. Be careful though! If your scoreboard gets above 21, you will bust and your score will go back to 0! The player that gets closest to 21 without busting will win that round. You have three lives, the winner will be declared by last man standing!

Here is the link! https://github.com/Dxk0ta/project-1.git

## Getting Started
---
I wanted to create a game that would give me the ability to better my Javascript skills! This game is based on the well known card game "21" but instead of cards we will be using dice!

---

### (MVP Goals)
---
* Make sure everything is running smoothly together and there are no bugs
* Game instructions are clear to user
* Keeping code neet and organized for easy read and understanding
* Make sure all responses work
* Make things simple but fun with javascript!

---

### (Stretch Goals)
---
* I love styling, my biggest goal after finishing the project requirements and messing around with CSS, Javascript and draw.io as much as I can to implament as much beauty into the game as possible
* Work on side projects such as displaying a message in the players "message bubble" telling players whos turn it is, and messages when players win or lose.
* Naming each "life" and sending a message to the player (for example) "you killed pepe!"
* When player loses a turn, one of his men will get crossed out with a red X.
* I may mess around and put in an input section for each player to type there name in and fill the "Player one" "Player two" text
* I would really like to get AI's involved as well

---

### (Potential Road Blocks)
---
* Getting way to invested into what I'm doing to the point that I will spend hours trying to fix something before I delete it and write something else.
* Organization skills

---

### (Prerequasites)
---
* HTML
* CSS
* Javascript


## Wireframe
---
* Simple layout of what the game will look like!

![wireframe](./prototype.img.png)

---

## The Process of The Dice Is Right
---
(DAY ONE AND TWO)

The first thing I did was plan out what I invisioned the outcome to be. This started in my head, then slowly worked its way to the computer using wireframe to make the blueprints.

(DAY THREE AND FOUR)

Started by creating the layout of the board and buttons in css, then did some basic styling. I continued to get the styling more like how I wanted and then started on some basic dice rolling and player switch functionalities. When doing this, I ran into a bug that took me a few hours to resolve. When I would roll the dice, the current score for player 2 would say NaN. I then realized I accidentally had a syntax error and when fixed the problem was resolved. Over the next couple days I plan on continuing to work on functionality, like the hold button and the new game button. I also want the 3 lives to pop up and the messages that display the current user's turn.

(DAY FIVE)

Today I worked on first trying to get 3 stick figures to pop up on each player's side. Then I spent most of the day trying to make the lives disappear when a round is lost. At first, I was running into an issue where it would add the class "user--winner" onto both the user's sections. I was able to resolve this by taking away an unnecessary conditional statement I had written. I was able to create a tracker object where each user's lives are going down in the console, and tomorrow I plan on making it so as the lives go down the images disappear as well. I was also able to change some of the logic to more accurately represent 21, and so now whichever player goes above 21 first loses. I still have to make the logic more accurate to the game but my main focus is to get the whole game working properly by tomorrow and I hope to do this with a few slight bug fixes. Right now, it says both users are active when it should only be one. Also, player 1 is the only one that loses lives and it is not happening when it is supposed to. I hope to fix these issues tomorrow and get the game up and running so I can deploy it by Thursday!

(DAY SIX)

I started the day working on debugging the life bar and getting it to run the way I intended. This took a few hours. I was able to solve bugs where the active user was incorrectly toggling. I also solved a bug where it was switching users when I didn't want it to. I was able to do that by realizing I was invoking the function redundantly. Also, I worked on getting the lives to visibly decrement when a round is lost. This was probably the longest bug I worked on, and it was because I tried to use .lastChild instead of .lastElementChild. I also worked on styling my game better so it was more obvious who the active player was. I made it so after all lives are lost, the 'New Round' button gets changed to a 'New Game' button that resets the lives and scores. I fixed the logic of the game to more accurately represent the game of 21 and it is working how I wanted it to. 