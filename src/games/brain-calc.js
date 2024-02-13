// Функция игры на умножение
const RunGame = () => {
  const question = 'What is the result of the expression?';
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
};

export default RunGame;
