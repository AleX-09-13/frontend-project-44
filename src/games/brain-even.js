import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

const isEven = (num) => num % 2 === 0;
const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const runGame = () => {
  const questionTwo = getRandomNumber(0, 10);
  const rightAnswer = isEven(questionTwo) ? 'yes' : 'no';
  return { rightAnswer, questionTwo };
};
const startEvenGame = () => driver(runGame, question);
export default startEvenGame;
