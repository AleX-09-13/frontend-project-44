import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const RunGame = () => {
  const randomNumber = getRandomNumber();
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const questionTwo = `${randomNumber}`;
  return { rightAnswer, questionTwo };
};
const Start = () => driver(RunGame, question);
export default Start;
