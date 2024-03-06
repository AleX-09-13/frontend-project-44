import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

const calculation = (randomNamber1, randomNamber2, operation) => {
  switch (operation) {
    case '+':
      return randomNamber1 + randomNamber2;
    case '-':
      return randomNamber1 - randomNamber2;
    case '*':
      return randomNamber1 * randomNamber2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};
const question = 'What is the result of the expression?';
const runGame = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, 3);
  const randomNamber1 = getRandomNumber(0, 10);
  const randomNamber2 = getRandomNumber(0, 10);
  const operation = operations[operationIndex];
  const questionTwo = `${randomNamber1} ${operation} ${randomNamber2}`;
  const rightAnswer = calculation(randomNamber1, randomNamber2, operation).toString();
  return { rightAnswer, questionTwo };
};
const startCalcGame = () => driver(runGame, question);

export default startCalcGame;
