import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const runGame = () => {
  const randomNumber = getRandomNumber();
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const questionTwo = `${randomNumber}`;
  return { rightAnswer, questionTwo };
};
const startPrimeGame = () => driver(runGame, question);
export default startPrimeGame;
