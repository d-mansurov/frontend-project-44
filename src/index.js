import readlineSync from 'readline-sync';

const runBrainGamesMaster = (gameRule, getGameConditions) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (let i = 0; i <= 2; i += 1) {
    const [gameQuestion, gameAnswer] = getGameConditions();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${gameAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runBrainGamesMaster;
