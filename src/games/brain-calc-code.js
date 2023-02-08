import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'What is the result of the expression?';
const minIntervalValue = 1;
const maxIntervalValue = 100;

// Function that generates a random math symbol:
const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  const firstSymbolPosition = 0;
  const lastSymbolPosition = 2;
  return symbols[getRandomInteger(firstSymbolPosition, lastSymbolPosition)];
};

const getResultOfExpression = (symbol, number1, number2) => {
  let correctAnswer = 0;
  if (symbol === '+') {
    correctAnswer = number1 + number2;
  } else if (symbol === '-') {
    correctAnswer = number1 - number2;
  } else if (symbol === '*') {
    correctAnswer = number1 * number2;
  }
  return correctAnswer;
};

const getGameConditions = () => {
  const currentNumber1 = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentNumber2 = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentSymbol = getRandomSymbol();
  const currentMathExpression = `${currentNumber1} ${currentSymbol} ${currentNumber2}`;

  const currentCorrectAnswer = getResultOfExpression(currentSymbol, currentNumber1, currentNumber2);

  return [currentMathExpression, `${currentCorrectAnswer}`];
};

const runExpressionGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};

export default runExpressionGame;
