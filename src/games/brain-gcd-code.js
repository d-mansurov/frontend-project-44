import { getRandomInteger } from '../common-functions.js';
import brainGamesMaster from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGameConditions = () => {
  let currentNumber1 = getRandomInteger(1, 100);
  let currentNumber2 = getRandomInteger(1, 100);
  const currentQuestion = `${currentNumber1} ${currentNumber2}`;

  while (currentNumber2 !== 0) {
    const tmp = currentNumber2;
    currentNumber2 = currentNumber1 % currentNumber2;
    currentNumber1 = tmp;
  }
  const currentCorrectAnswer = currentNumber1;

  const gameQuestion = currentQuestion;
  const gameAnswer = currentCorrectAnswer;

  return [gameQuestion, gameAnswer];
};

const calculateGcdGame = () => {
  brainGamesMaster(gameRule, getGameConditions);
};

export default calculateGcdGame;
