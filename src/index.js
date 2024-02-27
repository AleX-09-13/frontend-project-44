import readlineSync from 'readline-sync';

const driver = (runGameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameResult = runGameFunction();
  console.log(gameResult.question);
  let count = 0;
  while (count < 3) {
    const gameResult2 = runGameFunction();
    const { rightAnswer } = gameResult2;
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Question: ${gameResult2.questionTwo}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === yourAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`your_answer is wrong answer ;(. Correct answer "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  return userName;
};

export default driver;
