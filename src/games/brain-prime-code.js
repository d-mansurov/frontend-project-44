import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Function that checks whether the number is prime
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

const getGameConditions = () => {
  const minIntervalValue = 2;
  const maxIntervalValue = 3571;

  const currentNumber = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentAnswer = isPrimeNum(currentNumber) === true ? 'yes' : 'no';

  return [currentNumber, `${currentAnswer}`];
};

const runIsPrimeGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};

export default runIsPrimeGame;
