/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const showGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};
export default showGreeting;
