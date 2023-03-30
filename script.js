let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
 return Math.floor(Math.random() * 9);
}

//BELOW - need to use math.abs() to see who is further away from the number that is generated.  
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    const absDistanceUser = Math.abs(secretTarget - userGuess);
    const absDistanceComputer = Math.abs(secretTarget - computerGuess);
    if (userGuess === computerGuess){
    return true
    } else if (userGuess === secretTarget){
      return true;
    } else if(computerGuess === secretTarget){
    return false
    } else if (absDistanceComputer < absDistanceUser){
     return false
    } else if (absDistanceUser < absDistanceComputer){
      return true
    } else {
        return true; //This fixed the issue of user not getting the win if its a tie.
    }
    }


const updateScore = (winner) => {
  if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

  const advanceRound = () => {
    return currentRoundNumber + 1
  }

