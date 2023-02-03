import readlineSync from 'readline-sync';
import { getRandomInteger, getRandomSymbol } from '../common-functions.js';
import brainGamesMain from '../index.js';

const mainGameRule = 'What is the result of the expression?';

const calculateExpressionGame = () => {
  
  console.log('What is the result of the expression?');

  for (let i = 0; i <= 2; i += 1) {
    const currentNumber1 = getRandomInteger(1, 100);
    const currentNumber2 = getRandomInteger(1, 100);
    const currentSymbol = getRandomSymbol();
    const currentMathExpression = `${currentNumber1} ${currentSymbol} ${currentNumber2}`;

    let currentCorrectAnswer = 0;
    if (currentSymbol === '+') {
      currentCorrectAnswer = currentNumber1 + currentNumber2;
    } else if (currentSymbol === '-') {
      currentCorrectAnswer = currentNumber1 - currentNumber2;
    } else if (currentSymbol === '*') {
      currentCorrectAnswer = currentNumber1 * currentNumber2;
    }

    console.log(`Question: ${currentMathExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');

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

export default calculateExpressionGame;
