import getRandomNumber from '../random.js';
import customGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';


const isRightCalc = (a, b)  => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    }
    else {
      b %= a;
    }
  }
  if (a === 0) {
    return b;
  }
  {
    return a;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = isRightCalc(num1, num2);
  return [question, correctAnswer];
};

// const correctAnswer = getRandomOperator + getRandomNumber + getRandomNumber;

export default () => {
  customGame(description, getQuestionAndAnswer);
};
