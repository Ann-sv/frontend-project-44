import readlineSync from 'readline-sync';
const getName = () => {
    const name = readlineSync.question('May I have your name? ');
   return 'Hello, ' + name;
}
console.log(getName());
export default getName;