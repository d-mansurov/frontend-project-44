import readlineSync from 'readline-sync';

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

// Code for 'Brain-Even' game:
const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= 2; i += 1) {
    const currentNumber = getRandomInteger(1, 100);
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((currentNumber % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((currentNumber % 2 !== 0) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else if ((currentNumber % 2 !== 0) && (userAnswer === 'yes')) {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'no'`);
      console.log(`Let's try again, ${userName}`);
      return;
    } else if ((currentNumber % 2 === 0) && (userAnswer === 'no')) {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'yes'`);
      console.log(`Let's try again, ${userName}`);
      return;
    } else {
      console.log(`There is no such asnwer '${userAnswer}' :( You should type 'yes' or 'no'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

// Code for 'Brain-Calc' game:
const brainCalc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i <= 2; i += 1) {
    const currentNumber1 = getRandomInteger(1, 100);
    const currentNumber2 = getRandomInteger(1, 100);
    const currentSymbol = getRandomSymbol();
    const currentMathExpression = `${currentNumber1} ${currentSymbol} ${currentNumber2}`;

    let currentCorrectAnswer = 0;
    if (currentSymbol === '+') {
      currentCorrectAnswer = currentNumber1 + currentNumber2;
    } else if (currentSymbol === '-') {
      currentCorrectAnswer = currentNumber1 - currentNumber2;
    } else if (currentSymbol === '*') {
      currentCorrectAnswer = currentNumber1 * currentNumber2;
    }

    console.log(`Question: ${currentMathExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === currentCorrectAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${currentCorrectAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

// Code for 'Brain-GCD' game:
const brainGcd = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i <= 2; i += 1) {
    let currentNumber1 = getRandomInteger(1, 100);
    let currentNumber2 = getRandomInteger(1, 100);

    console.log(`Question: ${currentNumber1} ${currentNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    while (currentNumber2 !== 0) {
      const tmp = currentNumber2;
      currentNumber2 = currentNumber1 % currentNumber2;
      currentNumber1 = tmp;
    }
    const currentCorrectAnswer = currentNumber1;

    if (userAnswer === currentCorrectAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${currentCorrectAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

// Code for 'Brain-Progression' game:
const brainProgression = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i <= 2; i += 1) {
    const progression = getRandomProgression(getRandomInteger(5, 10), getRandomInteger(1, 9));
    const currentElementPosition = getRandomInteger(0, progression.length - 1);
    const currentElement = progression[currentElementPosition];
    progression[currentElementPosition] = '..';
    const joinedProgression = progression.join(' ');

    console.log(`Question: ${joinedProgression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === currentElement.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${currentElement}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

// Code for 'Brain-Prime' game:
const brainPrime = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i <= 2; i += 1) {
    const currentNumber = getRandomInteger(2, 3571);

    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isPrime = (num) => {
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

    if ((isPrime(currentNumber) === true) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((isPrime(currentNumber) === false) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else if ((isPrime(currentNumber) === false) && (userAnswer === 'yes')) {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'no'`);
      console.log(`Let's try again, ${userName}`);
      return;
    } else if ((isPrime(currentNumber) === true) && (userAnswer === 'no')) {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'yes'`);
      console.log(`Let's try again, ${userName}`);
      return;
    } else {
      console.log(`There is no such asnwer '${userAnswer}' :( You should type 'yes' or 'no'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  brainCalc, brainEven, brainGcd, brainProgression, brainPrime,
};
