import readlineSync from 'readline-sync';
import getRandomInteger from '../common-functions.js';
import brainGamesMain from '../index.js';

const mainGameRule = 'Find the greatest common divisor of given numbers.';

const calculateGcdGame = () => {
  
  for (let i = 0; i <= 2; i += 1) {
    let currentNumber1 = getRandomInteger(1, 100);
    let currentNumber2 = getRandomInteger(1, 100);

    console.log(`Question: ${currentNumber1} ${currentNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    while (currentNumber2 !== 0) {
      const tmp = currentNumber2;
      currentNumber2 = currentNumber1 % currentNumber2;
      currentNumber1 = tmp;
    }
    const currentCorrectAnswer = currentNumber1;

    if (userAnswer === currentCorrectAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${currentCorrectAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calculateGcdGame;
