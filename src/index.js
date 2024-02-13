import readlineSync from 'readline-sync';

// Движок
const driver = (runGameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameResult = runGameFunction();
  console.log(gameResult.question);
  // Цикл
  let count = 0;
  function programExecution() {
    const gameResult = runGameFunction();
    const rightAnswer = gameResult.rightAnswer;
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Question: ${gameResult.questionTwo}`);
    const your_answer = readlineSync.question('Your answer: ');
    if (rightAnswer == your_answer) {
      console.log('Correct!');
      count += 1; // Увеличиваем счетчик вызовов после правильного ответа
      programExecution();
    } else {
      console.log(
        `your_answer is wrong answer ;(. Correct answer "${rightAnswer}".`,
      );
      console.log(`Let's try again, ${userName}!`);
    }
  }
  programExecution();
  return userName;
};

export default driver;
