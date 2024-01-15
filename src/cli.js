import readlineSync from 'readline-sync';
export const welkom = () => {
  const name = readlineSync.question('Your name: ');
  const hello = `Hello,${name}!`;
  console.log(hello);
};
