import { getRandomInteger } from '../common-functions.js';
import brainGamesMaster from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameConditions = () => {
  const currentNumber = getRandomInteger(2, 3571);
  let currentAnswer = '';

  const isPrimeNum = (num) => {
    if (num < 2) {
      return false;
    }
    for (let j = 2; j < num; j += 1) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  };

  if (isPrimeNum(currentNumber) === true) {
    currentAnswer = 'yes';
  } else {
    currentAnswer = 'no';
  }

  const gameQuestion = currentNumber;
  const gameAnswer = currentAnswer;

  return [gameQuestion, gameAnswer];
};

const isPrimeGame = () => {
  brainGamesMaster(gameRule, getGameConditions);
};

export default isPrimeGame;
