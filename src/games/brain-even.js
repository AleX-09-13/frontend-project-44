import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

const isEven = (num) => num % 2 === 0;
const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const RunGame = () => {
  const randomNamber = getRandomNumber();
  const questionTwo = randomNamber;
  const rightAnswer = isEven(randomNamber) ? 'yes' : 'no';
  return { rightAnswer, questionTwo };
};
const Start = () => driver(RunGame, question);
export default Start;
