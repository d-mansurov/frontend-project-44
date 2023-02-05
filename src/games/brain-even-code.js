import { getRandomInteger } from '../common-functions.js';
import brainGamesMaster from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameConditions = () => {
  const currentNumber = getRandomInteger(1, 100);
  let currentAnswer = '';

  if (currentNumber % 2 === 0) {
    currentAnswer = 'yes';
  } else {
    currentAnswer = 'no';
  }

  const gameQuestion = currentNumber;
  const gameAnswer = currentAnswer;

  return [gameQuestion, gameAnswer];
};

const isEvenGame = () => {
  brainGamesMaster(gameRule, getGameConditions);
};

export default isEvenGame;
