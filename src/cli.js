import readlineSync from "readline-sync"

const welkom = () => {
  const name = readlineSync.question("Your name: ")
  const hello = `Hello,${name}!`
  console.log(hello)
}
export default welkom
