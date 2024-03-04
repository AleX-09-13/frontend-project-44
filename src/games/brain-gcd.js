import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const question = 'Find the greatest common divisor of given numbers.';
const runGame = () => {
  const randomNamber1 = getRandomNumber();
  const randomNamber2 = getRandomNumber();
  const rightAnswer = gcd(randomNamber1, randomNamber2).toString();
  const questionTwo = `${randomNamber1} ${randomNamber2}`;
  return { rightAnswer, questionTwo };
};
const startGcdGame = () => driver(runGame, question);
export default startGcdGame;
