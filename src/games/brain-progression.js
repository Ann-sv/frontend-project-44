import getRandomNumber from '../random.js';
import customGame from '../index.js';

const description = 'What number is missing in the progression?';

const get = (array = ['+', '-', '*']) => {
  const operatorRandom = Math.floor(Math.random() * array.length);
  return array[operatorRandom];
};

const isRightCalc = (num1, num2, operator) => {
  let result = 0;
  if (operator === '-') {
    return result = num1 - num2;
  }
  else if (operator === '*') {
    return result = num1 * num2;
  }
  else if (operator === '+') {
    return result = num1 + num2;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  const length = getRandomNumber(5, 10);
  const firstNum = getRandomNumber(0, 99);
  const arr = [];
  const step = getRandomNumber;
  arr.push(firstNum);
  console.log(firstNum, length);
  let nextNum = firstNum;
  for (let i = 0; i < length - 1; i += 1) {
    nextNum += step;
    arr.push(nextNum);
  }
  const deleteIndex = getRandomNumber(0, length - 1);
  arr[deleteIndex] = '..';
  console.log(arr, deleteIndex(0, length - 1));
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = isRightCalc(num1, num2, operator);
  return [question, correctAnswer];
};

export default () => {
  customGame(description, getQuestionAndAnswer);
};
