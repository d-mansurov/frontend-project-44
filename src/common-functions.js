// Function that generates a random integer between Min and Max:
const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

// Function that generates a random math symbol:
const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Function that generates a random arithmetic progression:
const getRandomProgression = (length, commonDifference) => {
  const progression = [];
  let element = Math.floor(Math.random() * 100);
  for (let i = 0; i < length; i += 1) {
    progression.push(element);
    element += commonDifference;
  }
  return progression;
};

export {
  getRandomInteger,
  getRandomProgression,
  getRandomSymbol,
};
