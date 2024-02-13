const RunGame = () => {
  const question = 'What number is missing in the progression?';
  // Ф-я для создания рандомной ариф-ой прогрессии с одним скрытым элементом и ранд-й поз.
  const genPr = () => {
    const length = 7; // Колличество цифр в прогрессии
    const hiddenIndex = Math.floor(Math.random() * length); // выбм раню позицию для ск эл.
    const progression = [];
    let definableNumber;
    const start = Math.floor(Math.random() * 10);
    const diff = Math.floor(Math.random() * 5) + 1;
    for (let i = 1; i <= length; i += 1) {
      if (i === hiddenIndex + 1) {
        progression.push('..'); // элемент скрыт
        definableNumber = start + (i - 1) * diff; // определение скрытого числа
      } else {
        const number = start + (i - 1) * diff; // подсчет чисел в прогрессии
        progression.push(number);
      }
    }
    const progression2 = progression.join(' '); // заменяем запятые на пробелы
    return { progression2, definableNumber };
  };
  // Завершение функции
  const prog = genPr();
  const progression = prog.progression2;
  const questionTwo = `${progression}`;
  const rightAnswer1 = prog.definableNumber;
  const rightAnswer = rightAnswer1.toString();
  return { rightAnswer, question, questionTwo };
};
export default RunGame;
