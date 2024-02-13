const RunGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  // Функция проверяет является ли число простым:
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
  // Завершение функции
  const randomNumber = Math.floor(Math.random() * 10);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const questionTwo = `${randomNumber}`;
  return { rightAnswer, question, questionTwo };
};
export default RunGame;
