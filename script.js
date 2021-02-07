let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

const getAbsoluteDistance = (number1, number2) => Math.abs(number1 - number2);

const compareGuesses = (userGuess, computerGuess, secretTarget) => getAbsoluteDistance(userGuess, secretTarget) <= getAbsoluteDistance(computerGuess, secretTarget);

const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber += 1;
