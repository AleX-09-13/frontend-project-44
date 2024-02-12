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
  console.log(`Hello, ${userName}!`); // Исправлено использование шаблонной строки

  let count = 0;
  function program_execution() {
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`); // Исправлено использование шаблонной строки
      return;
    }

    const gameResult = runGameFunction(); // Получаем новый результат функции
    console.log(`Question: ${gameResult.question_two}`);
    const your_answer = readlineSync.question('Your answer: ');
    if (parseInt(your_answer) === gameResult.right_answer) {
      // parseInt для преобразования строки в число
      console.log('Correct!');
      count += 1; // Увеличиваем счетчик вызовов после правильного ответа
      program_execution(); // Рекурсивный вызов для нового раунда
    } else {
      console.log(
        `"${your_answer}" is wrong answer ;(. Correct answer was "${gameResult.right_answer}".`,
      );
      console.log(`Let's try again, ${userName}!`); // Исправлено использование шаблонной строки
    }
  }
  program_execution();
};

// Вызов функции driver с передачей RunGame, а не RunGame()
driver(RunGame);
