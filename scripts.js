const user0El = document.querySelector('.user--0');
const user1El = document.querySelector('.user--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')
// setting the text content to 0 makes js automatically convert to string
score0El.textContent = 0;
score1El.textContent = 0;
// add a class for the dice element that allows it to be hidden
diceEl.classList.add('hidden');
// set current score to 0
let currentscore = 0;
// create scores array that we will later utilize
const scores = [0, 0];
// set activeUser to be user 0 aka player 1
let activeUser = 0;
// set playing to true to show game is active
let playing = true;

// MAKE THE DICE ROLL 
// SWITCH TURNS BETWEEN USERS

const switchUser = function () {
    // set currentscore to start at 0
    currentscore = 0;
    // target current score id from html and set the text to equal the new score
    document.getElementById(`current--${activeUser}`).textContent =
    currentscore;
    // create a conditional statement that allows us to switch between user0 and user1
    activeUser = activeUser == 0 ? 1 : 0;
    // switch between user 0 and user 1 being active
    user0El.classList.toggle('user--active');
    user1El.classList.toggle('user--active');
    };
    // create an event listener that makes the button "roll" when clicked
    btnRoll.addEventListener('click', function () {
        // if the game is active remove the hidden dice element
    if (playing) {
    diceEl.classList.remove('hidden');
    // create a math equation that alternates the dice numbers when clicked to a random #
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console log dice to make sure our pic is matching the score
    console.log(dice);
    // make the dice img update to whatever is rolled
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
        // add dice amt to current score
    currentscore += dice;
    // set text content on each user to accurately represent their current score
    document.getElementById(`current--${activeUser}`).textContent =
    currentscore;
    } else {
    switchUser();
    }
    }
    });

    // HOLD BUTTON
    // set active to start at 0
let active = 0;
btnHold.addEventListener('click', function () {
    // set up a conditional that checks if game is active
    if (playing) {
        // check activeUsers spot in scores array and add the current score to it
        scores[activeUser] += currentscore;
        // update score id at a particular player to represent active user's score
        document.getElementById(`score--${activeUser}`).textContent =
        scores[activeUser];
        // check if the active users score is greater than or equal to 20
        if (scores[activeUser] >= 20) {
            // if so, the game is over
            playing = false;
            // hide dice element
            diceEl.classList.add('hidden');
            // set score to now say the higher scoring player wins
            document.getElementById(`score--${activeUser}`).textContent = 'Win!';
            switchUser();
            // set score to now say the lower scoring player loses
            // next I will work on making it so that the user closest to 21 without busting wins, and the loser has a message that displays "Bust"
            document.getElementById(`score--${activeUser}`).textContent = 'Lost!';
            document
            .querySelector(`.user--${activeUser}`)
            .classList.add('user--winner');
            // check if the active user is user 0 or 1, then reassign that to the active variable
            active = activeUser == 1 ? 0 : 1;
            document
            .querySelector(`.user--${active}`)
            .classList.add('user--active');
        } else {
            switchUser();
        }
        }
    });
    
    // NEW GAME BUTTON
btnNew.addEventListener('click', function () {
    // when game is currently being played
    playing = true;
    // remove the winner class 
    document
    .querySelector(`.user--${activeUser}`)
    .classList.remove('user--winner');
    // reset active user to user 0 so theyd be the first to go again
    activeUser = 0;
    document.querySelector('.user--0').classList.add('user--active');
    document.querySelector('.user--1').classList.remove('user--active');
    // reset the scores to 0
    scores[0] = 0;
    scores[1] = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
});
    // ACCOUNT FOR 3 LIVES EACH
    // WRITE FUNCTIONALITY THAT RECUCES LIVES 
    // MAKE CURRENT SCORE ONLY ABLE TO GO UP TO 21 OR "BUST" 
    // AND SWITCHES TURNS
    // DECLARE A WINNER AND A LOSER

    // possibly put in messages that send back and forth
