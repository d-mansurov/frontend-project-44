import readlineSync from 'readline-sync';

// Function that generates a random integer between 1 and 100:
const getRandomInteger = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function that generates a random math symbol:
const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Code for 'Brain-Even' game:
const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= 2; i += 1) {
    const currentNumber = getRandomInteger();
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((currentNumber % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((currentNumber % 2 !== 0) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      if (userAnswer === 'yes') {
        console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'no'`);
        console.log(`Let's try again, ${userName}`)
        return;
      } else if (userAnswer === 'no') {
        console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'yes'`);
        console.log(`Let's try again, ${userName}`)
        return;
      } else {
        console.log(`There is no such asnwer '${userAnswer}' :( You should type 'yes' or 'no'`);
        console.log(`Let's try again, ${userName}`)
        return;
      }
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
    const currentNumber1 = getRandomInteger();
    const currentNumber2 = getRandomInteger();
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
      console.log(`Let's try again, ${userName}`)
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
    let currentNumber1 = getRandomInteger();
    let currentNumber2 = getRandomInteger();

    console.log(`Question: ${currentNumber1} ${currentNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    while (currentNumber2 !== 0) {
      let tmp = currentNumber2;
      currentNumber2 = currentNumber1 % currentNumber2;
      currentNumber1 = tmp;
    }
    const currentCorrectAnswer = currentNumber1;
  
    if (userAnswer === currentCorrectAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${currentCorrectAnswer}'`);
      console.log(`Let's try again, ${userName}`)
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { brainCalc, brainEven, brainGcd };
