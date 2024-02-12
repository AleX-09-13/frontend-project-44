// Функция игры на умножение
const RunGame = () => {
  const question = 'What is the result of the expression?';
  function calc() {
    const operations = ['+', '-', '*'];
    const operationIndex = Math.floor(Math.random() * operations.length);
    const randomNamber1 = Math.floor(Math.random() * 10);
    const randomNamber2 = Math.floor(Math.random() * 10);
    const operation = operations[operationIndex];
    const question_two = `${randomNamber1} ${operation} ${randomNamber2}`;
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

export default RunGame;
