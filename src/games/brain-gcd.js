import getRandomNumber from '/Users/admin/frontend-project-44/src/random.js';
import customGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';


const isRightCalc = (a, b)  => {
    while (a != 0 && b != 0) {
      if (a > b) {
        a = a % b;
      }
      else {
        b = b % a;
      }
    }
    if (a == 0) {
       return b;
    }
    else {
      return a;
    }
  };

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = isRightCalc(num1, num2);
  
    return [question, correctAnswer];
  };


// const correctAnswer = getRandomOperator + getRandomNumber + getRandomNumber;

export default () => {
    customGame(description, getQuestionAndAnswer);
  };