import readlineSync from 'readline-sync';

const RunGame = () => {
  const question = 'What is the result of the expression?';
  function calc() {
    const operations = ['+', '-', '*'];
    const operation = Math.floor(Math.random() * operations.length);
    const randomNamber1 = Math.floor(Math.random() * 10);
    const randomNamber2 = Math.floor(Math.random() * 10);
    const question_two = `${randomNamber1}${operation}${randomNamber2}`;
    let sum;
    switch (operations[operation]) {
      case '+':
        sum = randomNamber2 + randomNamber1;
        break;
      case '-':
        sum = randomNamber2 - randomNamber1;
        break;
      case '*':
        sum = randomNamber2 * randomNamber1;
        break;
      default:
        return '';
    }
    return { sum, question, question_two };
  }
  return calc;
};

const driver = (runGameFunction) => {
  const gameResult = runGameFunction();
  const userName = readlineSync.question('May I have your name? ');
  const your_answer = readlineSync.question('Your answer: ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log(gameResult.question);
  console.log(`Question:  ${gameResult.question_two}`);
  console.log(`Your answer:  ${your_answer}`);
  return userName;
};

// Вызов функции driver с передачей runGameFunction, которая ссылается на результат выполнения RunGame()
driver(RunGame());
