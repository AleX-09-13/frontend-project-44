const RunGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNamber = Math.floor(Math.random() * 10); // Получаем рандомное число
  const question_two = randomNamber;
  const isEven = (num) => num % 2 === 0; // опред четн., false / true
  const right_answer = isEven(randomNamber) ? 'yes' : 'no'; //  Числу добавляем описание
  return { right_answer, question, question_two };
};
export default RunGame;
