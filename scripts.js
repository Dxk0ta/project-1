const user0El = document.querySelector('.user--0');
const user1El = document.querySelector('.user--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const livesConEl = document.querySelector('.livesContainer');
const livesEl = document.querySelector('.lives');
const userEls = document.getElementsByClassName('user');
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
// create an object that keeps track of lives
const tracker = {
    user0: 3,
    user1: 3
};
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
    // set tracker at active (value should change) to start @ 3
btnHold.addEventListener('click', function () {
    // set up a conditional that checks if game is active
    if (playing) {
        // check activeUsers spot in scores array and add the current score to it
        scores[activeUser] += currentscore;
        // update score id at a particular player to represent active user's score
        document.getElementById(`score--${activeUser}`).textContent =
        scores[activeUser];
        // check if the active users score is greater than or equal to 20
        // also check to see if the lives are = 0, if so..game over
        if (scores[activeUser] > 21) {
            // if so, the game is over
            playing = false;
            // hide dice element
            diceEl.classList.add('hidden');
            // set score to now say the lower scoring player loses
            // next I will work on making it so that the user closest to 21 without busting wins, and the loser has a message that displays "Bust"
            document.getElementById(`score--${activeUser}`).textContent = 'Bust!';
            switchUser();
            // set score to now say the higher scoring player wins
            document.getElementById(`score--${activeUser}`).textContent = 'Win!';
            if (document.getElementById(`score--${activeUser}`).textContent === 'Win!') {
                document
                .querySelector(`.user--${activeUser}`)
                .classList.add('user--winner');
            } 
            // create loser variable
            let loser;
            // iterate through userElement
            for (let element of userEls) {
                // check if the user does not have the class user--winner attached
                if(!element.classList.contains('user--winner')) {
                    // if that is true, they are the loser
                    loser = element;
                }
            }
            if (loser) {
                // create loser class once game detects a loser
                loser.classList.add('user--loser');
                lifeTracker();
            }
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
    // remove the loser class 
    document
    .querySelector(`.user--${activeUser}`)
    .classList.remove('user--loser');
    switchUser();
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

const lifeTracker = function () {
    // create life variable that starts at 3
    // create active winner and loser variables
    let activeWinner = document.querySelector('.user--winner');
    let activeLoser = document.querySelector('.user--loser');
    let loss;
    for (let element of userEls) {
        loss = element;
    }
    if (loss.classList.contains('user--0') && !activeWinner) {
        tracker.user0 -= 1
        livesConEl.removeChild(livesConEl.lastChild);
    } else {
        tracker.user1 -= 1
        livesConEl.removeChild(livesConEl.lastChild);
    }
    console.log('traaackerrrr   ', tracker)
}


    // ACCOUNT FOR 3 LIVES EACH
    // WRITE FUNCTIONALITY THAT REDUCES LIVES 
    // MAKE CURRENT SCORE ONLY ABLE TO GO UP TO 21 OR "BUST" 
    // AND SWITCHES TURNS
    // DECLARE A WINNER AND A LOSER
    // possibly put in messages that send back and forth

