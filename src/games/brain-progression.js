import driver from '../index.js';
import getRandomNumber from './RandomNumber.js';

const getProgression = () => {
  const length = 7;
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = [];
  let definableNumber;
  const start = getRandomNumber();
  const diff = getRandomNumber() + 1;
  for (let i = 1; i <= length; i += 1) {
    if (i === hiddenIndex + 1) {
      progression.push('..');
      definableNumber = start + (i - 1) * diff;
    } else {
      const number = start + (i - 1) * diff;
      progression.push(number);
    }
  }
  const progression2 = progression.join(' ');
  return { progression2, definableNumber };
};
const question = 'What number is missing in the progression?';
const RunGame = () => {
  const prog = getProgression();
  const progression = prog.progression2;
  const questionTwo = `${progression}`;
  const rightAnswer1 = prog.definableNumber;
  const rightAnswer = rightAnswer1.toString();
  return { rightAnswer, question, questionTwo };
};
const Start = () => driver(RunGame, question);
export default Start;
