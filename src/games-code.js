import readlineSync from 'readline-sync';

const brainEven = () => {
  const numbers = [15, 6, 7];
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (const item of numbers) {
    console.log(`Question: ${item}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if ((item % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((item % 2 !== 0) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      if (userAnswer === 'yes') {
        console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'no'`);
        return;
      } else if (userAnswer === 'no') {
        console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'yes'`);
        return;
      } else {
        console.log(`There is no such asnwer '${userAnswer}' :( You should type 'yes' or 'no'`);
        return;
      }
      }
  }
  console.log(`Congratulations, ${userName}`);
};

export default brainEven;
