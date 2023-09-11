import getRandomNumber from '../random.js';
import customGame from '../index.js';

const description = 'What number is missing in the progression?';

const progres = (length) => {
  const firstNum = getRandomNumber(0, 99);
  const arr = [];
  const step = getRandomNumber(1, 10);
  arr.push(firstNum);
  let nextNum = firstNum;
  for (let i = 0; i < length - 1; i += 1) {
    nextNum += step;
    arr.push(nextNum);
  }
  return arr;
};

const getQuestionAndAnswer = () => {
  const length = getRandomNumber(5, 10);
  const deleteIndex = getRandomNumber(0, length - 1);
  const arr = progres(length);
  const correctAnswer = String(arr[deleteIndex]);
  arr[deleteIndex] = '..';
  const question = String(arr.join(' '));
  return [question, correctAnswer];
};

export default () => {
  customGame(description, getQuestionAndAnswer);
};
