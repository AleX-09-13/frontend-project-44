import readlineSync from 'readline-sync';
import { hi } from '../index.js';

const userName = hi();

console.log('Find the greatest common divisor of given numbers.');

// Функция по нахождению общего делителя
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};
let count = 0; // Счетчик запуска функции gcd
// Функция игры на определение НОД
export const brainGc = () => {
  if (count >= 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const randNam1 = Math.floor(Math.random() * 10);
  const randNam2 = Math.floor(Math.random() * 10); //Получаем рандомные числа
  const correctAnswer = gcd(randNam1, randNam2);
  const questionToUser = `Question: ${randNam1} ${randNam2}`;
  console.log(questionToUser);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer) === correctAnswer) {
    console.log('Correct!');
    count++;
    brainGc(); // Рекурсивный вызов
  } else {
    return (
      console.log(questionToUser),
      console.log(`Your answer: ${userAnswer}`),
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.Le's try again, ${userName}!`
      )
    );
  }
};
