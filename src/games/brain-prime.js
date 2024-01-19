import readlineSync from 'readline-sync';
import { hi } from '../index.js';
const userName = hi();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// Функция проверяет является ли число простым:
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
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
// Завершение функции
let count = 0; // Счетчик правильных ответов
// Функция главная
export const brainPrime = () => {
  const randomNamber1 = Math.floor(Math.random() * 10);
  const correctAnswer = isPrime(randomNamber1); // true/folse
  if (count >= 3) {
    console.log('Congratulations, ' + userName);
    return;
  }

  console.log('Question:' + randomNamber1);
  const userAnswer = readlineSync.question('Your answer: '); // yes/no

  if (
    (correctAnswer === true && userAnswer === 'yes') ||
    (correctAnswer === false && userAnswer === 'no')
  ) {
    console.log('Correct!');
    count++;
    brainPrime();
  } else {
    return console.log('Not true, bye bye!');
  }
};