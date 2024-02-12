import readlineSync from 'readline-sync';

const RunGame = () => {
  const question = 'What is the result of the expression?';
  function calc() {
    const operations = ['+', '-', '*'];
    const operationIndex = Math.floor(Math.random() * operations.length);
    const randomNamber1 = Math.floor(Math.random() * 10);
    const randomNamber2 = Math.floor(Math.random() * 10);
    const operation = operations[operationIndex];
    const question_two = `${randomNamber1} ${operation} ${randomNamber2}`;
    let right_answer;
    switch (operation) {
      case '+':
        right_answer = randomNamber1 + randomNamber2;
        break;
      case '-':
        right_answer = randomNamber1 - randomNamber2;
        break;
      case '*':
        right_answer = randomNamber1 * randomNamber2;
        break;
      default:
        return '';
    }
    return { right_answer, question, question_two };
  }
  return calc;
};
// Движок
const driver = (runGameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameResult = runGameFunction();
  console.log(gameResult.question);

  let right_answer = gameResult.right_answer;
  let count = 0;
  function program_execution() {
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
        `your_answer is wrong answer ;(. Correct answer ${right_answer}.`,
      );
      console.log(`Letś try again, ${userName}!`);
    }
  }
  program_execution();

  return userName;
};

// Вызов функции driver с передачей функции RunGame
driver(RunGame());
