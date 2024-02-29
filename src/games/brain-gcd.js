import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const question = 'Find the greatest common divisor of given numbers.';
const RunGame = () => {
  const randomNamber1 = getRandomNumber();
  const randomNamber2 = getRandomNumber();
  const rightAnswer1 = gcd(randomNamber1, randomNamber2);
  const rightAnswer = rightAnswer1.toString();
  const questionTwo = `${randomNamber1} ${randomNamber2}`;
  return { rightAnswer, questionTwo };
};
const Start = () => driver(RunGame, question);
export default Start;
