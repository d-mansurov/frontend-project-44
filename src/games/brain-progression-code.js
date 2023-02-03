import { getRandomInteger, getRandomProgression } from '../common-functions.js';
import brainGamesMaster from '../index.js';

const gameRule = 'What number is missing in the progression?';

const getGameConditions = () => {
  const progression = getRandomProgression(getRandomInteger(5, 10), getRandomInteger(1, 9));
  const currentElementPosition = getRandomInteger(0, progression.length - 1);
  const currentElement = progression[currentElementPosition];
  progression[currentElementPosition] = '..';
  const joinedProgression = progression.join(' ');

  const gameQuestion = joinedProgression;
  const gameAnswer = currentElement;

  return [gameQuestion, gameAnswer];
};

const completeProgressionGame = () => {
  brainGamesMaster(gameRule, getGameConditions);
};
export default completeProgressionGame;
