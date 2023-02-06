import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

// Function that finds a Greatest Common Divisor of two numbers:
const isGcd = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;

  while (num2 !== 0) {
    const tmp = num2;
    num2 = num1 % num2;
    num1 = tmp;
  }
  return num1;
};

const getGameConditions = () => {
  const minIntervalValue = 1;
  const maxIntervalValue = 100;
  const currentNumber1 = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentNumber2 = getRandomInteger(minIntervalValue, maxIntervalValue);

  const currentQuestion = `${currentNumber1} ${currentNumber2}`;

  const currentCorrectAnswer = isGcd(currentNumber1, currentNumber2);

  return [currentQuestion, `${currentCorrectAnswer}`];
};

const runGcdGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};

export default runGcdGame;
