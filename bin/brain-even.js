
   export default() => {

   let description = 'Answer "yes" if the number is even, otherwise answer "no".'; //правила игры
    let min = 10;
    let max = 99;
    const getNumber = (min, max) => {
        let transf = Math.random();
        let question = Math.floor(transf * (max - min) + min);
        return question;
      };

    const getQuestionAndAnswer = () => {
     let correctAnswer = 0;
     question % 2 === 0 ? correctAnswer = "yes" : correctAnswer = "no"; //проверка рандомного числа на четность\
     return correctAnswer;
    };
   }
   