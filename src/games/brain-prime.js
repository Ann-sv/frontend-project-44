import getRandomNumber from '/Users/admin/frontend-project-44/src/random.js';
import customGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isRightPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 0; i < number; i++ ) {
  if (i % number == 0) {
    return false;
  }
  }
    return true;
};

const getQuestionAndAnswer = () => {
    const question = getRandomNumber(2, 20);
    const correctAnswer = isRightPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

export default () => {
    customGame(description, getQuestionAndAnswer);
};