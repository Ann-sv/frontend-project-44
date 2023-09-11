import getRandomNumber from '../random.js';
import customGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let c = a;
  let d = b;
  while (c !== 0 && d !== 0) {
    if (c > d) {
      c %= d;
    } else {
      d %= c;
    }
  }
  if (c === 0) {
    return d;
  }
  return c;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => {
  customGame(description, getQuestionAndAnswer);
};
