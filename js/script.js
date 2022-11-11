// ** For Time
function myClock() 
{         
    setTimeout(function() 
    {   
      const d = new Date();
      const n = d.toLocaleTimeString();
      document.getElementById("time").innerHTML = n; 
      myClock();             
    }, 1000)
}
myClock();

//** Set initial scores
let playerScore = 0;
let computerScore = 0;

//** Get elements
const playerNumber = document.getElementById("playerNumber");
const computerNumber = document.getElementById("computerNumber");
const outcome = document.getElementById("outcome");

//** Random computer play
function computerPlay() 
{
  let a = ['Rock', 'Paper', 'Scissors'];
  return a[Math.floor(Math.random() * a.length)];
};

//** Word capitalization
function toCapitalize(word) 
{
  let lower = word.toLowerCase();
  let first = lower.charAt(0).toUpperCase();
  let remaining = lower.slice(1);
  return first + remaining;
};
function play(id) 
{
  playRound(id, computerPlay());
};

//** main play
function playRound(playerselection, computerSelection) 
{
  let p = toCapitalize(playerselection);
  let c = toCapitalize(computerSelection);
  if (p === 'Paper' &&
    c === 'Rock') 
    {
    outcome.textContent = 'You win! Paper beats Rock.';
    playerNumber.textContent = playerScore += 1;
    } 
    else if (p === 'Rock' && c === 'Scissors') 
    {
    outcome.textContent = 'You win! Rock beats Scissors.';
    playerNumber.textContent = playerScore += 1;
    } 
    else if (p === 'Scissors' && c === 'Paper') 
    {
    outcome.textContent = 'You win! Scissors beats Paper.';
    playerNumber.textContent = playerScore += 1;
    } 
    else if (p === c) 
    {
    outcome.textContent = 'Same choice. Try again.';
    } 
    else 
    {
    outcome.textContent = `You lose! ${c} beats ${p}.`;
    computerNumber.textContent = computerScore += 1;
    }
    discloseResult();
};

//** Check which player gets 5 points first.
function discloseResult() 
{
  if (playerScore === 5) 
  {
    outcome.textContent += ' Congratulations! You won the game.';
  } else if (computerScore === 5) 
  {
    outcome.textContent += ' Sorry! The machine won the game.';
  };
};