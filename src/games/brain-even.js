const RunGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNamber = Math.floor(Math.random() * 10); // Получаем рандомное число
  const questionTwo = randomNamber;
  const isEven = (num) => num % 2 === 0; // опред четн., false / true
  const rightAnswer = isEven(randomNamber) ? 'yes' : 'no'; //  Числу добавляем описание
  return { rightAnswer, question, questionTwo };
};
export default RunGame;
