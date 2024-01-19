import readlineSync from 'readline-sync';
import { hi } from '../index.js';
const userName = hi();
console.log('What is the result of the expression?');
export const brainCalk = () => {
  let count = 0; // Счетчик вызовов функции

  const request = () => {
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)]; // Выбираем случайную операцию

    const randomNamber11 = Math.floor(Math.random() * 10);
    const randomNamber1 = Math.floor(Math.random() * 10); //Получаем рандомное число
    const sum = eval(`${randomNamber1} ${operation} ${randomNamber11}`);
    let randomNamber2 = `Question: ${randomNamber1} ${operation} ${randomNamber11}`;
    console.log(randomNamber2); //Выводим вопрос
    const randomNamberAnswer = readlineSync.question('Your answer: '); //Получаем ответ, записываем в переменную
    if (parseInt(sum) === parseInt(randomNamberAnswer)) {
      console.log('Correct!');
      count++; // Увеличиваем счетчик вызовов после правильного ответа
      request(); // Рекурсивный вызов функции
    } else {
      console.log(
        `'${randomNamberAnswer}' is wrong answer ;(. Correct answer was '${sum}' .Let's try again, ${userName}!`
      );
    }
  };

  request(); // Вызов функции при запуске
};
