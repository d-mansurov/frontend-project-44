import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'What is the result of the expression?';
const minIntervalValue = 1;
const maxIntervalValue = 100;
const symbols = ['+', '-', '*'];

// Function that generates a random math symbol:
const getRandomSymbol = (symbolsArray) => {
  const firstSymbolPosition = 0;
  const lastSymbolPosition = symbolsArray.length - 1;
  return symbolsArray[getRandomInteger(firstSymbolPosition, lastSymbolPosition)];
};

const getResultOfExpression = (symbol, number1, number2) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return undefined;
  }
};

const getGameConditions = () => {
  const currentNumber1 = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentNumber2 = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentSymbol = getRandomSymbol(symbols);
  const currentMathExpression = `${currentNumber1} ${currentSymbol} ${currentNumber2}`;

  const currentCorrectAnswer = getResultOfExpression(currentSymbol, currentNumber1, currentNumber2);

  return [currentMathExpression, `${currentCorrectAnswer}`];
};

const runExpressionGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};

export default runExpressionGame;
