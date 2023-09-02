import getRandomNumber from '../random.js';
import customGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = (array = ['+', '-', '*']) => {
  const operatorRandom = Math.floor(Math.random() * array.length);
  return array[operatorRandom];
};

const isRightCalc = (num1, num2, operator) => {
  let result = 0;
  if (operator === '-') {
    result = String(num1 - num2);
    return result;
  }
  if (operator === '*') {
    result = String(num1 * num2);
    return result;
  }
  if (operator === '+') {
    result = String(num1 + num2);
    return result;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = isRightCalc(num1, num2, operator);
  return [question, correctAnswer];
};

export default () => {
  customGame(description, getQuestionAndAnswer);
};
