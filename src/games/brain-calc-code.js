import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'What is the result of the expression?';

// Function that generates a random math symbol:
const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const getGameConditions = () => {
  const minIntervalValue = 1;
  const maxIntervalValue = 100;
  const currentNumber1 = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentNumber2 = getRandomInteger(minIntervalValue, maxIntervalValue);

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

  return [currentMathExpression, `${currentCorrectAnswer}`];
};

const runExpressionGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};

export default runExpressionGame;
