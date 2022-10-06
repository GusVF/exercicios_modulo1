const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareIndex = (rightAnswer, studentAnswer ) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  } 
  return -0.5;
}

const result = (rightAnswer, studentAnswer, callBack) => {
  let counter = 0; 
  for (let i = 0; i < rightAnswer.length; i += 1) {
    const returnCallBack = callBack(rightAnswer[i], studentAnswer[i]);
    counter += returnCallBack;
  }
  return `Resultado final: ${counter} pontos`;
};

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, compareIndex));

