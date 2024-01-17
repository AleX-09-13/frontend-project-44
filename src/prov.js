// Функция, генерирующая массив случайных чисел в прогрессии
const generateRandomProgression = () => {
  const start = Math.floor(Math.random() * 10); // Генерация начального значения
  const diff = Math.floor(Math.random() * 5) + 1; // Генерация разности прогрессии

  const progr = [start]; // Создание массива для хранения прогрессии
  let next = start;

  for (let i = 1; i < 5; i++) {
    next += diff; // Вычисление следующего числа в прогрессии
    progr.push(next); // Добавление числа в прогрессию
  }

  return progr; // Возврат полученной прогрессии
};

// Генерация прогрессии
const progression = generateRandomProgression();
console.log(progression); // Вывод прогрессии в консоль
