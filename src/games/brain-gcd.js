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

// Функция игры на определение НОД
export const brainGc = () => {
  let count = 0; // Счетчик правильных ответов

  const brainGcd = () => {
    if (count >= 3) {
      console.log('Congratulations, ' + userName);
      return;
    }

    const randNam1 = Math.floor(Math.random() * 10);
    const randNam2 = Math.floor(Math.random() * 10); //Получаем рандомные числа
    const correctAnswer = gcd(randNam1, randNam2);
    const questionToUser = `Question: ${randNam1}  ${randNam2}`;
    console.log(questionToUser);
    const userAnswer = readlineSync.question('Your answer: ');

    // console.log('Question:', randNam1, randNam2);
    // console.log(userAnswer);

    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct!');
      count++;
    } else {
      return (
        console.log(questionToUser),
        console.log(`Your answer:${userAnswer}`),
        console.log(
          `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.Le's try again, ${userName}`
        )
      );
    }

    return brainGcd(); // Рекурсивный вызов игры
  };

  brainGcd(); // Начало игры
};
