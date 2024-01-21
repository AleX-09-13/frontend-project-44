// Функция для создания рандомной арифметической прогрессии с одним скрытым элементом и рандомной позицией
const generateRandomArithmeticProgressionWithHiddenElement = () => {
  const length = 7; // Колличество цифр в прогрессии
  const hiddenIndex = Math.floor(Math.random() * length); // выбираем рандомную позицию для скрытого элемента
  let progression = [];

  let definableNumber;

  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5) + 1;

  for (let i = 1; i <= length; i++) {
    if (i === hiddenIndex + 1) {
      progression.push('..'); // элемент скрыт
      definableNumber = start + (i - 1) * diff; // определение скрытого числа
    } else {
      let number = start + (i - 1) * diff; // подсчет чисел в прогрессии
      progression.push(number);
    }
  }
  let progression2 = progression.join(' '); // заменяем запятые на пробелы
  console.log(progression2);
  return { progression2, definableNumber };
};
generateRandomArithmeticProgressionWithHiddenElement();
// Завершение функции
