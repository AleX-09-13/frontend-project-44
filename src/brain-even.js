import readlineSync from 'readline-sync';

export const brainEv = () => {
  const name1 = readlineSync.question('May I have your name? ');
  let count = 0; // Счетчик вызовов функции

  const request = () => {
    if (count >= 3) {
      console.log(`Congratulations, ${name1}`);
      return;
    }

    const randomNamber1 = Math.floor(Math.random() * 10); //Получаем рандомное число
    const randomNamber2 = 'Question: ' + randomNamber1;
    console.log(randomNamber2); //Выводим вопрос
    const randomNamberAnswer = readlineSync.question('Your answer: '); //Получаем ответ, записываем в переменную
    if (
      (randomNamber1 % 2 === 0 && randomNamberAnswer === 'yes') ||
      (randomNamber1 % 2 !== 0 && randomNamberAnswer === 'no') // Cравниваем четность числа с ответом пользователя
    ) {
      console.log('Correct');
      count++; // Увеличиваем счетчик вызовов после правильного ответа
      request(); // Рекурсивный вызов функции
    } else {
      console.log(
        "'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!"
      );
    }
  };

  request(); // Вызов функции при запуске
};
