import readlineSync from 'readline-sync';

const driver = (runGameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameResult = runGameFunction();
  console.log(gameResult.question);
  console.log(`Question: ${gameResult.question_two}`);

  const your_answer = readlineSync.question('Your answer: ');
  console.log(`Your answer: ${your_answer}`);

  return userName;
};

export default driver;
