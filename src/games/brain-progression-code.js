import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'What number is missing in the progression?';

// Function that generates a random arithmetic progression:
const getRandomProgression = (length, commonDifference) => {
  const progression = [];
  const randomNumber = Math.random() * 100;
  let element = Math.floor(randomNumber);

  for (let i = 0; i < length; i += 1) {
    progression.push(element);
    element += commonDifference;
  }
  return progression;
};

const getGameConditions = () => {
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const progressionLength = getRandomInteger(minProgressionLength, maxProgressionLength);

  const minCommonDifference = 1;
  const maxCommonDifference = 9;
  const commonDifference = getRandomInteger(minCommonDifference, maxCommonDifference);

  const progression = getRandomProgression(progressionLength, commonDifference);

  const currentElementPosition = getRandomInteger(0, progression.length - 1);
  const currentElement = progression[currentElementPosition];
  progression[currentElementPosition] = '..';
  const joinedProgression = progression.join(' ');

  return [joinedProgression, `${currentElement}`];
};

const runProgressionGame = () => {
  runBrainGamesMaster(gameRule, getGameConditions);
};
export default runProgressionGame;
