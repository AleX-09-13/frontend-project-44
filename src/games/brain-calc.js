import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

const calculation = (randomNamber1, randomNamber2, operation) => {
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
      throw new Error(`Unknown order state: '${operation}'!`);
  }
  return rightAnswer;
};
const question = 'What is the result of the expression?';
const runGame = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = Math.floor(Math.random() * operations.length);
  const randomNamber1 = getRandomNumber();
  const randomNamber2 = getRandomNumber();
  const operation = operations[operationIndex];
  const questionTwo = `${randomNamber1} ${operation} ${randomNamber2}`;
  const rightAnswer = calculation(randomNamber1, randomNamber2, operation).toString();
  return { rightAnswer, questionTwo };
};
const startCalcGame = () => driver(runGame, question);

export default startCalcGame;
