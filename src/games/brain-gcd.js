const RunGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  // Функция по нахождению общего делителя
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const randomNamber1 = Math.floor(Math.random() * 10);
  const randomNamber2 = Math.floor(Math.random() * 10); // Получаем рандомные числа
  const rightAnswer1 = gcd(randomNamber1, randomNamber2);
  const rightAnswer = rightAnswer1.toString();
  const questionTwo = `${randomNamber1} ${randomNamber2}`;
  // console.log(question_two);
  return { rightAnswer, question, questionTwo };
};
export default RunGame;
// RunGame();
