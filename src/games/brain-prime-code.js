import readlineSync from 'readline-sync';
import getRandomInteger from '../common-functions.js';
import brainGamesMain from '../index.js';

const mainGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeGame = () => {

  for (let i = 0; i <= 2; i += 1) {
    const currentNumber = getRandomInteger(2, 3571);

    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isPrimeNum = (num) => {
      if (num < 2) {
        return false;
      }
      for (let j = 2; j < num; j += 1) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    };

    if ((isPrimeNum(currentNumber) === true) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((isPrimeNum(currentNumber) === false) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else if ((isPrimeNum(currentNumber) === false) && (userAnswer === 'yes')) {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'no'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else if ((isPrimeNum(currentNumber) === true) && (userAnswer === 'no')) {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'yes'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else {
      console.log(`There is no such asnwer '${userAnswer}' :( You should type 'yes' or 'no'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default isPrimeGame;
