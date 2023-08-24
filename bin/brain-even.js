import readlineSync from 'readline-sync';
import Name from '../src/cli.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getNumber = (min, max) => {
    let transf = Math.random();
    let result = Math.floor(transf * (max - min) + min);
    return result;
  };
  const number = getNumber(10, 99);
  console.log('Question: ' + number);

  let answer = readlineSync.question('Your answer: ' );

  function trueAns(number) {
    return number % 2 == 0 ? "yes" : "no";
}

  const checkingTheNum = (number, answer) => {
    if (number % 2 == 0 & answer == 'yes' || number % 2 !== 0 & answer == 'no') {
        return 'Correct!';
    }
   return `"${answer}" is wrong answer ;(. Correct answer was "${trueAns(number)}". Lets try again, ${Name}`;
};
  console.log(checkingTheNum(number, answer));

};
