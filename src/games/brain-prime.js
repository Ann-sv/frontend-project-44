import getRandomNumber from '../random.js';
import customGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isRightPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 10);
  const correctAnswer = isRightPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  customGame(description, getQuestionAndAnswer);
};
