// Function that generates a random integer between Min and Max:
const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export default getRandomInteger;
