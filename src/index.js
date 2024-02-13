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
  function program_execution() {
    const gameResult = runGameFunction();
    let right_answer = gameResult.right_answer;
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Question: ${gameResult.question_two}`);
    const your_answer = readlineSync.question('Your answer: ');
    if (right_answer == your_answer) {
      console.log('Correct!');
      count += 1; // Увеличиваем счетчик вызовов после правильного ответа
      program_execution();
    } else {
      console.log(
        `your_answer is wrong answer ;(. Correct answer "${right_answer}".`,
      );
      console.log(`Letś try again, ${userName}!`);
    }
  }
  program_execution();

  return userName;
};

export default driver;
