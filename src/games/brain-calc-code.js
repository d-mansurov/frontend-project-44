import { getRandomInteger, getRandomSymbol } from '../common-functions.js';
import brainGamesMaster from '../index.js';

const gameRule = 'What is the result of the expression?';

const getGameConditions = () => {
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

  const gameQuestion = currentMathExpression;
  const gameAnswer = currentCorrectAnswer;

  return [gameQuestion, gameAnswer];
};

const calculateExpressionGame = () => {
  brainGamesMaster(gameRule, getGameConditions);
};

export default calculateExpressionGame;
