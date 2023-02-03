import readlineSync from 'readline-sync';
import getRandomInteger from '../common-functions.js';
import brainGamesMain from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  for (let i = 0; i <= 2; i += 1) {
    const currentNumber = getRandomInteger(1, 100);
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((currentNumber % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((currentNumber % 2 !== 0) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else if ((currentNumber % 2 !== 0) && (userAnswer === 'yes')) {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'no'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else if ((currentNumber % 2 === 0) && (userAnswer === 'no')) {
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

const isEvenGame = () => {
  brainGamesMain(gameRule, );
};

export default isEvenGame;
