import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minIntervalValue = 1;
const maxIntervalValue = 100;

const isEven = (number) => {
  const result = (number % 2 === 0);
  return result;
};

const getGameConditions = () => {
  const currentNumber = getRandomInteger(minIntervalValue, maxIntervalValue);
  const currentAnswer = isEven(currentNumber) === true ? 'yes' : 'no';

  return [currentNumber, `${currentAnswer}`];
};

const runIsEvenGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};

export default runIsEvenGame;
