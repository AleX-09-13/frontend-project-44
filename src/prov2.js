// Функция для создания рандомной арифметической прогрессии с одним скрытым элементом и рандомной позицией
const generateRandomArithmeticProgressionWithHiddenElement = () => {
  const length = 5;
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
  return { progression, definableNumber };
};

// Генерация одной рандомной арифметической прогрессии
const prog = generateRandomArithmeticProgressionWithHiddenElement();
const progression = prog.progression;
const definableNumber1 = prog.definableNumber;
console.log(progression); // вывод рандомной прогрессии в консоль
console.log(definableNumber1); // вывод скрытого числа в консоль
