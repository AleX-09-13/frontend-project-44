#!/usr/src/env node
import readlineSync from 'readline-sync';
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNamber1 = Math.floor(Math.random() * 10);
const randomNamber2 = 'Question: ' + randomNamber1;
console.log(randomNamber2);
const randomNamberAnswer = readlineSync.question('Your answer: ');
console.log(randomNamberAnswer);
