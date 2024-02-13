// Функция игры на умножение
const RunGame = () => {
  const question = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];
  const operationIndex = Math.floor(Math.random() * operations.length);
  const randomNamber1 = Math.floor(Math.random() * 10);
  const randomNamber2 = Math.floor(Math.random() * 10);
  const operation = operations[operationIndex];
  const questionTwo = `${randomNamber1} ${operation} ${randomNamber2}`;
  let rightAnswer;
  switch (operation) {
    case '+':
      rightAnswer = randomNamber1 + randomNamber2;
      break;
    case '-':
      rightAnswer = randomNamber1 - randomNamber2;
      break;
    case '*':
      rightAnswer = randomNamber1 * randomNamber2;
      break;
    default:
      return '';
  }
  return { rightAnswer, question, questionTwo };
};

export default RunGame;
