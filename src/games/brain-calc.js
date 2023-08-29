import getRandomNumber from '/Users/admin/frontend-project-44/src/random.js';
import customGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = (array = ['+', '-', '*']) => {
    let operatorRandom = Math.floor(Math.random()*array.length);
    return array[operatorRandom];
};

const isRightCalc = (num1, num2, operator) => {
  let result = 0;
  if(operator == "-"){
    return result = num1 - num2;
  }
  else if(operator == "*"){
    return result = num1 * num2;
  }
  else if(operator == "+"){
    return result = num1 + num2;
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


// const correctAnswer = getRandomOperator + getRandomNumber + getRandomNumber;

export default () => {
    customGame(description, getQuestionAndAnswer);
  };