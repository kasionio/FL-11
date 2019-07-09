const prizeMultiplier = 2;
const attempts = 3;
let maxRangeNumber = 8;
const rangeNumberAdd = 4;
let gameCount = 0;
let totalPrize = 0;
let possiblePrize = 100;
let leftAttempts, gameStart, confirmation, userNumber;

for (;;) {
  gameStart = confirm('Do you want to play a game?');

  if (!gameStart) {
    alert('You did not become a billionaire, but can.');
    break;
  } else {
    let randomNumber = Math.floor(Math.random() * (maxRangeNumber + 1));
    for (let i = 1; i <= attempts; i++) {
      leftAttempts = attempts + 1 - i;
      userNumber = prompt(
        'Choose a roulette pocket number from 0 to ' + maxRangeNumber + '\n' +
        'Attempts left: ' + leftAttempts + '\n' +
        'Total prize: ' + totalPrize + '$\n' +
        'Possible prize on current attempt: ' + possiblePrize + '$');
      userNumber = parseInt(userNumber);
      if (userNumber !== randomNumber && i === attempts) {
        gameCount = 0;
        totalPrize = 0;
        alert('Thank you for your participation. Your prize is: ' +
          totalPrize + ' $');
        break;
      } else if (userNumber !== randomNumber) {
        continue;
      }
      if (userNumber === randomNumber) {
        totalPrize += possiblePrize;
        confirmation = confirm('Congratulation, you won! Your prize is: ' + totalPrize +
          ' $. Do you want to continue?');
        if (confirmation) {
          maxRangeNumber += rangeNumberAdd;
          possiblePrize = prizeMultiplier * possiblePrize * (gameCount + 1) / i;
          gameCount++;
          break;
        } else {
          alert('Thank you for your participation. Your prize is: ' +
            totalPrize + ' $');
          break;
        }
      }
    }
  }
}