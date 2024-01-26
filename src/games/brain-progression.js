import readlineSync from "readline-sync"

import hi from "../index.js"

const userName = hi()
console.log("What number is missing in the progression?")
// Функция для создания рандомной арифметической прогрессии с одним скрытым элементом и рандй поз
const generateRandomArithmeticProgressionWithHiddenElement = () => {
  const length = 7 // Колличество цифр в прогрессии
  const hiddenIndex = Math.floor(Math.random() * length) // выбм раню позицию для скрытого элемента
  const progression = []
  let definableNumber
  const start = Math.floor(Math.random() * 10)
  const diff = Math.floor(Math.random() * 5) + 1
  for (let i = 1; i <= length; i += 1) {
    if (i === hiddenIndex + 1) {
      progression.push("..") // элемент скрыт
      definableNumber = start + (i - 1) * diff // определение скрытого числа
    } else {
      const number = start + (i - 1) * diff // подсчет чисел в прогрессии
      progression.push(number)
    }
  }
  const progression2 = progression.join(" ") // заменяем запятые на пробелы
  return { progression2, definableNumber }
}
// Завершение функции
// Генерация одной рандомной арифметической прогрессии
let count = 0 // Счетчик правильных ответов
// Функция главная
const brainPr = () => {
  if (count >= 3) {
    console.log(`Congratulations, ${userName}!`)
    return
  }
  const prog = generateRandomArithmeticProgressionWithHiddenElement()
  const progression = prog.progression2
  const correctAnswer = prog.definableNumber
  console.log(`Question: ${progression}`)
  const userAnswer = readlineSync.question("Your answer: ")
  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log("Correct!")
    count += 1
    brainPr()
  } else {
    return (
      console.log(`Question: ${progression}`),
      console.log(`Your answer: ${userAnswer}`),
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      ),
      console.log(`Let's try again, ${userName}!`)
    )
  }
}
export default brainPr
