import getRandomInteger from '../common-functions.js';
import runBrainGamesMaster from '../index.js';

const gameRule = 'What number is missing in the progression?';
const minCommonDifference = 1;
const maxCommonDifference = 9;
const minProgressionLength = 5;
const maxProgressionLength = 10;
const minProgressionElement = 0;
const maxProgressionElement = 99;

// Function that generates a random arithmetic progression:
const getRandomProgression = (length, commonDifference) => {
  const progression = [];
  let randomNumber = getRandomInteger(minProgressionElement, maxProgressionElement);

  for (let i = 0; i < length; i += 1) {
    progression.push(randomNumber);
    randomNumber += commonDifference;
  }
  return progression;
};

const getGameConditions = () => {
  const progressionLength = getRandomInteger(minProgressionLength, maxProgressionLength);
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
