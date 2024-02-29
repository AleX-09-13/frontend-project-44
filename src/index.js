import readlineSync from 'readline-sync';

const driver = (runGame, question) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);
  let count = 0;
  while (count < 3) {
    const gameResult2 = runGame();
    const { rightAnswer } = gameResult2;
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    console.log(`Question: ${gameResult2.questionTwo}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === yourAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`your_answer is wrong answer ;(. Correct answer "${rightAnswer}".`);
      break;
    }
  }
  console.log(`Let's try again, ${userName}!`);
  return userName;
};

export default driver;
