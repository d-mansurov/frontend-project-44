import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameConditions = () => {
  const minIntervalValue = 1;
  const maxIntervalValue = 100;
  const currentNumber = getRandomInteger(minIntervalValue, maxIntervalValue);

  const currentAnswer = (currentNumber % 2 === 0) ? 'yes' : 'no';

  return [currentNumber, `${currentAnswer}`];
};

const runIsEvenGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};

export default runIsEvenGame;
