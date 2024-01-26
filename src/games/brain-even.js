import readlineSync from "readline-sync"

import hi from "../index.js"

const userName = hi()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
let count = 0 // Счетчик вызовов функции
const brainEv = () => {
  const request = () => {
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`)
      return
    }
    const randomNamber1 = Math.floor(Math.random() * 10) // Получаем рандомное число
    const randomNamber2 = `Question: ${randomNamber1}`
    console.log(randomNamber2) // Выводим вопрос
    const randomNamberAnswer = readlineSync.question("Your answer: ") // Получаем ответ, записываем в переменную
    if (
      (randomNamber1 % 2 === 0 && randomNamberAnswer === "yes") ||
      (randomNamber1 % 2 !== 0 && randomNamberAnswer === "no") // Cравниваем четность числа с ответом пользователя
    ) {
      console.log("Correct!")
      count += 1 // Увеличиваем счетчик вызовов после правильного ответа
      request() // Рекурсивный вызов функции
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
      console.log(`Let's try again, ${userName}!`)
    }
  }
  request() // Вызов функции при запуске
}
export default brainEv
